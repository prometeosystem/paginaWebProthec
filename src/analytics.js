/**
 * GA4 + Microsoft Clarity (opcional vía VITE_*).
 * Embudo: scroll ≥50%, clics CTA WhatsApp, lead enviado OK.
 */

let scrollDepth50Sent = false

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.async = true
    s.src = src
    s.onload = () => resolve()
    s.onerror = () => reject(new Error(`No se pudo cargar ${src}`))
    document.head.appendChild(s)
  })
}

export function initGoogleAnalytics(measurementId) {
  if (!measurementId || typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', measurementId, { send_page_view: true })
  loadScript(`https://www.googletagmanager.com/gtag/js?id=${measurementId}`).catch(() => {})
}

export function initClarity(projectId) {
  if (!projectId || typeof window === 'undefined') return
  ;(function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        ;(c[a].q = c[a].q || []).push(arguments)
      }
    t = l.createElement(r)
    t.async = 1
    t.src = `https://www.clarity.ms/tag/${i}?ref=bwt`
    y = l.getElementsByTagName(r)[0]
    y.parentNode.insertBefore(t, y)
  })(window, document, 'clarity', 'script', projectId)
}

function envTrim(key) {
  const v = import.meta.env[key]
  return typeof v === 'string' ? v.trim() : v
}

export function initAnalytics() {
  const gaId = envTrim('VITE_GA_MEASUREMENT_ID')
  const clarityId = envTrim('VITE_CLARITY_PROJECT_ID')
  if (import.meta.env.DEV) {
    if (gaId) {
      // Ayuda a validar en localhost que Vite cargó el .env (reinicia dev tras cambiar .env).
      console.info('[analytics] GA4 activo:', gaId)
    } else {
      console.warn(
        '[analytics] Sin VITE_GA_MEASUREMENT_ID en .env — GA4 no se carga. Reinicia `npm run dev` tras editar .env.'
      )
    }
    if (clarityId) console.info('[analytics] Clarity activo:', clarityId)
  }
  if (gaId) initGoogleAnalytics(gaId)
  if (clarityId) initClarity(clarityId)
}

export function gaEvent(eventName, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}

function claritySet(key, value) {
  if (typeof window !== 'undefined' && typeof window.clarity === 'function') {
    window.clarity('set', key, value)
  }
}

export function trackCtaClick(location) {
  gaEvent('cta_whatsapp_click', {
    cta_location: location
  })
  claritySet('cta_click', String(location))
}

export function trackLeadGenerated() {
  gaEvent('generate_lead', {
    method: 'contact_form'
  })
  claritySet('funnel', 'lead_submitted')
}

export function trackScrollDepth50() {
  if (scrollDepth50Sent) return
  scrollDepth50Sent = true
  gaEvent('funnel_scroll_50', { depth_percent: 50 })
  claritySet('funnel', 'scroll_50')
}

export function subscribeScrollDepth50() {
  if (typeof window === 'undefined') return () => {}

  function pctScrolled() {
    const el = document.documentElement
    const scrollMax = el.scrollHeight - window.innerHeight
    if (scrollMax <= 0) return 100
    return (window.scrollY / scrollMax) * 100
  }

  function onScroll() {
    if (scrollDepth50Sent) {
      window.removeEventListener('scroll', onScroll)
      return
    }
    if (pctScrolled() >= 50) {
      trackScrollDepth50()
      window.removeEventListener('scroll', onScroll)
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()

  return () => window.removeEventListener('scroll', onScroll)
}

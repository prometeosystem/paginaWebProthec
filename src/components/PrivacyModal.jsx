import { useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import { CONTACT } from '../config.js'

export default function PrivacyModal({ onClose }) {
  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-title"
        onClick={e => e.stopPropagation()}
      >
        <header className="modal-header">
          <h3 id="privacy-title">Aviso de privacidad</h3>
          <button type="button" className="modal-close-icon" onClick={onClose} aria-label="Cerrar aviso de privacidad">
            <FaTimes />
          </button>
        </header>
        <div className="modal-body">
          <p>
            <strong>Prothec</strong>, con cobertura de servicio en México, es responsable del tratamiento de los
            datos personales que nos proporciones a través de esta página.
          </p>
          <p>
            <strong>Datos que recabamos:</strong> nombre, correo electrónico y, de manera opcional, número
            telefónico, cuando los envías mediante nuestro formulario de contacto o al escribirnos por WhatsApp.
          </p>
          <p>
            <strong>Finalidad:</strong> tus datos se utilizan únicamente para ponernos en contacto contigo,
            agendar demostraciones y darte información sobre nuestros productos y servicios. No vendemos ni
            compartimos tu información con terceros ajenos a este propósito.
          </p>
          <p>
            <strong>Derechos ARCO:</strong> en cualquier momento puedes solicitar el acceso, rectificación,
            cancelación u oposición al tratamiento de tus datos escribiéndonos por WhatsApp al{' '}
            <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>.
          </p>
          <p>
            Este sitio utiliza herramientas de analítica (Google Analytics y Microsoft Clarity) para medir el uso
            de la página de forma agregada y mejorar tu experiencia.
          </p>
          <p>
            Este aviso se emite en cumplimiento de la Ley Federal de Protección de Datos Personales en Posesión
            de los Particulares (LFPDPPP).
          </p>
        </div>
      </div>
    </div>
  )
}

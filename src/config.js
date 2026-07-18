/** Datos de contacto y redes centralizados: cambiar aquí actualiza toda la página. */

export const WHATSAPP_NUMBER = '527772097203'

export function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_MSG_DEMO = 'Hola Prothec, me interesa ver una demostración rápida para mi negocio.'

export const SOCIAL = {
  facebook: 'https://www.facebook.com/share/1BsCMfKQPb/?mibextid=wwXIfr',
  instagram: 'https://www.instagram.com/prothecmx/'
}

export const CONTACT = {
  phoneDisplay: '+52 777 209 7203',
  phoneHref: 'tel:+527772097203',
  coverage: 'Atendemos en línea a todo México'
}

import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact(){
  const email = "prometeo.system.online@gmail.com";
  const subject = "Contacto desde Prothec";
  const body = "Hola Prothec, quiero más información sobre sus servicios.";

  const gmail  = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <section id="contacto" className="section" style={{ padding: '40px 0' }}>
      <h3 className="section-title">Contacto</h3>
      <div className="contact" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div className="grid" style={{ gap: '12px' }}>
          <p style={{ marginBottom: '10px', textAlign: 'center' }}>
            Puedes contactarnos por WhatsApp o por correo electrónico:
          </p>

          {/* Botón WhatsApp */}
          <a
            className="btn btn-primary"
            href="https://wa.me/527779313920"
            target="_blank"
            rel="noopener noreferrer"
            style={{ justifyContent: 'center' }}
          >
            <FaWhatsapp size={18} /> Enviar mensaje por WhatsApp
          </a>

          {/* Botón Gmail */}
          <a
            className="btn btn-secondary"
            href={gmail}
            target="_blank"
            rel="noopener noreferrer"
            style={{ justifyContent: 'center' }}
          >
            <FaEnvelope size={18} /> Abrir en Gmail
          </a>
        </div>
      </div>
    </section>
  );
}
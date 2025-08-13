export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>Prometeo</strong><br/>
          <small>© {new Date().getFullYear()} · Todos los derechos reservados</small>
        </div>
        <div>
          <strong>Tema</strong><br/>
          <small>Página</small><br/>
          <small>Políticas</small>
        </div>
        <div>
          <strong>Menú</strong><br/>
          <small>Inicio</small><br/>
          <small>Productos</small><br/>
          <small>Planes</small>
        </div>
        <div>
          <strong>Redes</strong><br/>
          <small>Facebook</small><br/>
          <small>Instagram</small><br/>
          <small>LinkedIn</small>
        </div>
      </div>
    </footer>
  )
}
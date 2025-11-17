export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>Prothec</strong><br/>
         { /*<small>© {new Date().getFullYear()} · Todos los derechos reservados</small>*/}
          <small> {new Date().getFullYear()} · Soluciones con propósito</small>

        </div>
        {/* 
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
        */}
        <div>
          <strong>Redes</strong><br/>
        <a href="https://www.facebook.com/share/1BsCMfKQPb/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
  <small>Facebook</small>
</a><br/>
             <a href="https://www.instagram.com/prothecmx/#" target="_blank" rel="noopener noreferrer">
  <small>Instagram</small>
</a><br/>
         
        </div>
      </div>
    </footer>
  )
}

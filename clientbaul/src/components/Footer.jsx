function Footer() {
   return (
      <div className="footer_section layout_padding d_flex position-relative">
         <div className="container">
            <div className="row d_flex">
               <div className="col-md-4 every_foo">
                  <h3 className="footer_text">PAÍSES</h3>
                  <div className="footer_menu">
                     <ul className="every_foo">
                        <li><a>México</a></li>
                        <li><a>Francia</a></li>
                        <li><a>Países Bajos</a></li>
                        <li><a>Italia</a></li>
                        <li><a>Inglaterra</a></li>
                     </ul>
                  </div>
               </div>
               <div className="col-md-4 every_foo">
                  <h3 className="footer_text">SOBRE NOSOTROS</h3>
                  <p className="dummy_text">Somos una empresa apasionada por la historia y cultura del mundo, es por ello que
                     nos encargamos
                     de difundir toda esta informacion de una manera clara y concisa.
                  </p>

               </div>
               <div className="col-md-4 every_foo">
                  <div className="footer_social_icon">
                     <ul>
                        <li><a href="https://www.facebook.com/UPROdev/?locale=es_LA" target="_blank"><i className="fa fa-facebook"
                           aria-hidden="true"></i></a></li>
                        <li><a href="https://www.instagram.com/upro_dev/" target="_blank"><i className="fa fa-instagram"
                           aria-hidden="true"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/david-gonzález-trujano-4053262b5/" target="_blank"><i className="fa fa-linkedin"
                           aria-hidden="true"></i></a></li>
                        <li><a href="https://www.facebook.com/UPROdev/?locale=es_LA" target="_blank"><i className="fa fa-twitter"
                           aria-hidden="true"></i></a></li>
                     </ul>
                  </div>
                  <p className="dummy_text"><br />
                     <u> Esta aplicación es realizada sin fines de lucro.</u>
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Footer
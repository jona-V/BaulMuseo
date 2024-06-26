function HomePage() {
   return (
      <div className="HomePage">
         <div className="full_bg">
            <div className="slider_main">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <div id="banner1" className="carousel slide">
                           <ol className="carousel-indicators">
                              <li data-bs-target="#banner1" data-bs-slide-to="0" className="active"></li>
                              <li data-bs-target="#banner1" data-bs-slide-to="1"></li>
                              <li data-bs-target="#banner1" data-bs-slide-to="2"></li>
                           </ol>
                           <div className="carousel-inner">
                              <div className="carousel-item active">
                                 <div className="carousel-caption relative">
                                    <div className="row d_flex">
                                       <div className="col-md-8">
                                          <div className="board">
                                             <h1>MUSEO EN TUS MANOS</h1>
                                             <p>¡Increibles exposiciones al alcance de cualquier persona!</p>
                                          </div>
                                       </div>
                                       <div className="col-md-4">
                                          <div className="every_img d_flex">
                                             <figure><img src="\src\docs\pintura.png" alt="" /></figure>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="carousel-item">
                                 <div className="carousel-caption relative">
                                    <div className="row d_flex">
                                       <div className="col-md-8">
                                          <div className="board">
                                             <h1>PERCIBE Y ESCUCHA</h1>
                                             <p>¡No importa la distancia, réplicas miniatura que te sumergen!</p>
                                          </div>
                                       </div>
                                       <div className="col-md-4">
                                          <div className="every_img d_flex">
                                             <figure><img src="\src\docs\dino.png" alt="" /></figure>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="carousel-item">
                                 <div className="carousel-caption relative">
                                    <div className="row d_flex">
                                       <div className="col-md-8">
                                          <div className="board">
                                             <h1>AUDIOS EXCLUSIVOS</h1>
                                             <p>¡Biblioteca de audios que no encontrarás en ningún otro lugar!</p>
                                          </div>
                                       </div>
                                       <div className="col-md-4">
                                          <div className="every_img d_flex">
                                             <figure><img src="\src\docs\estatua.png" alt="" /></figure>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <a className="carousel-control-next" href="#banner1" role="button" data-bs-slide="next">
                              <i className="fa fa-angle-right" aria-hidden="true"></i>
                              <span className="sr-only">Next</span>
                           </a>
                           <a className="carousel-control-prev" href="#banner1" role="button" data-bs-slide="prev">
                              <i className="fa fa-angle-left" aria-hidden="true"></i>
                              <span className="sr-only">Previous</span>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="about">
            <div className="container">
               <h2>BAÚLES</h2>
               <div className="baul_about">
                  <div className="target">
                     <div className="card">
                        <div className="">
                           <figure><a href="/#/baulMexico"><img src=".\src\docs\Mexico.jpg" alt="" /></a></figure>
                        </div>
                        <div className="target-body">
                           <h4 className="prid_text">Baúles de México</h4>
                           <p className="korem_text">Aventúrate en un recorrido que revela la diversidad que define a nuestra
                              querida
                              tierra mexicana a través de los baúles.</p>
                           <a className="btn" href="/#/baulMexico">Ver baúles</a>
                        </div>
                     </div>
                     <div className="card">
                        <div className="">
                           <figure><a href="/#/baulMundo"><img src=".\src\docs\Mundo.jpg" alt="" /></a></figure>
                        </div>
                        <div className="target-body">
                           <h4 className="prid_text">Baúles del mundo</h4>
                           <p className="korem_text">Sumérgete en un viaje a través de los baúles que guardan las historias del
                              mundo.</p>
                           <a className="btn" href="/#/baulMundo">Ver baúles</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default HomePage;
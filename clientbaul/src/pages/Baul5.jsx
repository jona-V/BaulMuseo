import React from "react";

function Baul5() {
    return(
        <div className="about">
        <div className="container">
            <h2>Introducción al mundo de Van Gogh</h2>
            <div className="baul_about">
                <div className="row d_flex">
                    <div className="col-md-6 baul-item">
                        <div className="recent-work">
                            <div className="box_about">
                                <figure><a><img src=".\src\docs\post\vida-van.jpg" alt="" /></a></figure>
                                <h4 className="prid_text_b">SECCIÓN 1</h4>
                                <div className="ban">
                                    <a>Sobre este baúl:  Vida y Contexto</a>
                                </div>
                                <p className="korem_text">Profundiza en la vida personal y el contexto histórico que influyó en la obra de Van Gogh. 
                                    A través de documentos y cartas, esta sección ofrece una mirada íntima 
                                    al artista, proporcionando una comprensión más completa de las experiencias que moldearon su 
                                    creatividad.</p>
                                <audio className="w-100" controls src=".\src\audios\van-sec1.mp3"></audio>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 baul-item">
                        <div className="recent-work">
                            <div className="box_about">
                                <figure><a><img src=".\src\docs\post\girasoles.jpg" alt="" /></a></figure>
                                <h4 className="prid_text_b">SECCIÓN 2</h4>
                                <div className="ban">
                                    <a>Sobre este baúl: Los Girasoles y Obras Maestras Iconicass</a>
                                </div>
                                <p className="korem_text">Admira la belleza atemporal de las icónicas obras maestras de van Gogh, incluyendo sus famosos 
                                    girasoles y paisajes nocturnos. Sumérgete en la paleta de colores vibrantes y los intensos 
                                    trazos que caracterizan su enfoque distintivo y descubre las historias detrás de estas piezas emblemáticas.</p>
                                <audio className="w-100" controls src=".\src\audios\van-sec2.mp3"></audio>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 baul-item">
                        <div className="recent-work">
                            <div className="box_about">
                                <figure><a><img src=".\src\docs\post\noche-estrellada.jpg" alt="" /></a></figure>
                                <h4 className="prid_text_b">SECCIÓN 3</h4>
                                <div className="ban">
                                    <a>Sobre este baúl: Evolución Creativa</a>
                                </div>
                                <p className="korem_text">Explora la evolución artística de van Gogh a medida que avanzas por esta sección cronológica. 
                                    Desde sus primeras obras más sombrías hasta sus coloridas representaciones de la naturaleza y 
                                    la vida rural, esta área revela cómo su estilo único se desarrolló a lo largo del tiempo.</p>
                                <audio className="w-100" controls src=".\src\audios\van-sec3.mp3"></audio>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Baul5
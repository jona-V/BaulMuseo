import React from "react";

function Baul6() {
    return(
        <div className="about">
        <div className="container">
            <h2>La belleza de Nápoles capturada en arte</h2>
            <div className="baul_about">
                <div className="row d_flex">
                    <div className="col-md-6 baul-item">
                        <div className="recent-work">
                            <div className="box_about">
                                <figure><a><img src=".\src\docs\post\napoles1.jpg" alt="" /></a></figure>
                                <h4 className="prid_text_b">SECCIÓN 1</h4>
                                <div className="ban">
                                    <a>Sobre este baúl: Vida y costumbres
                                        Napolitanaso</a>
                                </div>
                                <p className="korem_text">Adéntrate en la vida cotidiana de Nápoles a través de una exposición que destaca las
                                    tradiciones,
                                    la música y las festividades que definen la cultura napolitana. Desde la celebración del
                                    Carnaval
                                    hasta la pasión por la ópera, esta sección ofrece una ventana a la rica vida social y
                                    cultural de la ciudad.</p>
                                <audio className="w-100" controls src=".\src\audios\napoles-sec1.mp3"></audio>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 baul-item">
                        <div className="recent-work">
                            <div className="box_about">
                                <figure><a><img src=".\src\docs\post\napoles2.jpg" alt="" /></a></figure>
                                <h4 className="prid_text_b">SECCIÓN 2</h4>
                                <div className="ban">
                                    <a>Sobre este baúl: Gastronomía Napolitana en
                                        París</a>
                                </div>
                                <p className="korem_text">Explora el deleite de los sentidos con una inmersión en la deliciosa gastronomía
                                    napolitana adaptada a
                                    los refinados paladares parisinos. Esta sección invita a los visitantes a saborear la
                                    auténtica
                                    cocina napolitana en el corazón de París.</p>
                                <audio className="w-100" controls src=".\src\audios\napoles-sec2.mp3"></audio>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 baul-item">
                        <div className="recent-work">
                            <div className="box_about">
                                <figure><a><img src=".\src\docs\post\napoles3.jpg" alt="" /></a></figure>
                                <h4 className="prid_text_b">SECCIÓN 3</h4>
                                <div className="ban">
                                    <a>Sobre este baúl: La belleza de Nápoles
                                        capturada en arte</a>
                                </div>
                                <p className="korem_text">Embárcate en un viaje visual a través de la rica tradición artística de Nápoles. Desde
                                    sus pintorescas calles
                                    hasta la impresionante costa, esta sección celebra la belleza única de la ciudad a
                                    través de obras de artistas
                                    napolitanos, capturando la esencia de sus paisajes urbanos y naturales.</p>
                                <audio className="w-100" controls src=".\src\audios\napoles-sec3.mp3"></audio>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Baul6
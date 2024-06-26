import React from "react";

function Baul8() {
    return (
        <div className="about">
            <div className="container">
                <h2>Travesía a través del Arte Naval Antiguo</h2>
                <div className="baul_about">
                    <div className="row d_flex">
                        <div className="col-md-6 baul-item">
                            <div className="recent-work">
                                <div className="box_about">
                                    <figure><a><img src=".\src\docs\post\barcos3.jpg" alt="" /></a></figure>
                                    <h4 className="prid_text_b">SECCIÓN 1</h4>
                                    <div className="ban">
                                        <a>Sobre este baúl: Época de Grandes
                                            Navegacione</a>
                                    </div>
                                    <p className="korem_text">Explora pinturas y dibujos que capturan la era de los descubrimientos marítimos,
                                        destacando las
                                        expediciones que llevaron a nuevas tierras y la majestuosidad de las embarcaciones que
                                        protagonizaron
                                        estas travesías. social y cultural de la ciudad.</p>
                                    <audio className="w-100" controls src=".\src\audios\barco-sec1.mp3"></audio>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 baul-item">
                            <div className="recent-work">
                                <div className="box_about">
                                    <figure><a><img src=".\src\docs\post\barcos4.jpg" alt="" /></a></figure>
                                    <h4 className="prid_text_b">SECCIÓN 2</h4>
                                    <div className="ban">
                                        <a>Sobre este baúl: Batallas en el Horizonte</a>
                                    </div>
                                    <p className="korem_text">Sumérgete en la intensidad de las batallas navales plasmadas en lienzos y dibujos.
                                        Esta sección presenta escenas emocionantes de enfrentamientos en alta mar, destacando la
                                        habilidad táctica y la imponencia de los navíos de guerra.</p>
                                    <audio className="w-100" controls src=".\src\audios\barco-sec2.mp3"></audio>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 baul-item">
                            <div className="recent-work">
                                <div className="box_about">
                                    <figure><a><img src=".\src\docs\post\barcos1.jpg" alt="" /></a></figure>
                                    <h4 className="prid_text_b">SECCIÓN 3</h4>
                                    <div className="ban">
                                        <a>Sobre este baúl: Puertos y Comercio
                                            Marítimo</a>
                                    </div>
                                    <p className="korem_text">Contempla la vida cotidiana en los puertos a través de obras que retratan el bullicio de
                                        la actividad comercial,
                                        la descarga de mercancías y la diversidad de barcos que convergen en estos centros
                                        vitales para el intercambio cultural y económico.</p>
                                    <audio className="w-100" controls src=".\src\audios\barco-sec3.mp3"></audio>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Baul8
import React from "react";

function Baul3() {
    return(
        <div className="about">
        <div className="container">
            <h2>Esplendores de la Cultura Maya: Un viaje a través del tiempo</h2>
            <div className="baul_about">
                <div className="row d_flex">
                    <div className="col-md-6 baul-item">
                        <div className="recent-work">
                            <div className="box_about">
                                <figure><a><img src=".\src\docs\post\maya-2.jpg" alt="" /></a></figure>
                                <h4 className="prid_text_b">SECCIÓN 1</h4>
                                <div className="ban">
                                    <a>Sobre este baúl: Arte y arquitectura Maya</a>
                                </div>
                                <p className="korem_text">Admira la diversidad del arte maya, desde las esculturas en estelas
                                    hasta las pinturas murales en palacios. Explora la arquitectura de las ciudades
                                    mayas, fusionando la funcionalidad con la estética de manera única.</p>
                                <audio className="w-100" controls src=".\src\audios\maya-sec2.mp3"></audio>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 baul-item">
                        <div className="recent-work">
                            <div className="box_about">
                                <figure><a><img src=".\src\docs\post\cal-maya.jpg" alt="" /></a></figure>
                                <h4 className="prid_text_b">SECCIÓN 2</h4>
                                <div className="ban">
                                    <a>Sobre este baúl: Mitología y creencias
                                        cosmológicas</a>
                                </div>
                                <p className="korem_text">Descubre los mitos y las creencias cosmológicas que dieron forma al mundo maya.
                                    Explora la mitología de dioses como Kukulcán y Chaac, así como las interpretaciones
                                    del inframundo y la creación del cosmos.</p>
                                <audio className="w-100" controls src=".\src\audios\maya-sec4.mp3"></audio>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 baul-item">
                        <div className="recent-work">
                            <div className="box_about">
                                <figure><a><img src=".\src\docs\post\maya-1.jpg" alt="" /></a></figure>
                                <div className="ban">
                                    <a>Fuente: INAH</a>
                                </div>
                                <h4 className="prid_text_b">SECCIÓN 3</h4>
                                <div className="ban">
                                    <a>Sobre este baúl: Escritura y jeroglíficos
                                        Maya</a>
                                </div>
                                <p className="korem_text">Explora el intrigante mundo de la escritura maya y los jeroglíficos. Descubre
                                    cómo los antiguos mayas crearon un sistema de escritura sofisticado que plasmaba
                                    sus mitos, historia y conocimientos.</p>
                                <audio className="w-100" controls src=".\src\audios\maya-sec1.mp3"></audio>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 baul-item">
                        <div className="recent-work">
                            <div className="box_about">
                                <figure><a><img src=".\src\docs\post\maya-3.jpg" alt="" /></a></figure>
                                <div className="ban">
                                    <a>Fuente: INAH</a>
                                </div>
                                <h4 className="prid_text_b">SECCIÓN 4</h4>
                                <div className="ban">
                                    <a>Sobre este baúl: Ritualidad y vida
                                        cotidiana</a>
                                </div>
                                <p className="korem_text">Explora la compleja red de rituales mayas que permeaba la vida cotidiana.
                                    Desde ceremonias religiosas hasta ritos agrícolas, cada aspecto de la vida
                                    estaba impregnado de significado espiritual.</p>
                                <audio className="w-100" controls src=".\src\audios\maya-sec3.mp3"></audio>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    )
}

export default Baul3
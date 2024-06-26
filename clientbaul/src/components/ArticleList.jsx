/*import Fav from "../components/Favorites";*/

export const ArticleList = ({ articles, id }) => {
    return (
        <div className="baul_about">
            <div className="target">
                {articles.map(article => (
                    <div className="card" key={article.id}>
                        <figure>
                            <a href={article.link}><img src={article.image} alt={article.title} /></a>
                        </figure>
                        <div className="target-body">
                            <div className="favs">
                                <h4 className="prid_text_b">{article.title}</h4>
                                
                            </div>
                            <div className="ban">
                                <a>{article.date}</a>
                            </div>
                            <p className="korem_text">{article.description}</p>
                            <a className="btn" href={article.link}>Ver baúl</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};
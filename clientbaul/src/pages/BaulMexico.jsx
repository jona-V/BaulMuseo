import { useState } from 'react';
import { ArticleList, ButtonList } from '../components';
import script from '../components/script';

function BaulMexico() {
    const allCategories = [
        'Todos',
        ...new Set(script.map(article => article.category)),
    ];

    const [categories, setCategories] = useState(allCategories);
    const [articles, setArticles] = useState(script);

    const filterCategory = (category) => {
        if (category === 'Todos') {
            setArticles(script)
            return
        }

        const filteredData = script.filter(article => article.category === category);
        setArticles(filteredData)
    }
    return (
        <>
            <div className="about">
                <div className="container">
                    <h2>BAÚLES DE MÉXICO</h2>

                    <ButtonList categories={categories} filterCategory={filterCategory} />
                    <ArticleList articles={articles}/>

                </div>
            </div>
        </>
    )
}

export default BaulMexico
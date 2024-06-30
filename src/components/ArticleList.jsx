import { Link } from 'react-router-dom';

export const ArticleList = ({ articles }) => {
  return (
    <div className="article-list">
      {articles.map(article => (
        <Link to={`/article/${article.id}`} key={article.id}>
          <div className="article-container">
            <div className="img-container">
              <img src={article.image} alt={article.title} />
            </div>
            <div className="article-body">
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <div className="article-footer">
                <span>{article.date} · </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
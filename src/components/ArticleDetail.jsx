import { useParams } from 'react-router-dom';
import './Article.css';

export const ArticleDetail = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find(article => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="article-detail">
      <h1>{article.title}</h1>
      <img className='imagen-contenido' src={article.image} alt={article.title} />
      <div className="article-footer">
        <br/>
        <span>{article.date} · </span>
        <br/>
        <span>{article.autor}</span>
        <br/>
        <span className='cita'>"{article.cita}"</span>
        
      </div>
      <p className='parrafo'>{article.content}</p>

    </div>
  );
};


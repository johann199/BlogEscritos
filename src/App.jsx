import { useState } from 'react';
import './App.css';
import { ArticleList, ButonList, ArticleDetail, Header, Footer, Aside } from './components';
import data from './data/data';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  
	const [articles, setArticles] = useState(data);
  return (
    <>
     <Router>
      <Header/>
      <br/>
      <Routes>
        <Route path="/" element={<ArticleList articles={articles} />} />
        <Route path="/article/:id" element={<ArticleDetail articles={articles} />} />
      </Routes>
      <br/>
      <hr/>
      <Aside/>
      <Footer/>
    </Router>
    </>
  )
}

export default App

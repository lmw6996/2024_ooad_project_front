import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './Home.css'; 

const Home = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;

  const handleLogout = () => {
    logout();
    navigate('/'); 
  };

  useEffect(() => {
    const fetchArticles = async () => {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      try {
        const response = await fetch("/articles?count=10000", requestOptions);
        const result = await response.json();
        console.log(result); 

        const filteredData = [];
        for (let article of result.articles) {
          filteredData.push({
            title: article.title,
            category: article.category,
          });
        }
        setArticles(filteredData);
      } catch (error) {
        console.log('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  // 현재 페이지에 해당하는 기사들을 계산합니다
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  // 페이지 번호를 계산합니다
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(articles.length / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="home-container">
      <div className="auth-links">
        {isLoggedIn ? (
          <Link to="/" onClick={handleLogout}>로그아웃</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </div>
      <h1>Q&A Place</h1>
      <div className="search-container">
        <div className="search-bar">
          <input type="text" placeholder="검색어를 입력하세요." className="search-input" />
          <button type="submit" className="search-button">검색</button>
        </div>
      </div>
      <div className="articles-container">
        {currentArticles.map((article, index) => (
          <div key={index} className="article">
            <h2>{article.title}</h2>
            <div>카테고리 : {article.category}</div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === pageNumbers.length}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Home;
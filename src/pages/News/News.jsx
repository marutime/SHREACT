import React from 'react'
import './News.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/news');
        setNewsData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('뉴스 데이터 로딩 실패:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  return (
    <div className="news-container">
      {newsData.map(news => (
        // MongoDB의 _id를 key로 사용
        <div key={news._id} className="news-item">
          <h2>{news.title}</h2>
          <p>{news.content}</p>
        </div>
      ))}
    </div>
  )
}

export default News
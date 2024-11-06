const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const News = require('./models/News');

// MongoDB 연결
connectDB();

const app = express();

// 미들웨어
app.use(cors());
app.use(express.json());

// 뉴스 API 엔드포인트
// 모든 뉴스 가져오기
app.get('/api/news', async (req, res) => {
    try {
        const news = await News.find().sort({ date: -1 });
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 새로운 뉴스 생성
app.post('/api/news', async (req, res) => {
    try {
        const { title, content } = req.body;
        const news = new News({
            title,
            content
        });
        const savedNews = await news.save();
        res.status(201).json(savedNews);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// 특정 뉴스 가져오기
app.get('/api/news/:id', async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if (!news) {
            return res.status(404).json({ message: '뉴스를 찾을 수 없습니다.' });
        }
        res.json(news);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// 뉴스 수정
app.put('/api/news/:id', async (req, res) => {
    try {
        const news = await News.findByIdAndUpdate(
            req.params.id, 
            req.body,
            { new: true }
        );
        res.json(news);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// 뉴스 삭제
app.delete('/api/news/:id', async (req, res) => {
    try {
        await News.findByIdAndDelete(req.params.id);
        res.json({ message: '뉴스가 삭제되었습니다.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
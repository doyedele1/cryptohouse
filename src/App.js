import React from 'react';
import './App.css';
import { 
    Nav,
    Exchanges,
    Homepage,
    Cryptocurrencies,
    News,
    CryptoDetails 
} from './components';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

const App = () => (
        <div className="app">
            <div className="nav">
                <Nav />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route exact path="/" component={<Homepage/>} />
                            <Route exact path="/exchanges" component={<Exchanges/>} />
                            <Route exact path="/cryptocurrencies" component={<Cryptocurrencies/>} />
                            <Route exact path="/crypto/:coinId" component={<CryptoDetails/>} />
                            <Route exact path="/news" component={<News/>} />
                        </Routes>
                    </div>
                </Layout>
                <div className="footer">
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        Demilade Oyedele © 2022<br />
                        All rights reserved
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>
            </div>
        </div>
);

export default App;
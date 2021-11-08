import React from 'react';
import { Link } from 'react-router-dom';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title } = Typography; //destructuring the Typography.Title component

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery;

    console.log(data);

    return (
        <>
            <Title level={2} className="heading">Global Crypto Statistics</Title>
            <Row>
                <Col span={12}>
                    <Statistic title="Total Cryptocurrencies" value="5" />
                </Col>
                <Col span={12}>
                    <Statistic title="Total Exchanges" value="5" />
                </Col>
                <Col span={12}>
                    <Statistic title="Total Market Cap" value="5" />
                </Col>
                <Col span={12}>
                    <Statistic title="Total 24-hour Volume" value="5" />
                </Col>
                <Col span={12}>
                    <Statistic title="Total Markets" value="5" />
                </Col>
            </Row>
        </>
    )
}

export default Homepage;
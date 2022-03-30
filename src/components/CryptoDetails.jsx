import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined, ConsoleSqlOutlined } from '@ant-design/icons';
import { useGetCryptoDetailsQuery } from '../services/cryptoApi';

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
    const { coinId } = useParams();
    const [timePeriod, setTimePeriod] = useState('7d');
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
    // const cryptoDetails = data?.coin;

    console.log(data);

    // const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    // const stats = [
    //     { title: 'Price to USD', value: `$ ${data.coin.price && millify(data.coin.price)}`, icon: <DollarCircleOutlined /> },
    //     { title: 'Rank', value: data.coin.rank, icon: <NumberOutlined /> },
    //     { title: '24h Volume', value: `$ ${data.coin.volume && millify(data.coin.volume)}`, icon: <ThunderboltOutlined /> },
    //     { title: 'Market Cap', value: `$ ${data.coin.marketCap && millify(data.coin.marketCap)}`, icon: <DollarCircleOutlined /> },
    //     { title: 'All-time-high(daily avg.)', value: `$ ${millify(data.coin.allTimeHigh.price)}`, icon: <TrophyOutlined /> },
    // ];

    // const genericStats = [
    //     { title: 'Number Of Markets', value: data.coin.numberOfMarkets, icon: <FundOutlined /> },
    //     { title: 'Number Of Exchanges', value: data.coin.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    //     { title: 'Aprroved Supply', value: data.coin.approvedSupply ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    //     { title: 'Total Supply', value: `$ ${millify(data.coin.totalSupply)}`, icon: <ExclamationCircleOutlined /> },
    //     { title: 'Circulating Supply', value: `$ ${millify(data.coin.circulatingSupply)}`, icon: <ExclamationCircleOutlined /> },
    // ];

    return (
        <div>CryptoDetails {coinId}</div>
        // <Col className="coin-detail-container">
        //     <Col className="coin-heading-container">
        //         <Title level={2} className="coin-name">
        //             {data.coin.name} ({data.coin.slug}) Price
        //         </Title>
        //         <p>{data.coin.name} live price in USD. View value statistics, market, cap and supply.</p>
        //     </Col>
        //     <Select defaultValue="7d" className="select-timeperiod" placeholder="Select Time Period" onChange={(value) => setTimePeriod(value)}>
        //         {time.map((date) => <Option key={date}>{date}</Option>)}
        //     </Select>
        // </Col>
    )
}

export default CryptoDetails;
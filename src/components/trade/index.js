import React from 'react';
import Chart from './chart';
import {Col, Row, Flex, Text} from '../base';
import Coins from './coins';
import Bottom from './bottom';

export const Trade = ({}) => {
    return (
        <Col style={{width: '100%', height: '100%'}}>
            <Row style={{width: '100%', height: '100%'}}>
                <Col flex={3}>
                    <Chart />
                    <Bottom />
                </Col>
                <Coins />
            </Row>
        </Col>
    )
}

export default Trade;
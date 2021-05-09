import React from 'react';
import { Col } from '../../base';
import Coin from './coin';
import bitcoin from '../../../imgs/bitcoin.png';
import ether from '../../../imgs/ethereum.png';
import xrp from '../../../imgs/xrp.png';
import doge from '../../../imgs/dogecoin.svg';
import depth from '../../../imgs/depthchain.png'

export const Coins = ({}) => {
    return (
        <Col flex={1}>
            <Col position="fixed" padding="padding: 10px 30px" width="30%" height="100%" style={{right: 0, overflowY: 'scroll'}}>
                <Coin src={bitcoin} text="Bitcoin" />
                <Coin src={depth} height="22px" text="Depth" />
                <Coin src={ether} text="Ethereum" />
                <Coin src={xrp} text="Ripple" />
                <Coin src={doge} text="Doge" />
                <Coin />
                <Coin />
                <Coin />
                <Coin />
                <Coin />
                <Coin />
                <Coin />
                <Coin />
                <Coin />
            </Col>
        </Col>
    )
};

export default Coins;
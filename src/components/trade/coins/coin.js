import React from 'react';
import {Col, Row, Text, Image} from '../../base';
import styled from 'styled-components';

const Box = styled(Row)`
    background-color: rgb(28, 30, 42);
    border-radius: 20px;
    margin: 10px;
    width: 100%;
    min-height: 70px;
    padding: 12.5px;
    :hover {
        cursor: pointer;
        opacity: 0.9;
    };
`;

export const Coin = ({src, text, height="30px"}) => {
    return (
        <Box align="center">
            <Image src={src} height={height} of="contain" />
            <Col margin="margin-left: 15px;">
                <Text>{text}</Text>
            </Col>
        </Box>
    )
}

export default Coin;
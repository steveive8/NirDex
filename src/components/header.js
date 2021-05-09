import React from 'react';
import { Row, Text, Link } from './base';
import Logo from '../icons/logo';

export const Header = ({}) => {
    return (
        <Row bg="rgb(24, 30, 33, 0.5)" width="100vw" height="80px" padding="padding: 20px 30px;" align="center" position="fixed" style={{top: 0}} zIndex={10}>
            <Link>
                <Logo height="43px" of="contain" />
            </Link>
            <Row flex={1} justify="flex-end" align="center">
                <Link>
                    <Text margin="margin-left: 38px;">
                        Exchange
                    </Text>
                </Link>
                <Link>
                    <Text margin="margin-left: 38px;">
                        Trade
                    </Text>
                </Link>
                <Link>
                    <Text margin="margin-left: 38px;">
                        Coin Status
                    </Text>
                </Link>
                <Link>
                    <Text margin="margin-left: 38px;">
                        My Profile
                    </Text>
                </Link>
            </Row>
        </Row>
    )
};

export default Header;
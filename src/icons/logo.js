import React from 'react';
import {Image} from '../components/base';
import logo from '../imgs/logo.png';

export const Logo = ({width, height}) => {
    return (
        <Image width={width} height={height} src={logo} />
    );
}

export default Logo;
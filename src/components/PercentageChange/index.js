import React from 'react';
import { View, Text } from 'react-native';

const PercentageChange = ({value, style = {}}) => {
    return (
        <Text style={[style, { color: value > 0 ? '#398f0a' : '#f10000' }]}>
           {value > 0 && '+'}{value}%
        </Text>
    );
};

export default PercentageChange;

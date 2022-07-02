import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import styles from './styles';

const CoinPriceGraph = ({ dataString }) => {
    const data = JSON.parse(dataString);
    return (
        <View style={{margin: 10, }}>
            <Text>Bezier Line Chart</Text>
            <LineChart 
                data={{
                    labels: [
                        '-7d',
                        '-6d',
                        '-5d',
                        '-4d',
                        '-3d',
                        '-2d',
                        '-1d',
                        'now',
                    ],
                    datasets: [
                        {
                            data
                        },
                    ],
                }}
                width={Dimensions.get('window').width - 10} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                withOuterLines={false}
                withInnerLines={false}
                chartConfig={{
                    backgroundColor: '#e26a00',
                    backgroundGradientFrom: '#eaeaea',
                    backgroundGradientTo: '#ffffff',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(18, 85, 255, ${opacity})`,
                    labelColor: (opacity = 1) =>
                        `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16,
                    },
                    propsForDots: {
                        r: '0',
                        strokeWidth: '1',
                        stroke: '#000000',
                    },
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                }}
            />
        </View>
    );
};

export default CoinPriceGraph;

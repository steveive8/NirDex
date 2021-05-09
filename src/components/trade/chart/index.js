import React, {useState, useEffect} from 'react';
import Charts from './Chart';
import { getData } from "./utils"
import {Flex} from '../../base';
import { TypeChooser } from "react-stockcharts/lib/helper";

export const ChartComponent = ({}) => {
	const [data, setData] = useState(null);
	useEffect(() => {
		getData().then(data => {
			console.log(data);
			setData(data);
		})
	},[])
	return (
		<>
			{data === null ? 
				<div>Loading</div>
					: 
				<Flex className="chartbox">
					<TypeChooser>
						{type => <Charts type={type} data={data} />}
					</TypeChooser>
				</Flex>
			}
		</>
	)
}

export const Chart = ({}) => {
    return (
        <>
            <ChartComponent />
        </>
    )
};

export default Chart;
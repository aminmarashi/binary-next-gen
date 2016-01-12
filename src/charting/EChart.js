import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import echarts from 'echarts';
import 'echarts/chart/line';
import 'echarts/chart/k';

const areArraysEqual = (ar1, ar2) =>
    ar1.filter((x, idx) => x !== ar2[idx]).length === 0;

export default class EChart extends React.Component {

    static propTypes = {
		options: PropTypes.object.isRequired,
		style: PropTypes.object,
    };

    componentDidMount() {
        const node = ReactDOM.findDOMNode(this);
        this.echart = echarts.init(node);
        const { options } = this.props;
        this.echart.setOption(options);
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.style !== this.props.style) {
            this.echart.resize();
        }

        const data = this.props.options.series[0].data;
        const newData = nextProps.options.series[0].data;

        if (areArraysEqual(data, newData)) return false;

        // const newData = getNewData(nextProps.options.series[0].data, nextProps.options.series[0].data);
        this.echart.addData([
            [
                0,        // Series Index
                newData[newData.length - 1],  // New data
                false,     // Whether the new data is inserted from the head of the queue
                false,    // Whether to increase the queue length
                123123,
            ],
        ]);
        // this.echart.setOption(options); set options for spot line

        return false;
    }

    render() {
        return <div {...this.props} />;
    }
}
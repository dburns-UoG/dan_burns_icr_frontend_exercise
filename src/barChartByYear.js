import { Component } from 'react';
import * as d3 from "d3";

class BarChartByYear extends Component {

    componentDidMount() {
        this.drawChart();
    }

    drawChart() {
        var margin = { top: 20, right: 20, bottom: 70, left: 40 },
            width = 600 - margin.left - margin.right,
            height = 300 - margin.top - margin.bottom;

        var x = d3.scaleBand().rangeRound([0, width], .05);
        var y = d3.scaleLinear().range([height, 0]);

        var xAxis = d3.axisBottom(x);
        var yAxis = d3.axisLeft(y);

        var svg = d3.select('.' + this.props.class).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        var data = this.props.data;

        data.forEach(function (d) {
            d.date = d[0];
            d.value = +d[1];
        });

        x.domain(data.map(function (d) { return d.date; }));
        y.domain([0, d3.max(data, function (d) { return d.value; })]);

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", "-.55em")
            .attr("transform", "rotate(-90)");

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .text(this.props.yAxisLabel)
            .style("text-anchor", "end")
            .attr("dx", "9em")
            .attr("fill", "#000000");

        svg.selectAll("bar")
            .data(data)
            .enter().append("rect")
            .style("fill", "steelblue")
            .attr("x", function (d) { return x(d.date); })
            .attr("width", x.bandwidth() - 5)
            .attr("y", function (d) { return y(d.value); })
            .attr("height", function (d) { return height - y(d.value); });
    }

    render() {
        return ''
    }
}

export default BarChartByYear;
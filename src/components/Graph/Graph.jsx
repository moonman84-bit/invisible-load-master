import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const DonutChart = ({ data, colors }) => {
  const svgRef = useRef();

  useEffect(() => {

    const updateChart = () => {

    d3.select(svgRef.current).selectAll('*').remove();

    const width = svgRef.current.parentElement.clientWidth;
    const height = width; // Make the chart square for simplicity

    const radius = Math.min(width, height) / 2;
    // const colorsArray = colors || []; 

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const pie = d3.pie().value((d) => d.value);
    const dataPie = pie(data);

    const arc = d3.arc()
      .innerRadius(radius * 0.6)
      .outerRadius(radius);

    const arcLabel = d3.arc()
      .innerRadius(radius * 0.85)
      .outerRadius(radius * 0.85);

    const arcs = svg.selectAll('.arc')
      .data(dataPie)
      .enter()
      .append('g')
      .attr('class', 'arc');

    arcs.append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => colors[i]);

    // arcs.append('text')
    //   .attr('transform', (d) => `translate(${arcLabel.centroid(d)})`)
    //   .text((d) => `${(d.data.value * 100).toFixed(1)}%`);

    // Handle window resize
    function handleResize() {
      const newWidth = svgRef.current.parentElement.clientWidth;
      const newHeight = newWidth;
      const newRadius = Math.min(newWidth, newHeight) / 2;

      svg.attr('width', newWidth)
        .attr('height', newHeight);

      arc.innerRadius(newRadius * 0.6)
        .outerRadius(newRadius);

      arcLabel.innerRadius(newRadius * 0.85)
        .outerRadius(newRadius * 0.85);

      arcs.selectAll('path')
        .attr('d', arc);

      arcs.selectAll('text')
        .attr('transform', (d) => `translate(${arcLabel.centroid(d)})`);
    }
  };

  updateChart(); // Initial chart rendering

   // Handle window resize
   const handleResize = () => {
    updateChart();
  };

  window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [data, colors]);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default DonutChart;

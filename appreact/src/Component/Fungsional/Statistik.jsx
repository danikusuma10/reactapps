import * as React from "react";
import { Chart } from "react-google-charts";

function Statistik() {
    return (
        <Chart
  width={'700px'}
  height={'700px'}
  chartType="PieChart"
  loader={<div>Loading Chart . . .</div>}
  data={[
    ['Task', 'Hours per Day'],
    ['SMA N 8 SEMARANG', 11],
    ['SMA N 1 SEMARANG', 2],
    ['SMA 1 SEMARANG', 2],
    ['SMA N 31 SEMARANG', 2],
    ['SMA N 2 SEMARANG', 7],
  ]}
  options={{
    title: 'Chart PPDB Kota SEMARANG',
    // Just add this option
    is3D: true,
  }}
  rootProps={{ 'data-testid': '2' }}
/>
    )
        
    }
    

export default Statistik
import * as React from "react";
import { Chart } from "react-google-charts";

function Statistik() {
    return (
        <Chart
  width={'700px'}
  height={'450px'}
  chartType="PieChart"
  loader={<div>Loading Chart . . .</div>}
  data={[
    ['Task', 'Hours per Day'],
    ['TEKNIK ELEKTRONIKA INDUSTRI', 11],
    ['TEKNIK KENDARAAN RINGAN', 2],
    ['TEKNIK FABRIKASI LOGAM', 2],
    ['MULTIMEDIA DAN JARINGAN', 2],
    ['KOMPUTER DAN JARINGAN', 7],
  ]}
  options={{
    title: 'CHART PENAFTARAN SISWA BARU SMK 31',
    // Just add this option
    is3D: true,
  }}
  rootProps={{ 'data-testid': '2' }}
/>
    )
        
    }
    

export default Statistik
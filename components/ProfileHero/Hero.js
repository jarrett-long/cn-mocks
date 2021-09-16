import React from 'react'
import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'
 
if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts)
}

function Hero () {
  const options = {
    title: {
      text: 'My 2021 Contributions'
    },
    chart: {
      type: 'pie'
    },
    accessibility: {
      point: {
          valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f}%'
        }
      }
    },
    series: [{
      name: 'Percent of total contributions',
      colorByPoint: true,
      data: [
        {
          name: 'Doctors Without Borders, USA',
          y: 50,
        },
        {
          name: 'American Red Cross',
          y: 25,
        },
        {
          name: 'The Nature Conserancy',
          y: 25,
        },
      ]
    }]
  };
  return (
    <section className="tp-contributions">
        <HighchartsReact highcharts={Highcharts} options={options} />
    </section>
  )
}

export default Hero

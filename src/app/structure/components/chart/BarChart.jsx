import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const BarChart = (props) => {
  const {
    className,
    labels,
    disableLegend,
    xLineDisable,
    yLineDisable,
    xTextDisable,
    yTextDisable,
    xBorder,
    yBorder,
    data,
    ...rest
  } = props;
  const BarData = {
    labels: labels ?? null,
    datasets: [
      {
        data: data ?? null,
        borderRadius: 8,
      },
    ],
  };

  const options = {
    backgroundColor: false,
    plugins: {
      legend: {
        display: disableLegend ? false : true,
        align: "center",
        position: "bottom",
        labels: {
          boxWidth: 10,
          usePointStyle: true,
          font: {
            family: "Shabnam",
            size: 14,
          },
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        ticks: {
          display: xTextDisable ? false : true,
          font: {
            family: "Shabnam",
            size: 12,
          },
        },
        grid: {
          display: xLineDisable ? false : true,
        },
        border: {
          display: xBorder ? false : true,
        },
      },
      y: {
        ticks: {
          display: yTextDisable ? false : true,
          font: {
            family: "Shabnam",
            size: 12,
          },
        },
        grid: {
          display: yLineDisable ? false : true,
        },
        border: {
          display: yBorder ? false : true,
        },
      },
    },
  };

  return (
    <div className={`mt-4 ${className ?? ""} `}>
      <Bar data={BarData} options={options} height={150} {...rest} />
    </div>
  );
};

export default BarChart;

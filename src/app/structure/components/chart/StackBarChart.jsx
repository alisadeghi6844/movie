import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const StackBarChart = (props) => {
  const { className, labels, data, ...rest } = props;
  let backgroundColors = [];

  if (data[0].hasOwnProperty("color")) {
    backgroundColors = data?.map(({ color }) => color);
  } else {
    for (let i = 0; i < data?.length; i++) {
      backgroundColors.push(
        "#" + Math.floor(Math.random() * 16777215).toString(16)
      );
    }
  }
  const BarData = {
    labels: labels,
    datasets: data?.map(({ color, label, value }, index) => ({
      label: label,
      data: value,
      fill: false,
      borderColor: backgroundColors[index],
      backgroundColor: backgroundColors[index],
    })),
  };

  const options = {
    backgroundColor: false,
    plugins: {
      legend: {
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
        stacked: true,
        ticks: {
          font: {
            family: "Shabnam",
            size: 12,
          },
        },
      },
      y: {
        stacked: true,
        ticks: {
          font: {
            family: "Shabnam",
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className={`mt-8 w-[80%] ${className ?? ""} `}>
      <Bar data={BarData} options={options} height={150} {...rest} />
    </div>
  );
};

export default StackBarChart;

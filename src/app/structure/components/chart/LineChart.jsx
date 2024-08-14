import { Line } from "react-chartjs-2";
import "chart.js/auto";

const LinearChart = (props) => {
  const { className, labels, data,...rest } = props;

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
  const lineData = {
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
    responsive: true,
    backgroundColor: false,
    scales: {
      x: {
        ticks: {
          font: {
            family: "Shabnam",
            size: 12,
          },
        },
      },
    },
    plugins: {
      legend: {
        align: "center",
        position: "bottom",
        labels: {
          boxWidth: 10,
          usePointStyle: true,
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
      <Line data={lineData} options={options} height={150} {...rest}/>
    </div>
  );
};

export default LinearChart;

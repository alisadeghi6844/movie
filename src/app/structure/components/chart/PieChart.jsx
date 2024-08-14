import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ className, data }) => {
  let backgroundColors = [];

  if (data[0].hasOwnProperty("backgroundColor")) {
    backgroundColors = data?.map(({ backgroundColor }) => backgroundColor);
  } else {
    for (let i = 0; i < data?.length; i++) {
      backgroundColors.push(
        "#" + Math.floor(Math.random() * 16777215).toString(16)
      );
    }
  }

  const doughnutData = {
    labels: data?.map(({ label }) => label),
    datasets: [
      {
        label: "",
        data: data?.map(({ value }) => value),
        backgroundColor: backgroundColors,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        align: "center",
        position: "bottom",
        labels: {
          boxWidth: 10,
          usePointStyle: true,
          font: {
            family: "Shabnam",
            size: 10,
          },
        },
      },
    },
  };

  return (
    <div className={`h-96 ${className ?? ""} `}>
      <Pie data={doughnutData} options={options} />
    </div>
  );
};

export default PieChart;

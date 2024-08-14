import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ className, data }) => {
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

  return (
    <div className={`h-96 ${className ?? ""} `}>
      <Doughnut data={doughnutData} />
    </div>
  );
};

export default DoughnutChart;

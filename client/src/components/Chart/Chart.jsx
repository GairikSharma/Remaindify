import React, { useContext } from "react";
import "./chart.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { ReminderContext } from "../../context";
import auth from "../../firebase";
ChartJS.register(ArcElement, Tooltip, Legend);

function Chart() {
  const { alltask } = useContext(ReminderContext);
  const chartarr = [];
  const arr = [];
  {
    alltask.map((t) => {
      if (t.email === auth.currentUser.email) {
        arr.push(t.title);
      }
      if (t.email === auth.currentUser.email) {
        if (t.status) {
          chartarr.push(t.status);
        }
      }
    });
  }
  var completedCount = chartarr.length
  var pendingCount = arr.length - completedCount;
  const data = {
    labels: ["completed", "pending"],
    datasets: [
      {
        data: [completedCount, pendingCount],
        backgroundColor: ["rgb(134, 247, 134)", "rgba(255, 231, 53, 0.61)"],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // To control the aspect ratio of the chart
  };
  return (
    <>
      <div className="chart-container">
        <Doughnut data={data} options={options} />
      </div>
    </>
  );
}

export default Chart;

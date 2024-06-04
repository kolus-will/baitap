const ctx = document.getElementById("body-chart-items-sum");
new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6"],
    datasets: [
      {
        label: "# Thu Nhập 2 Quý(DV:TR Đồng)",
        data: [120, 190, 30, 50, 200, 130],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const ctx1 = document.getElementById("body-chart-items-Buy");
new Chart(ctx1, {
  type: "bar",
  data: {
    labels: [
      "Áo Polo",
      "Áo Somi",
      "Quần Bò",
      "Quần Đùi",
      "Áo Khoác",
      "Áo Dài Tay",
    ],
    datasets: [
      {
        label: "# Số Quần áo Bán Chạy Nhất(DV:Chiếc)",
        data: [1200, 1900, 300, 500, 200, 143],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(201, 203, 207)",
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
const ctx2 = document.getElementById("body-chart-items-favorite");

new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: ["Hà Nội ", "TP HCM", "Đà Nẵng"],
    datasets: [
      {
        label: "# of Votes",
        data: [1500, 1200, 500],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

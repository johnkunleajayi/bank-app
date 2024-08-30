import PropTypes from "prop-types";
import Chart from "react-apexcharts";

const options = {
  labels: ["Credit", "Debit"],
  colors: ["#213EBF", "#FD5E53"],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#213EBF", "#FD5E53"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
  },
};

function TransactionChartSummary({ expense = 100, income = 100 }) {
  return (
    <Chart
      options={options}
      series={[income, expense]}
      type="pie"
      width={"100%"}
      height={"100%"}
    />
  );
}

// PropTypes validation
TransactionChartSummary.propTypes = {
  expense: PropTypes.number,
  income: PropTypes.number,
};

export default TransactionChartSummary;

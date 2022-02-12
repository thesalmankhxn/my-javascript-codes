const monthMapper = require("./monthMapper");

function transactionAggregator(transactions, year) {
  // complete this function
  let result = {};
  const requiredTransactions = transactions.filter(
    (transaction) => new Date(transaction.date).getFullYear() === year
  );

  const allMonths = requiredTransactions.map((transaction, i) => {
    let month = monthMapper()[new Date(transaction.date).getMonth()];
    return month;
  });

  const requiredMonths = () => {
    let result = [];
    allMonths.map((month, i) => {
      if (allMonths[i] === month && !result.includes(month)) {
        result.push(month);
      }
      return result;
    });

    return result;
  };

  const requiredMonthsWithAmount = () => {
    let result = {};
    for (let i = 0; i < requiredMonths().length; i++) {
      let month = requiredMonths()[i];
      // let amount = 0;
      let expenses = {};
      for (let j = 0; j < requiredTransactions.length; j++) {
        if (month === allMonths[j]) {
          // amount += requiredTransactions[j].amount;
          requiredTransactions.map((x) => {
            console.log(
              x.type,
              monthMapper()[new Date(x.date).getMonth()] === allMonths[j]
            );
            // x === requiredTransactions[j]
            //   ? (expenses[x.type] = x.amount += x.amount)
            //   : 0;
          });
        }
      }
      // result[month] = amount;
      result[month] = expenses;
    }
    return result;
  };

  console.log(requiredMonthsWithAmount());
}
const transactions = [
  {
    type: "grocery",
    amount: 600,
    date: "05-21-2021",
  },
  {
    type: "bill",
    amount: 500,
    date: "04-21-2021",
  },
  {
    type: "medical",
    amount: 400,
    date: "05-21-2021",
  },
  {
    type: "grocery",
    amount: 300,
    date: "04-21-2021",
  },
  {
    type: "food",
    amount: 200,
    date: "04-21-2021",
  },
  {
    type: "food",
    amount: 100,
    date: "04-21-2021",
  },
];
module.exports = transactionAggregator;

transactionAggregator(transactions, 2021);

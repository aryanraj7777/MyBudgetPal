function calculateBudget() {
  const salary = parseFloat(document.getElementById("salary").value);
  const rent = parseFloat(document.getElementById("rent").value);
  const food = parseFloat(document.getElementById("food").value);
  const travel = parseFloat(document.getElementById("travel").value);
  const utilities = parseFloat(document.getElementById("utilities").value);
  const subscriptions = parseFloat(document.getElementById("subscriptions").value);
  const misc = parseFloat(document.getElementById("misc").value);
  const savings = parseFloat(document.getElementById("savings").value);

  const totalExpense = rent + food + travel + utilities + subscriptions + misc;
  const balance = salary - totalExpense - savings;

  let resultText = `
    <p><strong>Total Expenses:</strong> ₹${totalExpense.toFixed(2)}</p>
    <p><strong>Savings Goal:</strong> ₹${savings.toFixed(2)}</p>
    <p><strong>Remaining Balance:</strong> ₹${balance.toFixed(2)}</p>
  `;

  if (balance < 0) {
    resultText += `<p style="color: red;"><strong>Warning:</strong> Expenses exceed your salary!</p>`;
  }

  document.getElementById("results").innerHTML = resultText;

  const ctx = document.getElementById("budgetChart").getContext("2d");
  if (window.budgetChart) window.budgetChart.destroy();

  window.budgetChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Rent", "Food", "Travel", "Utilities", "Subscriptions", "Misc", "Savings", "Balance"],
      datasets: [
        {
          data: [
            rent,
            food,
            travel,
            utilities,
            subscriptions,
            misc,
            savings,
            balance > 0 ? balance : 0
          ],
          backgroundColor: [
            "#00ffff",
            "#1abc9c",
            "#3498db",
            "#9b59b6",
            "#f1c40f",
            "#e67e22",
            "#2ecc71",
            "#34495e"
          ]
        }
      ]
    },
    options: {
      plugins: {
        legend: {
          labels: {
            color: "#fff"
          }
        }
      }
    }
  });
}

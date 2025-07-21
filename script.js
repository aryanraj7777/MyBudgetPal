function calculateBudget() {
  const salary = parseFloat(document.getElementById('salary').value);
  const rent = parseFloat(document.getElementById('rent').value);
  const food = parseFloat(document.getElementById('food').value);
  const travel = parseFloat(document.getElementById('travel').value);
  const other = parseFloat(document.getElementById('other').value);
  const savings = parseFloat(document.getElementById('savings').value);

  const totalExpenses = rent + food + travel + other + savings;
  const balance = salary - totalExpenses;

  document.getElementById('result').innerHTML = `Remaining Balance: ₹${balance}`;

  const ctx = document.getElementById('budgetChart').getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Rent', 'Food', 'Travel', 'Other', 'Savings'],
      datasets: [{
        data: [rent, food, travel, other, savings],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0', '#9966ff']
      }]
    }
  });
}

function addExpense() {
  const desc = document.getElementById('expense-desc').value;
  const amount = document.getElementById('expense-amount').value;
  const li = document.createElement('li');
  li.textContent = `${desc}: ₹${amount}`;
  document.getElementById('expense-list').appendChild(li);
}

function saveNote() {
  const note = document.getElementById('note-input').value;
  const li = document.createElement('li');
  li.textContent = note;
  document.getElementById('notes-list').appendChild(li);
}

function addReminder() {
  const text = document.getElementById('reminder-text').value;
  const time = document.getElementById('reminder-time').value;
  const li = document.createElement('li');
  li.textContent = `${text} at ${new Date(time).toLocaleString()}`;
  document.getElementById('reminder-list').appendChild(li);
}

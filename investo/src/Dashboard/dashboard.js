import React from 'react';

function Dashboard() {
  // Simulated user data
  const userData = {
    username: 'JohnDoe',
    balance: 5000,
    investments: [
      { name: 'Tech Stocks', amount: 3000 },
      { name: 'Real Estate', amount: 2000 },
    ],
  };

  return (
    <div>
      <h2>Welcome, {userData.username}!</h2>
      <p>Balance: ${userData.balance}</p>
      <h3>Investments</h3>
      <ul>
        {userData.investments.map((investment, index) => (
          <li key={index}>
            {investment.name}: ${investment.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
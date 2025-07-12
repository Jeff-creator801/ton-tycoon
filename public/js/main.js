// Инициализация Telegram WebApp
Telegram.WebApp.ready();

document.getElementById('daily-btn').addEventListener('click', () => {
  const balanceEl = document.getElementById('balance');
  let balance = parseInt(balanceEl.textContent.replace('$', '')) || 0;
  balance += 50;
  balanceEl.textContent = `$${balance}`;
  
  Telegram.WebApp.HapticFeedback.impactOccurred('light');
});

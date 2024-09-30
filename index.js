import { expCurve } from './cultivateGame.js';

document.getElementById('params').onsubmit = function (event) {
  event.preventDefault();
  // Your form submission logic here
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const c = document.getElementById('c').value;
  const expcurve = document.getElementById('expcurve');

  if (
    !Number.isInteger(Number(a)) ||
    !Number.isInteger(Number(b)) ||
    !Number.isInteger(Number(c)) ||
    a === '' ||
    b === '' ||
    c === ''
  ) {
    alert('Please enter valid integers for a, b, and c.');
    document.getElementById('a').innerText = '';
    document.getElementById('b').innerText = '';
    document.getElementById('c').innerText = '';
    document.getElementById('a').focus();
    return;
  }

  const curve = expCurve(Number(a), Number(b), Number(c));

  function jsonToTable(json) {
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create table header
    const headerRow = document.createElement('tr');
    Object.keys(json[0]).forEach((key) => {
      const th = document.createElement('th');
      th.textContent = key;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);

    // Create table body
    json.forEach((obj) => {
      const row = document.createElement('tr');
      Object.values(obj).forEach((value) => {
        const td = document.createElement('td');
        td.textContent = value.toLocaleString();
        row.appendChild(td);
      });
      tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    return table;
  }

  expcurve.innerHTML = ''; // Clear previous content
  expcurve.appendChild(jsonToTable(curve));
};

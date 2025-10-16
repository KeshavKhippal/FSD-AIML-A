async function fetchAndDisplayUsers() {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    const users = data.users || [];

    // Create table
    const table = document.createElement('table');
    table.border = '1';
    const header = table.insertRow();
    ['ID', 'First Name', 'Last Name', 'Email'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        header.appendChild(th);
    });

    // Add user rows
    users.forEach(user => {
        const row = table.insertRow();
        row.insertCell().textContent = user.id;
        row.insertCell().textContent = user.firstName;
        row.insertCell().textContent = user.lastName;
        row.insertCell().textContent = user.email;
    });

    document.body.appendChild(table);
}

fetchAndDisplayUsers();
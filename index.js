const registrationForm = document.getElementById('registrationForm');
const registrationTable = document.getElementById('registrationTable');

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const terms = document.getElementById('terms').checked;

    // Validate date of birth (between 18 and 55)
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    if (age < 18 || age > 55) {
        alert('Date of birth must be between 18 and 55 years old.');
        return;
    }

    // Store data in web storage (adjust as needed)
    // ...

    // Add data to table
    const newRow = registrationTable.querySelector('tbody').insertRow();
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${password}</td>
        <td>${dob}</td>
        <td>${terms ? 'Yes' : 'No'}</td>
    `;
});

// Load saved data from web storage (adjust as needed)
// ...
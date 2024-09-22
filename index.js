// Get references to the form, table, and input elements
const form = document.getElementById('registrationForm');
const table = document.getElementById('registrationTable');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const dobInput = document.getElementById('dob');
const termsInput = document.getElementById('terms');

// Function to add a new entry to the table
function addEntry(name, email, password, dob) {
  const row = table.insertRow();
  const nameCell = row.insertCell(0);
  const emailCell = row.insertCell(1);
  const passwordCell = row.insertCell(2);
  const dobCell = row.insertCell(3);

  nameCell.textContent = name;
  emailCell.textContent = email;
  passwordCell.textContent = password;
  dobCell.textContent = dob;
}

// Event listener for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validate email and age here

  // Add entry to the table
  addEntry(nameInput.value, emailInput.value, passwordInput.value, dobInput.value);

  // Persist data using local storage or session storage
  localStorage.setItem('registrationData', JSON.stringify({
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    dob: dobInput.value
  }));

  // Clear form fields
  form.reset();
});

// Retrieve data from local storage on page load
const storedData = localStorage.getItem('registrationData');
if (storedData) {
  const data = JSON.parse(storedData);
  addEntry(data.name, data.email, data.password, data.dob);
}
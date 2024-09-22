document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const table = document.getElementById('entriesTable').getElementsByTagName('tbody')[0];

    function validateAge(dob) {
        const birthDate = new Date(dob);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age >= 18 && age <= 55;
    }

    function addEntryToTable(data) {
        const row = table.insertRow();
        row.insertCell(0).textContent = data.name;
        row.insertCell(1).textContent = data.email;
        row.insertCell(2).textContent = data.password;
        row.insertCell(3).textContent = data.dob;
        row.insertCell(4).textContent = data.acceptedTerms;
    }

    function loadEntriesFromStorage() {
        const entries = JSON.parse(localStorage.getItem('entries')) || [];
        entries.forEach(addEntryToTable);
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const dob = document.getElementById('dob').value;
        const acceptedTerms = document.getElementById('terms').checked;
        
        if (!validateAge(dob)) {
            alert('You must be between 18 and 55 years old.');
            return;
        }
        
        const formData = { name, email, password, dob, acceptedTerms };
        
        // Store data in localStorage
        const entries = JSON.parse(localStorage.getItem('entries')) || [];
        entries.push(formData);
        localStorage.setItem('entries', JSON.stringify(entries));
        
        // Add entry to table
        addEntryToTable(formData);
        
        form.reset();
    });

    // Load data from localStorage on page load
    loadEntriesFromStorage();
});

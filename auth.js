document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    const users = JSON.parse(localStorage.getItem('users')) || [];

    function hashPassword(password) {
        return password.split('').reverse().join(''); // Simple hash for demonstration
    }

    function saveUser(user) {
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }

    function authenticateUser(username, password) {
        const hashedPassword = hashPassword(password);
        const user = users.find(user => user.username === username && user.password === hashedPassword);
        return user !== undefined;
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const hashedPassword = hashPassword(password);

            if (users.find(user => user.username === username)) {
                alert('Username already exists');
                return;
            }

            const newUser = { email, username, password: hashedPassword };
            saveUser(newUser);
            alert('Registration successful');
            window.location.href = 'game.html'; // Redirect to game page
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (authenticateUser(username, password)) {
                alert('Login successful');
                window.location.href = 'game.html'; // Redirect to game page
            } else {
                alert('Invalid username or password');
            }
        });
    }
});

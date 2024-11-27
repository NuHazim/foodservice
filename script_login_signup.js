if (window.location.pathname.includes('login.html')) {
    // Code specific to login.html
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email && password) {
            alert(`Welcome back, ${email}!`);
            login = true;
            window.location.href = "main.html";
        } else {
            alert('Please fill in all fields.');
        }
    });
}

if (window.location.pathname.includes('signup.html')) {
    // Code specific to signup.html
    document.getElementById('signupForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const confirmPassword = document.getElementById('confirm_password').value.trim();

        if (!username || !email || !password || !confirmPassword) {
            alert('Please fill in all the fields.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        alert(`Welcome, ${username}! Your account has been created.`);
        window.location.href = "login.html";
    });
}

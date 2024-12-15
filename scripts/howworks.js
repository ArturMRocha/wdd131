document.addEventListener('DOMContentLoaded', function () {
    // Function to change the background color of the page based on user preference
    function changeBackgroundColor(color) {
        document.body.style.backgroundColor = color;
        localStorage.setItem('bgColor', color); // Save the color to localStorage
    }

    // Function to display a personalized welcome message
    function displayWelcomeMessage() {
        const userName = localStorage.getItem('userName');
        const messageElement = document.getElementById('welcome-message');
        
        if (userName) {
            messageElement.textContent = `Welcome back, ${userName}! Enjoy exploring how electric cars work.`;
        } else {
            messageElement.textContent = 'Welcome! Learn how electric cars work.';
        }
    }

    // Function to save the user’s name in localStorage
    function saveUserName() {
        const nameInput = document.getElementById('user-name');
        const name = nameInput.value.trim();
        
        if (name) {
            localStorage.setItem('userName', name); // Store the name in localStorage
            nameInput.value = ''; // Clear the input field after saving the name
            displayWelcomeMessage(); // Update the welcome message
        } else {
            alert("Please enter your name!");
        }
    }

    // Function to toggle visibility of the challenges section
    function toggleChallenges() {
        const challengesSection = document.querySelector('.challenges');
        const toggleButton = document.getElementById('toggle-challenges');
        
        if (challengesSection.style.display === 'none') {
            challengesSection.style.display = 'block';
            toggleButton.textContent = 'Hide Challenges';
        } else {
            challengesSection.style.display = 'none';
            toggleButton.textContent = 'Show Challenges';
        }
    }

    // Set event listeners for various interactive elements
    const colorButtons = document.querySelectorAll('.color-button');
    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            changeBackgroundColor(button.dataset.color);
        });
    });

    const saveButton = document.getElementById('save-name');
    if (saveButton) {
        saveButton.addEventListener('click', saveUserName);
    } else {
        console.error('Save button not found');
    }

    const toggleButton = document.getElementById('toggle-challenges');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleChallenges);
    } else {
        console.error('Toggle button not found');
    }

    // Initialize the page with data from localStorage
    displayWelcomeMessage();

    // Handle images dynamically
    const images = [
        { src: 'images/electriccar.webp', alt: 'Electric Car' },
        { src: 'images/recharging.webp', alt: 'Electric Car Components' }
    ];

    // Dynamically add images to the page
    const introSection = document.querySelector('.intro');
    if (introSection) {
        images.forEach(image => {
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            img.width = 600;
            introSection.appendChild(img);
        });
    } else {
        console.error('Intro section not found');
    }

    // Function to toggle light/dark mode
    const modeButton = document.getElementById('mode-toggle');
    if (modeButton) {
        modeButton.addEventListener('click', function () {
            const currentMode = localStorage.getItem('mode') || 'light';
            if (currentMode === 'light') {
                document.body.classList.add('dark-mode');
                localStorage.setItem('mode', 'dark');
                modeButton.textContent = 'Switch to Light Mode';
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('mode', 'light');
                modeButton.textContent = 'Switch to Dark Mode';
            }
        });

        // Check for stored mode preference and apply it
        const savedMode = localStorage.getItem('mode');
        if (savedMode === 'dark') {
            document.body.classList.add('dark-mode');
            modeButton.textContent = 'Switch to Light Mode';
        } else {
            document.body.classList.remove('dark-mode');
            modeButton.textContent = 'Switch to Dark Mode';
        }
    } else {
        console.error('Mode toggle button not found');
    }

    // Form validation
    const form = document.querySelector('form');
    if (form) {
        const submitButton = form.querySelector('button');
        if (submitButton) {
            function validateForm(event) {
                event.preventDefault();  // Impede o envio do formulário até que a validação seja concluída
                
                const firstName = document.getElementById('first-name').value.trim();
                const lastName = document.getElementById('last-name').value.trim();
                const email = document.getElementById('email').value.trim();
                const message = document.getElementById('message').value.trim();
                
                if (!firstName || !lastName || !email || !message) {
                    alert("Please fill in all the required fields!");
                    return;
                }

                const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if (!emailRegex.test(email)) {
                    alert("Please enter a valid email address.");
                    return;
                }
                
                alert("Thank you for reaching out! We will get back to you soon.");
                form.reset();
            }

            submitButton.addEventListener('click', validateForm);
        } else {
            console.error('Submit button not found');
        }
    } else {
        console.error('Form not found');
    }
});

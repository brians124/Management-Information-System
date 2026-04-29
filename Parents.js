document.addEventListener('DOMContentLoaded', () => {
    // 1. Sidebar Navigation Logic
    const navLinks = document.querySelectorAll('.sidebar .nav-link');
    const sections = document.querySelectorAll('.main-container > div[id]'); // Assuming you add IDs to sections

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only prevent default if it's an internal link
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                this.classList.add('active');

                // Toggle visibility of sections (Optional: if using SPA style)
                const targetId = this.getAttribute('href').substring(1);
                showSection(targetId);
            }
        });
    });

    // 2. Student Switching Logic
    const studentDropdownItems = document.querySelectorAll('.dropdown-item');
    const studentNameDisplay = document.querySelector('.dropdown-toggle strong');

    studentDropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedStudent = this.innerText;
            
            // Update UI to reflect the selected student
            studentNameDisplay.innerText = selectedStudent;
            
            // Alert for demonstration (In reality, you would fetch new data here)
            console.log(`Fetching data for: ${selectedStudent}`);
            showToast(`Switched profile to ${selectedStudent}`);
        });
    });

    // 3. Form Submission Handling (e.g., Leave Requests)
    const requestButtons = document.querySelectorAll('.btn-outline-blue');
    requestButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.innerText.trim();
            alert(`Opening form for: ${action}`);
        });
    });

    // 4. Utility: Section Visibility Toggler
    function showSection(id) {
        // This logic works if you wrap your dashboard, attendance, etc., in divs with matching IDs
        const targetSection = document.getElementById(id);
        if (targetSection) {
            // Scroll to section smoothly
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // 5. Simple Toast Notification System
    function showToast(message) {
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #0d47a1;
            color: white;
            padding: 12px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            z-index: 1000;
            transition: opacity 0.5s;
        `;
        toast.innerText = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    }
});
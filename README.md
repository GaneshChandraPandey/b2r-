📄 B2R Technologies - Reimbursement Form
A fully functional Local Conveyance & Mobile Reimbursement Form built using HTML, CSS, and JavaScript. The form includes multiple sections for travel, meal, quarterly, and mobile reimbursements with automatic calculation and PDF/email generation.

🚀 Features
✅ Dynamic row addition and deletion in all tables.
✅ Automatic calculation of travel, meal, quarterly, and mobile reimbursement amounts.
✅ Auto conversion of total amounts to words.
✅ PDF generation using jsPDF and html2canvas.
✅ Email functionality using EmailJS.
✅ Clean and responsive design using inline CSS.
✅ Dropdowns for selecting dates, offices, and other values.
✅ Print option directly from the form.

🏗️ Folder Structure
pgsql
Copy
Edit
project/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── .gitignore
⚙️ Setup Instructions
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/reimbursement-form.git
2. Navigate to the Project Folder
bash
Copy
Edit
cd reimbursement-form
3. Open in VS Code or Editor
bash
Copy
Edit
code .
4. Open in Browser
Open index.html directly in your browser.
🛠️ Configuration
1. EmailJS Configuration
Go to https://www.emailjs.com and create an account.
Replace the following placeholders in script.js:
js
Copy
Edit
emailjs.init("YOUR_USER_ID"); // Add your EmailJS user ID
const emailParams = {
    to_email: "receiver@example.com", // Add the receiver's email
};
2. PDF Generation
No extra setup is required — handled by jsPDF and html2canvas.

🚦 Usage
Fill out the form.
Add rows for travel, meal, and mobile reimbursement as needed.
Automatically calculates totals.
Generate PDF and send via email.
Submit or print directly.
💡 Sample Data
Field	Example
Employee Code	12345
Employee Name	John Doe
Account No.	1234567890
IFSC	ABCD12345
Mode of Travel	Car, Bike, Bus
Amount	₹1000
🎯 Technologies Used
HTML – Structure
CSS – Styling
JavaScript – Functionality
jsPDF – PDF Generation
html2canvas – Screenshot to Image
EmailJS – Email Handling
🚧 To-Do
✅ Improve mobile responsiveness
✅ Add more validation checks
✅ Implement error handling for email failures
🏆 Contributing
Feel free to fork this repository, create a feature branch, and submit a pull request!

💬 Feedback
If you have any feedback, feel free to reach out at your-email@example.com.

📜 License
This project is licensed under the MIT License.

🌟 Give the project a ⭐ if you find it useful! 😎
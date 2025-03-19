
    const offices = ['Orakhan', 'Haldwani', 'Dehradun', 'Rishikesh', 'Nainital'];

    function getDropdown(options) {
        return `<select>${options.map(opt => `<option>${opt}</option>`).join('')}</select>`;
    }

    // 🚗 Add Travel Row
    function addTravelRow() {
        const table = document.getElementById('travelTable');
        const row = table.insertRow(-1);
        row.innerHTML = `
            <td><input type="date"></td>
            <td>${getDropdown(offices)}</td>
            <td>${getDropdown(offices)}</td>
            <td><input type="text"></td>
            <td>${getDropdown(['Car', 'Bike', 'Bus'])}</td>
            <td><input type="number" oninput="calculateTotal()"></td>
            <td><input type="number" readonly></td>
            <td><button onclick="deleteRow(this)">Delete</button></td>
        `;
    }
// 🍱 Add QuarterlyReimbursement Row
function addQuarterlyReimbursementRow () {
        const table = document.getElementById('QuarterlyReimbursementTable');
        const row = table.insertRow(-1);
        row.innerHTML = `
            <td><input type="date"></td>
            <td><input type="text"></td>
            <td><input type="number" oninput="calculateTotal()"></td>
            <td><button onclick="deleteRow(this)">Delete</button></td>
        `;
}
    // 🍱 Add Meal Row
    function addMealRow() {
        const table = document.getElementById('mealTable');
        const row = table.insertRow(-1);
        row.innerHTML = `
            <td><input type="date"></td>
            <td> <select required>
                <option></option>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                    
            </select></td>
            <td><input type="number" oninput="calculateTotal()"></td>
            <td><button onclick="deleteRow(this)">Delete</button></td>
        `;
    }
    // 🍱 Add Mobile Row
    function addMobileRow() {
        const table = document.getElementById('mobileTable');
        const row = table.insertRow(-1);
        row.innerHTML = `
              <td> 
            <select required>
                 <option></option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
            </select>
        </td></td>
            <td><input type="text"></td>
            <td><input type="number" oninput="calculateTotal()"></td>
            <td><button onclick="deleteRow(this)">Delete</button></td>
        `;
    }

    function calculateTotal() {
        let travelTotal = 0;
        document.querySelectorAll("#travelTable tr").forEach((row, index) => {
            if (index > 0) {
                let km = parseFloat(row.cells[5].children[0].value) || 0;
                let mode = row.cells[4].children[0].value.toLowerCase();
                let rate = mode === 'bike' ? 4 : 10;
                row.cells[6].children[0].value = km * rate;
                travelTotal += km * rate;
            }
        });
        document.getElementById("travelTotal").innerText = travelTotal;


        let QuarterlyReimbursementTotal = 0;
        document.querySelectorAll("#QuarterlyReimbursementTable tr").forEach((row, index) => {
            if (index > 0) {
                QuarterlyReimbursementTotal += parseFloat(row.cells[2].children[0].value) || 0;
            }
        });
        document.getElementById("QuarterlyReimbursementTotal").innerText = QuarterlyReimbursementTotal;




        let mealTotal = 0;
        document.querySelectorAll("#mealTable tr").forEach((row, index) => {
            if (index > 0) {
                mealTotal += parseFloat(row.cells[2].children[0].value) || 0;
            }
        });
        document.getElementById("mealTotal").innerText = mealTotal;
        
        let mobileTotal = 0;
        document.querySelectorAll("#mobileTable tr").forEach((row, index) => {
            if (index > 0) {
                mobileTotal += parseFloat(row.cells[2].children[0].value) || 0;
            }
        });
        document.getElementById("mobileTotal").innerText = mobileTotal;


        let grandTotal = travelTotal + mealTotal +  mobileTotal + QuarterlyReimbursementTotal;
        document.getElementById("grandTotal").innerText = grandTotal;
        document.getElementById("amountInWords").innerText = convertToWords(grandTotal);
    }

    function deleteRow(btn) {
        btn.parentElement.parentElement.remove();
        calculateTotal();
    }

    function submitForm() {
        alert("Form submitted successfully!");
    }
     // Function to convert number to words
     function convertToWords(num) {
        if (num === 0) return "Zero";

        const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
        const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
        const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
        const thousands = ["", "Thousand", "Million", "Billion"];

        function convertBelowThousand(num) {
            let word = "";
            if (num >= 100) {
                word += units[Math.floor(num / 100)] + " Hundred ";
                num %= 100;
            }
            if (num >= 10 && num < 20) {
                word += teens[num - 10] + " ";
            } else if (num >= 20) {
                word += tens[Math.floor(num / 10)] + " ";
                num %= 10;
            }
            if (num > 0) {
                word += units[num] + " ";
            }
            return word.trim();
        }

        let result = "";
        let thousandIndex = 0;

        while (num > 0) {
            if (num % 1000 !== 0) {
                result = convertBelowThousand(num % 1000) + " " + thousands[thousandIndex] + " " + result + "only";
            }
            num = Math.floor(num / 1000);
            thousandIndex++;
        }

        return result.trim();
    }
    function generatePDF() {
    const { jsPDF } = window.jspdf;

    // Target container to convert to PDF
    const formElement = document.querySelector('.container');

    // Use html2canvas to capture the form as an image
    html2canvas(formElement, {
        scale: 2, // Higher scale for better quality
        useCORS: true
    }).then(canvas => {
        const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size in portrait

        // Convert canvas to base64 image
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 210; // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Add image to PDF
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

        // Save the PDF with a custom filename
        pdf.save('B2R_Reimbursement_Form.pdf');
    }).catch(err => {
        console.error("Failed to generate PDF:", err);
        alert("Failed to generate PDF. Please try again.");
    });
}
(function() {
        emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
    })();

    function sendEmail() {
        const { jsPDF } = window.jspdf;

        const formElement = document.querySelector('.container');

        html2canvas(formElement, {
            scale: 2,
            useCORS: true
        }).then(canvas => {
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgData = canvas.toDataURL('image/png');
            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

            // Convert PDF to base64
            const pdfBase64 = pdf.output('datauristring').split(',')[1];

            // EmailJS parameters
            const emailParams = {
                to_email: "receiver@example.com", // Replace with the receiver's email
                pdf_attachment: pdfBase64
            };

            // Send email using EmailJS
            emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", emailParams)
                .then(response => {
                    console.log("SUCCESS!", response.status, response.text);
                    alert("Email sent successfully!");
                }, error => {
                    console.error("FAILED...", error);
                    alert("Failed to send email. Please try again.");
                });
        }).catch(err => {
            console.error("Failed to generate PDF:", err);
            alert("Failed to generate PDF.");
        });
    }


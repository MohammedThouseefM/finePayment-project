// Student data with actual attendance percentages
        const students = [
            { regNo: "36623U09001", name: "ABU BAKER MIRA PATEI", dob: "26-03-2005", attendance: 85, paid: false },
            { regNo: "36623U09002", name: "ADITHYA S", dob: "07-09-2005", attendance: 78, paid: false },
            { regNo: "36623U09003", name: "ARRATH ZURAIN N", dob: "01-02-2004", attendance: 72, paid: false },
            { regNo: "36623U09004", name: "ASMATH BASHA T N", dob: "27-06-2006", attendance: 80, paid: false },
            { regNo: "36623U09005", name: "CHANDBU AMANNATI IS", dob: "11-05-2006", attendance: 68, paid: false },
            { regNo: "36623U09006", name: "FUIZAN SAYEED K", dob: "01-10-2005", attendance: 74, paid: false },
            { regNo: "36623U09007", name: "GOWTHAM M", dob: "12-12-2004", attendance: 82, paid: false },
            { regNo: "36623U09008", name: "INDADULLAH K T", dob: "18-09-2005", attendance: 79, paid: false },
            { regNo: "36623U09009", name: "IREAN AHMED V", dob: "25-09-2005", attendance: 71, paid: false },
            { regNo: "36623U09010", name: "JAYAPIKAKASLI J", dob: "05-12-2005", attendance: 83, paid: false },
            { regNo: "36623U09011", name: "KIRAN G", dob: "24-02-2004", attendance: 76, paid: false },
            { regNo: "36623U09012", name: "LOKESH B", dob: "19-01-2005", attendance: 84, paid: false },
            { regNo: "36623U09013", name: "MOHAMMED AATHIF M", dob: "18-01-2005", attendance: 70, paid: false },
            { regNo: "36623U09014", name: "MOHAMMED ANSAR V", dob: "06-09-2005", attendance: 77, paid: false },
            { regNo: "36623U09015", name: "MOHAMMED ARIJAMM M", dob: "05-06-2005", attendance: 69, paid: false },
            { regNo: "36623U09016", name: "MOHAMMED FAST G", dob: "22-06-2006", attendance: 81, paid: false },
            { regNo: "36623U09017", name: "MOHAMMED INIRAN S", dob: "17-01-2006", attendance: 73, paid: false },
            { regNo: "36623U09018", name: "MOHAMMED KAI E V", dob: "11-09-2005", attendance: 75, paid: false },
            { regNo: "36623U09019", name: "MOHAMMED MAAZ N", dob: "15-04-2004", attendance: 86, paid: false },
            { regNo: "36623U09020", name: "MOHAMMED NIHRA S T", dob: "30-05-2006", attendance: 67, paid: false },
            { regNo: "36623U09021", name: "MOHAMMED RAIYAN G", dob: "16-02-2004", attendance: 88, paid: false },
            { regNo: "36623U09022", name: "MOHAMMED RAYEES N", dob: "10-11-2005", attendance: 72, paid: false },
            { regNo: "36623U09023", name: "MOHAMMED SHAHD G", dob: "15-07-2006", attendance: 79, paid: false },
            { regNo: "36623U09024", name: "MOHAMMED SHAREUDDIN R S", dob: "21-06-2004", attendance: 74, paid: false },
            { regNo: "36623U09025", name: "MOHAMMED SIDDEEGUE S", dob: "30-04-2005", attendance: 80, paid: false },
            { regNo: "36623U09026", name: "MOHAMMED SUFIYAN K", dob: "29-08-2005", attendance: 76, paid: false },
            { regNo: "36623U09027", name: "MOHAMMED THALIA O", dob: "05-09-2004", attendance: 82, paid: false },
            { regNo: "36623U09028", name: "MOHAMMED THOUSFEE M", dob: "19-10-2005", attendance: 71, paid: false },
            { regNo: "36623U09029", name: "MOHAMMED WASEEM J", dob: "06-02-2005", attendance: 69, paid: false },
            { regNo: "36623U09030", name: "MUHAMMED RAIYAN G", dob: "19-06-2006", attendance: 84, paid: false },
            { regNo: "36623109032", name: "MUIMME D RAIYAN K S", dob: "19-05-2006", attendance: 73, paid: false },
            { regNo: "36623109033", name: "NAATHIQUE AHMED S", dob: "02-07-2006", attendance: 77, paid: false },
            { regNo: "36623109034", name: "NAVALI MOHAMMED ZAHID", dob: "18-11-2005", attendance: 70, paid: false },
            { regNo: "36623109035", name: "RAIAN Z", dob: "07-03-2006", attendance: 75, paid: false },
            { regNo: "36623109036", name: "SATHYA M", dob: "28-11-2005", attendance: 81, paid: false },
            { regNo: "36623109037", name: "SAYEED AHMED C", dob: "05-02-2003", attendance: 68, paid: false },
            { regNo: "36623109038", name: "SHAHID S", dob: "14-05-2006", attendance: 79, paid: false },
            { regNo: "36623108040", name: "SHAIKH SALMAN", dob: "29-05-2005", attendance: 72, paid: false },
            { regNo: "36623109040", name: "SHIOAIB F", dob: "17-06-2005", attendance: 74, paid: false },
            { regNo: "36623109041", name: "THOSIF J", dob: "08-12-2005", attendance: 83, paid: false },
            { regNo: "36623109042", name: "VIJAY K", dob: "01-07-2005", attendance: 76, paid: false },
            { regNo: "36623109043", name: "VISHWA V", dob: "06-06-2005", attendance: 80, paid: false },
            { regNo: "36623109044", name: "ZAKIR SHAREEF U", dob: "15-03-2005", attendance: 71, paid: false },
            { regNo: "36623109045", name: "ZUBAIR AHMED K", dob: "19-04-2006", attendance: 69, paid: false }
        ];

        // DOM elements
        const loginSection = document.getElementById('loginSection');
        const studentSection = document.getElementById('studentSection');
        const loginForm = document.getElementById('loginForm');
        const logoutBtn = document.getElementById('logoutBtn');
        const studentName = document.getElementById('studentName');
        const studentRegNo = document.getElementById('studentRegNo');
        const studentDob = document.getElementById('studentDob');
        const studentAttendance = document.getElementById('studentAttendance');
        const fineStatus = document.getElementById('fineStatus');
        const fineAmount = document.getElementById('fineAmount');
        const payFineBtn = document.getElementById('payFineBtn');
        const fineAlert = document.getElementById('fineAlert');
        const captchaText = document.getElementById('captchaText');
        const captchaInput = document.getElementById('captchaInput');
        const refreshCaptcha = document.getElementById('refreshCaptcha');
        const regNoError = document.getElementById('regNoError');
        const dobError = document.getElementById('dobError');
        const captchaError = document.getElementById('captchaError');
        const parentlog = document.querySelector('.parentlog');
        const headershow = document.querySelector('.header');

        let currentStudent = null;
        let currentCaptcha = '';

        // Generate CAPTCHA
        function generateCaptcha() {
            const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
            let captcha = '';
            for (let i = 0; i < 6; i++) {
                captcha += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            currentCaptcha = captcha;
            captchaText.textContent = captcha;
            captchaInput.value = '';
        }

        // Initialize CAPTCHA
        generateCaptcha();
        refreshCaptcha.addEventListener('click', generateCaptcha);

        // Login functionality
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const regNo = document.getElementById('regNo').value.toUpperCase();
            const dob = document.getElementById('dob').value;
            const captcha = document.getElementById('captchaInput').value;
            
            // Reset error messages
            regNoError.classList.add('hidden');
            dobError.classList.add('hidden');
            captchaError.classList.add('hidden');
            parentlog.classList.add('hidden');
            headershow.classList.remove('hidden');
            
            // Validate CAPTCHA first
            if (captcha !== currentCaptcha) {
                captchaError.classList.remove('hidden');
                generateCaptcha();
                return;
            }
            
            // Find student with matching credentials
            currentStudent = students.find(student => 
                student.regNo === regNo && student.dob === dob
            );
            
            if (currentStudent) {
                // Successful login
                loginSection.classList.add('hidden');
                studentSection.classList.remove('hidden');
                studentSection.classList.remove('hidden');
                displayStudentInfo(currentStudent);
                generateCaptcha(); // Generate new CAPTCHA for next login
            } else {
                // Show appropriate error message
                const regNoExists = students.some(student => student.regNo === regNo);
                const dobExists = students.some(student => student.dob === dob);
                
                if (!regNoExists) {
                    regNoError.classList.remove('hidden');
                }
                if (!dobExists) {
                    dobError.classList.remove('hidden');
                }
                if (regNoExists && dobExists) {
                    alert('Registration number and date of birth do not match. Please try again.');
                }
                
                generateCaptcha();
            }
        });

        // Logout functionality
        logoutBtn.addEventListener('click', function() {
            currentStudent = null;
            studentSection.classList.add('hidden');
            loginSection.classList.remove('hidden');
            parentlog.classList.add('hidden');
            parentlog.classList.remove('hidden');
            loginForm.reset();
            generateCaptcha();
        });

        // Display student information
        function displayStudentInfo(student) {
            studentName.textContent = student.name;
            studentRegNo.textContent = student.regNo;
            studentDob.textContent = student.dob;
            studentAttendance.textContent = `${student.attendance}%`;
            
            // Check if fine was already paid
            if (student.paid) {
                fineStatus.textContent = "Fine already paid";
                fineStatus.className = "no-fine";
                fineAmount.textContent = "";
                payFineBtn.classList.add('hidden');
                fineAlert.className = "alert alert-success";
            }
            // Check attendance and calculate fine
            else if (student.attendance < 75) {
                fineStatus.textContent = "Fine applicable (attendance below 75%)";
                fineStatus.className = "fine";
                fineAmount.textContent = "Fine Amount: ₹1000";
                fineAmount.className = "fine";
                payFineBtn.classList.remove('hidden');
                fineAlert.className = "alert alert-warning";
            } else {
                fineStatus.textContent = "No fine applicable";
                fineStatus.className = "no-fine";
                fineAmount.textContent = "";
                payFineBtn.classList.add('hidden');
                fineAlert.className = "alert alert-success";
            }
        }

        // Pay fine functionality
        payFineBtn.addEventListener('click', function() {
            if (confirm(`Confirm payment of ₹1000 fine for ${currentStudent.name}?`)) {
                // Mark the student as paid
                currentStudent.paid = true;
                
                alert(`Payment of ₹1000 successful for ${currentStudent.name}. Receipt will be generated.`);
                generateReceipt(currentStudent);
                
                // Update the UI to reflect payment
                displayStudentInfo(currentStudent);
            }
        });

        // Generate PDF receipt
        function generateReceipt(student) {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            
            // Add university header
            doc.setFontSize(16);
            doc.setTextColor(0, 51, 102); // Dark blue color
            doc.text("MERIT HAJI ISMAIL SAHAB ART AND SCIENCE COLLEGE", 105, 15, { align: 'center' });
            doc.setFontSize(12);
            doc.text("Gudiyatham road, Kondamalli, pernambut - 635810", 105, 22, { align: 'center' });
            doc.setFontSize(14);
            doc.text("Fine Payment Receipt", 105, 30, { align: 'center' });
            
            // Add line
            doc.setDrawColor(0, 51, 102);
            doc.setLineWidth(0.5);
            doc.line(20, 35, 190, 35);
            
            // Add receipt details
            doc.setFontSize(12);
            doc.setTextColor(0, 0, 0); // Black color
            doc.text(`Receipt No: ${Math.floor(100000 + Math.random() * 900000)}`, 20, 45);
            doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 55);
            
            // Add student details
            doc.text(`Student Name: ${student.name}`, 20, 70);
            doc.text(`Registration No: ${student.regNo}`, 20, 80);
            doc.text(`Date of Birth: ${student.dob}`, 20, 90);
            doc.text(`Attendance: ${student.attendance}%`, 20, 100);
            
            // Add payment details
            doc.setFontSize(14);
            doc.text("Payment Details", 20, 115);
            doc.setFontSize(12);
            doc.text(`Fine Amount: ₹1000`, 20, 125);
            doc.text(`Payment Status: Paid`, 20, 135);
            doc.text(`Payment Date: ${new Date().toLocaleString()}`, 20, 145);
            
            // Add footer
            doc.setFontSize(10);
            doc.text("Thank you for your payment.", 105, 185, { align: 'center' });
            
            // Save the PDF
            doc.save(`Fine_Receipt_${student.regNo}.pdf`);
        }

# National Digital Health & Welfare Portal (NDHWP)

---

## Table of Contents

* [About](#about)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Project Structure](#project-structure)
* [Installation](#installation)
* [Usage](#usage)
* [Screenshots](#screenshots)
* [Future Enhancements](#future-enhancements)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

---

## About

The **National Digital Health & Welfare Portal (NDHWP)** is a comprehensive web application designed to streamline health and welfare services. It enables patients, doctors, and administrators to manage and access health-related information efficiently through secure login portals and personalized dashboards.

This project simulates features such as OTP-based login (without external APIs), role-based dashboards, and session management, providing a realistic prototype for digital health portals.

---

## Features

* **Role-based access:** Separate login portals and dashboards for Patients, Doctors, and Admins.
* **OTP Login Simulation:** OTP verification flow without external API dependencies.
* **User Management:** Storage of credentials and session handling using localStorage/cookies.
* **Dashboard Views:** Tailored dashboard interface for each user role with relevant functionalities.
* **Responsive UI:** Clean and intuitive frontend built with HTML, CSS, and JavaScript.
* **Backend:** Node.js and MongoDB for data handling and authentication simulation.

---

## Technologies Used

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js (Express)
* **Database:** MongoDB
* **Session Management:** Cookies and localStorage
* **Version Control:** Git and GitHub

---

## Project Structure

```plaintext
NDHWP/
│
├── backend/                  # Node.js server and API routes
├── frontend/                 # HTML, CSS, JS for UI
├── models/                   # Mongoose schemas
├── routes/                   # Express routes for login, dashboard etc.
├── controllers/              # Request handling logic
├── views/                    # EJS or HTML templates (if applicable)
├── public/                   # Static assets like images, CSS, JS files
├── .gitignore
├── package.json
├── README.md
└── server.js                 # Entry point for the backend server
```

---

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/JatinWadhwani123/National-Digital-Health-Welfare-Portal-NDHWP.git
cd National-Digital-Health-Welfare-Portal-NDHWP
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up MongoDB:**

Make sure MongoDB is installed and running on your machine or use a MongoDB cloud service. Update your connection string in the configuration file (`.env` or config.js).

4. **Start the server:**

```bash
node server.js
```

5. **Access the app:**

Open your browser and go to:

```
http://localhost:5000
```

---

## Usage

* Use the navigation buttons to access **Patient**, **Doctor**, or **Admin** login portals.
* Register or login with your credentials.
* Once logged in, explore the role-specific dashboards.
* Log out securely to end the session.

---

## Screenshots

![Screenshot 2025-05-28 015811](https://github.com/user-attachments/assets/61e5a04a-057a-4108-9eb2-edeed5c980b8)
![Screenshot 2025-05-28 015855](https://github.com/user-attachments/assets/a614817c-aefa-4453-b760-047a09a916a0)
![Screenshot 2025-05-28 015912](https://github.com/user-attachments/assets/31f5e601-9c26-4500-94ea-786e12ffaa11)
![Screenshot 2025-05-28 015936](https://github.com/user-attachments/assets/85100efa-cf72-453b-9cd4-8ade6943087d)


---




## Future Enhancements

* Implement real OTP service integration (e.g., Twilio).
* Add appointment scheduling and management.
* Integrate electronic health record (EHR) management.
* Implement role-based access control with JWT authentication.
* Enhance UI/UX with modern frontend frameworks (React, Vue, Angular).
* Add unit and integration tests.

---

## Contributing

Contributions are welcome!
Please fork the repo, create a new branch, and submit a pull request.

---

## License

This project is licensed under the MIT License.

---

## Contact

Created by **Jatin Wadhwani** – feel free to reach out!

* GitHub: [JatinWadhwani123](https://github.com/JatinWadhwani123)
* Email: [jatinwadhwaniofficial1@gmail.com](jatinwadhwaniofficial1@gmail.com)
* 💼 LinkedIn: Jatin Wadhwani(www.linkedin.com/in/jatin-wadhwani-)
---

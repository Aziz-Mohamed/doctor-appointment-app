# Doctor Appointment App

## Overview

The Doctor Appointment App is a modern, user-friendly web application designed to streamline the process of booking medical appointments. The app provides two distinct interfaces: one for users (patients) and another for staff (administrators). Built with cutting-edge web technologies, this app aims to offer a seamless experience for both patients and medical staff.

## Features

### User Interface

- **Browse Doctors**: Search and view doctors by specialty or name.
- **Book Appointments**: Select preferred doctors, dates, and times for appointments.
- **Authentication**: Secure login and signup for patients.

### Staff/Admin Interface

- **Appointment Management**: View, confirm, or cancel appointments.
- **Specialty and status Filtering**: Preview and filter appointments based on specialty and/or status for easy access and management.
- **Status Tracking**: Use color-coded statuses to track appointment progress.

### General Features

- **Role-Based Authentication**: Separate access and permissions for users and staff.
- **Responsive Design** (planned): Optimized for all devices, including desktops, and tablets. (and regarding smartphones, we are currently working on their layout responsiveness).

## Tech Stack

### Front-End

- **Next.js**: For building the user interface and for server-side rendering and better SEO.
- **Tailwind CSS**: For styling.
- **ShadCN Components**: For tables, selects, and interactive elements.

### Back-End

- **Supabase**: For authentication and database management.
- **Node.js** (planned): Will replace supabase with a complete solution with node.js for the back end in future iterations.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/doctor-appointment-app.git
   ```
2. **Navigate to the Project Directory**:
   ```bash
   cd doctor-appointment-app
   ```
3. **Install Dependencies**:
   ```bash
   yarn install
   ```
4. **Run the Development Server**:
   ```bash
   yarn dev
   ```
5. **Access the App**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- **User Interface**: Patients can log in to book and manage appointments.
- **Admin Interface**: Staff can manage appointments and track statuses via the dashboard.

## Roadmap

1. **Enhancements**:
   - Implement Node.js and replace supabase for the back end.
   - Add more robust search and filtering options for doctors/staff.
   - Introduce payment integration for appointment bookings.
   - **Record Patient History**: Maintain a record of patients' medical history and prescriptions for reference and follow-up.
   - **Appointment Management**: Users can view all their appointments along with their status and edit or delete appointments as needed.
2. **Mobile App**:
   - Develop a React Native version for iOS and Android.

## Contribution

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**.
2. **Create a Feature Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit Your Changes**:
   ```bash
   git commit -m "Add your feature description here"
   ```
4. **Push Your Branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request**.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Special thanks to the ShadCN library for providing reusable components.
- Gratitude to the Next.js and Supabase communities for their comprehensive documentation and support.

## Contact

For any inquiries or support, please contact:

- **Email**: [abdilaziz.m.elsayed@gmail.com](mailto:abdilaziz.m.elsayed@gmail.com)
- **LinkedIn**: [www.linkedin.com/in/abdil-aziz-elgarf](http://www.linkedin.com/in/abdil-aziz-elgarf)
- **GitHub**: [https://github.com/Aziz-Mohamed](https://github.com/Aziz-Mohamed)


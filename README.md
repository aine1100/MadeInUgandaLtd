# Made in Uganda Online Ltd Frontend

This repository contains the frontend codebase for Made in Uganda Online Ltd, a platform designed to showcase and sell products made in Uganda. The project features authentication, a landing page with essential sections (Home, About, Services, Contact), and a dashboard for authenticated users.
![image](https://github.com/user-attachments/assets/89613f70-45ea-42ac-9b92-f271fe11ab45)

---

## Features

- Authentication:
  - User registration and login functionality.
  - Protected routes for authenticated users.

- Landing Page:
  - Home: Introduction to the platform.
  - About:Information about Made in Uganda Online Ltd.
  - Services: Overview of services offered.
  - Contact: Contact form and details.

- Dashboard:
  - Accessible to successfully logged-in users.
  - Includes statistics, product management, and more.

- Responsive Design:
  - Fully responsive across various devices.

---

## File Structure

The project is organized as follows:

```
src
├── assets
├── components
│   ├── seller
│   │   ├── DashboardCards.tsx
│   │   ├── header.tsx
│   ├── ProductTable.tsx
│   ├── sidebar.tsx
│   ├── aboutus.tsx
│   ├── cartPage.tsx
│   ├── contact.tsx
│   ├── faq.tsx
│   ├── faqCard.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── navbar.tsx
│   ├── ourProducts.tsx
│   ├── ourServices.tsx
│   ├── productNavbar.tsx
│   ├── ProductsPage.tsx
│   ├── statistics.tsx
│   ├── testimonials.tsx
│   ├── whoWeAre.tsx
├── pages
│   ├── about.tsx
│   ├── contact.tsx
│   ├── dashboard.tsx
│   ├── home.tsx
│   ├── login.tsx
│   ├── Product.tsx
│   ├── register.tsx
│   ├── Service.tsx
├── App.css
├── App.tsx
├── index.css
├── main.tsx
```

---

## Tech Stack

- Framework: React.js with TypeScript
- Styling: Tailwind CSS
- Routing: React Router
- State Management: useState, Context API
- Notifications: react-toastify

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/madeinuganda-frontend.git
   ```

2. Navigate to the project directory:
   ```bash
   cd frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

---

## Contribution

Contributions are welcome! Feel free to submit issues or pull requests for enhancements or bug fixes.

---

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

## Contact

For further inquiries, please contact:

- **Email:** support@madeinuganda.com
- **Website:** [Made in Uganda Online Ltd](https://made-in-uganda-ltd.vercel.app/)


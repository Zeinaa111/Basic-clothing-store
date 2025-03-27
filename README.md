# BASICS - Minimalist Fashion E-commerce Website

Overview

**BASICS** is a minimalist online clothing store designed for women who love timeless wardrobe staples. The platform offers an affordable, modern, and seamless shopping experience for essential fashion basics such as tops, tanks, and sweatshirts.

Live Features
- Responsive landing page with a hero section and call-to-action
- Product catalog dynamically rendered with JavaScript
- Live search functionality
- Integrated PayPal sandbox checkout
- Mobile responsive UI

Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas with Mongoose
- **Payment:** PayPal Sandbox Integration
- **Deployment Ready:** Dockerfile 

  Project Structure
```
/frontend
  ├── index.html
  ├── styles.css
  └── app.js

/backend
  ├── server.js
  ├── models/
  │   ├── Product.js
      └── .env.example
```

Setup Instructions

 Backend
```bash
cd backend
npm install
echo "MONGO_URI=your_connection_string" > .env
npm start
```

Frontend
Open `index.html` from the `frontend` folder in a browser.


  Future Enhancements
- User login & registration
- Admin dashboard
- Product filtering and categorization
- Email notifications


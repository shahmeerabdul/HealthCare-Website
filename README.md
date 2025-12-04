# 🏥 HealthCare Website

A modern, responsive healthcare website built with HTML, CSS, and JavaScript. Features a clean white + blue theme, rounded cards, soft shadows, and professional typography.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

- 🎨 **Modern Design**: Clean white + blue theme with rounded cards and soft shadows
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- 🏥 **8 Complete Pages**: Home, About, Doctors, Appointments, Patient Portal, Blog, Emergency, and Contact
- ✅ **Form Validation**: Client-side validation for all forms
- 🎭 **Interactive Elements**: Testimonials slider, mobile menu toggle, search & filter functionality
- 🎯 **Patient Portal**: Login and dashboard with appointments, lab reports, and prescriptions
- 🔍 **Doctor Directory**: Search and filter doctors by specialty
- 📝 **Health Blog**: Blog layout with pagination
- 🚨 **Emergency Services**: Emergency hotlines and first-aid instructions

## 🚀 Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/healthcare-website.git
   cd healthcare-website
   ```

2. **Open in Browser**
   
   Simply open `index.html` in your web browser:
   - **Windows**: Double-click `index.html` or right-click → Open with → Browser
   - **Mac**: Double-click `index.html` or right-click → Open with → Browser
   - **Linux**: `xdg-open index.html` or open with your preferred browser

   **Or use a local server** (recommended for development):
   
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
   
   Then navigate to `http://localhost:8000` in your browser.

## 📁 Project Structure

```
healthcare/
├── assets/
│   ├── css/
│   │   └── styles.css          # Global stylesheet
│   ├── js/
│   │   └── script.js           # JavaScript functionality
│   └── images/                 # Image assets (add your images here)
├── index.html                  # Home page
├── about.html                  # About Us page
├── doctors.html                # Doctors directory
├── appointment.html            # Appointment booking
├── login.html                  # Patient portal login
├── dashboard.html              # Patient dashboard
├── blog.html                   # Health blog
├── emergency.html              # Emergency services
├── contact.html                # Contact page
└── README.md                   # This file
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#1e88e5`
- **White**: `#ffffff`
- **Light Gray**: `#f4f6f8`
- **Dark Gray**: `#2a2a2a`
- **Text Gray**: `#666666`

### Typography
- **Primary Font**: Inter, Poppins, Roboto (fallback to system fonts)
- **Headings**: 600 weight
- **Body**: 400 weight

### Components
- Rounded corners: `12px` border radius
- Soft shadows for depth
- Smooth transitions: `0.3s ease`
- Card-based layouts

## 📄 Pages Overview

### 1. **Home Page** (`index.html`)
- Hero section with call-to-action buttons
- Services showcase (6 service cards)
- Featured doctors section
- Why choose us section
- Testimonials slider

### 2. **About Us** (`about.html`)
- Company history
- Mission & vision
- Core values
- Leadership team

### 3. **Doctors Directory** (`doctors.html`)
- Search functionality
- Filter by specialty
- Doctor cards with details
- Book appointment buttons

### 4. **Appointment Booking** (`appointment.html`)
- Comprehensive booking form
- Doctor selection
- Date and time picker
- Form validation

### 5. **Patient Portal**
- **Login** (`login.html`): Secure login page
- **Dashboard** (`dashboard.html`): 
  - Upcoming appointments
  - Lab reports (downloadable)
  - Prescriptions
  - Profile information

### 6. **Health Blog** (`blog.html`)
- Blog post cards
- Author and date information
- Pagination
- Hover effects

### 7. **Emergency Services** (`emergency.html`)
- 24/7 emergency hotline
- Nearest hospitals list
- First-aid instructions
- Emergency symptoms guide

### 8. **Contact** (`contact.html`)
- Contact form
- Contact information
- Office hours
- Map placeholder (ready for Google Maps integration)

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome 6.4.0**: Icons
- **Google Fonts**: Inter & Poppins typography

## 📱 Responsive Breakpoints

- **Mobile**: < 500px
- **Tablet**: 500px - 768px
- **Desktop**: 768px - 1024px
- **Large Desktop**: 1024px - 1400px
- **Extra Large**: > 1400px

## 🎯 Key Features Explained

### Form Validation
All forms include client-side validation:
- Required field checking
- Email format validation
- Phone number validation
- Date validation (no past dates for appointments)
- Real-time error messages

### Mobile Navigation
- Hamburger menu for mobile devices
- Smooth slide-in animation
- Auto-close on link click

### Testimonials Slider
- Auto-play every 5 seconds
- Manual navigation buttons
- Smooth transitions

### Search & Filter
- Real-time doctor search
- Filter by medical specialty
- Instant results display

## 🔧 Customization

### Adding Your Images
1. Place images in `assets/images/` folder
2. Update image paths in HTML files
3. Recommended sizes:
   - Doctor images: 300x250px
   - Blog images: 400x200px
   - Service icons: Use Font Awesome or custom SVG

### Changing Colors
Edit CSS variables in `assets/css/styles.css`:
```css
:root {
    --primary-blue: #1e88e5;
    --primary-blue-dark: #1565c0;
    /* ... more variables */
}
```

### Adding Google Maps
In `contact.html`, replace the map placeholder with:
```html
<iframe 
    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE" 
    width="100%" 
    height="400" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notes

- This is a **front-end only** project (no backend)
- Forms show success messages but don't actually submit data
- Patient portal uses dummy data for demonstration
- Images use placeholder services (replace with your own)
- Google Maps integration requires an API key for production use

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Your Name - [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- All contributors and supporters

## 📞 Support

For support, email info@healthcare.com or open an issue in the repository.

---

⭐ If you like this project, please give it a star on GitHub!



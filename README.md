# Data Scientist Portfolio Website

A modern, responsive portfolio website designed specifically for data scientists and machine learning engineers. Built with HTML, CSS, and JavaScript, featuring smooth animations, interactive elements, and a professional design.

## 🚀 Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Elements**: Hover effects, smooth scrolling, and animated counters
- **Mobile-Friendly**: Mobile navigation with hamburger menu
- **Contact Form**: Functional contact form with validation
- **Loading Animation**: Beautiful loading screen with spinner
- **Progress Indicator**: Scroll progress bar at the top
- **Keyboard Navigation**: Support for keyboard shortcuts
- **Touch Gestures**: Mobile touch gesture support

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## 🛠️ Setup Instructions

1. **Download/Clone** the project files to your local machine
2. **Open** `index.html` in your web browser
3. **Customize** the content as described below
4. **Deploy** to your preferred hosting service

## 🎨 Customization Guide

### 1. Personal Information

Edit the following sections in `index.html`:

#### Hero Section
```html
<!-- Line 47-48 -->
<span class="highlight">Your Name</span>
<h2 class="hero-subtitle">Data Scientist and Machine Learning Engineer</h2>
```

#### About Section
```html
<!-- Lines 85-95 -->
<p>
    I am a passionate Data Scientist with expertise in machine learning, statistical analysis, 
    and data visualization. I specialize in developing predictive models, performing exploratory 
    data analysis, and creating data-driven solutions for complex business problems.
</p>
```

#### Contact Information
```html
<!-- Lines 280-290 -->
<span>your.email@example.com</span>
<span>+1 (555) 123-4567</span>
<span>Your City, Country</span>
```

#### Social Links
```html
<!-- Lines 295-300 -->
<a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
<a href="#" class="social-link"><i class="fab fa-github"></i></a>
<a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
<a href="#" class="social-link"><i class="fab fa-kaggle"></i></a>
```

### 2. Projects Section

Replace the placeholder projects with your own:

```html
<div class="project-card">
    <div class="project-image">
        <img src="your-project-image.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Description of your project and the technologies used.</p>
        <div class="project-tags">
            <span class="tag">Python</span>
            <span class="tag">Machine Learning</span>
            <span class="tag">Data Science</span>
        </div>
    </div>
</div>
```

### 3. Skills Section

Update your skills and proficiency levels:

```html
<div class="skill-item">
    <div class="skill-info">
        <span>Your Skill</span>
        <span>85%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%"></div>
    </div>
</div>
```

### 4. Statistics

Update the statistics in the About section:

```html
<div class="stat">
    <h3>5+</h3>
    <p>Years Experience</p>
</div>
<div class="stat">
    <h3>50+</h3>
    <p>Projects Completed</p>
</div>
<div class="stat">
    <h3>20+</h3>
    <p>Happy Clients</p>
</div>
```

### 5. Profile Picture

Replace the placeholder icon with your actual profile picture:

```html
<!-- Replace the profile-placeholder div -->
<div class="hero-image">
    <img src="your-profile-picture.jpg" alt="Your Name" class="profile-image">
</div>
```

Add this CSS for the profile image:

```css
.profile-image {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid rgba(255, 255, 255, 0.3);
}
```

## 🎯 Recommended Data Science Projects to Include

1. **Machine Learning Models**
   - Classification/Regression projects
   - Time series forecasting
   - Recommendation systems

2. **Deep Learning**
   - Computer vision projects
   - Natural Language Processing
   - Generative AI models

3. **Data Analysis**
   - Exploratory Data Analysis (EDA)
   - Statistical analysis
   - Data visualization dashboards

4. **Big Data & Cloud**
   - Spark/PySpark projects
   - AWS/GCP/Azure implementations
   - Real-time data processing

5. **Business Intelligence**
   - Dashboard creation
   - Business analytics
   - A/B testing analysis

## 🌐 Deployment Options

### GitHub Pages (Free)
1. Create a GitHub repository
2. Upload your files
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://username.github.io/repository-name`

### Netlify (Free)
1. Sign up at netlify.com
2. Drag and drop your project folder
3. Your site will be deployed instantly

### Vercel (Free)
1. Sign up at vercel.com
2. Connect your GitHub repository
3. Automatic deployment on every push

## 🔧 Advanced Customization

### Color Scheme
Update the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #3498db;
    --secondary-color: #f39c12;
    --accent-color: #2c3e50;
    --text-color: #333;
    --light-bg: #f8f9fa;
}
```

### Fonts
Change the Google Fonts import in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Animations
Modify animation speeds in `script.js`:

```javascript
// Change animation delay for project cards
card.style.animationDelay = `${index * 0.2}s`; // Slower animation
```

## 📱 Mobile Optimization

The website is already mobile-optimized, but you can further customize:

- Test on different devices
- Adjust font sizes for better readability
- Optimize images for mobile loading

## 🔍 SEO Optimization

Add these meta tags to `index.html`:

```html
<meta name="description" content="Data Scientist Portfolio - Machine Learning, Deep Learning, and Data Science Projects">
<meta name="keywords" content="data scientist, machine learning, deep learning, python, data science">
<meta name="author" content="Your Name">
<meta property="og:title" content="Your Name - Data Scientist">
<meta property="og:description" content="Data Scientist Portfolio">
<meta property="og:image" content="your-profile-picture.jpg">
```

## 🚀 Performance Tips

1. **Optimize Images**: Use WebP format and compress images
2. **Minimize CSS/JS**: Use minified versions for production
3. **Lazy Loading**: Implement lazy loading for images
4. **CDN**: Use CDN for external libraries

## 📞 Support

If you need help customizing your portfolio:

1. Check the HTML comments for guidance
2. Modify CSS classes to match your preferences
3. Test thoroughly on different devices
4. Validate your HTML/CSS

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🎉**

Your portfolio is now ready to showcase your data science skills and projects to the world! 
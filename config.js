// Portfolio Configuration
// Update these values to customize your portfolio

const PORTFOLIO_CONFIG = {
    // Personal Information
    personal: {
        name: "Kishor Kumar Jha",
        title: "Data Scientist and Machine Learning Engineer",
        description: "Using Quantitative, Statistical and Modelling techniques to unleash power from Data!!",
        about: [
            "I am a passionate Data Scientist with deep expertise in machine learning, statistical analysis, data visualization, and modern AI technologies. I specialize in developing predictive models, performing exploratory data analysis, and crafting data-driven solutions for complex business challenges.",
            "In addition to a strong foundation in Python, R, and popular ML frameworks, I have hands-on experience in Generative AI, Large Language Models (LLMs), Transformer architectures, Retrieval-Augmented Generation (RAG), and Agentic AI systems. I have also worked with the MCP framework to build modular and scalable AI applications.",
            "My project portfolio spans diverse domains, including customer segmentation, predictive maintenance, and intelligent agents, and I actively stay updated with cutting-edge trends in AI and data science."
        ],
        stats: [
            { number: "9+", label: "Years Experience" },
            { number: "75+", label: "Projects Completed" },
            { number: "7+", label: "Happy Clients" }
        ]
    },

    // Contact Information
    contact: {
        email: "kishorgeek94@gmail.com",
        phone: "+91 9674412942",
        location: "Kolkata, India",
        social: [
            { platform: "linkedin", url: "https://www.linkedin.com/in/kishor-kumar-jha-4a139382/" },
            { platform: "github", url: "https://github.com/kishor1210" },
            { platform: "twitter", url: "https://x.com/kishorjha94" },
            { platform: "kaggle", url: "https://kaggle.com/kishor1210" }
        ]
    },

    // Services
    services: [
        {
            icon: "fas fa-brain",
            title: "Machine Learning",
            description: "Harnessing the predictive power by combining data and computational resources to build intelligent systems."
        },
        {
            icon: "fas fa-chart-line",
            title: "Data Science",
            description: "Use data in a scientific manner to solve real-world problems and generate actionable insights."
        },
        {
            icon: "fas fa-cloud",
            title: "Cloud Computing",
            description: "Use large-scale distributed systems to ingest, mine, process, and analyze big data efficiently."
        },
        {
            icon: "fas fa-network-wired",
            title: "Deep Learning",
            description: "Use deep neural networks to unlock intelligence from unstructured data like images and text."
        }
    ],

    // Skills
    skills: [
        { name: "Python", level: 90 },
        { name: "Machine Learning", level: 85 },
        { name: "Deep Learning", level: 75 },
        { name: "Data Visualization", level: 85 },
        { name: "SQL", level: 80 },
        { name: "Statistics", level: 80 },
        { name: "Text Analytics", level: 75 },
        { name: "Data Structures & Algorithms", level: 80 },
        { name: "DevOps", level: 70 },
        { name: "Cloud Computing", level: 70 }
    ],

    // Projects (Add your own projects here)
    projects: [
        {
            title: "COVID-19 Detection using Chest X-Ray",
            description: "Leveraging chest x-ray scans and using Deep CNN neural nets to perform automated diagnosis.",
            image: "https://via.placeholder.com/400x250/4A90E2/ffffff?text=COVID-19+Detection",
            tags: ["Deep Learning", "CNN", "Medical AI"]
        },
        {
            title: "Diabetic Retinopathy Medical Diagnosis",
            description: "Medical diagnosis of retina scans using Computer Vision and deep learning techniques.",
            image: "https://via.placeholder.com/400x250/50C878/ffffff?text=Diabetic+Retinopathy",
            tags: ["Computer Vision", "Medical AI", "Image Processing"]
        },
        {
            title: "Car Damage Detection",
            description: "Mask R-CNN implementation for automated car damage detection and assessment.",
            image: "https://via.placeholder.com/400x250/FF6B6B/ffffff?text=Car+Damage+Detection",
            tags: ["Object Detection", "Mask R-CNN", "Computer Vision"]
        },
        {
            title: "Sentiment Analysis",
            description: "Using sequence networks along with NLP to perform sentiment analysis on text data.",
            image: "https://via.placeholder.com/400x250/9B59B6/ffffff?text=Sentiment+Analysis",
            tags: ["NLP", "RNN", "Text Analysis"]
        },
        {
            title: "Recommendation Engine",
            description: "Created a tool to give you out-of-the-box solution for recommendation techniques.",
            image: "https://via.placeholder.com/400x250/F39C12/ffffff?text=Recommendation+Engine",
            tags: ["Machine Learning", "Collaborative Filtering", "Recommendation Systems"]
        },
        {
            title: "Generate Artificial Faces",
            description: "Used Generative Adversarial Networks to generate unseen realistic human faces.",
            image: "https://via.placeholder.com/400x250/1ABC9C/ffffff?text=GAN+Faces",
            tags: ["GAN", "Generative AI", "Deep Learning"]
        }
    ],

    // Theme Colors (Optional - for advanced customization)
    theme: {
        primary: "#3498db",
        secondary: "#f39c12",
        accent: "#2c3e50",
        text: "#333",
        lightBg: "#f8f9fa"
    }
};

// Function to update portfolio content
function updatePortfolio() {
    // Update personal information
    document.querySelector('.highlight').textContent = PORTFOLIO_CONFIG.personal.name;
    document.querySelector('.hero-subtitle').textContent = PORTFOLIO_CONFIG.personal.title;
    document.querySelector('.hero-description').textContent = PORTFOLIO_CONFIG.personal.description;

    // Update about section
    const aboutParagraphs = document.querySelectorAll('.about-text p');
    PORTFOLIO_CONFIG.personal.about.forEach((text, index) => {
        if (aboutParagraphs[index]) {
            aboutParagraphs[index].textContent = text;
        }
    });

    // Update stats
    const stats = document.querySelectorAll('.stat');
    PORTFOLIO_CONFIG.personal.stats.forEach((stat, index) => {
        if (stats[index]) {
            stats[index].querySelector('h3').textContent = stat.number;
            stats[index].querySelector('p').textContent = stat.label;
        }
    });

    // Update contact information
    const contactItems = document.querySelectorAll('.contact-item span');
    contactItems[0].textContent = PORTFOLIO_CONFIG.contact.email;
    contactItems[1].textContent = PORTFOLIO_CONFIG.contact.phone;
    contactItems[2].textContent = PORTFOLIO_CONFIG.contact.location;

    // Update social links
    const socialLinks = document.querySelectorAll('.social-link');
    PORTFOLIO_CONFIG.contact.social.forEach((social, index) => {
        if (socialLinks[index]) {
            socialLinks[index].href = social.url;
        }
    });
}

// Call the update function when the page loads
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', updatePortfolio);
} 
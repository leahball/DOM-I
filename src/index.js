const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

// notes from class: 
// const linksRealArray = Array.from(nav);
// const homeLink = linksRealArray.find(nav => nav.textContent === '')


// Content Keys

const navInput = siteContent['nav'];
const ctaInput = siteContent['cta'];
const mainContentInput = siteContent['main-content'];
const contactInput = siteContent['contact'];
const footerInput = siteContent['footer'];
const imageInput = siteContent['images'];


// Nav Bar
const header = document.querySelector('header');
  document.querySelector('nav a:nth-of-type(1)').textContent = navInput['nav-item-1'];
  document.querySelector('nav a:nth-of-type(2)').textContent = navInput['nav-item-2'];
  document.querySelector('nav a:nth-of-type(3)').textContent = navInput['nav-item-3'];
  document.querySelector('nav a:nth-of-type(4)').textContent = navInput['nav-item-4'];
  document.querySelector('nav a:nth-of-type(5)').textContent = navInput['nav-item-5'];
  document.querySelector('nav a:nth-of-type(6)').textContent = navInput['nav-item-6'];

let logo = document.getElementById("logo-img");
logo.setAttribute('src', imageInput['logo-img']);






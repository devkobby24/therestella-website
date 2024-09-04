# Therestella Foundation Website

## Overview

The **Therestella Foundation** website is a comprehensive online platform designed to showcase the mission, vision, and activities of the Therestella Foundation, a non-profit organization dedicated to help the community by catering for the needy. The website provides information about the foundation's projects, events, team, and how people can get involved or donate.

## Features

- **Home Page**: A welcoming introduction to the foundation, featuring key information and calls to action.
- **About Us**: Detailed information about the foundation’s history, mission, and vision.
- **Projects**: Showcase of ongoing and completed projects with detailed descriptions.
- **Events**: Upcoming events and activities that visitors can participate in.
- **Donate**: Secure donation page to support the foundation’s work.
- **Contact Us**: Contact form and information for inquiries and support.
- **Responsive Design**: Optimized for viewing on various devices including desktops, tablets, and mobile phones.

## Technologies Used

- **HTML**: For structuring the content of the website.
- **CSS**: For styling the website and ensuring a visually appealing design.
- **JavaScript**: For adding interactivity and dynamic elements to the site.
- **SCSS**: For more efficient and maintainable CSS, using variables, mixins, and nested styles.
- **PHP**: For handling form submissions and integrating server-side logic.

## Getting Started

### Prerequisites

- A local server environment (e.g., XAMPP, WAMP, or MAMP) to run PHP files.
- A modern web browser to view and test the website.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/devkobby24/therestella-foundation-website.git
   cd therestella-foundation-website
   ```

2. Set up a local server:

   - If you're using XAMPP, move the project folder to the `htdocs` directory.
   - For MAMP, place the folder in the `htdocs` directory as well.
   - Start the local server and navigate to `http://localhost/therestella-foundation-website` in your web browser.

3. Open the project in your code editor to make any desired changes.

### File Structure

```plaintext
therestella-foundation-website/
│
├── index.html             # Home page
├── about.html             # About Us page
├── projects.html          # Projects page
├── events.html            # Events page
├── donate.html            # Donate page
├── contact.html           # Contact Us page
│
├── assets/
│   ├── css/
│   │   ├── styles.css     # Compiled CSS from SCSS
│   ├── scss/
│   │   ├── styles.scss    # Main SCSS file
│   ├── js/
│   │   ├── main.js        # JavaScript file for interactivity
│   ├── images/            # Images used on the website
│
└── php/
    ├── contact-form.php   # PHP script to handle contact form submissions
```

### Usage

1. **Viewing the Website**: Open `index.html` in your web browser to view the home page. Navigate through the site using the menu.
2. **Form Submissions**: The contact form uses PHP to handle submissions. Ensure your local server is running to test form functionality.

## Customization

- **SCSS Variables**: Modify color schemes, fonts, and other styles in the SCSS files to match the foundation's branding.
- **JavaScript**: Update or add new interactive elements by modifying the `main.js` file.
- **PHP**: Customize the form handling logic in `contact-form.php` if needed.

## Contributing

Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Therestella Foundation** for their trust and collaboration in developing this website.
- **Web Development Community** for providing resources and inspiration.

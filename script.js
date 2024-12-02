document.addEventListener("DOMContentLoaded", () => {
  // This block adds dynamic skills to the page
  const skills = [
    "HTML 5",
    "CSS 3",
    "Web Designing",
    "Node.js & Postman",
    "Express.js",
    "JavaScript (ES6)",
    "TypeScript",
    "React.js",
    "MongoDB",
    "Wireframing",
    "Prototyping Design",
    "Collaboration",
    "Component Creation",
    "Design System Management",
    "Client Relationship Management",
  ];

  // Get the 'skills-list' element where the skills will be appended
  const skillsList = document.getElementById("skills-list");

  // Loop through each skill and add it to the list as a new <li> element
  skills.forEach((skill) => {
    const li = document.createElement("li"); // Create a new <li> element
    li.textContent = skill; // Set the text content to the skill name
    skillsList.appendChild(li); // Append the <li> to the skills list
  });

  // This block adds dynamic projects to the page
  const projects = [
    {
      title: "Norra E-commerce", // Title of the first project
      description:
        "An e-commerce platform for simplified shopping. Integrated with Razorpay API for secure and seamless payment processing.",
      technologies: ["HTML", "CSS", "JavaScript", "Razorpay API"],
      features: [
        "Product Listing",
        "Secure Online Payments",
        "Responsive Design",
      ],
      link: "https://zesty-stardust-153ab6.netlify.app/", // Link to the project
    },
    {
      title: "Contact Us Form", // Title of the second project
      description:
        "A simple and responsive contact form for user inquiries and feedback.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Form Validation",
        "Responsive Layout",
        "Alerts on Form Submission",
      ],
      link: "https://serene-pika-9a875e.netlify.app/", // Link to the project
    },
  ];

  // Get the 'projects-container' element where the projects will be displayed
  const projectsContainer = document.getElementById("projects-container");

  // Loop through each project and create HTML content dynamically
  projects.forEach((project) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project"); // Add 'project' class for styling

    // Set the innerHTML of the projectDiv to display the project details
    projectDiv.innerHTML = `
          <h3>${project.title}</h3> <!-- Project title -->
          <p>${project.description}</p> <!-- Project description -->
          <ul>
            <li><strong>Technologies Used:</strong> ${project.technologies.join(
              ", "
            )}</li> <!-- List of technologies used -->
            <li><strong>Features:</strong> 
              ${project.features.join(", ")} <!-- List of project features -->
            </li>
          </ul>
          <a href="${
            project.link
          }" class="project-link">View Project</a> <!-- Link to view the project -->
        `;

    // Append the newly created projectDiv to the projectsContainer
    projectsContainer.appendChild(projectDiv);
  });

  // Form validation and handling submission
  const contactForm = document.getElementById("contact-form");

  // Listen for the form submission event
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form from submitting normally

    // Get the values of the form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Check if any of the required fields are empty
    if (!name || !email || !message) {
      alert("Please fill out all fields."); // Alert if any field is empty
    } else {
      alert("Your message has been sent successfully!"); // Alert if form is valid
      contactForm.reset(); // Reset form fields after successful submission
    }
  });

  // Navigation menu toggle for smaller screen sizes
  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navLinks = document.querySelector(".nav-links");

  // Listen for the click event on the hamburger menu to toggle visibility
  hamburgerMenu.addEventListener("click", () => {
    // Toggle the display of the navigation links
    navLinks.style.display =
      navLinks.style.display === "flex" ? "none" : "flex"; // Show or hide the nav links
  });
});


// Get the club containers and the popup
const clubs = document.querySelectorAll(".box");
const popup = document.getElementById("popup");
const closeButton = document.getElementById("closeButton");
const popupTitle = document.getElementById("popupTitle");
const popupDescription = document.getElementById("popupDescription");
const registerButton = document.getElementById("registerButton");

// Club details
const clubDetails = {
  box1: {
    name: "C-Qube",
    description: "A Coding Club is a student-led group that fosters a passion for programming and technology. It provides a platform for students to learn coding skills, collaborate on projects, and share knowledge. The club's activities might include workshops, coding competitions, and guest lectures from industry professionals. It's a place where students can grow their technical abilities while working in a team environment!",
  },
  box2: {
    name: "Debugsss!",
    description: "A Debug Club, sometimes known as a Testing Club, is focused on the critical skills of debugging and software testing. Members engage in activities that improve their ability to identify and fix bugs in code. This club provides a collaborative environment where students can share debugging strategies, learn from each other, and enhance their problem-solving skills in a supportive community!",
  },
  box3: {
    name: "Hack-a-thon",
    description: "Ready to innovate and create? Join our Hackathon Club for an adrenaline-fueled journey of coding, creativity, and collaboration! Whether you're passionate about building apps, solving real-world problems, or competing in hackathons, our club provides the platform to unleash your innovative spirit and make an impact in the tech world!!",
  },
//   box4: {
//     name: "Swimming Club",
//     description: "Dive into the world of swimming with our club. We provide top-notch training and facilities.",
//   }
};

// Function to open the popup
function openPopup(clubId) {
  const box = clubDetails[clubId];
  popupTitle.textContent = box.name;
  popupDescription.textContent = box.description;
  popup.style.opacity = "1";
  popup.style.visibility = "visible";
}

// Function to close the popup
function closePopup() {
  popup.style.opacity = "0";
  popup.style.visibility = "hidden";
}

// Function to open registration form popup
function openRegistrationForm() {
  closePopup();
  // Open registration form popup code goes here
  const registrationFormPopup = document.getElementById("registrationFormPopup");
  registrationFormPopup.style.opacity = "1";
  registrationFormPopup.style.visibility = "visible";
}

// Event listeners for opening and closing the popup
clubs.forEach(box => {
  box.addEventListener("click", function() {
    openPopup(box.id);
  });
});
closeButton.addEventListener("click", closePopup);
registerButton.addEventListener("click", openRegistrationForm);

// Prevent propagation of click events from the popup to its parent elements
popup.addEventListener("click", function(event) {
  event.stopPropagation();
});

// Get the registration form popup and close button
const registrationFormPopup = document.getElementById("registrationFormPopup");
const registrationFormCloseButton = document.getElementById("registrationFormCloseButton");

// Function to close the registration form popup
function closeRegistrationFormPopup() {
  registrationFormPopup.style.opacity = "0";
  registrationFormPopup.style.visibility = "hidden";
}

// Event listener for the close button in the registration form popup
registrationFormCloseButton.addEventListener("click", closeRegistrationFormPopup);

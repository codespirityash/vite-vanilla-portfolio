//  Carousel
let currentProject = 0;
const projectCards = document.querySelectorAll(".project-card");

function showProject(index) {
  projectCards.forEach((card, i) => {
    card.classList.toggle("active", i === index);
  });
}

function nextProject() {
  currentProject = (currentProject + 1) % projectCards.length;
  showProject(currentProject);
}

function prevProject() {
  currentProject =
    (currentProject - 1 + projectCards.length) % projectCards.length;
  showProject(currentProject);
}

//Skills Dropdown
function toggleDropdown(button) {
  const dropdown = button.nextElementSibling;
  dropdown.classList.toggle("active");
  const icon = button.querySelector("i");
  icon.classList.toggle("fa-chevron-down");
  icon.classList.toggle("fa-chevron-up");
}

document.querySelector(".left-arrow").addEventListener("click", prevProject);
document.querySelector(".right-arrow").addEventListener("click", nextProject);

document.querySelectorAll(".skill-title").forEach((button) => {
  button.addEventListener("click", () => toggleDropdown(button));
});

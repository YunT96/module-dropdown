import "./styles.css";

// dropdown.js
export default function initDropdown() {
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    const select = dropdown.querySelector(".select");
    const caret = dropdown.querySelector(".caret");
    const menu = dropdown.querySelector(".menu");
    const options = dropdown.querySelectorAll(".menu li");
    const selected = dropdown.querySelector(".selected");

    select.addEventListener("click", () => {
      select.classList.toggle("select-clicked");
      caret.classList.toggle("caret-rotate");
      menu.classList.toggle("menu-open");
    });

    options.forEach((option) => {
      option.addEventListener("click", () => {
        const optionText = option.innerText;
        if (!option.classList.contains("active")) {
          selected.innerText = optionText;
          select.classList.remove("select-clicked");
          caret.classList.remove("caret-rotate");
          menu.classList.remove("menu-open");
          options.forEach((otherOption) => {
            otherOption.classList.remove("active");
          });
          option.classList.add("active");
        }
      });
    });
  });

  // Close dropdown on outside click
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown")) {
      dropdowns.forEach((dropdown) => {
        const select = dropdown.querySelector(".select");
        const caret = dropdown.querySelector(".caret");
        const menu = dropdown.querySelector(".menu");
        select.classList.remove("select-clicked");
        caret.classList.remove("caret-rotate");
        menu.classList.remove("menu-open");
      });
    }
  });
}

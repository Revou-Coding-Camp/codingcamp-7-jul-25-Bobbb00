console.log("Hello World");

// Nav Section

document.addEventListener("DOMContentLoaded", () => {
  const themeItems = document.querySelectorAll(".them-item");
  const htmlElement = document.documentElement;

  //   Save Tema

  const saveTheme = (theme) => {
    localStorage.setItem("theme", theme);
  };

  //   Load Tema
  const loadTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      htmlElement.setAttribute("data-theme", savedTheme);
    } else {
      htmlElement.setAttribute("data-theme", "luxury");
    }
  };

  loadTheme();

  //   add event listener
  themeItems.forEach((item) => {
    item.addEventListener("click", () => {
      const theme = item.getAttribute("theme");
      htmlElement.setAttribute("data-theme", theme);
      saveTheme(theme);
    });
  });
});

// Main Section

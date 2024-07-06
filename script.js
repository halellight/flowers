document.addEventListener("DOMContentLoaded", function () {
  alert("Happy Birthday, [Her Name]!");

  // Add an event listener to the header for a click animation
  document.querySelector("header").addEventListener("click", function () {
    this.classList.toggle("animate-header");
  });

  // Add hover effect for images
  const images = document.querySelectorAll(".gallery-container img");
  images.forEach((img) => {
    img.addEventListener("mouseover", () => {
      img.classList.add("hovered");
    });
    img.addEventListener("mouseout", () => {
      img.classList.remove("hovered");
    });
  });
});

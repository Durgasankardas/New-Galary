document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
  
    cards.forEach(card => {
      const saveBtn = document.createElement("button");
      saveBtn.innerText = "Save";
      saveBtn.classList.add("save-btn");
  
      // Add button to card
      card.appendChild(saveBtn);
  
      // Save functionality (for now just alert)
      saveBtn.addEventListener("click", () => {
        alert("Image saved (not really, just a demo 😄)");
      });
    });
  });

document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".gallery");
    const cards = Array.from(gallery.children);
  
    // Shuffle cards
    const shuffled = cards.sort(() => Math.random() - 0.5);
  
    // Clear gallery
    gallery.innerHTML = "";
  
    // Append shuffled cards
    shuffled.forEach(card => gallery.appendChild(card));
  });
  document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery");
  const cards = Array.from(gallery.children);

  // Shuffle
  const shuffled = cards.sort(() => Math.random() - 0.5);
  gallery.innerHTML = "";
  shuffled.forEach(card => gallery.appendChild(card));

  // Search functionality
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    cards.forEach(card => {
      const altText = card.querySelector("img").alt.toLowerCase();
      card.style.display = altText.includes(searchTerm) ? "block" : "none";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".gallery");
    const cards = Array.from(gallery.children);
  
    // 1. Shuffle cards
    const shuffled = cards.sort(() => Math.random() - 0.5);
    gallery.innerHTML = "";
    shuffled.forEach(card => gallery.appendChild(card));
  
    // 2. Search functionality
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();
      cards.forEach(card => {
        const altText = card.querySelector("img").alt.toLowerCase();
        card.style.display = altText.includes(searchTerm) ? "block" : "none";
      });
    });
  });
  
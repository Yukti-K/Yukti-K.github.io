// Add photos here after uploading the actual image files to your GitHub repository.
// Examples:
// { src: "images/hiking/mountain-trail.jpg", caption: "A favorite weekend trail", alt: "View from a mountain trail" },
// { src: "images/crochet/blue-scarf.jpg", caption: "My blue scarf", alt: "Handmade blue crochet scarf" },
const galleries = {
  hiking: [
    // Add your hiking photos here.
  ],
  crochet: [
    // Add your crochet photos here.
  ]
};

for (const [category, photos] of Object.entries(galleries)) {
  const root = document.getElementById(category + "-gallery");
  if (!root || !photos.length) continue;
  root.replaceChildren();
  for (const photo of photos) {
    if (!photo.src || !photo.src.startsWith("images/")) continue;
    const figure = document.createElement("figure");
    figure.className = "photo-item";
    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.alt || photo.caption || category + " photo";
    img.loading = "lazy";
    const caption = document.createElement("figcaption");
    caption.textContent = photo.caption || "";
    figure.append(img, caption);
    root.append(figure);
  }
}

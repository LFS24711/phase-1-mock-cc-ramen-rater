// write your code here
document.addEventListener("DOMContentLoaded", () => {
  const ramenMenu = document.querySelector("#ramen-menu");
  getAllRamen();

  function getAllRamen() {
    fetch("http://localhost:3000/ramens")
      .then((res) => res.json())
      .then((data) =>
        data.forEach((ramenObj) => {
          addToMenu(ramenObj);

          console.log(ramenObj);
        })
      );
  }

  function addToMenu(ramenObj) {
    const { name, restaurant, image, rating, comment } = ramenObj;
    img = document.createElement("img");
    img.src = image;
    img.title = name;
    img.addEventListener("click", () => {
      document.querySelector(".detail-image").src = image;
      document.querySelector(".name").textContent = name;
      document.querySelector(".restaurant").textContent = restaurant;
      document.querySelector("#rating-display").textContent = rating;
      document.querySelector("#comment-display").textContent = comment;
    });
    ramenMenu.append(img);
  }

  document.querySelector("#new-ramen").addEventListener("submit", (event) => {
    event.preventDefault()

    const nameInput = event.target.name.value;
    const restaurantInput = event.target.restaurant.value;
    const imageInput = event.target.image.value;
    const ratingInput = event.target.rating.value;
    const commentInput = event.target['new-comment'].value;

    const newRamen = {
      name: nameInput,
      restaurant: restaurantInput,
      image: imageInput,
      rating: ratingInput,
      comment: commentInput,
    }
    
    addToMenu(newRamen);
  });
});

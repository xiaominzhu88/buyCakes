const imageArray = [
  {
    id: 1,
    url: "cupcake1.jpg"
  },
  {
    id: 2,
    url: "cupcake2.jpg"
  }
];
const inputPrice = document.querySelector(".inputPrice");
const buyQuantity = document.querySelector(".buyQuantity");
const total = document.querySelector(".result");
const step = document.querySelector(".value");
const submit = document.querySelector(".yes");
const unSubmit = document.querySelector(".no");
const changeSelect = document.querySelector(".change-text");
const exitButton = document.querySelector(".exit");
const cupcakeToday = document.querySelector(".cupcake");

//--------------------------CHOOSE AND SHOW PRICE----------------------

inputPrice.addEventListener("input", showPrice);
buyQuantity.addEventListener("input", showPrice);
buyQuantity.addEventListener("input", showStep);

function showPrice(e) {
  const price = inputPrice.value;
  const pieces = buyQuantity.value;
  const endPrice = price * pieces;

  total.innerText = "€" + endPrice.toFixed(2);
}

function showStep() {
  const stepValue = buyQuantity.value;
  step.innerText = stepValue;
}

//----------------------------BUTTON EVENT------------------------------

submit.addEventListener("click", function() {
  alert("Enjoy your Cupcakes!");
});
unSubmit.addEventListener("click", changeQuantity);

function changeQuantity() {
  const changeText = document.createElement("p");
  const imageContainer = document.createElement("ul");
  const imageItem = document.createElement("li");

  imageArray.forEach(currentImg => {
    const image = document.createElement("img");

    image.id = currentImg.id;
    image.src = currentImg.url;
    image.alt = "cupcake";
    image.style.display = "inline";
    image.style.margin = "15px";

    image.onmouseover = e => {
      if (image.id === "1") {
        inputPrice.value = "4.50";
        showPrice(e);
      } else {
        inputPrice.value = "6.50";
        showPrice(e);
      }
    };

    changeText.textContent =
      "You can also change quantity or choose other cakes";
    changeText.style.display = "block";
    changeText.style.color = "Blue";

    imageItem.appendChild(image);
    imageContainer.appendChild(imageItem);
    changeText.appendChild(imageItem);
    changeSelect.appendChild(changeText);
  });
}

exitButton.addEventListener("click", removeImage);
function removeImage() {
  changeSelect.innerHTML = "";
}

//--------------------------IMAGE EVENT-----------------------------------

cupcakeToday.addEventListener("mouseenter", priceToday);

function priceToday(e) {
  inputPrice.value = "5.99";
  showPrice(e);
}

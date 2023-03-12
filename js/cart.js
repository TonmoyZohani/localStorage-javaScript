const addProduct = () => {
  const nameField = document.getElementById("product-name");
  const quantityField = document.getElementById("product-quantity");

  const name = nameField.value;
  const quantity = quantityField.value;
  nameField.value = "";
  quantityField.value = "";
  displayProduct(name, quantity);
  saveProductToLocalStorage(name, quantity);
};

const displayProduct = (name, quantity) => {
  const ul = document.getElementById("product-container");
  const li = document.createElement("li");

  li.innerHTML = `${name} : ${quantity}`;
  ul.appendChild(li);
};

const getStoredShoppingCart = () => {
  let cart = {};

  // get the item from localstorage
  const storedCart = localStorage.getItem("cart");

  console.log(storedCart);

  if (storedCart) {
    cart = JSON.parse(storedCart);
    console.log(cart);
  }
  return cart;
};

const saveProductToLocalStorage = (product, quantity) => {
  const cart = getStoredShoppingCart();
  console.log(cart);
  cart[product] = quantity;
  console.log(cart);
  const cartStringfied = JSON.stringify(cart);

  // Setting item in localstorage
  localStorage.setItem("cart", cartStringfied);
};

const displayProductsFromLocalStorage = () => {
  const savedCart = getStoredShoppingCart();

  for (product in savedCart) {
    displayProduct(product, savedCart[product]);
  }
};

// The syntax for removing the localStorage item is as follows:
const clearStorage = () => {
  localStorage.removeItem("cart");
};

// The syntax for removing all the localStorage items is as follows:
// localStorage.clear();

displayProductsFromLocalStorage();

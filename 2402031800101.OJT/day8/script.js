// =========================
// SECTION TOGGLE
// =========================

const navLinks = document.querySelectorAll(".nav-links a");

const sections = document.querySelectorAll(".section");

navLinks.forEach(link => {

  link.addEventListener("click", (e) => {

    e.preventDefault();

    const target = link.getAttribute("data-target");

    // Hide all sections
    sections.forEach(section => {
      section.classList.remove("active");
    });

    // Show selected section
    document
      .querySelector(`.${target}`)
      .classList.add("active");

  });

});


// =========================
// CART
// =========================

const cartButtons =
document.querySelectorAll(".add-cart");

const cartCount =
document.getElementById("cart-count");

let count = 0;

cartButtons.forEach(button => {

  button.addEventListener("click", () => {

    count++;

    cartCount.textContent = count;

    button.innerHTML = "Added ✓";

    setTimeout(() => {

      button.innerHTML = "Add to Cart";

    }, 1000);

  });

});


// =========================
// NEWSLETTER
// =========================

const subscribeBtn =
document.querySelector(".newscollection button");

subscribeBtn.addEventListener("click", () => {

  const email =
  document.querySelector(".newscollection input");

  if(email.value === ""){

    alert("Please enter your email");

  } else {

    alert("Thank you for subscribing ✨");

    email.value = "";

  }

});
"use strict";
let container = document.querySelector("#container");
let mainImage = document.querySelector("#mainImage");
let subImageContainer = document.querySelector("#subImageContainer");
let productTitle = document.querySelector("#productTitle");
let sku = document.querySelector("#sku");
let price = document.querySelector("#price");
let desc = document.querySelector("#description");
let loading = document.querySelector("#loading");
const fetchProductDetail = async () => {
  const urlParams = new URLSearchParams(window.location.search); // search url parameter
  const productId = urlParams.get("id");
  if (!productId) return;

  try {
    loading.style.display = "block";
    const res = await fetch(`https://dummyjson.com/products/${productId}`);
    const data = await res.json();
    mainImage.src = data.images[0] ||"https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg";
    productTitle.innerHTML = data.title || "untitle Product";
    sku.textContent = data.sku || "unknown";
    price.textContent = data.price ||"unknown";
    desc.textContent = data.description || "";
  } catch (error) {
    console.log(error);
  }finally {
     loading.style.display = "none";
  }
};

fetchProductDetail();

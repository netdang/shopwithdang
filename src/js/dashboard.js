"use strict";
const API_URL = "https://api.escuelajs.co/api/v1/";

let tableBody = document.querySelector("#tableBody");
let loading = document.querySelector("#loading");
let categoriesOption = document.querySelector("#categories");
let createProductForm = document.querySelector("#create-product");
let successAlert = document.querySelector("#alert-3");
let createProductButton = document.querySelector("#create-product-button");

let selectedId;
const setProductId = (id) => {
  selectedId = id;
};
let data;

async function fetchProductsDisplay() {
  try {
    loading.style.display = "block";
    const response = await fetch(`${API_URL}products/`);
    data = await response.json();
    displayProducts();
  } catch (error) {
    console.log(error);
  } finally {
    loading.style.display = "none";
  }
}

// edit product
let editProductForm = document.querySelector("#edit-product");
let editModal = document.querySelector("#edit-modal");
let editSuccessAlert = document.querySelector("#alert-edit-success"); 

const openEditModal = (productId) => {
  const product = data.find((item) => item.id === productId);
  if (product) {
    document.querySelector("#edit-id").value = product.id;
    document.querySelector("#edit-title").value = product.title;
    document.querySelector("#edit-price").value = product.price;
    document.querySelector("#edit-description").value = product.description;
    document.querySelector("#edit-image").value = product.images[0];

    const categorySelect = document.querySelector("#edit-categories");
    if (categorySelect) {
      categorySelect.value = product.category.id;
    }

    const modal = new Modal(editModal);
    modal.show();
  }
};

const updateProduct = async (e) => {
  e.preventDefault();
  const id = document.querySelector("#edit-id").value;
  const title = document.querySelector("#edit-title")?.value.trim();
  const price = parseFloat(document.querySelector("#edit-price")?.value);
  const description = document.querySelector("#edit-description")?.value.trim();
    const image = document.querySelector("#edit-image")?.value;

  const productData = {
    title,
    price,
    description,
    images: [image],
  };

  try {
    const response = await fetch(`${API_URL}products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    const result = await response.json();
    if (result) {
    
      const alert = document.querySelector("#alert-3");
      alert.style.display = "flex";
      alert.textContent = "Product updated successfully!";
      setTimeout(() => {
        alert.style.display = "none";
      }, 3000);

    
      fetchProductsDisplay();
      const modal = Modal.getInstance(editModal);
      modal.hide();
    }
  } catch (error) {
    console.log(error);
  }
};

editProductForm.addEventListener("submit", updateProduct);

const displayProducts = () => {
  tableBody.innerHTML = data
    .map(
      (product) => `  
    <div
        
        >
          <a href="./detail.html?id=${product.id}">
       <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td class="p-4">
                  <img
                    src=${product.images[0]}
                    class="w-16 md:w-32 max-w-full max-h-full"
                    alt="Apple Watch"
                  />
                </td>

                <td
                  class="px-6 py-4 font-semibold text-gray-900 dark:text-white"
                >
                  ${product.title}
                </td>
                
                <td class="px-6 py-4">
                  <div class="flex items-center">
                    <button
                      class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                    >
                      <span class="sr-only">Quantity button</span>
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 1h16"
                        />
                      </svg>
                    </button>
                    <div>
                      <input
                        type="number"
                        id="first_product"
                        class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="1"
                        required
                      />
                    </div>
                    <button
                      class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                    >
                      <span class="sr-only">Quantity button</span>
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
                <td
                  class="px-6 py-4 font-semibold text-gray-900 dark:text-white"
                >
                  $${product.price}
                </td>
                <td class="px-6 py-4">
                 <button
                    onclick="openEditModal(${product.id})"
                    class="font-medium text-gray-800 dark:text-white"
                    ><span class="material-symbols-outlined">
                       edit
                    </span>
                   
                    </button>
                  <button
                    onclick="deleteProduct(${product.id})"
                    class="cursor-pointer font-medium text-red-600 dark:text-red-500 hover:underline"
                    ><span class="material-symbols-outlined">
                        delete
                    </span>
                  </button>
                </td>
              </tr>
              </div>
             `
    )
    .join("");
};

const deleteProduct = (id) => {
  setProductId(id); // get id  now
  data = data?.filter((data) => data.id !== id);
  displayProducts();
};

fetchProductsDisplay();

const fetchAllCategories = async () => {
  const response = await fetch(`${API_URL}categories/`);
  const categories = await response.json();
  categoriesOption.innerHTML = categories.map(
    (cat) => `
   <option value=${cat.id}>${cat.name}</option>
  `
  );
};

fetchAllCategories();

const createProduct = async (e) => {
  e.preventDefault();
  console.log("ho");
  const title = document.querySelector("#title")?.value.trim();
  const price = parseFloat(document.querySelector("#price")?.value);
  const description = document.querySelector("#description")?.value.trim();
  const category = parseInt(document.querySelector("#categories")?.value);
  const image = document.querySelector("#image")?.value;

  console.log("title", title);
  console.log("price", price);
  console.log("desc", description);
  console.log("image:", image);

  const productData = {
    title,
    price,
    description,
    categoryId: category,
    images: [image],
  };

  try {
    const response = await fetch(`${API_URL}products/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData), // convert js object to json object
    });

    const result = await response.json();
    if (result) {
      successAlert.style.display = "flex";
      setTimeout(() => {
        successAlert.style.display = "none";
      }, 3000);
      fetchProductsDisplay();
    }
  } catch (error) {
    console.log(error);
  }
};
createProductForm.addEventListener("submit", createProduct);

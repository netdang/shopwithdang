"use strict";
const API_URL = "https://api.escuelajs.co/api/v1/products/";

let cardContenair = document.querySelector("#cards");

let products = [
  {
    proName: "Miss Dior",
    price: 155,
    desc: "Miss Dior Eau de Parfum Roller-Pearl",
    image:
      "https://hrd-live.cdn.scayle.cloud/images//945f7c2f0c7b7de871038f4b0f64ceda.jpg?brightness=1&width=960&height=1280&quality=75&bg=ffffff",
  },
  {
    proName: "Miss Dior ",
    price: 155,
    desc: "Miss Dior Parfum Pure Perfume (80ml)",
    image:
      "https://hrd-live.cdn.scayle.cloud/images//e226fce88a2259e9da993d502e058144.jpg?brightness=1&width=960&height=1280&quality=75&bg=ffffff",
  },
  {
    proName: "Miss Diorl",
    price: 160,
    desc: "Miss Dior Blooming Bouquet Silky Body Mist",
    image:
      "https://hrd-live.cdn.scayle.cloud/images//250fb34aec77a55c6851de2cfa48ab13.jpg?brightness=1&width=960&height=1280&quality=75&bg=ffffff",
  },
  {
    proName: "Miss Dior",
    price: 155,
    desc: "Miss Dior Eau de Parfum Roller-Pearl",
    image:
      "https://hrd-live.cdn.scayle.cloud/images//945f7c2f0c7b7de871038f4b0f64ceda.jpg?brightness=1&width=960&height=1280&quality=75&bg=ffffff",
  },
  {
    proName: "Miss Dior ",
    price: 155,
    desc: "Miss Dior Parfum Pure Perfume (80ml)",
    image:
      "https://hrd-live.cdn.scayle.cloud/images//e226fce88a2259e9da993d502e058144.jpg?brightness=1&width=960&height=1280&quality=75&bg=ffffff",
  },
  {
    proName: "Miss Diorl",
    price: 160,
    desc: "Miss Dior Blooming Bouquet Silky Body Mist",
    image:
      "https://hrd-live.cdn.scayle.cloud/images//250fb34aec77a55c6851de2cfa48ab13.jpg?brightness=1&width=960&height=1280&quality=75&bg=ffffff",
  },
  {
    proName: "Miss Dior",
    price: 155,
    desc: "Miss Dior Eau de Parfum Roller-Pearl",
    image:
      "https://hrd-live.cdn.scayle.cloud/images//945f7c2f0c7b7de871038f4b0f64ceda.jpg?brightness=1&width=960&height=1280&quality=75&bg=ffffff",
  },
  {
    proName: "Miss Dior ",
    price: 155,
    desc: "Miss Dior Parfum Pure Perfume (80ml)",
    image:
      "https://hrd-live.cdn.scayle.cloud/images//e226fce88a2259e9da993d502e058144.jpg?brightness=1&width=960&height=1280&quality=75&bg=ffffff",
  },
];
// cardContenair.innerHTML = products
//   .map(
//     (product) => `
//     <div
//             class="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
//           >
//             <a href="#">
//               <img
//                 class="p-8 rounded-t-lg aspect-[3/4] object-fit-cover "
//                 src=${product.image}
//                 alt="product image"
//               />
//             </a>
//             <div class="px-5 pb-5">
//               <a href="#">
//                 <h5
//                   class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
//                 >
//                   ${product.proName}
//                 </h5>
//                 <p class=" text-[16px] line-clamp-1">
//                 ${product.desc}
//                 </p>
//               </a>
//               <div class="flex items-center mt-2.5 mb-5">
//                 <div class="flex items-center space-x-1 rtl:space-x-reverse">
//                   <svg
//                     class="w-4 h-4 text-yellow-300"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 22 20"
//                   >
//                     <path
//                       d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
//                     />
//                   </svg>
//                   <svg
//                     class="w-4 h-4 text-yellow-300"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 22 20"
//                   >
//                     <path
//                       d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
//                     />
//                   </svg>
//                   <svg
//                     class="w-4 h-4 text-yellow-300"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 22 20"
//                   >
//                     <path
//                       d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
//                     />
//                   </svg>
//                   <svg
//                     class="w-4 h-4 text-yellow-300"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 22 20"
//                   >
//                     <path
//                       d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
//                     />
//                   </svg>
//                   <svg
//                     class="w-4 h-4 text-gray-200 dark:text-gray-600"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 22 20"
//                   >
//                     <path
//                       d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
//                     />
//                   </svg>
//                 </div>
//                 <span
//                   class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3"
//                   >5.0</span
//                 >
//               </div>
//               <div class="flex items-center justify-between">
//                 <span class="lg:text-3xl md:text-xl text-lg font-bold text-gray-900 dark:text-white"
//                   >$${product.price}</span
//                 >
//                 <a
//                   href="#"
//                   class="text-white bg-puple-prim hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                   >Add to cart</a
//                 >
//               </div>
//             </div>
//           </div>
// `
//   )
//   .join("");

fetch("./src/data/product.json")
  .then((response) => response.json())
  .then((data) => {
    cardContenair.innerHTML = data.products
      .map(
        (product) => `
    <div
            class="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                class="p-8 rounded-t-lg aspect-[3/4] object-fit-cover "
                src=${product.image}
                alt="product image"
              />
            </a>
            <div class="px-5 pb-5">
              <a href="#">
                <h5
                  class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
                >
                  ${product.proName}
                </h5>
                <p class=" text-[16px] line-clamp-1">
                ${product.desc}
                </p>
              </a>
              <div class="flex items-center mt-2.5 mb-5">
                <div class="flex items-center space-x-1 rtl:space-x-reverse">
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                </div>
                <span
                  class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3"
                  >5.0</span
                >
              </div>
              <div class="flex items-center justify-between">
                <span class="lg:text-3xl md:text-xl text-lg font-bold text-gray-900 dark:text-white"
                  >$${product.price}</span
                >
                <a
                  href="#"
                  class="text-white bg-puple-prim hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >Add to cart</a
                >
              </div>
            </div>
          </div>
`
      )
      .join("");
  })
  .catch((error) => console.log(error));

let names = document.querySelector("#names");

function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      // names.innerHTML = data
      //   .map(
      //     (user) => `<p class="text-3xl">${user.name}, email: ${user.email}</p>`
      //   )
      //   .join("");
      // console.log(data);
      console.log(data);
    })
    .catch((error) => console.log(error));
}
fetchUsers();

let newIn = document.querySelector("#new-in");
let total = document.querySelector("#total");

async function fetchProductDisplay() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    // total.innerHTML = data.limit;
    console.log(data);
    newIn.innerHTML = data.map(
      (product) => `
       <div
            class="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="./detail.html?id=${product.id}">
              <img
                class="p-8 rounded-t-lg aspect-[3/4] object-fit-cover "
                src=${product.images[0]|| "https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"}
                alt="product image"
              />
            </a>
            <div class="px-5 pb-5">
              <a href="#">
                <h5
                  class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
                >
                  ${product?.title || "untitle Product"}
                </h5>
                <p class=" text-[16px] line-clamp-1">
                ${product.description || "undescription"}
                </p>
              </a>
              <div class="flex items-center mt-2.5 mb-5">
                <div class="flex items-center space-x-1 rtl:space-x-reverse">
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                </div>
                <span
                  class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3"
                  >5.0</span
                >
              </div>
              <div class="flex items-center justify-between">
                <span class="lg:text-3xl md:text-xl text-lg font-bold text-gray-900 dark:text-white"
                  >$${product.price|| "unknown"}</span
                >
                <a
                  href="#"
                  class="text-white bg-puple-prim hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >Add to cart</a
                >
              </div>
            </div>
          </div>`).join("")
  } catch (error) {
    console.log(error);
  }
}
fetchProductDisplay();

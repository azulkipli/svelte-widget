<script>
  import Lazy from "svelte-lazy";
  export let text;
  const img1 = "https://burst.shopifycdn.com/photos/blue-phone-case-and-eyeglasses-on-wooden-table.jpg?width=256&format=pjpg&exif=1&iptc=1"

  // const numberOfImages = 5;
  // This will generate an array of urls such as /images/1.png, /images/2.png, up to numberOfImages
  // $: preloadImageUrls = [...Array(maxImages).keys()].map((key) => `/images/${key+1}.png`);

  function addProduct(params) {
    console.log("addProduct => params : ", params);
  }
</script>

<svelte:head>
  <link rel="preload" as="image" href={img1} />
</svelte:head>

<div
  class="group relative block border-solid border-gray-200 border-1 overflow-hidden"
>
  <button aria-label="btn-favorite" class="btn-favorite">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="h-4 w-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>

  <Lazy height={256}>
    <img
      src={img1}
      alt="product"
      class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
    />
  </Lazy>

  <div class="relative border border-gray-100 bg-white p-6">
    <span class="product-tag"> New </span>

    <div class="mt-4 text-lg font-medium text-gray-900">{text}</div>

    <p class="mt-1.5 text-sm text-gray-700 font-bold">$14.99</p>

    <button
      id="add-to-cart"
      aria-label="add-to-cart"
      class="btn-flik"
      on:click={() => addProduct(text)}
    >
      Add to Cart
    </button>
  </div>
</div>

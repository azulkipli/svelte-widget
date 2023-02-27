<script>
  import Lazy from 'svelte-lazy';

  export let text;

  function addProduct(params) {
    console.log('addProduct => params : ', params)
    
  }
</script>

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

  <Lazy>
    <img
      src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
      alt=""
      class="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
    />
  </Lazy>

  <div class="relative border border-gray-100 bg-white p-6">
    <span class="product-tag"> New </span>

    <div class="mt-4 text-lg font-medium text-gray-900">{text}</div>

    <p class="mt-1.5 text-sm text-gray-700 font-bold">$14.99</p>

    <button id="add-to-cart" aria-label="add-to-cart" class="btn-flik" on:click={()=> addProduct(text)}>
      Add to Cart
    </button>
  </div>
</div>

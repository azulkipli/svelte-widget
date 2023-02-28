<script>
  import Counter from "./components/Counter.svelte";
  import Info from "./components/Info.svelte";
  import Product from "./components/Product.svelte";
  // import InputPhone from "./components/InputPhone.svelte";
  // import { onMount } from "svelte";
  import Icon from "@iconify/svelte";
  import Lazy from 'svelte-lazy';
  // props
  export let display, text;
  // export let setting;

  let setting = {
    name: "svelte",
    version: 3,
    speed: "blazing",
    website: "https://svelte.dev",
  };

  // onMount(() => {
  //   const interval = setInterval(() => {
  //     console.log("beep");
  //   }, 1000);

  //   return () => clearInterval(interval);
  // });
</script>

<section class="border-dashed border-amber border-1 p-4 mb-8 swidget">
  <h1 class="mt-0 mb-3 p-0 flex justify-start">
    <Icon icon="mdi-light:home" class="mt-6px mr-1" />
    <span>
    {display}
    </span>
  </h1>

  {#if display === "counter"}
    <Counter />
  {/if}

  {#if display === "info"}
  <Info {...setting} />
  {/if}

  {#if display === "product-thumbnail"}
   <div class="wrapper">
    <Product {text} />
   </div>
  {/if}

</section>

<style>
  .swidget {
    font-family: "Noto Sans", san-serif, system-ui;
    touch-action: pan-y;
  }
</style>

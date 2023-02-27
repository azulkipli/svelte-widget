<script>
  import Counter from "./components/Counter.svelte";
  import Info from "./components/Info.svelte";
  import Product from "./components/Product.svelte";
  import InputPhone from "./components/InputPhone.svelte";
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";
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
  <h1>
    <Icon icon="mdi-light:home" />
    SvelteWidget: {display}
  </h1>

  {#if display === "counter"}
    <Counter />
  {/if}

  {#if display === "info"}
  <Info {...setting} />
  {/if}

  {#if display === "thumbnail"}
   <div class="wrapper">
    <InputPhone />
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

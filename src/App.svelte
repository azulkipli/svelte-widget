<script>
  import Counter from "./lib/Counter.svelte";
  import Info from "./lib/Info.svelte";
  import Product from "./lib/Product.svelte";
  // props
	export let display;
  export let setting;

  const text = 'Product title'

  const pkg = {
		name: 'svelte',
		version: 3,
		speed: 'blazing',
		website: 'https://svelte.dev'
	};
</script>

<main>
  <h1>Vite + Svelte</h1>

  {#if display === 'counter'}
  <Counter />
  {/if}

  {#if display === 'thumbnail'}
  <Product {text} />
  {/if}

  <Info {...pkg} {...setting}/>

</main>

<script>
  import Counter from "./lib/Counter.svelte";
  import Info from "./lib/Info.svelte";
  import Product from "./lib/Product.svelte";
  // props
	export let display;
  export let setting;

  const text = 'widget'

  const pkg = {
		name: 'svelte',
		version: 3,
		speed: 'blazing',
		website: 'https://svelte.dev'
	};
</script>

<main>
  <h1>Vite + Svelte</h1>

  <Counter />

  <Product {text} {display} />

  <!-- <Info name={pkg.name} version={pkg.version} speed={pkg.speed} website={pkg.website}/> -->
  <Info {...pkg} {...setting}/>

</main>

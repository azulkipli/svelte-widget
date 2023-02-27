<script>
  let count = 0;
  const increment = () => {
    count += 1;
  };
</script>

<button class="mt-5 px-6 py-3 border-0 rounded cool-blue" on:click={increment}>
  count is {count}
</button>

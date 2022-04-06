<script>
  // import Todo from "./Todo/Index.svelte";
  import { delayRenter } from "./lib/lifeCycle";
  import InputEx from "./refer/InputEx.svelte";
  let done = delayRenter(3000);
</script>

<main>
  {#if $done}
    <h1>Hello!</h1>
  {/if}

  <InputEx />
</main>

<style>
  main {
    text-align: center;
    padding: 1rem;
    max-width: 800px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

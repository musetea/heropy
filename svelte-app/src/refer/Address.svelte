<script>
  import { children } from "svelte/internal";

  export let address;
</script>

<!-- HTML  -->
<ul>
  <li>
    {address.label}
    {#if address.children}
      {#each address.children as child}
        <svelte:self address={child} />
      {/each}
    {/if}
  </li>
</ul>

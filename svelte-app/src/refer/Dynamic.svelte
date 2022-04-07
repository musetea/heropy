<script>
  import Self from "./Self.svelte";
  import InputEx from "./InputEx.svelte";
  import Fruits from "./Fruits.svelte";
  import Window from "./Window.svelte";

  const components = [
    { name: "Window", component: Window },
    { name: "Self", component: Self },
    { name: "InputEx", component: InputEx },
    { name: "Fruits", component: Fruits },
  ];
  let index;
  let selected = components[0].component;
</script>

<!-- HTML -->
<div class="components">
  {#each components as { name, component }, i (name)}
    <label>
      <input
        type="radio"
        value={component}
        bind:group={selected}
        on:change={() => (index = i + 1)}
      />
      {name}
    </label>
  {/each}
</div>

<svelte:component this={selected} {index} />

<!-- 스타일 -->
<style>
  .components {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
</style>

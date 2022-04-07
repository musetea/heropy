<script>
  let key;
  let innerWidth;
  let innerHeight;
  let outerWidth;
  let outerHeight;
  let online;

  let scrollX;
  let scrollY;
</script>

<!-- HTML -->
<svelte:window
  on:keydown={e => (key = e.key)}
  bind:innerWidth
  bind:innerHeight
  bind:outerWidth
  bind:outerHeight
  bind:online
  bind:scrollX
  bind:scrollY
/>

<div class="display">
  <p>{key}</p>
  <h3>읽기전용</h3>
  <p>innerWidth: {innerWidth}</p>
  <p>innerHeight: {innerHeight}</p>
  <p>outerWidth: {outerWidth}</p>
  <p>outerHeight: {outerHeight}</p>
  <p>online: {online}</p>

  <div class="in">
    <label>
      ScrolX:
      <input type="number" bind:value={scrollX} />
    </label>
    <label>
      ScrolY:
      <input type="number" bind:value={scrollY} />
    </label>
  </div>
</div>

<div class="big" />

<style>
  .big {
    height: 2000px;
  }
</style>

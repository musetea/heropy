<script>
  export let index;

  let text = "";
  let number = 5;
  let checked = false;
  let fruits = ["Apple", "Banana", "Charry", "Melon"];
  let selectedFruits = [];
  let fruitGroup = "Banana";
  let textArea = "";
  let fruitSelect = "Melon";
  let multiFruits = [];
</script>

<!-- HTML  -->
<h1>{index}</h1>
<section>
  <h2>Text</h2>
  <input type="text" bind:value={text} />
</section>

<section>
  <h2>Number/Range</h2>
  <div class="number">
    <input type="number" bind:value={number} min="0" max="10" />
  </div>
  <div class="range">
    <input type="range" bind:value={number} min="0" max="10" />
  </div>
</section>

<section>
  <h2>CheckBox</h2>
  <input type="checkbox" bind:checked /> Agree ?
  <label for="">
    <input type="checkbox" bind:checked /> Agree ? [Label Wrapping]
  </label>
</section>

<section>
  <h2>Mutiple CheckBox</h2>
  <strong>Selected: {selectedFruits}</strong>
  {#each fruits as fruit}
    <label for="">
      <input type="checkbox" value={fruit} bind:group={selectedFruits} />
      {fruit}
    </label>
  {/each}
</section>

<section>
  <h2>Radio</h2>
  <strong>Selected: {fruitGroup}</strong>
  {#each fruits as fruit}
    <label for="">
      <input type="radio" value={fruit} bind:group={fruitGroup} />
      {fruit}
    </label>
  {/each}
</section>

<section>
  <h2>TextArea</h2>
  <pre>{textArea}</pre>
  <textarea bind:value={textArea} />
</section>

<section>
  <h2>Select</h2>
  <strong>Selected:{fruitSelect}</strong>
  <div class="select">
    <select bind:value={fruitSelect}>
      <option disabled>Please select One!</option>
      {#each fruits as fruit}
        <option value={fruit}>{fruit}</option>
      {/each}
    </select>
  </div>
</section>

<section>
  <h2>Multiple Select</h2>
  <strong>Selected:{multiFruits}</strong>
  <div class="multi">
    <select multiple bind:value={multiFruits}>
      {#each fruits as fruit}
        <option value={fruit}>{fruit}</option>
      {/each}
    </select>
  </div>
</section>

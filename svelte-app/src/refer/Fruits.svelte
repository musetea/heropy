<script>
  import { fruits } from "../stores/fruits";
  let fruit;
</script>

<label>
  승민이꺼 과일:
  <input type="text" bind:value={fruit} />
</label>
<button on:click={() => fruits.setFruit(fruit)}>추가</button>
<button on:click={() => console.log(fruits.getList())}>목록보기</button>
<h2>과일목록</h2>
<ul>
  {#each $fruits as { id, name } (id)}
    <li>{name}</li>
  {/each}
</ul>

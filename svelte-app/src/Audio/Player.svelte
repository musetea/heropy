<script context="module">
  const players = new Set();

  export const allStop = () => {
    players.forEach(p => p.pause());
  };
</script>

<script>
  import { onMount } from "svelte";
  export let mp3;
  let player;

  onMount(() => {
    players.add(player);
  });
</script>

<div class="music">
  <h3>{mp3.name}</h3>
  <audio bind:this={player} src={mp3.src} controls>
    <track kind="captions" />
  </audio>
</div>

<style>
  h3 {
    width: 100px;
  }
  .music {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
</style>

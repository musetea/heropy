<script>
  import Player, { allStop } from "./Player.svelte";
  const musices = [
    {
      id: 1,
      name: "holst",
      src: "assets/music/holst.mp3",
    },
    {
      id: 2,
      name: "strauss",
      src: "assets/music/strauss.mp3",
    },
    {
      id: 3,
      name: "satie",
      src: "assets/music/satie.mp3",
    },
  ];
</script>

<h1>MP3</h1>
<div class="controls">
  <button on:click={allStop}> all stop! </button>
</div>

<div class="musics">
  {#each musices as music}
    <Player mp3={music} />
  {/each}
</div>

<!-- 스타일 -->
<style>
</style>

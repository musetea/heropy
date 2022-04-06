<script>
  import axios from "axios";
  import { DOMAIN, OPTIONS } from "./config";

  let title = "";
  let movieType = OPTIONS[0];
  let totalMovies = 0;

  let promise = Promise.resolve([]);

  const searchMovies = () => {
    return new Promise(async (reslove, reject) => {
      const url = `${DOMAIN}s=${title}&type=${movieType}`;
      try {
        const res = await axios.get(url);
        if (res.status === 200) {
          totalMovies = res.data.totalResults;
          reslove(res.data.Search);
          console.log(movies, totalMovies);
        }
      } catch (err) {
        reject(err);
      } finally {
        console.log("done!");
      }
    });
  };
</script>

<!-- HTML -->
<div class="search">
  <label>
    제목:
    <input type="text" placeholder="lion" bind:value={title} />
  </label>
  <label>
    장르:
    <select bind:value={movieType}>
      {#each OPTIONS as type (type)}
        <option value={type}>{type}</option>
      {/each}
    </select>
  </label>
  <button
    on:click={() => {
      promise = searchMovies();
    }}
  >
    검색
  </button>
</div>
<hr />
<h2>영화 목록</h2>
{#await promise}
  <p>{`${title} 검색중...`}</p>
{:then movies}
  <div class="movies">
    {#each movies as movie (movie.imdbID)}
      <div class="movie">
        <img src={movie.Poster} alt={movie.Title} />
        <p>{movie.Title} <b>({movie.Year})</b></p>
      </div>
    {/each}
  </div>
{:catch err}
  <p class:err>{err.message}</p>
{/await}

<!-- 스타일 -->
<style>
  .search {
    display: flex;
    align-items: center;
  }
</style>

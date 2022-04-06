<script>
  import axios from "axios";
  const APIKEY = "25658549";
  const DOMAIN = `http://www.omdbapi.com/?apikey=${APIKEY}&`;
  const OPTIONS = ["movie", "series", "episode"];

  let title = "";
  let movieType = OPTIONS[0];
  let movies = [];
  let totalMovies = 0;

  let isLoadding = false;
  let error;

  const searchMovies = async () => {
    if (isLoadding) return;
    if (!title) return;
    isLoadding = true;
    const url = `${DOMAIN}s=${title}&type=${movieType}`;
    try {
      const res = await axios.get(url);
      if (res.status === 200) {
        movies = res.data.Search;
        totalMovies = res.data.totalResults;
        console.log(movies, totalMovies);
      }
    } catch (err) {
      console.error(err);
      error = err;
    } finally {
      isLoadding = false;
    }
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
  <button on:click={searchMovies}> 검색 </button>
</div>

{#if error}
  <p class:err={error}>{error.message}</p>
{:else if isLoadding}
  <p>{`${title} 검색중...`}</p>
{:else}
  <div class="movies">
    <h2>영화 목록</h2>
    {#each movies as movie (movie.imdbID)}
      <div class="movie">
        <img src={movie.Poster} alt={movie.Title} />
        <p>{movie.Title} <b>({movie.Year})</b></p>
      </div>
    {/each}
  </div>
{/if}

<!-- 스타일 -->
<style>
  .search {
    display: flex;
    align-items: center;
  }
  .movie {
    display: flex;
    align-items: center;
  }

  img {
    max-width: 64px;
  }

  .err {
    color: tomato;
  }
</style>

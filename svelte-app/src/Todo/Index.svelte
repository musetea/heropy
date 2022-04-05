<script>
  import { writable } from "svelte/store";
  import Todo from "./Todo.svelte";

  let id = 0;
  let title = "";
  let todos = writable([]);

  function createTodo() {
    if (!title.trim()) {
      title = "";
      return;
    }
    const todo = {
      id,
      title,
      done: false,
    };
    $todos.push(todo);
    $todos = $todos;

    title = "";
    id += 1;
  }
</script>

<div class="container">
  <label for="title">
    Todo:
    <input
      type="text"
      id="title"
      bind:value={title}
      on:keydown={e => {
        e.key === "Enter" && createTodo();
      }}
    />
  </label>
  <button on:click={createTodo}> Create Todo </button>
</div>
<h2>TODO LIST</h2>
{#each $todos as todo}
  <Todo {todos} {todo} />
{/each}

<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
</style>

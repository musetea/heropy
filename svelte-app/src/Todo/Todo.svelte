<script>
  import { onMount } from "svelte";

  export let todos;
  export let todo;
  let isEditing = false;
  let updateTitle = "";
  let editBtn, deleteBtn;

  function onEditTodo() {
    isEditing = true;
    updateTitle = todo.title;
  }

  function updateTodo() {
    todo.title = updateTitle;
    offEditing();
  }
  function offEditing() {
    isEditing = false;
  }

  function onDeleteTodo() {
    $todos = $todos.filter(t => t.id != todo.id);
  }

  function updateTodoDone() {
    if (todo.done) {
      editBtn.disabled = true;
    } else {
      editBtn.disabled = false;
    }
  }

  onMount(() => {
    editBtn = document.querySelector("#edit");
    deleteBtn = document.querySelector("#delete");
  });
</script>

<!-- HTML -->
{#if isEditing}
  <div class="todo">
    <input type="text" bind:value={updateTitle} />
    <button on:click={updateTodo}>적용</button>
    <button on:click={offEditing}>취소</button>
  </div>
{:else}
  <div class="todo">
    <input
      type="checkbox"
      bind:checked={todo.done}
      on:change={updateTodoDone}
    />
    <label for="">{todo.id}</label>
    <h2 class:done={todo.done}>{todo.title}</h2>
    <button id="edit" on:click={onEditTodo}>Edit</button>
    <button id="delete" on:click={onDeleteTodo}>Delete</button>
  </div>
{/if}

<!-- 스타일 -->
<style>
  .todo {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
  }

  .done {
    text-decoration: line-through;
  }
</style>

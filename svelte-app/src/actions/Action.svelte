<script>
  import { onMount } from "svelte";

  const action1 = (node, options = {}) => {
    console.log(node);
    const { width = "100px", height = "100px", color = "tomato" } = options;

    node.style.width = width;
    node.style.height = height;
    node.style.backgroundColor = color;

    return {
      update: opts => {
        console.log("update!!!");
        console.log(opts);
        node.style.width = opts.width;
      },
      destroy: () => {
        console.log("destroy!!!!");
      },
    };
  };

  let div2;

  onMount(() => {
    console.log(div2);
    div2.style.width = "100px";
    div2.style.height = "100px";
    div2.style.backgroundColor = "blue";
  });

  let toggle = true;
  let width = 20;

  function zoom(node, options = {}) {
    const {
      width = "100px",
      height = "100px",
      color = "green",
      scale = 1.5,
    } = options;

    node.style.width = width;
    node.style.height = height;
    node.style.backgroundColor = color;
    node.style.transition = "0.5s";

    node.addEventListener("mouseenter", zoomIn);
    node.addEventListener("mouseleave", zoomOut);
    function zoomIn() {
      node.style.transform = `scale(${scale})`;
    }
    function zoomOut() {
      node.style.transform = "scale(1)";
    }

    return {
      destroy() {
        removeEventListener("mouseenter", zoomIn);
        removeEventListener("mouseleave", zoomOut);
      },
    };
  }
</script>

<!-- HTML  -->

<div use:zoom />
<div use:zoom={{ color: "royalblue", scale: 0.7 }} />

<div use:action1 />
<div bind:this={div2} />
<h2>변경...</h2>
<button on:click={() => (toggle = !toggle)}> Toggle </button>
<button on:click={() => (width += 20)}> Size Up </button>

{#if toggle}
  <div
    use:action1={{ width: `${width}px`, height: "70px", color: "royalblue" }}
  />
{/if}

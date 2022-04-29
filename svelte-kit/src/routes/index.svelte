<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { tick} from 'svelte';

	let name= 'world';	
	async function handlerH1Click() {
		name = '오승민!!!';
		await tick();
		const h1 = document.querySelector('h1');
		console.log(h1?.innerText);
	}
	let href = ''
	let value = ''
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1 on:click={handlerH1Click}>Hellow {name}!!!</h1>
	<input {value} on:input={e => value = e.target.value } />
</section>



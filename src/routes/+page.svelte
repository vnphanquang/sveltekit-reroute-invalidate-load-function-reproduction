<script>
	import { invalidateAll } from '$app/navigation';
</script>

<main>
	<button on:click={() => invalidateAll()}>Invalidate</button>
</main>

<style>
	main {
		height: 100vh;
		display: grid;
		place-items: center;
	}
</style>
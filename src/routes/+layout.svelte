<script>
	import '../app.scss';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import '../app.scss';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	const path = $page.route.id;
	onMount(() => {
		const blob = document.getElementById('blob');

		window.onpointermove = (event) => {
			const { clientX, clientY } = event;

			blob.animate(
				{
					left: `${clientX}px`,
					top: `${clientY}px`
				},
				{ duration: 3000, fill: 'forwards' }
			);
		};
	});
</script>

{#if !path.startsWith('/r/')}
	<Nav />
	<slot />
	<div id="blob" />
	<div id="blur" />
	<Footer />
{:else}
	<slot />
{/if}

<style lang="scss">
	@keyframes rotate {
		from {
			rotate: 0deg;
		}

		50% {
			scale: 1 1.5;
		}

		to {
			rotate: 360deg;
		}
	}

	#blob {
		height: clamp(10rem, 34vmax, 30rem);
		aspect-ratio: 1;
		position: fixed;
		left: 50%;
		top: 50%;
		translate: -50% -50%;
		border-radius: 50%;
		background: linear-gradient(to right, $clr-primary-500, $clr-secondary-500);
		animation: rotate 20s infinite;
		opacity: 0.8;
		z-index: -1;
		pointer-events: none;
	}

	#blur {
		position: fixed;
		inset: 0;
		z-index: -1;
		pointer-events: none;
		backdrop-filter: blur(100px);
	}
</style>

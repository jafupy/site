<!----------------------------------------------------------------------------------------------
  ____   ____ ____  ___ ____ _____ 
 / ___| / ___|  _ \|_ _|  _ \_   _|
 \___ \| |   | |_) || || |_) || |  
  ___) | |___|  _ < | ||  __/ | |  
 |____/ \____|_| \_\___|_|    |_|  
                                   
----------------------------------------------------------------------------------------------->

<script>
	import { onMount } from 'svelte';
	import MetaTags from '$lib/meta.svelte';

	const data = {
		name: 'Jacob (JaFu.py)',
		description:
			"I'm Jacob, a professional apple sheep with a passion for web development. Coding is my creative outlet, and I love building user-friendly web applications. As an 'Apple sheep,' I draw inspiration from their design and innovation. Currently I'm in school so I can't work on my projects full time.",
		link: 'https://jafu.dev',
		image:
			'https://cdn.discordapp.com/avatars/692269055209373696/bcc17c079bafda6dd99545c3efbb9491.webp?size=2048'
	};

	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const words = ['Jacob', 'JaFu.py'];
	let interval = null;
	let iteration = 0;
	let currentWordIndex = 0;
	let Jacob = words[currentWordIndex];

	function updateText() {
		const currentWord = words[currentWordIndex];
		let displayWord = '';

		if (iteration < currentWord.length) {
			displayWord = currentWord
				.split('')
				.map((letter, index) => {
					if (index < iteration) {
						return currentWord[index];
					}
					return letters[Math.floor(Math.random() * letters.length)];
				})
				.join('');
		} else {
			displayWord = currentWord;
		}

		Jacob = displayWord;

		if (iteration >= currentWord.length) {
			clearInterval(interval);
			iteration = 0;
			currentWordIndex = (currentWordIndex + 1) % words.length;
			setTimeout(() => {
				interval = setInterval(updateText, 30);
			}, 3000);
		}

		iteration += 1 / 5;
	}

	onMount(() => {
		interval = setInterval(updateText, 30);
	});
</script>

<!----------------------------------------------------------------------------------------------
  _   _ _____ ____   ___  
 | | | | ____|  _ \ / _ \ 
 | |_| |  _| | |_) | | | |
 |  _  | |___|  _ <| |_| |
 |_| |_|_____|_| \_\\___/ 

----------------------------------------------------------------------------------------------->

<section id="sections.hero" class="flex flex-col justify-center h-screen w-screen p-8 gap-5">
	<h3 class="">Hey, I am</h3>
	<h1 class="">{Jacob}</h1>
	<h3 class="">
		{Math.random() < 0.99 ? 'A professional Apple Sheep' : 'The end is never the end'}
	</h3>

	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="scrollArrow"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M12 11v10" />
		<path d="M9 18l3 3l3 -3" />
		<path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
	</svg>
</section>
<!----------------------------------------------------------------------------------------------
    _    ____   ___  _   _ _____ 
   / \  | __ ) / _ \| | | |_   _|
  / _ \ |  _ \| | | | | | | | |  
 / ___ \| |_) | |_| | |_| | | |  
/_/   \_\____/ \___/ \___/  |_|  
                              
----------------------------------------------------------------------------------------------->

<section id="sections.about">
	<h2 class="md:text-4xl sm:text:3xl">About</h2>
	<p>
		I'm Jacob, a professional apple sheep with a passion for web development. Coding is my creative
		outlet, and I love building user-friendly web applications. As an "Apple sheep," I draw
		inspiration from their design and innovation. Currently I'm in school so I can't work on my
		projects full time.
	</p>
</section>

<!----------------------------------------------------------------------------------------------
  ____  ____   ___      _ _____ ____ _____ ____  
 |  _ \|  _ \ / _ \    | | ____/ ___|_   _/ ___| 
 | |_) | |_) | | | |_  | |  _|| |     | | \___ \ 
 |  __/|  _ <| |_| | |_| | |__| |___  | |  ___) |
 |_|   |_| \_\\___/ \___/|_____\____| |_| |____/ 
                              
----------------------------------------------------------------------------------------------->

<section id="sections.projects">
	<h2>Projects</h2>
	<p class="text-lg">Mainly JS. Find 'em here.</p>

	<ul>
		<li />
	</ul>
</section>

<!----------------------------------------------------------------------------------------------
  ____ _______   ___     _____ 
 / ___|_   _\ \ / / |   | ____|
 \___ \ | |  \ V /| |   |  _|  
  ___) || |   | | | |___| |___ 
 |____/ |_|   |_| |_____|_____|
                                          
----------------------------------------------------------------------------------------------->

<style lang="scss">
	h2 {
		font-size: 2.25rem; /* 36px */
		line-height: 2.5rem; /* 40px */
	}
	#sections\.about {
		p {
			text-align: justify;
		}
	}

	#sections\.hero {
		align-items: baseline;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 0rem;

		h1 {
			margin: 1rem;
			font-weight: 300;
			font-size: 6rem; /* 96px */
			line-height: 1;
		}
		h3 {
			font-weight: 300;
			font-size: 1.875rem; /* 30px */
			line-height: 2.25rem; /* 36px */
		}

		.scrollArrow {
			position: absolute;
			bottom: 2rem;
			left: 50%;
			transform: translateX(-50%);
			width: 2.5rem; /* 40px */
			height: 2.5rem; /* 40px */
			margin-bottom: 1rem;
			animation: bounce 5s infinite ease-in-out;
			stroke: $clr-surface-50;
		}
	}

	@keyframes bounce {
		0% {
			transform: translateX(-50%) translateY(0);
		}

		40% {
			transform: translateX(-50%) translateY(2rem) rotate(0deg);
		}
		50% {
			transform: translateX(-50%) translateY(2rem) rotate(180deg);
		}
		90% {
			transform: translateX(-50%) translateY(0) rotate(180deg);
		}
		100% {
			transform: translateX(-50%) translateY(0) rotate(360deg);
		}
	}
</style>

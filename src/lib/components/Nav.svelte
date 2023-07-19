<nav>
	<a href="#sections.hero">home</a><a href="#sections.about">About Me</a><a href="#projects"
		>Projects</a
	><a href="#Contact" class="button">Contact</a>
</nav>

<style lang="scss">
	nav {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		padding: 1rem;

		position: fixed;

		a {
			text-decoration: none;
			color: $clr-primary-50;
			font-weight: 500;
			font-size: 1.25rem; /* 20px */
			line-height: 1.5rem; /* 24px */
			transition: color 0.2s ease-in-out;

			&:hover {
				color: var(--clr-secondary-500);
			}
		}
	}
</style>

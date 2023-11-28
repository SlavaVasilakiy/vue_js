<template>
	<header class="header">
		<div class="header__logoAndName">
			<img
				class="interno-logo"
				src="../assets/logo/header_logo.svg"
				alt="Interno logo"
			/>
			<h1 class="header__heading">Interno</h1>
		</div>
		<nav class="header__nav">
			<a href="#home">Home</a>
			<a href="#project">Project</a>
			<a href="#blog">Blog</a>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'HeaderComponent',
	data() {
		return;
	},
	computed: {},
	props: {},
};
</script>

<style scoped lang="sass">
.header
	display: flex
	align-items: center
	justify-content: space-between
	margin-top: 5.2rem
	margin-bottom: 6rem

	&__logoAndName
		display: flex
		gap: 1rem

	&__heading
		color: #292f36
		font-family: DM Serif Display
		font-size: 4rem
		font-style: normal
		font-weight: 400
		line-height: 125%

	&__nav
		display: flex
		gap: 4.2rem

	&__nav a
		color: #292F36
		font-family: Jost
		font-size: 2rem
		font-style: normal
		font-weight: 400
		line-height: 125%
</style>

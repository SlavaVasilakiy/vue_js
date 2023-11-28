<template>
	<BlogDetailsPage />
</template>

<script>
import BlogDetailsPage from './pages/BlogDetailsPage.vue';
// import HomePage from './pages/HomePage.vue';

export default {
	name: 'App',
	components: {
    // HomePage,
    BlogDetailsPage
},
};
</script>

<style lang="sass">
*, ::after, ::before
	margin: 0
	padding: 0
	box-sizing: border-box

html
	font-size: 62.5%

body
	margin: 0 auto
	padding: 0 36rem
	max-width: 192rem

a
	text-decoration: none
</style>

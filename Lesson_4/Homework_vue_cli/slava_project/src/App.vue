<template>
	<div>
		<HeaderComponent/>
		<ProjectDetailsPage />
		<!-- <ProductDetails /> -->
		<!-- <HomePage /> -->
		<!-- <ProjectPage /> -->
		<FooterComponent/>
	</div>
</template>

<script>
import ProjectDetailsPage from './pages/ProjectDetailsPage'
// import ProjectPage from './pages/ProjectPage'
import FooterComponent from './components/FooterComponent'
// import ProductDetails from './components/ProductDetails.vue';
// import BlogDetailsPage from './pages/BlogDetailsPage.vue';
import HeaderComponent from './components/HeaderComponent.vue';
// import HomePage from './pages/HomePage.vue';

export default {
	name: 'App',
	components: {
    ProjectDetailsPage,
    // ProjectPage,
    FooterComponent,
    // ProductDetails,
    // BlogDetailsPage,
    // HomePage,
    HeaderComponent
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

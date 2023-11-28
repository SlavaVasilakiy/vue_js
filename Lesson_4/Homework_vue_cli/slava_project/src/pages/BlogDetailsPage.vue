<template>
	<div>
		<HeaderComponent />

		<main>
			<div class="background-photo"></div>
			<section class="content">
				<h2>Let’s Get Solution for Building Construction Work</h2>
				<aside class="right-side">
					<h4>Tags</h4>
					<button>Kitchen</button>
					<button>Bedroom</button>
					<button>Building</button>
					<button>Architecture</button>
					<button>Kitchen Planning</button>
					<button>Bedroom</button>
				</aside>
			</section>
		</main>

		<FooterComponent />
	</div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
	name: 'BlogDetailsPage',
	components: { HeaderComponent, FooterComponent },
};
</script>

<style lang="sass" scoped>
.background-photo
	background: url(../assets/img/blog_details_top_background.jpg), lightgray 50% / cover no-repeat
	height: 35rem
	background-size: 192rem
	margin: 0 -36rem
	margin-bottom: 20rem

.content
	display: flex
	margin-bottom: 20rem
	justify-content: space-between

.right-side
	display: flex
	flex-direction: column
</style>

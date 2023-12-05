<template>
	<div>
		<MyCart />
	</div>
</template>

<script>
import MyCart from './components/MyCart.vue';
// import MyCounter from './components/MyCounter.vue';

export default {
	name: 'App',
	components: {
		MyCart,
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

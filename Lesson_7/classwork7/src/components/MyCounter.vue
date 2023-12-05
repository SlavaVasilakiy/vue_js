<template>
	<div>
		<div>{{ counter }}</div>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
	</div>
</template>

<script>
// import { mapMutations } from 'vuex';

export default {
	name: 'MyCounter',

	data() {
		return {};
	},

	mounted() {

	},

	methods: {
		// ...mapMutations(['INCREMENT', 'DECREMENT']),
		increment() {
			//  this.INCREMENT();
			this.$store.commit('INCREMENT');
		},
		decrement() {
			//  this.DECREMENT();
			this.$store.commit('DECREMENT');
		},
	},

	computed: {
		counter() {
			return this.$store.state.counter;
		},
	},
};
</script>

<style lang="sass" scoped>
*
	font-size: 130%
	margin-top: 10rem

button
	margin: 2rem 3rem 0 0
	padding: .3rem 2rem
</style>

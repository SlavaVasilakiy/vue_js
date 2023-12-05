<template>
	<div>
		<form action="">
			<label for="name">Name:</label>
			<input v-model="name" type="text" id="name" />
			<label for="price">Price:</label>
			<input v-model.number="price" type="number" id="price" />
			<label for="description">Description:</label>
			<textarea
				v-model="description"
				name="description"
				id="description"
				cols="10"
				rows="10"
			></textarea>
			<button @click.prevent="addToCart">Add to cart</button>
		</form>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'AddNewItemToCart',

	data() {
		return {
			name: '',
			price: null,
			description: '',
		};
	},

	mounted() {},

	methods: {
		addToCart() {
			const newItem = {
				id: Date.now(),
				name: this.name,
				price: this.price,
				description: this.description,
			};

			this.$emit('addToCart', newItem);

			// this.$store.commit('ADD_TO_CART', newItem);

			this.name = '';
			this.price = null;
			this.description = '';
		},
	},
	computed: {
		...mapGetters(['cartItems']),
	},
};
</script>

<style lang="sass" scoped>
form
	width: 50rem
	margin: 10rem 0 10rem 0
	display: flex
	flex-direction: column
input:nth-child(4)
	width: 6rem
button
	margin-top: 2rem
	width: 14rem
	padding: 1rem
	align-self: center
</style>

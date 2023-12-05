<template>
	<div>
		<AddNewItemToCart @addToCart="addToCart" />
		<p><i>Total count: </i>{{ productsCount }}</p>
		<p><i>Total price: </i>{{ productsTotalPrice }}</p>
		<div v-for="item in cartItems" :key="item.id">
			<h1>{{ item.name }}</h1>
			<p>
				<i>Price: </i>{{ item.price }}<i> Description: </i
				>{{ item.description }}
			</p>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import AddNewItemToCart from './AddNewItemToCart.vue';
export default {
	components: { AddNewItemToCart },
	name: 'MyCart',

	data() {
		return {};
	},

	mounted() {
		this.fetchData();
	},

	methods: {
		...mapMutations(['ADD_TO_CART']),
		...mapActions(['fetchData']),

		addToCart(newItem) {
			this.ADD_TO_CART(newItem);
		}
	},

	computed: {
		...mapGetters(['cartItems', 'productsCount', 'productsTotalPrice']),
	},
};
</script>

<style lang="sass" scoped>
*
	font-size: 120%

div p
	margin-bottom: 3rem
</style>

export default {
	state: {
		counter: 0,
		cartItems: [],
		products: [],
	},

	actions: {
		fetchData({ commit }) {
			setTimeout(() => {
				commit('SET_CART', [
					{
						id: 1,
						name: 'Product 1',
						price: 50,
						description: "This is product 1's description",
					},
					{
						id: 2,
						name: 'Product 2',
						price: 100,
						description: "This is product 2's description",
					},
					{
						id: 3,
						name: 'Product 3',
						price: 70,
						description: "This is product 3's description",
					},
					{
						id: 4,
						name: 'Product 4',
						price: 60,
						description: "This is product 4's description",
					},
					{
						id: 5,
						name: 'Product 5',
						price: 80,
						description: "This is product 5's description",
					},
				]);
			}, 2000);
		},
	},

	getters: {
		cartItems(state) {
			return state.cartItems;
		},
		productsCount(state) {
			return state.cartItems.length;
		},
		productsTotalPrice(state) {
			return state.cartItems.reduce(
				(total, product) => total + product.price,
				0
			);
		},
	},

	mutations: {
		INCREMENT(state) {
			state.counter++;
		},
		DECREMENT(state) {
			state.counter--;
		},
		ADD_TO_CART(state, product) {
			state.cartItems.push(product);
		},
		SET_CART(state, productList) {
			state.cartItems = productList;
		},
	},

	modules: {},
};

const state = {
	currentIndex: 0,

	projectDetails: [
		{
			id: 1,
			name: 'Minimal Look Bedrooms',
			description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem
										vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel
										maximus purus posuere in...`,
			imageSrc: './img/projectdetailspage/photo_1.jpg',
		},
		{
			id: 2,
			name: 'Home',
			description: `Далеко-далеко за словесными горами в стране гласных и согласных живут 
										рыбные тексты. Правилами семантика пустился рукопись, гор там проектах ведущими великий.
										Грамматики безопасную, журчит путь сноваподзаголовок однажды лучше ему текст даже!.`,
			imageSrc: './img/projectdetailspage/photo_1.jpg',
		},
	],
};

const mutations = {
	setNextProject(state) {
		state.currentIndex = (state.currentIndex + 1) % state.projectDetails.length;
	},
	setPrevProject(state) {
		state.currentIndex =
			(state.currentIndex - 1 + state.projectDetails.length) %
			state.projectDetails.length;
	},
};

const actions = {
	nextProject({ commit }) {
		commit('setNextProject');
	},
	prevProject({ commit }) {
		commit('setPrevProject');
	},
};

const getters = {
	currentProject(state) {
		return state.projectDetails[state.currentIndex] || {};
	},
};

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};

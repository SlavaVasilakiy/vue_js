<template>
	<div>
		<main>
			<div class="banner">
				<div class="banner__heading">
					<h2 class="banner__heading__h2">Our Project</h2>
					<p class="banner__heading__p">Home / Project</p>
				</div>
			</div>
			<section class="navigation">
				<nav class="projects-nav">
					<label class="projects-list">
						Bathroom
						<input type="radio" v-model="selectedCategory" value="Bathroom" />
					</label>
					<label class="projects-list">
						Bed Room
						<input type="radio" v-model="selectedCategory" value="Bedroom" />
					</label>
					<label class="projects-list">
						Kitchan
						<input type="radio" v-model="selectedCategory" value="Kitchan" />
					</label>
					<label class="projects-list">
						Living Area
						<input
							type="radio"
							v-model="selectedCategory"
							value="Living Area"
						/>
					</label>
				</nav>
			</section>
			<!-- <section class="projects">
				<div class="project-box">
					<img
						class="project-box__img"
						src="../assets/img/projectPage/project_1.jpg"
						alt="project_1"
					/>
					<div class="project-box__description">
						<div>
							<h4>Minimal Bedroom</h4>
							<p>Decor / Artchitecture</p>
						</div>
						<HomePageMiddleButton />
					</div>
				</div>

				<div class="project-box">
					<img
						class="project-box__img"
						src="../assets/img/projectPage/project_3.jpg"
						alt="project_3"
					/>
					<div class="project-box__description">
						<div>
							<h4>Minimal Bedroom</h4>
							<p>Decor / Artchitecture</p>
						</div>
						<HomePageMiddleButton />
					</div>
				</div>

				<div class="project-box">
					<img
						class="project-box__img"
						src="../assets/img/projectPage/project_5.jpg"
						alt="project_5"
					/>
					<div class="project-box__description">
						<div>
							<h4>Minimal Bedroom</h4>
							<p>Decor / Artchitecture</p>
						</div>
						<HomePageMiddleButton />
					</div>
				</div>

				<div class="project-box">
					<img
						class="project-box__img"
						src="../assets/img/projectPage/project_7.jpg"
						alt="project_7"
					/>
					<div class="project-box__description">
						<div>
							<h4>Minimal Bedroom</h4>
							<p>Decor / Artchitecture</p>
						</div>
						<HomePageMiddleButton />
					</div>
				</div>

				<div class="project-box">
					<img
						class="project-box__img"
						src="../assets/img/projectPage/project_2.jpg"
						alt="project_2"
					/>
					<div class="project-box__description">
						<div>
							<h4>Minimal Bedroom</h4>
							<p>Decor / Artchitecture</p>
						</div>
						<HomePageMiddleButton />
					</div>
				</div>

				<div class="project-box">
					<img
						class="project-box__img"
						src="../assets/img/projectPage/project_4.jpg"
						alt="project_4"
					/>
					<div class="project-box__description">
						<div>
							<h4>Minimal Bedroom</h4>
							<p>Decor / Artchitecture</p>
						</div>
						<HomePageMiddleButton />
					</div>
				</div>

				<div class="project-box">
					<img
						class="project-box__img"
						src="../assets/img/projectPage/project_6.jpg"
						alt="project_6"
					/>
					<div class="project-box__description">
						<div>
							<h4>Minimal Bedroom</h4>
							<p>Decor / Artchitecture</p>
						</div>
						<HomePageMiddleButton />
					</div>
				</div>

				<div class="project-box">
					<img
						class="project-box__img"
						src="../assets/img/projectPage/project_8.jpg"
						alt="project_8"
					/>
					<div class="project-box__description">
						<div>
							<h4>Minimal Bedroom</h4>
							<p>Decor / Artchitecture</p>
						</div>
						<HomePageMiddleButton />
					</div>
				</div>
			</section> -->

			<section class="projects">
				<div
					v-for="project in filteredProjects"
					:key="project.id"
					class="project-box"
				>
					<img
						:src="project.imageUrl"
						:alt="project.title"
						class="project-box__img"
					/>
					<div class="project-box__description">
						<div>
							<h4>{{ project.title }}</h4>
							<p>{{ project.category }}</p>
						</div>
						<HomePageMiddleButton />
					</div>
				</div>
			</section>
		</main>
	</div>
</template>

<script>
import HomePageMiddleButton from '../components/HomePageMiddleButton';
import { mapGetters, mapActions } from 'vuex';

export default {
	components: { HomePageMiddleButton },
	name: 'ProjectPage',

	methods: {
		...mapActions("projects", ["setCategory", "filterProjects"])
	},

	computed: {
		...mapGetters('projects', ['filteredProjects']),
		selectedCategory: {
			get() {
				return this.$store.state.projects.selectedCategory;
			},
			set(category) {
				this.setCategory(category);
			},
		},
		categories() {
			return [
				...new Set(
					this.$store.state.projects.projects.map(project => project.category)
				),
			];
		},
	},
};
</script>

<style lang="sass" scoped>
.banner
	background: url(../assets/img/projectPage/top_banner.jpg), lightgray 50% / cover no-repeat
	height: 35rem
	background-size: 192rem
	margin: 0 -36rem
	margin-bottom: 20rem
	display: flex
	justify-content: center
	align-items: flex-end

	&__heading
		display: flex
		flex-direction: column
		justify-content: center
		text-align: center
		width: 50rem
		height: 18rem
		background: white
		border-radius: 5rem 5rem 0rem 0rem

		&__h2
			color: #292F36
			font-family: DM Serif Display
			font-size: 5rem
			font-style: normal
			font-weight: 400
			line-height: 125%

		&__p
		color: #4D5053
		font-family: Jost
		font-size: 2.2rem
		font-style: normal
		font-weight: 400
		line-height: 150%
		letter-spacing: .022rem

.navigation
	display: flex
	justify-content: center
	border-radius: 1.8rem
	border: .01rem solid #CDA274
	margin-bottom: 6rem

.projects-nav
	width: 88rem
	height: 7.5rem
	gap: 9.6rem
	display: flex
	justify-content: center
	align-items: center
	color: #292F36
	text-align: center
	font-family: Jost
	font-size: 1.8rem
	font-style: normal
	font-weight: 600
	line-height: 125%
	letter-spacing: .036rem


.projects
	margin-bottom: 20rem
	column-count: 2
.project-box
	display: inline-block
	margin-bottom: 3rem

	&__img
		padding-bottom: 2.4rem

	&__description
		display: flex
		justify-content: space-between

	&__description h4
		color: #292F36
		font-family: DM Serif Display
		font-size: 2.5rem
		font-style: normal
		font-weight: 400
		line-height: 125%
		letter-spacing: .05rem

	&__description p
		color: #4D5053
		font-family: Jost
		font-size: 22px
		font-style: normal
		font-weight: 400
		line-height: 150%
		letter-spacing: 0.22px
</style>

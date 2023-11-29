<template>
	<div>
		<HeaderComponent />

		<main>
			<div class="background-photo"></div>
			<section class="content">
				<h2 class="heading">
					Let’s Get Solution for Building Construction Work
				</h2>
				<aside class="right-side">
					<h4>Tags</h4>
					<label
						v-for="tag in tags"
						:key="tag"
						:class="{
							'tag-button': true,
							'tag-button-active': selectedTag === tag,
						}"
					>
						<input
							type="radio"
							v-model="selectedTag"
							:value="tag"
							@change="filterArticles"
						/>
						{{ tag }}
					</label>
					<button @click="resetFilter">Reset filter</button>
				</aside>
			</section>
			<div
				class="articles"
				v-for="article in filteredArticles"
				:key="article.id"
			>
				<h2>{{ article.title }}</h2>
				<p>{{ article.content }}</p>
				<hr />
			</div>
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

	data() {
		return {
			tags: [
				'Kitchen',
				'Bedroom',
				'Building',
				'Architecture',
				'Kitchen Planning',
				'Bathroom',
			],
			articles: [
				{
					id: 1,
					title: 'Статья 1',
					content: 'Содержание статьи 1',
					tags: ['Kitchen'],
				},
				{
					id: 2,
					title: 'Статья 2',
					content: 'Содержание статьи 2',
					tags: ['Bedroom'],
				},
				{
					id: 3,
					title: 'Статья 3',
					content: 'Содержание статьи 3',
					tags: ['Building'],
				},
				{
					id: 4,
					title: 'Статья 4',
					content: 'Содержание статьи 4',
					tags: ['Architecture'],
				},
				{
					id: 5,
					title: 'Статья 5',
					content: 'Содержание статьи 5',
					tags: ['Kitchen Planning'],
				},
				{
					id: 6,
					title: 'Статья 6',
					content: 'Содержание статьи 6',
					tags: ['Bathroom'],
				},
			],
			selectedTag: 'Kitchen',
		};
	},

	methods: {
		filterArticles() {
			if (this.selectedTag) {
				return this.articles.filter(article =>
					article.tags.includes(this.selectedTag)
				);
			} else {
				return this.articles;
			}
		},
		resetFilter() {
			this.selectedTag = 'Kitchen';
		},
	},

	computed: {
		filteredArticles() {
			if (this.selectedTag) {
				return this.articles.filter(article =>
					article.tags.includes(this.selectedTag)
				);
			} else {
				return this.articles;
			}
		},
	},
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
	justify-content: space-between

.heading


.articles
	margin-bottom: 20rem

.right-side
	display: flex
	flex-direction: column

.tag-button
	display: inline-block
	margin-right: 10px
	padding: 5px 10px
	border: 1px solid #ccc
	border-radius: 4px
	cursor: pointer


.tag-button input
	display: none


.tag-button-active
	background-color: #3498db
	color: #fff
</style>

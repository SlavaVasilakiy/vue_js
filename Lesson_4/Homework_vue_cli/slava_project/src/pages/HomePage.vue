<template>
	<div>
		<HeaderComponent />

		<main>
			<section class="topContent">
				<div class="topContent__description">
					<h2 class="topContent__description-heading">
						Let Your Home Be Unique
					</h2>
					<p class="topContent__description-text">
						There are many variations of the passages of lorem Ipsum
						fromavailable, majority.
					</p>
					<button class="topContent__button" type="button">
						<span>Get Started</span
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="17"
							viewBox="0 0 18 17"
							fill="none"
						>
							<path
								d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
								stroke="#CDA274"
								stroke-width="2"
								stroke-linecap="square"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</div>
			</section>
			<section class="midContent">
				<div class="midContent__heading">
					<h2>Follow Our Projects</h2>
					<p>
						It is a long established fact that a reader will be distracted by
						the of readable content of page lookings at its layouts points.
					</p>
				</div>
				<div class="midContent__box">
					<div class="midContent__box-1">
						<img
							class="midContent__box-img1"
							src="../assets/img/middle_img_left_top.svg"
							alt="middle_img_left_top"
						/>
						<div class="midContent__box-description">
							<h3>Modern Kitchan</h3>
							<p>Decor / Artchitecture</p>
							<HomePageMiddleButton />
						</div>
					</div>
					<div class="midContent__box-2">
						<img
							class="midContent__box-img2"
							src="../assets/img/middle_img_right_top.svg"
							alt="middle_img_right_top"
						/>
						<div class="midContent__box-description">
							<h3>Modern Kitchan</h3>
							<p>Decor / Artchitecture</p>
							<HomePageMiddleButton />
						</div>
					</div>
					<div class="midContent__box-3">
						<img
							class="midContent__box-img3"
							src="../assets/img/middle_img_left_bottom.svg"
							alt="middle_img_left_bottom"
						/>
						<div class="midContent__box-description">
							<h3>Modern Kitchan</h3>
							<p>Decor / Artchitecture</p>
							<HomePageMiddleButton />
						</div>
					</div>
					<div class="midContent__box-4">
						<img
							class="midContent__box-img4"
							src="../assets/img/middle_img_right_bottom.svg"
							alt="middle_img_right_bottom"
						/>
						<div class="midContent__box-description">
							<h3>Modern Kitchan</h3>
							<p>Decor / Artchitecture</p>
							<HomePageMiddleButton />
						</div>
					</div>
				</div>
			</section>
			<section>
				<div>
					<p>12</p>
					<p>Years Of Experiance</p>
				</div>
				<div>
					<p>85</p>
					<p>Success Project</p>
				</div>
				<div>
					<p>15</p>
					<p>Active Project</p>
				</div>
				<div>
					<p>95</p>
					<p>Happy CUstomers</p>
				</div>
				<!-- info line -->
			</section>
			<section>
				<div>
					<h2>Articles & News</h2>
					<p>
						It is a long established fact that a reader will be distracted by
						the of readable content of a page when lookings at its layouts the
						points of using.
					</p>
				</div>
				<div>
					<img src="../assets/img/bottom_img_left.svg" alt="bottom_img_left" />
					<h3>Let’s Get Solution For Building Construction Work</h3>
					<p>26 December,2022</p>
					<button type="button">
						<img src="../assets/img/bottom_buttons.svg" alt="" />
					</button>
				</div>
				<div>
					<img
						src="../assets/img/bottom_img_middle.svg"
						alt="bottom_img_middle"
					/>
					<h3>Low Cost Latest Invented Interior Designing Ideas.</h3>
					<p>22 December,2022</p>
					<button type="button">
						<img src="../assets/img/bottom_buttons.svg" alt="" />
					</button>
				</div>
				<div>
					<img
						src="../assets/img/bottom_img_right.svg"
						alt="bottom_img_right"
					/>
					<h3>Best For Any Office & Business Interior Solution</h3>
					<p>25 December,2022</p>
					<button type="button">
						<img src="../assets/img/bottom_buttons.svg" alt="" />
					</button>
				</div>
				<!-- img*3 -->
			</section>
		</main>

		<FooterComponent/>
	</div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent';
import HomePageMiddleButton from '@/components/HomePageMiddleButton';

export default {
	name: 'HomePage',
	components: {
    HomePageMiddleButton,
    HeaderComponent,
    FooterComponent
},
	data() {
		return
	},
	computed: {},
	props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.header
	display: flex
	align-items: center
	justify-content: space-between
	margin-top: 5.2rem
	margin-bottom: 6rem

	&__logoAndName
		display: flex
		gap: 1rem

	&__heading
		color: #292f36
		font-family: DM Serif Display
		font-size: 4rem
		font-style: normal
		font-weight: 400
		line-height: 125%

	&__nav
		display: flex
		gap: 4.2rem

	&__nav a
		color: #292F36
		font-family: Jost
		font-size: 2rem
		font-style: normal
		font-weight: 400
		line-height: 125%

.topContent
	height: 75.8rem
	background: url(../assets/img/main_img_big_1.svg), lightgray 50% / cover no-repeat
	position: relative
	border-radius: 8rem
	margin-bottom: 9.6rem

	&__description
		position: absolute
		top: 20.8rem
		left: 5.2rem

	&__description-heading
		color: #292F36
		font-family: DM Serif Display
		font-size: 6.5rem
		font-style: normal
		font-weight: 400
		line-height: 125%
		width: 43.4rem
		padding-bottom: 1.8rem

	&__description-text
		color: #4D5053
		font-family: Jost
		font-size: 2.2rem
		font-style: normal
		font-weight: 400
		line-height: 150%
		letter-spacing: .022rem
		width: 43.4rem
		padding-bottom: 2.1rem

	&__button
		display: flex
		padding: 2.6rem 4.9rem 2.6rem 4.8rem
		flex-direction: row
		justify-content: center
		align-items: center
		gap: 1rem
		border-radius: 1.8rem
		background: #292F36
		box-shadow: 0rem 1rem 2rem 0rem rgba(192, 192, 192, 0.35)
		cursor: pointer

	&__button span
		color: #FFF
		text-align: center
		font-family: Jost
		font-size: 18px
		font-style: normal
		font-weight: 600
		line-height: 125%
		letter-spacing: .036rem

.midContent
	display: flex
	flex-direction: column

	&__heading
		display: flex
		flex-direction: column
		align-items: center
		gap: .8rem
		margin-bottom: 9.3rem

	&__heading h2
		color: #292F36
		text-align: center
		font-family: DM Serif Display
		font-size: 5rem
		font-style: normal
		font-weight: 400
		line-height: 125%
		letter-spacing: .1rem
		align-self: center

	&__heading p
		display: inline-block
		color: #4D5053
		text-align: center
		font-family: Jost
		font-size: 22px
		font-style: normal
		font-weight: 400
		line-height: 150%
		letter-spacing: 0.022rem
		width: 73.7rem

	&__box
		display: flex
		flex-direction: row
		flex-wrap: wrap
		justify-content: space-between
		margin-bottom: 10rem

	&__box-1, &__box-2
		margin-bottom: 5.6rem

	&__box-img1
		border-radius: 0rem 8rem 0rem 0rem
		margin-bottom: 2.4rem
		width: 55rem

	&__box-img2
		border-radius: 8rem 0rem 0rem 0rem
		margin-bottom: 2.4rem
		width: 55rem

	&__box-img3
		border-radius: 0px 0px 80px 0px
		margin-bottom: 2.4rem
		width: 55rem

	&__box-img4
		border-radius: 0px 0px 0px 80px
		margin-bottom: 2.4rem
		width: 55rem

	&__box-description
		position: relative

	&__box-description a
		position: absolute
		top: -.5rem
		left: 48rem

	&__box h3
		color: #292F36
		font-family: DM Serif Display
		font-size: 2.5rem
		font-style: normal
		font-weight: 400
		line-height: 125%
		letter-spacing: .05rem

	&__box p
		color: #4D5053
		font-family: Jost
		font-size: 2.2rem
		font-style: normal
		font-weight: 400
		line-height: 150%
		letter-spacing: .022rem
</style>

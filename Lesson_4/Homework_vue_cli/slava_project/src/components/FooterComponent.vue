<template>
	<div>
		<footer class="footer">
			<div class="block-1">
				<div class="block-1__logomain">
					<router-link to="/">
						<img
							class="block-1__logomain__img"
							src="../assets/logo/header_logo.svg"
							alt="logo"
						/>
					</router-link>
					<h3>Interno</h3>
				</div>
				<div class="block-1__paragraph">
					<p>
						It is a long established fact that a reader will be distracted
						lookings.
					</p>
				</div>
				<div class="block-1__social">
					<img
						class="block-1__twitter"
						src="../assets/logo/twitter_logo.svg"
						alt="twitter_logo"
					/>
					<img
						class="block-1__linkedIn"
						src="../assets/logo/linkedIn_logo.svg"
						alt="linkedIn_logo"
					/>
				</div>
			</div>
			<div class="block-2">
				<h5>Pages</h5>
				<router-link to="/">Home</router-link>
				<router-link to="project">Project</router-link>
				<router-link to="blog">Blog</router-link>
			</div>
			<div class="block-3">
				<h5>Contacts</h5>
				<p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
				<p>contact@interno.com</p>
				<p>(123) 456 - 7890</p>
			</div>
		</footer>
	</div>
</template>

<script>
export default {
	name: 'FooterComponent',
};
</script>

<style lang="sass" scoped>
.footer
	display: flex
	margin-bottom: 20rem

.footer h3
	color: #292F36
	font-family: DM Serif Display
	font-size: 4rem
	font-style: normal
	font-weight: 400
	line-height: 125%

.footer p
	color: #4D5053
	font-family: Jost
	font-size: 2.2rem
	font-style: normal
	font-weight: 400
	line-height: 150%
	letter-spacing: .022rem

.footer h5
	color: #292F36
	font-family: DM Serif Display
	font-size: 2.5rem
	font-style: normal
	font-weight: 400
	line-height: 125%

.block-1
	width: 40rem
	display: flex
	flex-direction: column
	margin-right: 10rem

	&__logomain
		display: flex
		gap: 1rem
		align-items: center
		padding-bottom: 1.8rem

	&__logomain__img
		width: 3.4rem

	&__paragraph
		padding-bottom: 3rem

	&__social
		display: flex
		gap: 5.4rem

	&__twitter
		width: 1.8rem

	&__linkedIn
		width: 1.6rem

.block-2
	display: flex
	flex-direction: column
	margin-right: 15rem

	& a
		color: #4D5053
		font-family: Jost
		font-size: 22px
		font-style: normal
		font-weight: 400
		line-height: 300%
		letter-spacing: 0.22px

.block-3
	display: flex
	flex-direction: column
	width: 26rem
	gap: 2rem
</style>

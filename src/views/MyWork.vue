<template>
	<div class="myWork">
		<section class="sectionContent">
			<div class="container">
				<h3 class="sectionContent__heading">{{ this.heading }}</h3>
				<p class="sectionContent__content">Coming soon........</p>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: "myWork",
	data: () => {
		return {
			heading: "My Work"
		};
	}
};
</script>

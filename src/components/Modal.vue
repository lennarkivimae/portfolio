<template>
<!-- v-if="this.$store.state.isModalActive" -->
	<div class="modal" v-if="this.$store.state.isModalActive">
		<div class="overlay" @click="closeModal"></div>
		<div class="modal__window">
			<div class="container">
				<div class="modal__header">
					<h3>{ header }</h3>
					<i class="fa fa-times fa-3x" @click="closeModal"></i>
				</div>
				<div class="modal__body">{ Content here }</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "modal",
	methods: {
		closeModal() {
			this.$store.state.isModalActive = false;
		}
	}
};
</script>
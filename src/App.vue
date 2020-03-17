<template>
	<div id="app">
		<Modal>></Modal>
		<Header></Header>
		<transition name="fade">
			<router-view />
		</transition>
		<Footer></Footer>
	</div>
</template>

<script>
import header from "@/components/Header";
import footer from "@/components/Footer";
import modal from "@/components/Modal";

export default {
	name: "app",
	components: {
		Footer: footer,
		Header: header,
		Modal: modal
	}
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>

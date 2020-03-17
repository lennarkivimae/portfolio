<template>
	<div class="skillBar">
		<p class="sectionContent__content">
			<b>This is what I know:</b>
		</p>
		<div class="skillBar__items">
			<img class="skillBar__item" src="@/assets/img/icons/js.svg" alt="js logo" />
			<img class="skillBar__item" src="@/assets/img/icons/css.svg" alt="css logo" />
			<img class="skillBar__item" src="@/assets/img/icons/php.svg" alt="php logo" />
			<img class="skillBar__item" src="@/assets/img/icons/bootstrap.svg" alt="bootstrap logo" />
			<img class="skillBar__item" src="@/assets/img/icons/html.svg" alt="html logo" />
			<img class="skillBar__item" src="@/assets/img/icons/jquery.svg" alt="jquery logo" />
			<img class="skillBar__item" src="@/assets/img/icons/mysql.svg" alt="mysql logo" />
			<img class="skillBar__item" src="@/assets/img/icons/react.svg" alt="react logo" />
			<img class="skillBar__item" src="@/assets/img/icons/node.svg" alt="node logo" />
			<img class="skillBar__item" src="@/assets/img/icons/vue.svg" alt="vue logo" />
		</div>
	</div>
</template>

<script>

export default {
	name: "skillBar",
	methods: {
		prevItem() {
			const items = document.querySelector(".skillBar__items");
			items.scrollLeft -= 120;
		},
		nextItem() {
			const items = document.querySelector(".skillBar__items");
			items.scrollLeft += 120;
		}
	}
};
</script>

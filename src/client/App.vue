<template>
	<p>{{ msg }}</p>
</template>

<script>
	export default {
		name: 'App',
		data: () => {
			return {
				msg: 'Hello!'
			};
		},
		methods: {}
	}
</script>

<style scoped>
	p {
		color: #00f;
	}
</style>

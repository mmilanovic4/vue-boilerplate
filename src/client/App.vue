<template>
	<fragment>
		<p>{{ msg }}</p>
		<input v-model="item" />
		<button v-on:click="saveItemToItems" :disabled="item.length === 0">
			Add item
		</button>
		<ul v-if="items.length > 0">
			<li v-for="(item, index) in items" :key="index">
				<span>{{ item }}</span>
				<button v-on:click="removeItem(index)">x</button>
			</li>
		</ul>
		<p v-if="!items.length">There are no items in the list currently.</p>
	</fragment>
</template>

<script>
export default {
	name: 'App',
	data: () => {
		return {
			msg: 'Hello!',
			item: '',
			items: ['Apples', 'Oranges']
		};
	},
	methods: {
		saveItemToItems: function () {
			if (this.item) this.items.push(this.item);
			this.item = '';
		},
		removeItem: function (itemIndex) {
			this.items = this.items.filter((_, index) => index !== itemIndex);
		}
	}
};
</script>

<style scoped>
p {
	color: #00f;
}
ul li span {
	display: inline-block;
	width: 100px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
</style>

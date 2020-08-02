<template>
	<div class="wrapper">
		<div>8888</div>

		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data(){
			return {
				
			}
		},
		mounted(){
			let baseUrl = 'http://192.168.1.2:5678/data'
			this.$axios.get(`${baseUrl}/mmf/ap.tngdwallet.finprod.yield`)
			.then(function (res) {
		    	console.log(res.data);
		  	})
		  	.catch(function (error) {
		    	console.log(error);
		  	});
		}
	}
</script>

<style lang="less">
	@color:green;
	.wrapper{
		color:@color;
	}
</style>
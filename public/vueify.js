let jumbotron = Vue.component('jumbotron', {
	template: `
	<div class="jumbotron jumbotron-fluid">
		<div class="container">
			<h1 class="display-3">{{header}}</h1>
			<p class="lead">{{text}}</p>
		</div>
	</div>		
	`,
	props: ['header', 'text'],
})


var mainVm = new Vue ({
	el: '#app',
	data: {

	},
	components: {
		jumbotron,
	}
})
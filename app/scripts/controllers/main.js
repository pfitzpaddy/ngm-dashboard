'use strict';

/**
 * @ngdoc function
 * @name ngmaterializeDashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngmaterializeDashboardApp
 */
angular.module('ngmaterializeDashboardApp', ['ngm'])
  .controller('MainCtrl', function ($scope) {
	$scope.awesomeThings = [
	  'HTML5 Boilerplate',
	  'AngularJS',
	  'Karma'
	];

	var model = {
	  title: "Sample",
	  rows: [{
		columns: [{
		  styleClass: "s12 m12 l4",
		  widgets: [{
			type: "linklist",
			card: "card-panel stats-card indigo lighten-2 indigo-text text-lighten-5",
			// card: "card blue-grey darken-1 small",
			config: {
			  links: [{
				title: "SCM-Manager",
				href: "http://www.scm-manager.org"
			  }]
			},
			title: "Links"
		  },{
			type: "linklist",
			card: "card-panel stats-card yellow lighten-2 yellow-text text-lighten-5",
			// card: "card blue-grey darken-1 small",
			config: {
			  links: [{
				title: "SCM-Manager",
				href: "http://www.scm-manager.org"
			  }]
			},
			title: "Links"
		  },{
			type: "linklist",
			card: "card-panel stats-card teal lighten-2 teal-text text-lighten-5",
			// card: "card blue-grey darken-1 small",
			config: {
			  links: [{
				title: "SCM-Manager",
				href: "http://www.scm-manager.org"
			  }]
			},
			title: "Links"
		  }]
		}, {
		  styleClass: "s12 m12 l8",
		  widgets: [{
			type: "randommsg",
			card: "card small",
			config: {},
			title: "Douglas Adams"
		  }]
		}]
	  }]
	};
	$scope.name = 'Sample';
	$scope.model = model;
	$scope.collapsible = false;
	
  });

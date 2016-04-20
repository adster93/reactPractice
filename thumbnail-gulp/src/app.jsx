var React = require('react');
var ThumbnailList = require('./thumbnailList')

var options = {
	thumbnailData:	[{
		title: 'See Tutorials',
		number: 130,
		imageUrl: 'https://tleunen.github.io/react-mdl/react.svg',
		header: 'Learn React',
		description: 'React is a fantastic new library for making fast, dynamic pages'
	},{
		title: 'Show Courses',
		number: 25,
		imageUrl: 'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png',
		header: 'Learn Gulp',
		description: 'Gulp will speed up your development workflow'
	}]
};

var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.container'));
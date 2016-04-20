var options = {
	thumbnailData:	[{
		title: 'See Tutorials',
		number: 32,
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
var Badge = React.createClass({displayName: "Badge",
	render: function(){

	return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
   this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
)
	}

})
var Thumbnail = React.createClass({displayName: "Thumbnail",
	render: function(){
	return React.createElement("div", {className: "col-sm-6 col-md-4 thumbnail"}, 
      React.createElement("img", {src: this.props.imageUrl}), 
      React.createElement("div", {className: "caption"}, 
        React.createElement("h3", null, this.props.header), 
        React.createElement("p", null, this.props.description), 
        React.createElement("p", null, 
        	React.createElement(Badge, {title: this.props.title, number: this.props.number})
        )
      )
    )
	}
});
var ThumbnailList = React.createClass({displayName: "ThumbnailList",
	render: function(){
		var list = this.props.thumbnailData.map(function(thumbnailProps){
			return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
		})
		return React.createElement("div", null, 
			list
		)
	}
})
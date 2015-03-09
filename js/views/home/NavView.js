/** @jsx React.DOM */
define([
  'jquery',
  'underscore',
  'backbone',
  'react'
], function($, _, Backbone, React){

  var NavView = React.createClass({
	  componentDidMount: function() {
        this.props.model.on('change', function() {
            this.forceUpdate();
        }.bind(this));
      },
	  render : function() {		
		  return (
			<ul className="nav">
				<li className={this.props.model.attributes.option == "#" ? 'active' : ''}><a href="#">Home</a></li>
				<li className={this.props.model.attributes.option == "#/jqgrid" ? 'active' : ''}><a href="#/jqgrid">jQGrid ReactJS</a></li>
			</ul>
		)
	  }
	});

  return NavView;
  
});

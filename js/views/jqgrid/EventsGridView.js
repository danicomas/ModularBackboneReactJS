/** @jsx React.DOM */
define([
  'jquery',
  'underscore', 
  'backbone',  
  'react',
  'libs/jqgrid/grid.locale-en',
  'libs/jqgrid/jquery.jqGrid.src'
], function($, _, Backbone, React, jqGrid){
	var EventsGridView = React.createClass({
		componentDidMount: function() {
			var context = this;

			var element = this.getDOMNode();
			$(element).find("#eventsgrid").jqGrid({
				datatype: function(postdata) {
					var result = {
						"rows":[{'title':'Daniel'},{'title':'Comas'}, {title: "Fernández"}],
						"records":3,
						"total":2,
						"page":1
					};

					if (postdata.page == 1 && postdata.sord == "asc") {
						result = {
						"rows":[{'title':'Fernández'},{'title':'Comas'}, {title: "Daniel"}],
						"records":3,
						"total":2,
						"page":1
						};            
					}

					if(postdata.page == 2) {
						result = {
						"rows":[{'title':'Ingens'},{'title':'Networks'}],
						"records":5,
						"total":2,
						"page":2
						};
					}

					context.props.eventsModel.set(result);
					
					$(element).find("#eventsgrid")[0].addJSONData(context.props.eventsModel.attributes);
				},
				colNames: ['Title'],
				colModel: [
					{ name: 'title', index: 'title', sortable: true, key: true }
				],
				rowNum: 3,
				sortname: '',
				viewrecords: true,
				sortorder: "desc",
				caption: "",
				pager: '#eventsgridpager',
				autowidth: true,
				loadOnce: true,
				scrollOffset: false,
				height: '',
				subGrid: false,
				onSelectRow: function (rowid, status, e) {
					var filteredEvents = _.where(context.props.eventsModel.attributes.rows, {title: rowid});
					context.props.eventModel.set("title", filteredEvents[0].title);
				},
				loadComplete: function (maingrid_id) {
					alert(maingrid_id);
				}
			});
		},	  
		render : function() {
			return (
				<div><table id="eventsgrid" /><div id="eventsgridpager"></div></div>
			);
		}
	});

	return EventsGridView;
});

/** @jsx React.DOM */
define([
  'jquery', 
  'underscore', 
  'backbone',  
  'react',
  'jsx!views/jqgrid/EventsGridView',
  'models/jqgrid/EventModel',
  'models/jqgrid/EventsModel'
], function($, _, Backbone, React, EventsGridView, EventModel, EventsModel){
	var EventsFormView = React.createClass({
      componentDidMount: function() {
        this.props.eventModel.on('change', function() {
            this.forceUpdate();
        }.bind(this));
      },
      render : function() {
		if(!this.props.eventModel) {
			this.props.eventModel = new EventModel();
		}
		
		if(!this.props.eventsModel) {
			this.props.eventsModel = new EventsModel();
		}	  
          return (
            <div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" placeholder="Name" value={this.props.eventModel.attributes.title} />
                  </div>
                </div>
              </div>
              <div class="row">
                <EventsGridView eventsModel={this.props.eventsModel} eventModel={this.props.eventModel} />
              </div>
            </div>
        )
      }
    });

  return EventsFormView;
});


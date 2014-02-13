App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

// for more details see: http://emberjs.com/guides/components/

App.IceHockey = Ember.Component.extend();

App.Curling = Ember.Component.extend();
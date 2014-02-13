App = Ember.Application.create();

App.Router.map(function() {
  this.resource("dogs", function(){
    this.route("new");
  });
  this.resource("cats", function(){
    this.route("new");
  });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo("dogs");
  }
});

App.ApplicationRoute = Ember.Route.extend({
  setupController: function(controller, model){
    controller.set("timestamp", (new Date()).getTime());
  }
});

App.DogsRoute = Ember.Route.extend({
  setupController: function(controller, model){
    controller.set("timestamp", (new Date()).getTime());
  }
});

App.DogsIndexRoute = Ember.Route.extend({
  setupController: function(controller, model){
    controller.set("timestamp", (new Date()).getTime());
  }
});

App.DogsNewRoute = Ember.Route.extend({
  setupController: function(controller, model){
    controller.set("timestamp", (new Date()).getTime());
  }
});

App.CatsRoute = Ember.Route.extend({
  setupController: function(controller, model){
    controller.set("timestamp", (new Date()).getTime());
  }
});

App.CatsIndexRoute = Ember.Route.extend({
  setupController: function(controller, model){
    controller.set("timestamp", (new Date()).getTime());
  }
});

App.CatsNewRoute = Ember.Route.extend({
  setupController: function(controller, model){
    controller.set("timestamp", (new Date()).getTime());
  }
});

App.HeaderView = Ember.View.extend({
  templateName: "header"
});

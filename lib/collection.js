var model  = require("bindable-model"),
protoclass = require("protoclass");

function MojoModelCollection (data, application) {
  this.application = application;
  MojoModelCollection.parent.call(this, data);
}

module.exports = protoclass(model.Collection, MojoModelCollection, {});
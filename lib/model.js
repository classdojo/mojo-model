var model  = require("bindable-model"),
protoclass = require("protoclass");

function MojoModel (data, application) {
  this.application = application;
  MojoModel.parent.call(this, data);
}

module.exports = protoclass(model.Model, MojoModel, {});
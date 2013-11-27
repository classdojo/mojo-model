var model  = require("bindable-model"),
protoclass = require("protoclass");

function MojoModel (data, application) {
  MojoModel.parent.call(this, data);
}

module.exports = protoclass(model.Model, MojoModel, {});
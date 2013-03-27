"use strict";

module.exports = function(app) {
    var config = app.plugins.shipgen.config[app.get('env')],
        levels = config.levels,
        numberOfClasses = config.numberOfClasses,

        // define models
        moduleSlot = app.schema.define('moduleSlot', {
            published: { type: Boolean, default: false },

            size: { type: Number, default: levels.min, min: levels.min, max: levels.max },
            
            crew: { type: Number, default: levels.min, min: levels.min, max: levels.max },
            
            type: { type: app.Schema.ObjectID },
            
            modType: { type: String, default: 'weapon' },
            
            cost: { type: Number, default: levels.min, min: levels.min }
        });

    return moduleSlot;
}
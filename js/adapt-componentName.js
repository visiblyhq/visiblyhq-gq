define([
    'core/js/adapt',
    './componentNameView',
    './componentNameModel'
], function(Adapt, ComponentNameView, ComponentNameModel) {

    return Adapt.register("componentName", {
        view: ComponentNameView,
        model: ComponentNameModel
    });

});

import Adapt from 'core/js/adapt';
import React from 'react';
import { compile, classes, templates, html } from 'core/js/reactHelpers';

export default function (model, view) {
  const data = model.toJSON();
  data._globals = Adapt.course.get('_globals');
  return (
    <div className="component__inner component__inner">

      <div className="component__widget component__widget">
        <div class="componentName__inner component__inner" role="region" aria-label="{{_globals._components._componentName.ariaRegion}}">
          {templates.component(model, view)}

          <div class="componentName__widget component__widget">
              {/* Do your stuff here */}
          </div>

          {/* This ensures that the standard question component buttons are automatically rendered into your view */}
          <div class="btn__container"></div>
        </div>
      </div>
    </div>
  );
}

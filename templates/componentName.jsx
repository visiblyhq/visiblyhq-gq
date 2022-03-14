import Adapt from 'core/js/adapt';
import React from 'react';
import { compile, classes, templates, html } from 'core/js/reactHelpers';

export default function (props) {
  const _globals = Adapt.course.get('_globals');
  
  const {
    _id,
    _isEnabled,
    _isInteractionComplete,
    _isCorrect,
    _isCorrectAnswerShown,
    _shouldShowMarking,
    displayTitle,
    body,
    instruction
  } = props;
  
  return (
    <div className="componentName__inner component__inner">
      
      <templates.header {...props} />

      <div 
        className={classes([
          'component__widget',
          'componentName__widget',
          !_isEnabled && 'is-disabled',
          _isInteractionComplete && 'is-complete is-submitted show-user-answer',
          _isCorrect && 'is-correct'
        ])}
      >

        {/* Do your stuff here */}

      </div>

      {/* This ensures that the standard question component buttons are automatically rendered into your view */}
      <div className="btn__container"></div>

    </div>
  );
}

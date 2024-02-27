import Adapt from 'core/js/adapt';
import React, { useEffect } from 'react';
import { compile, classes, templates } from 'core/js/reactHelpers';
import Sortable from 'libraries/Sortable.js';

export default function (props) {

  const {
    _id,
    _isEnabled,
    _isInteractionComplete,
    _isCorrect,
    displayTitle,
    body,
    instruction,
    firstGroup,
    secondGroup,
    options,
    incrementItemsSorted,
    setGroupingIsCorrectFalse
  } = props;

  useEffect(() => {
    var el = document.getElementById("listToChooseFrom");
    if (el !== null) {
      Sortable.create(el, {
        group: {
          name: "group1",
          put: false
        },
        animation: 100,
        sort: false
      });
    }

    var el2 = document.getElementById("listToDrop1");
    if (el2 !== null) {
      Sortable.create(el2, {
        group: {
          name: firstGroup.name,
          put: ["group1"],
        },
        sort: false,
        animation: 100,
        onAdd: function (/**Event*/evt) {
          var itemEl = evt.item;  // dragged HTMLElement

          if (JSON.stringify(options._items[itemEl.getAttribute("initialIndex")].groupName) !== JSON.stringify(firstGroup.name)) {
            setGroupingIsCorrectFalse();
          }

          incrementItemsSorted();
        }
      });
    }

    var el3 = document.getElementById("listToDrop2");
    if (el3 !== null) {
      Sortable.create(el3, {
        group: {
          name: secondGroup.name,
          put: ["group1"],
        },
        sort: false,
        animation: 100,
        onAdd: function (/**Event*/evt) {
          var itemEl = evt.item;  // dragged HTMLElement

          if (JSON.stringify(options._items[itemEl.getAttribute("initialIndex")].groupName) !== JSON.stringify(secondGroup.name)) {
            setGroupingIsCorrectFalse();
          }

          incrementItemsSorted();
        }
      });
    }
  });

  return (
    <div className="groupingQuestion__inner component__inner">

      <templates.header {...props} />

      <div
        className={classes([
          'component__widget',
          !_isEnabled && 'is-disabled',
          _isInteractionComplete && 'is-complete is-submitted show-user-answer',
          _isCorrect && 'is-correct'
        ])}
      >
        <h3>{options.name}</h3>
        <ul
          id="listToChooseFrom"
          style={{
            listStyle: "none"
          }}
          role="listbox"
          disabled={!_isEnabled}
        >
          {options._items.map(({
            text
          }, index) => {
            return <li initialIndex={`${index}`} >
              <div dangerouslySetInnerHTML={{ __html: text || compile(text) }}>
              </div>
            </li>;
          })}

        </ul>
        <div>
          <div>{firstGroup.title}</div>
          <ul id="listToDrop1"
            className={classes([
              'component__widget',
              'groupingQuestion__widget',
              _isInteractionComplete && _isCorrect && 'is-correct',
              _isInteractionComplete && !_isCorrect && 'is-incorrect'
            ])}
          >
          </ul>
          <div>{secondGroup.title}</div>
          <ul id="listToDrop2"
            className={classes([
              'component__widget',
              'groupingQuestion__widget',
              _isInteractionComplete && _isCorrect && 'is-correct',
              _isInteractionComplete && !_isCorrect && 'is-incorrect'
            ])}
          >
          </ul>
        </div>

      </div>

      {/* This ensures that the standard question component buttons are automatically rendered into your view */}
      <div className="btn__container"></div>

    </div>
  );
}

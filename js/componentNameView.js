define([
    'core/js/views/questionView'
], function(QuestionView) {

    var ComponentNameView = QuestionView.extend({

        /**
         * Used to disable the question during submit and complete stages
         */
        disableQuestion: function() {},

        /**
         * Used to enable the question during submit and complete stages
         */
        enableQuestion: function() {},

        /**
         * Used to reset the question when revisiting the component
         * @param {string} [type] - the type of reset e.g. hard/soft
         */
        resetQuestionOnRevisit: function(type) {},

        /**
         * Used by question components instead of preRender
         */
        setupQuestion: function() {},

        /**
         * Used by question components instead of postRender
         */

        onQuestionRendered: function() {},

        /**
         * Called when the user clicks submit and this.model.canSubmit() returns false
         * Not necessary but you
         */
        onCannotSubmit: function() {},

        /**
         * This is important and should give the user visual feedback on how they answered the question
         * Normally done through ticks and crosses by adding classes
         */
        showMarking: function() {},

        /**
         * Resets the look and feel of the component
         * This could also include resetting item data
         * This is triggered when the reset button is clicked so it shouldn't be a full reset
         */
        resetQuestion: function() {},

        /**
         * Displays the correct answer to the user
         */
        showCorrectAnswer: function() {},

        /**
         * Displays the user's answer and hides the correct answer
         * Should use the values stored in this.storeUserAnswer
         */
        hideCorrectAnswer: function() {},

        /**
         * Used by adapt-contrib-spoor to get the user's answers in the format
         * required by the cmi.interactions.n.student_response data field
         * @returns {string} a string representation of the user's answer
         */
        getResponse:function() {},

        /**
         * Used by adapt-contrib-spoor to get the type of this question in the
         * format required by the cmi.interactions.n.type data field.
         * Please note the answer will not store correctly unless this function returns a valid string
         * @returns {string} one of the following: choice, matching, numeric, fill-in
         */
        getResponseType:function() {}

    });

    return ComponentNameView;

});

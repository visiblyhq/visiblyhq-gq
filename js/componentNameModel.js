define([
    'core/js/models/questionModel'
], function(QuestionModel) {
    
    var ComponentNameModel = QuestionModel.extend({

        /**
         * Used to restore the user's answers when revisiting the page or course
         */
        restoreUserAnswers: function() {
            if (!this.get("_isSubmitted")) {
                return;
            }

            // The user answer is retrieved here
            // This value can then be used to set individual answers on items
            var userAnswer = this.get("_userAnswer");

            this.setQuestionAsSubmitted();
            this.markQuestion();
            this.setScore();
            this.setupFeedback();
        },

        /**
         * Used to check if the user is allowed to submit the question
         * @returns {boolean}
         */
        canSubmit: function() {},

        /**
         * This evaluates the user's answer and stores the value
         * This value can then be used later on e.g. by the view to show the user's answer
         */
        storeUserAnswer: function() {
            // Expand on this to retrieve the user's answer as a single value
            var userAnswer;

            this.set("_userAnswer", userAnswer);
        },

        /**
         * Used to establish if the question is correct or not
         * @returns {boolean}
         */
        isCorrect: function() {},

        /**
         * Used to set the score based upon the _questionWeight
         */
        setScore: function() {
            // You may wish to expand on the following
            var questionWeight = this.get('_questionWeight');
            var score = this.get('_isCorrect') ? questionWeight : 0;
            this.set('_score', score);
        },

        /**
         * Used by the question to determine if the question is incorrect or partly correct
         * @returns {boolean}
         */
        isPartlyCorrect: function() {},

        /**
         * Resets the stored user answer
         */
        resetUserAnswer: function() {},
    });

    return ComponentNameModel;

});

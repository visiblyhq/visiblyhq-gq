import QuestionView from 'core/js/views/questionView';

class GroupingQuestionView extends QuestionView {

  preinitialize() {
    this.incrementItemsSorted = (...args) => this.model.incrementItemsSorted(...args);
    this.setGroupingIsCorrectTrue = (...args) => this.model.setGroupingIsCorrectTrue(...args);
    this.setGroupingIsCorrectFalse = (...args) => this.model.setGroupingIsCorrectFalse(...args);
  }

  /**
   * Used by question components instead of preRender
   */
  setupQuestion() {
    this.model.resetItemsSorted();
    this.model.resetGroupingIsCorrect();
  }

  /**
   * Used by question components instead of postRender
   */
  onQuestionRendered() {
    this.setReadyStatus();
  }

  /**
   * Called when the user clicks submit and this.model.canSubmit() returns false
   */
  onCannotSubmit() {}

}

GroupingQuestionView.template = 'groupingQuestion.jsx';

export default GroupingQuestionView;

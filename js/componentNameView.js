import QuestionView from 'core/js/views/questionView';

class ComponentNameView extends QuestionView {

  /**
   * Used by question components instead of preRender
   */
  setupQuestion() {}

  /**
   * Used by question components instead of postRender
   */
  onQuestionRendered() {}

  /**
   * Called when the user clicks submit and this.model.canSubmit() returns false
   */
  onCannotSubmit() {}

}

ComponentNameView.template = 'componentName.jsx';

export default ComponentNameView;

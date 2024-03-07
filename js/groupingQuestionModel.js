import QuestionModel from 'core/js/models/questionModel';

export default class GroupingQuestionModel extends QuestionModel {

  /**
   * Used to set model defaults
   */
  defaults() {
    var itemsLength = 0;
    const options = this.get('options');
    if (options !== undefined) {
      itemsLength = options._items.length;
      this.set('_totalItems', itemsLength);
    }

    // Extend from the QuestionModel defaults
    return QuestionModel.resultExtend('defaults', {
      _groupingCompleted: false,
      _groupingIsCorrect: true,
      _itemsSorted: 0,
      _totalItems: itemsLength
    });
  }

  incrementItemsSorted() {
    this.set('_itemsSorted', parseInt(this.get('_itemsSorted')) + 1);
    if (parseInt(this.get('_itemsSorted').valueOf()) === parseInt(this.get('_totalItems').valueOf())) {
      this.set('_groupingCompleted', true);
      this.checkCanSubmit();
    }
  }

  resetItemsSorted() {
    this.set('_itemsSorted', 0);
  }

  setGroupingIsCorrectTrue() {
    this.set('_groupingIsCorrect', true);
  }

  setGroupingIsCorrectFalse() {
    this.set('_groupingIsCorrect', false);
  }

  resetGroupingIsCorrect() {
    this.set('_groupingIsCorrect', true);
  }

  /**
   * Used to restore the user's answers when revisiting the page or course
   */
  restoreUserAnswers() {
    if (!this.get('_isSubmitted')) return;

    // Note: _userAnswer can only contain arrays, booleans and numbers.
    // Each array must contain the same type, such that only arrays of arrays,
    // arrays of booleans and arrays of numbers are allowed.
    // [[true, false], [0, 1, 2, 3]]
    // [0, 1, 2, 3]
    // [true, false]
    const userAnswer = this.get('_userAnswer');

    // TODO: Write your restoration code here
    this.resetItemsSorted();
    this.resetGroupingIsCorrect();

    this.setQuestionAsSubmitted();
    this.markQuestion();
    this.setScore();
    this.setupFeedback();
  }

  /**
   * Used to check if the user is allowed to submit the question
   * @returns {boolean}
   */
  canSubmit() {
    return (this.get('_groupingCompleted'));
  }

  /**
   * Used to establish if the question is correct or not
   * @returns {boolean}
   */
  isCorrect() {
    return this.get('_groupingIsCorrect');
  }

  /**
   * Used by the question to determine if the question is incorrect or partly correct
   * @returns {boolean}
   */
  isPartlyCorrect() {}

  /**
   * Returns a numerical value between maxScore and minScore
   * @type {number}
   */
  get score() {
    return this.get('_isCorrect') ? this.maxScore : 0;
  }

  /**
   * @type {number}
   */
  get maxScore() {
    return this.get('_questionWeight');
  }

  /**
   * @type {number}
   */
  get minScore() {
    return 0;
  }

  /**
   * This determines the show/hide of marking in the template.
   * If shouldShowMarking the user will be given visual feedback on how they answered the question.
   * Normally done through ticks and crosses by adding classes
   */
  shouldShowMarking() {
    return (this.get('_groupingCompleted') && this.get('_isSubmitted'));
  }

  /**
   * Creates a string explaining the answer (or answer range) the learner should have chosen
   * Used by ButtonsView to retrieve question-specific correct answer text for the ARIA
   * 'live region' that gets updated when the learner selects the 'show correct answer' button
   * @return {string}
   */
  getCorrectAnswerAsText() {}

  /**
   * Creates a string listing the answer the learner chose
   * Used by ButtonsView to retrieve question-specific user answer text for the ARIA
   * 'live region' that gets updated when the learner selects the 'hide correct answer' button
   * @return {string}
   */
  getUserAnswerAsText() {}

  /**
   * This evaluates the user's answer and stores the value
   * This value can then be used later on e.g. by the view to show the user's answer
   */
  storeUserAnswer() {
    // Note: _userAnswer can only contain arrays, booleans and numbers.
    // Each array must contain the same type, such that only arrays of arrays,
    // arrays of booleans and arrays of numbers are allowed.
    // [[true, false], [0, 1, 2, 3]]
    // [0, 1, 2, 3]
    // [true, false]
    let userAnswer = null;
    userAnswer = this.get('_groupingIsCorrect');

    this.set('_userAnswer', userAnswer);
  }

  /**
   * Used to reset the question when revisiting the component
   * @param {string} [type] - the type of reset e.g. hard/soft
   */
  reset(type = 'hard', canReset = this.get('_canReset')) {
    super.reset(type, canReset);
  }

  /**
   * Resets the user's selection
   * This is triggered when the reset button is clicked.
   */
  resetQuestion() {}

  /**
   * Resets the stored user answer
   */
  resetUserAnswer() {
    this.set('_userAnswer', null);
  }

  /**
   * Used by adapt-contrib-spoor to get the user's answers in the format
   * required by the cmi.interactions.n.student_response data field
   * 3-48, p.56 https://github.com/adaptlearning/scorm_docs/blob/master/SCORM%201.2/SCORM_1.2_RunTimeEnv.pdf
   * @returns {string} a string representation of the user's answer
   */
  getResponse() {}

  /**
    * Used by adapt-contrib-spoor to get the type of this question in the
    * format required by the cmi.interactions.n.type data field.
    * Please note the answer will not store correctly unless this function returns a valid string
    * 3-48, p.56 https://github.com/adaptlearning/scorm_docs/blob/master/SCORM%201.2/SCORM_1.2_RunTimeEnv.pdf
    * @returns {string} one of the following: choice, matching, numeric, fill-in
    */
  getResponseType() {}
}

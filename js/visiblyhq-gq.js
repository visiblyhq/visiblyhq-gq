import components from 'core/js/components';
import GroupingQuestionView from './groupingQuestionView';
import GroupingQuestionModel from './groupingQuestionModel';

export default components.register('grouping', {
  view: GroupingQuestionView,
  model: GroupingQuestionModel
});

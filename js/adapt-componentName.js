import components from 'core/js/components';
import ComponentNameView from './componentNameView';
import ComponentNameModel from './componentNameModel';

export default components.register('componentName', {
  view: ComponentNameView,
  model: ComponentNameModel
});

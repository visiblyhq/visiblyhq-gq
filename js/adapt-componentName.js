import Adapt from 'core/js/adapt';
import ComponentNameView from './componentNameView';
import ComponentNameModel from './componentNameModel';

export default Adapt.register('componentName', {
  view: ComponentNameView,
  model: ComponentNameModel
});

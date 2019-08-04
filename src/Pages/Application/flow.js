import You from './You';
import CoAdopter from './CoAdopter';
import Family from './Family';
import Home from './Home';
import Lifestyle from './Lifestyle';
import Agreements from './Agreements';
import Reference from './Reference';
import Success from './Success';

export default [{
  step: 'apply',
  substep: 'personal',
  url: 'you',
  header: 'Now we need to know more about you',
  showNextUrl: true,
  component: You,
}, {
  step: 'apply',
  substep: 'personal',
  url: 'co-adopter',
  showNextUrl: true,
  component: CoAdopter,
}, {
  step: 'apply',
  substep: 'personal',
  url: 'family',
  showNextUrl: true,
  component: Family,
}, {
  step: 'apply',
  substep: 'home',
  url: 'home',
  showNextUrl: true,
  component: Home,
}, {
  step: 'apply',
  substep: 'lifestyle',
  url: 'lifestyle',
  component: Lifestyle,
}, {
  step: 'apply',
  url: 'agreements',
  component: Agreements,
}, {
  step: 'verify',
  header: 'Your application is complete',
  url: 'ref',
  component: Reference,
}, {
  step: 'adopt',
  url: 'success',
  header: 'We sent your references a request',
  component: Success,
}]
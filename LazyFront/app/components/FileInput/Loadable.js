/**
 *
 * Asynchronously loads the component for FileInput
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});

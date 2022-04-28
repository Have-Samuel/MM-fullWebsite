import renderer from 'react-test-renderer';
import Quote from '../pages/Home';

it('render correctly', () => {
  const tree = renderer
    .create(<Quote />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

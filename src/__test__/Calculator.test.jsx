import renderer from 'react-test-renderer';
import Calculator from '../components/calculator/Calculator';

it('render correctly', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

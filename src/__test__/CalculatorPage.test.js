import renderer from 'react-test-renderer';
import CalculatorPage from '../pages/CalculatorPage';

it('render correctly', () => {
  const tree = renderer.create(<CalculatorPage />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

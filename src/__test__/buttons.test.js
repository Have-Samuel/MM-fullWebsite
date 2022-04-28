import renderer from 'react-test-renderer';
import Button from '../components/buttons/buttons';

it('render correctly', () => {
  const handleButtonClick = (btnContent) => btnContent;
  const tree = renderer
    .create(<Button handleButtonClick={handleButtonClick} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

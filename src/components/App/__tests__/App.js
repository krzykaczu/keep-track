import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import 'jest-dom/extend-expect';
import 'jest-styled-components';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { today } from '../../../data/projects';
import { addDays } from 'date-fns';
import { colors } from '../../../utils/colors';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('App renders as expected', () => {
  const { getByTestId, container } = render(<App />);
  //expect(container).toMatchSnapshot();

  expect(getByTestId('addButton')).toBeDisabled();
});

test('MyApp renders as expected, adds new projects, removes projects', () => {
  const { queryByTestId, container } = render(<App />);
  //expect(container).toMatchSnapshot();

  expect(queryByTestId('client')).toBeInTheDocument();

  //deleting all mock projects from the app

  fireEvent.click(queryByTestId('completeButton'));
  fireEvent.click(queryByTestId('completeButton'));
  fireEvent.click(queryByTestId('completeButton'));
  fireEvent.click(queryByTestId('completeButton'));

  expect(queryByTestId('client')).not.toBeInTheDocument();

  expect(queryByTestId('addButton')).toBeDisabled();

  //adding a new project

  fireEvent.change(queryByTestId('clientPicker'), {
    target: { value: 'Vitra' },
  });
  fireEvent.change(queryByTestId('projectInput'), {
    target: { value: 'Produce 50 sofas' },
  });
  expect(queryByTestId('addButton')).not.toBeDisabled();
  fireEvent.click(queryByTestId('addButton'));

  expect(queryByTestId('client')).toHaveTextContent('Vitra');
  expect(queryByTestId('project')).toHaveTextContent('Produce 50 sofas');
  expect(queryByTestId('range')).toHaveStyle('width: 0%');
  expect(queryByTestId('range')).toHaveStyle(
    `background: linear-gradient(-170deg, ${colors.normal.gradientStart} 0%, ${
      colors.normal.gradientEnd
    } 100%)`
  );
  expect(queryByTestId('dueDate')).toHaveTextContent(
    addDays(today, 30).toLocaleDateString('pl-PL')
  );

  //deleting the newly added project
  fireEvent.click(queryByTestId('completeButton'));

  expect(queryByTestId('client')).not.toBeInTheDocument();
});

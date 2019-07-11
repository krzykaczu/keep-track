import React from 'react';
import ProjectForm from '..';
import 'jest-dom/extend-expect';
import 'jest-styled-components';
import { render, cleanup } from 'react-testing-library';
import { today } from '../../../data/projects';
import { addDays } from 'date-fns';

const addZero = text => (text < 10 ? '0' + text.toString() : text.toString());

const dateMock = date =>
  `${addZero(date.getDate())}.${addZero(
    date.getMonth() + 1
  )}.${date.getFullYear()}`;

afterEach(cleanup);

test('ProjectForm renders with all form fields as expected', () => {
  const { getByTestId, container } = render(
    <ProjectForm dispatch={() => {}} />
  );
  expect(container).toMatchSnapshot();

  expect(getByTestId('projectForm')).toHaveFormValues({
    client: 'select a client',
    project: '',
    startDate: dateMock(today),
    dueDate: dateMock(addDays(today, 30)),
  });
});

test('ProjectForm renders with submit button disabled', () => {
  const { getByTestId } = render(<ProjectForm dispatch={() => {}} />);
  expect(getByTestId('addButton')).toHaveTextContent('➕');
  expect(getByTestId('addButton')).toBeDisabled();
});

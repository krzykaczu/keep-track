import React from 'react';
import ProjectsGrid from '..';
import 'jest-dom/extend-expect';
import 'jest-styled-components';
import { render, cleanup } from 'react-testing-library';
import { today } from '../../../data/projects';
import { colors } from '../../../utils/colors';

afterEach(cleanup);

const startDateMock = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 30
);
const dueDateMock = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() + 6
);

const projectsMock = [
  {
    client: 'Vitra',
    project: 'New task chair',
    startDate: startDateMock,
    dueDate: dueDateMock,
  },
];

const addZero = text => (text.length < 10 ? '0' + text : text);

test('ProjectsGrid renders & dueDate shows up & completeButton is not visible', () => {
  const { getByTestId, container } = render(
    <ProjectsGrid projectsState={projectsMock} dispatch={() => {}} />
  );
  expect(container).toMatchSnapshot();
  expect(getByTestId('client')).toHaveTextContent('Vitra');
  expect(getByTestId('project')).toHaveTextContent('New task chair');
  expect(getByTestId('range')).toHaveStyle('width: 83%');
  expect(getByTestId('range')).toHaveStyle(
    `background: linear-gradient(-170deg, ${colors.alert.gradientStart} 0%, ${
      colors.alert.gradientEnd
    } 100%)`
  );
  expect(getByTestId('dueDate')).toHaveTextContent(
    addZero(dueDateMock.toLocaleDateString('pl-PL'))
  );
  expect(getByTestId('completeButton')).toHaveTextContent('✔');
  expect(getByTestId('completeButton')).toHaveStyle('opacity: 0');
});

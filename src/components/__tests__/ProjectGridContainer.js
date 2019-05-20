import React from 'react';
import ProjectGridContainer from '../ProjectGridContainer';
import 'jest-dom/extend-expect';
import 'jest-styled-components';
import { render, cleanup } from 'react-testing-library';
import { today } from '../../data/projects';
import { addDays } from 'date-fns';
import { colors } from '../../utils/colors';

afterEach(cleanup);

test('ProjectGridContainer renders & dueDate shows up & completeButton is not visible', () => {
  const dueDate = addDays(today, 30);
  const { getByTestId, container } = render(
    <ProjectGridContainer
      key={'project'}
      client={'client'}
      project={'project'}
      dueDate={dueDate}
      startDate={today}
      dispatch={() => {}}
      index={1}
    />
  );
  expect(container).toMatchSnapshot();
  expect(getByTestId('client')).toHaveTextContent('client');
  expect(getByTestId('project')).toHaveTextContent('project');
  expect(getByTestId('range')).toHaveStyle('width: 0%');
  expect(getByTestId('range')).toHaveStyle(
    `background: linear-gradient(-170deg, ${colors.normal.gradientStart} 0%, ${
      colors.normal.gradientEnd
    } 100%)`
  );
  expect(getByTestId('dueDate')).toHaveTextContent(
    dueDate.toLocaleDateString('pl-PL')
  );
  expect(getByTestId('completeButton')).toHaveTextContent('✔');
  expect(getByTestId('completeButton')).toHaveStyle('opacity: 0');
});

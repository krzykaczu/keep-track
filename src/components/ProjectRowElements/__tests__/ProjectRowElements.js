import React from 'react';
import ProjectRowElements from '..';
import 'jest-dom/extend-expect';
import 'jest-styled-components';
import { render, cleanup } from 'react-testing-library';
import { today } from '../../../data/projects';
import { addDays } from 'date-fns';
import { colors } from '../../../utils/colors';
import { Grid } from 'styled-css-grid';

afterEach(cleanup);

test('ProjectRowElements renders & dueDate shows up & completeButton is visible', () => {
  const dueDate = addDays(today, 30);
  const { getByTestId, container } = render(
    <Grid columns={12} minRowHeight={'40px'}>
      <ProjectRowElements
        client={'client'}
        project={'project'}
        dueDate={dueDate}
        startDate={today}
        isHovered={true}
        dispatch={() => {}}
        index={1}
      />
    </Grid>
  );
  // expect(container).toMatchSnapshot();
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
  expect(getByTestId('completeButton')).toHaveStyle('opacity: 1');
});

test('ProgressBarWithProjectData renders & completeButton is not visible', () => {
  const dueDate = addDays(today, 30);
  const { getByTestId } = render(
    <Grid columns={12} minRowHeight={'40px'}>
      <ProjectRowElements
        client={'client'}
        project={'project'}
        dueDate={dueDate}
        startDate={today}
        isHovered={false}
        dispatch={() => {}}
        index={1}
      />
    </Grid>
  );
  expect(getByTestId('completeButton')).toHaveStyle('opacity: 0');
});

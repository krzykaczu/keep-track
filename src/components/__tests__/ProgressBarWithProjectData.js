import React from 'react';
import ProgressBarWithProjectData from '../ProgressBarWithProjectData';
import 'jest-dom/extend-expect';
import 'jest-styled-components';
import { render, cleanup } from 'react-testing-library';
import { today } from '../../data/projects';
import { addDays, subDays } from 'date-fns';
import { colors } from '../../utils/colors';
import { renderIntoDocument } from 'react-dom/test-utils';

afterEach(cleanup);

test('ProgressBarWithProjectData startDate: today, dueDate: today+30 -> Range style width: 0%, status: normal', () => {
  const { getByTestId, container } = render(
    <ProgressBarWithProjectData
      startDate={today}
      dueDate={addDays(today, 30)}
    />
  );
  expect(container).toMatchSnapshot();
  //<ProgressBar range={0} status={normal} />
  expect(getByTestId('range')).toHaveStyle('width: 0%');
  expect(getByTestId('range')).toHaveStyle(
    `background: linear-gradient(-170deg, ${colors.normal.gradientStart} 0%, ${
      colors.normal.gradientEnd
    } 100%)`
  );
});

test('ProgressBarWithProjectData startDate: today-10, dueDate: today+5 -> Range style width: 66%, status: alert', () => {
  const { getByTestId } = render(
    <ProgressBarWithProjectData
      startDate={subDays(today, 10)}
      dueDate={addDays(today, 5)}
    />
  );
  //<ProgressBar range={66} status={alert} />
  expect(getByTestId('range')).toHaveStyle('width: 66%');
  expect(getByTestId('range')).toHaveStyle(
    `background: linear-gradient(-170deg, ${colors.alert.gradientStart} 0%, ${
      colors.alert.gradientEnd
    } 100%)`
  );
});

test('ProgressBarWithProjectData startDate: today-6, dueDate: today+6 -> Range style width: 50%, status: warning', () => {
  const { getByTestId } = render(
    <ProgressBarWithProjectData
      startDate={subDays(today, 6)}
      dueDate={addDays(today, 6)}
    />
  );
  //<ProgressBar range={50} status={warning} />
  expect(getByTestId('range')).toHaveStyle('width: 50%');
  expect(getByTestId('range')).toHaveStyle(
    `background: linear-gradient(-170deg, ${colors.warning.gradientStart} 0%, ${
      colors.warning.gradientEnd
    } 100%)`
  );
});

beforeEach(() => {
  jest.spyOn(console, 'error');
  global.console.error.mockImplementation(() => {});
});

afterEach(() => {
  global.console.error.mockRestore();
});

test('ProgressBarWithProjectData startDate: today+10, dueDate: today -> an error thrown', () => {
  expect(() => {
    renderIntoDocument(
      <ProgressBarWithProjectData
        startDate={addDays(today, 10)}
        dueDate={today}
      />
    );
  }).toThrow();
});

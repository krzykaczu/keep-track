import React from 'react';
import ProgressBar from '../ProgressBar';
import 'jest-dom/extend-expect';
import 'jest-styled-components';
import { render, cleanup } from 'react-testing-library';
import { colors } from '../../utils/colors';

afterEach(cleanup);

test('ProgressBar range props: 50 -> Range style width: 50%', () => {
  const { getByTestId, container } = render(<ProgressBar range={50} />);
  expect(container).toMatchSnapshot();
  expect(getByTestId('range')).toHaveStyle('width: 50%');
});

test('ProgressBar range props: 120 -> Range style width: 100%', () => {
  const { getByTestId } = render(<ProgressBar range={120} />);
  expect(getByTestId('range')).toHaveStyle('width: 100%');
});

test('ProgressBar range props: -10 -> Range style width: 0%', () => {
  const { getByTestId } = render(<ProgressBar range={-10} />);
  expect(getByTestId('range')).toHaveStyle('width: 0%');
});

test(`ProgressBar status props: alert -> Range style background: linear-gradient(-170deg, ${
  colors.alert.gradientStart
} 0%, ${colors.alert.gradientEnd} 100%)`, () => {
  const { getByTestId } = render(<ProgressBar range={50} status={'alert'} />);
  expect(getByTestId('range')).toHaveStyle(
    `background: linear-gradient(-170deg, ${colors.alert.gradientStart} 0%, ${
      colors.alert.gradientEnd
    } 100%)`
  );
});

test(`ProgressBar status props: warning -> Range style background: linear-gradient(-170deg, ${
  colors.warning.gradientStart
} 0%, ${colors.warning.gradientEnd} 100%)`, () => {
  const { getByTestId } = render(<ProgressBar range={50} status={'warning'} />);
  expect(getByTestId('range')).toHaveStyle(
    `background: linear-gradient(-170deg, ${colors.warning.gradientStart} 0%, ${
      colors.warning.gradientEnd
    } 100%)`
  );
});

test(`ProgressBar with no status props -> Range style background: linear-gradient(-170deg, ${
  colors.normal.gradientStart
} 0%, ${colors.normal.gradientEnd} 100%)`, () => {
  const { getByTestId } = render(<ProgressBar range={50} />);
  expect(getByTestId('range')).toHaveStyle(
    `background: linear-gradient(-170deg, ${colors.normal.gradientStart} 0%, ${
      colors.normal.gradientEnd
    } 100%)`
  );
});

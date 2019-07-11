import React from 'react';
import Emoji from '..';
import 'jest-dom/extend-expect';
import 'jest-styled-components';
import { render, cleanup } from 'react-testing-library';

afterEach(cleanup);

test('Emoji rendered properly', () => {
  const { getByTestId, container } = render(<Emoji symbol="➕" label="add" />);
  expect(container).toMatchSnapshot();
  expect(getByTestId('emoji')).toHaveAttribute('role', 'img');
  expect(getByTestId('emoji')).toHaveAttribute('aria-label', 'add');
  expect(getByTestId('emoji')).toHaveAttribute('aria-hidden', 'false');
  expect(getByTestId('emoji')).toHaveTextContent('➕');
});

test('Emoji with no label rendered properly', () => {
  const { getByTestId } = render(<Emoji symbol="➕" />);
  expect(getByTestId('emoji')).toHaveAttribute('aria-label', '');
  expect(getByTestId('emoji')).toHaveAttribute('aria-hidden', 'true');
  expect(getByTestId('emoji')).toHaveTextContent('➕');
});

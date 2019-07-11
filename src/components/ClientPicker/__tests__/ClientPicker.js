import React from 'react';
import ClientPicker from '..';
import 'jest-dom/extend-expect';
import 'jest-styled-components';
import { render, fireEvent, cleanup } from 'react-testing-library';

afterEach(cleanup);

test('ClientPicker changes values', () => {
  const { getByTestId, container } = render(
    <ClientPicker name={'name'} onChange={() => {}} />
  );
  expect(container).toMatchSnapshot();

  expect(getByTestId('clientPicker').value).toBe('select a client');
  fireEvent.change(getByTestId('clientPicker'), { target: { value: 'Vitra' } });
  expect(getByTestId('clientPicker').value).toBe('Vitra');
});

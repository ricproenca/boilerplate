import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Button from './Button';

jest.mock('./Button.styles', () => () => ({}));

const mockFn = jest.fn();
const mockFnCalls = mockFn.mock.calls;

const setup = () => {
  // Arrange
  const props = {
    prop: 'prop',
    fn: mockFn
  };

  // Act
  const { asFragment } = render(<Button {...props} />);

  const getNode = () => screen.getByTestId('nodeName');

  return { asFragment, getNode };
};

describe('Button', () => {
  describe('Testing rendering', () => {
    test('It matches snapshot', () => {
      const { asFragment } = setup();

      // Assert
      expect(asFragment()).toMatchSnapshot();
    });

    test('It renders', () => {
      const { getNode } = setup();

      // Assert
      expect(getNode()).toBeInTheDocument();
    });
  });

  describe('Testing event handlers', () => {
    test('call callback', () => {
      const { getNode } = setup();

      //Act
      fireEvent.click(getNode());

      // Assert
      expect(getNode()).toBeInTheDocument();
      expect(mockFnCalls).toHaveLength(1);
    });
  });
});

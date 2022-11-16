import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AgeProvider } from './AgeContext';
import GrandParent from './GrandParent';

describe('Test GrandParent Component', () => {
  test('component heading rendering', () => {
    render(
      <AgeProvider>
        <GrandParent />
      </AgeProvider>
    );

    expect(screen.getByRole('heading', { level: 3 })).toHaveAccessibleName(
      'this is grand parent'
    );
  });

  test('render initial age', () => {
    render(
      <AgeProvider>
        <GrandParent />
      </AgeProvider>
    );

    expect(screen.getByRole('heading', { level: 3 })).toHaveAccessibleName(
      'this is grand parent'
    );

    expect(screen.getByLabelText('grand-parent')).toHaveTextContent('age is 1');
  });

  test('grand parent changed - updated age', () => {
    render(
      <AgeProvider>
        <GrandParent />
      </AgeProvider>
    );

    expect(screen.getByRole('heading', { level: 3 })).toHaveAccessibleName(
      'this is grand parent'
    );

    expect(screen.getByLabelText('grand-parent')).toHaveTextContent('age is 1');

    expect(screen.getByLabelText('grand-child-one')).toHaveTextContent(
      'age is 1'
    );

    expect(screen.getByLabelText('grand-child-three')).toHaveTextContent(
      'age is 1'
    );

    const button100 = screen.getByRole('button', { name: 'change age to 100' });
    userEvent.click(button100);

    expect(screen.getByLabelText('grand-parent')).toHaveTextContent(
      'age is 100'
    );

    expect(screen.getByLabelText('grand-child-one')).toHaveTextContent(
      'age is 100'
    );

    expect(screen.getByLabelText('grand-child-three')).toHaveTextContent(
      'age is 100'
    );
  });

  test('grand child one changed - updated age', () => {
    render(
      <AgeProvider>
        <GrandParent />
      </AgeProvider>
    );

    expect(screen.getByRole('heading', { level: 3 })).toHaveAccessibleName(
      'this is grand parent'
    );

    expect(screen.getByLabelText('grand-parent')).toHaveTextContent('age is 1');

    expect(screen.getByLabelText('grand-child-one')).toHaveTextContent(
      'age is 1'
    );

    expect(screen.getByLabelText('grand-child-three')).toHaveTextContent(
      'age is 1'
    );

    const button10 = screen.getByRole('button', { name: 'change age to 10' });
    userEvent.click(button10);

    expect(screen.getByLabelText('grand-parent')).toHaveTextContent(
      'age is 10'
    );

    expect(screen.getByLabelText('grand-child-one')).toHaveTextContent(
      'age is 10'
    );

    expect(screen.getByLabelText('grand-child-three')).toHaveTextContent(
      'age is 10'
    );
  });
});

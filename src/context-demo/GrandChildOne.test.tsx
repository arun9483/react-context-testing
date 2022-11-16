import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AgeProvider } from './AgeContext';
import GrandChildOne from './GrandChildOne';

describe('Test GreatGrandParent Component', () => {
  test('page heading rendering', () => {
    render(
      <AgeProvider>
        <GrandChildOne />
      </AgeProvider>
    );

    expect(screen.getByRole('heading', { level: 5 })).toHaveAccessibleName(
      'this is grand child one'
    );
  });

  test('render initial age', () => {
    render(
      <AgeProvider>
        <GrandChildOne />
      </AgeProvider>
    );

    expect(screen.getByRole('heading', { level: 5 })).toHaveAccessibleName(
      'this is grand child one'
    );

    expect(screen.getByLabelText('grand-child-one')).toHaveTextContent(
      'age is 1'
    );
  });

  test('display updated age', () => {
    render(
      <AgeProvider>
        <GrandChildOne />
      </AgeProvider>
    );

    expect(screen.getByRole('heading', { level: 5 })).toHaveAccessibleName(
      'this is grand child one'
    );

    expect(screen.getByLabelText('grand-child-one')).toHaveTextContent(
      'age is 1'
    );

    const button10 = screen.getByRole('button', { name: 'change age to 10' });
    userEvent.click(button10);

    expect(screen.getByLabelText('grand-child-one')).toHaveTextContent(
      'age is 10'
    );
  });
});

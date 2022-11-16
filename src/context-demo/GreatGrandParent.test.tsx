import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import GreatGrandParent from './GreatGrandParent';

describe('Test GreatGrandParent Component', () => {
  test('page heading rendering', () => {
    render(<GreatGrandParent />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveAccessibleName(
      'this is great grand parent'
    );
  });

  test('render initial age', () => {
    render(<GreatGrandParent />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveAccessibleName(
      'this is great grand parent'
    );
    expect(screen.getByLabelText('grand-child-one')).toHaveTextContent(
      'age is 1'
    );
  });

  test('display updated age', () => {
    render(<GreatGrandParent />);

    expect(screen.getByRole('heading', { level: 2 })).toHaveAccessibleName(
      'this is great grand parent'
    );

    expect(screen.getByLabelText('grand-parent')).toHaveTextContent('age is 1');

    expect(screen.getByLabelText('grand-child-one')).toHaveTextContent(
      'age is 1'
    );

    expect(screen.getByLabelText('grand-child-three')).toHaveTextContent(
      'age is 1'
    );

    const button30 = screen.getByRole('button', { name: 'change age to 30' });
    userEvent.click(button30);

    expect(screen.getByLabelText('grand-parent')).toHaveTextContent(
      'age is 30'
    );

    expect(screen.getByLabelText('grand-child-one')).toHaveTextContent(
      'age is 30'
    );

    expect(screen.getByLabelText('grand-child-three')).toHaveTextContent(
      'age is 30'
    );
  });
});

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('Test App Component', () => {
  test('page heading rendering', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveAccessibleName(
      'react context testing demo'
    );
  });

  test('render initial age', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveAccessibleName(
      'react context testing demo'
    );
    expect(screen.getByLabelText('grand-child-one')).toHaveTextContent(
      'age is 1'
    );
  });

  test('display updated age', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveAccessibleName(
      'react context testing demo'
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

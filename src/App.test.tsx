import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

function expectCount(value: number) {
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    new RegExp(`^Count: ${value}$`),
  );
}

describe('Counter application', () => {
  test('starts at zero and displays all three buttons', () => {
    render(<App />);

    expectCount(0);
    expect(screen.getByRole('button', { name: 'Increment' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Decrement' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeVisible();
  });

  test('Increment changes zero to one', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: 'Increment' }));

    expectCount(1);
  });

  test('Decrement changes zero to negative one', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: 'Decrement' }));

    expectCount(-1);
  });

  test('Reset changes a positive count back to zero', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: 'Increment' }));
    expectCount(1);
    await user.click(screen.getByRole('button', { name: 'Increment' }));
    expectCount(2);
    await user.click(screen.getByRole('button', { name: 'Reset' }));

    expectCount(0);
  });

  test('Reset changes a negative count back to zero', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: 'Decrement' }));
    expectCount(-1);
    await user.click(screen.getByRole('button', { name: 'Decrement' }));
    expectCount(-2);
    await user.click(screen.getByRole('button', { name: 'Reset' }));

    expectCount(0);
  });

  test('Reset keeps zero unchanged when selected repeatedly', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: 'Reset' }));
    expectCount(0);
    await user.click(screen.getByRole('button', { name: 'Reset' }));
    expectCount(0);
  });

  test('tracks a sequence of changes and continues working after Reset', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: 'Increment' }));
    expectCount(1);
    await user.click(screen.getByRole('button', { name: 'Increment' }));
    expectCount(2);
    await user.click(screen.getByRole('button', { name: 'Increment' }));
    expectCount(3);
    await user.click(screen.getByRole('button', { name: 'Decrement' }));
    expectCount(2);
    await user.click(screen.getByRole('button', { name: 'Reset' }));
    expectCount(0);
    await user.click(screen.getByRole('button', { name: 'Decrement' }));
    expectCount(-1);
    await user.click(screen.getByRole('button', { name: 'Increment' }));
    expectCount(0);
  });

  test('supports keyboard focus and button activation', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.tab();
    expect(screen.getByRole('button', { name: 'Increment' })).toHaveFocus();
    await user.keyboard('{Enter}{Enter}');
    expectCount(2);
    await user.tab();
    expect(screen.getByRole('button', { name: 'Decrement' })).toHaveFocus();
    await user.keyboard(' ');
    expectCount(1);
    await user.tab();
    expect(screen.getByRole('button', { name: 'Reset' })).toHaveFocus();
    await user.keyboard('{Enter}');
    expectCount(0);
  });
});

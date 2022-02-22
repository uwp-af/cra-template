import { render } from '@testing-library/react';
import App from './App';

jest.deepUnmock('react-router-dom')

test('Basic app smoke test', () => {
  render(<App />);
});

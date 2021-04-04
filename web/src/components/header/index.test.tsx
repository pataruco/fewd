import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import React from 'react';

import Header, { Weeks } from './index';
import { store } from '../../redux/store';

describe('Header', () => {
  const ProviderWrapper: React.FC = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  const history = createMemoryHistory();

  it('should render', () => {
    const { getByText } = render(
      <ProviderWrapper>
        <Router history={history}>
          <Header />
        </Router>
      </ProviderWrapper>,
    );
    expect(getByText(/Bonus lessons/i)).toBeInTheDocument();
  });

  describe('Weeks', () => {
    it('should render', async () => {
      render(
        <ProviderWrapper>
          <Router history={history}>
            <Weeks />
          </Router>
        </ProviderWrapper>,
      );

      const list = await screen.findAllByText(/Week/i);
      expect(list.length).toBe(10);
    });
  });
});

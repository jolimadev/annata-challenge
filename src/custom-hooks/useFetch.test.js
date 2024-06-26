import { render, screen } from '@testing-library/react';
import React from 'react';
import { useFetch } from '../custom-hooks/useFetch';

const TestComponent = ({ url }) => {
  const { data, loading, error } = useFetch(url);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <ul>{data.map((item) => <li key={item.id}>{item.name}</li>)}</ul>}
    </div>
  );
};

describe('useFetch', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    global.fetch.mockClear();
  });

  it('fetches data successfully', async () => {
    const mockResponse = {
      items: [
        {
          id: 1,
          name: 'Repository 1',
          owner: { login: 'owner1' },
          stargazers_count: 100,
          description: 'Description 1',
          html_url: 'https://github.com/owner1/repo1',
        },
      ],
    };

    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    render(<TestComponent url="https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc" />);

    const repoElement = await screen.findByText('Repository 1');
    expect(repoElement).toBeInTheDocument();
    expect(screen.queryByText('Loading...')).toBeNull();
    expect(screen.queryByText('Error:')).toBeNull();
  });

  it('handles fetch error', async () => {
    global.fetch.mockRejectedValue('API is down');

    render(<TestComponent url="https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc" />);

    const errorElement = await screen.findByText('Error: API is down');
    expect(errorElement).toBeInTheDocument();
    expect(screen.queryByText('Loading...')).toBeNull();
    expect(screen.queryByText('Repository 1')).toBeNull();
  });
});

import { render, screen } from '@testing-library/react';
import GithubList from './GithubList';
import { useFetch } from '../custom-hooks/useFetch';

// Mock de useFetch
jest.mock('../custom-hooks/useFetch');

describe('GithubList Component', () => {
  it('renders loading state', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
      handleDetailsClick: jest.fn(),
      visibleRepos: {}
    });
    render(<GithubList />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('renders error state', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: false,
      error: 'Error fetching data',
      handleDetailsClick: jest.fn(),
      visibleRepos: {}
    });
    render(<GithubList />);
    expect(screen.getByText(/Error: Error fetching data/i)).toBeInTheDocument();
  });

  it('renders list of repositories', () => {
    const mockData = [
      {
        id: 1,
        name: 'Repository 1',
        owner: { login: 'owner1' },
        stargazers_count: 100,
        description: 'Description 1',
        html_url: 'https://github.com/owner1/repo1'
      },
      {
        id: 2,
        name: 'Repository 2',
        owner: { login: 'owner2' },
        stargazers_count: 200,
        description: 'Description 2',
        html_url: 'https://github.com/owner2/repo2'
      }
    ];

    useFetch.mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
      handleDetailsClick: jest.fn(),
      visibleRepos: {}
    });
    render(<GithubList />);
    
    expect(screen.getByText(/Repository 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Repository 2/i)).toBeInTheDocument();
  });
});

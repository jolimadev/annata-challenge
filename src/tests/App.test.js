import { render } from '@testing-library/react';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import RepositoriesList from '../components/RepositoriesList';

// Prueba para el componente RepositoriesList
test('RepositoriesList renders correctly with data', () => {
  const repositories = [
    { id: 1, name: 'repo1', stargazers_count: 10 },
    { id: 2, name: 'repo2', stargazers_count: 20 },
  ];
  const { getByText } = render(<RepositoriesList repositories={repositories} />);
  
  // Busca el texto en los nombres de los repositorios
  expect(getByText('repo1 (10 ⭐)')).toBeInTheDocument();
  expect(getByText('repo2 (20 ⭐)')).toBeInTheDocument();
});

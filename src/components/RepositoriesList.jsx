// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

{
  /**
This component renders a list of repositories from github and displays them on the interface. 
*/
}
const RepositoriesList = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRepo, setSelectedRepo] = useState(null);

  {
    /***
  Fetches data from the github Api qith error handling.
*/
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.github.com/search/repositories?q=stars:>1&sort=stars&order=desc"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();
        setRepositories(data.items);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  {
    /**
  Functions to handle button states to help the user redirect to the clicked repository.
*/
  }
  const handleDetailsClick = (repo) => {
    setSelectedRepo(repo);
  };

  const handleCloseDetails = () => {
    setSelectedRepo(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mt-3 mb-3 shadow p-3 mb-5 bg-white rounded">
      <h2 className="mb-3 pb-2 text-muted" >List of Repositories:</h2>
      <ul className="list-group">
  {repositories.map((repo) => (
    <li className="inputList list-group-item d-flex justify-content-between align-items-center" key={repo.id}>
      <span className="repo-name"><strong>{repo.name}</strong> ({repo.stargazers_count} ⭐)</span>
      <button
        className="btn btn-primary btn-sm btn-secondary"
        style={{ backgroundColor: '#e60000' }}
        onClick={() => handleDetailsClick(repo)}
      >
        More Details
      </button>
    </li>
  ))}
</ul>
      {selectedRepo && (
        <div>
          <h3 className="mt-4 mb-3 text-secondary">Repository Details:</h3>
          <p><strong>Name: {selectedRepo.name}</strong></p>
          <p><strong>Description: {selectedRepo.description}</strong></p>
          <p>
            <a
              href={selectedRepo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-truncate text-nowrap"
            >
              View on GitHub
            </a>
          </p>
          <button className="btn btn-secondary mb-3"  style={{ backgroundColor: '#e60000' }} onClick={handleCloseDetails}>
            Close Details
          </button>
        </div>
      )}
    </div>
  );
};

export default RepositoriesList;

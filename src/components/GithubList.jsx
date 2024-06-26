import { useFetch } from "../custom-hooks/useFetch";
import React from "react";
/**
 * 
 * @returns Componente que muestra una lista de Top 5 repositorios
 * utiliza un custom hook llamado useFetch para traer la data de la API de Github 
 */
const GithubList = () => {

  const { data, loading, error, handleDetailsClick, visibleRepos } = useFetch("https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc");
  
  return (
    <div>
    <h1>GitHub Top List Repositories</h1>
    {error && <div>Error: {error}</div>}
    {loading && <div>Loading...</div>}
    <ol>
      {Array.isArray(data) && data?.slice(0, 5).map((item) => (
        <li key={item.id}>
          {item.name} by {item.owner.login} ({item.stargazers_count} 🌟)
          <div className="button-container">
          <button  onClick={() => handleDetailsClick(item.id)}>
            {visibleRepos[item.id] ? "Close Details" : "More Details"}
          </button>
          </div>
          {visibleRepos[item.id] && (
            <div>
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Description:</strong> {item.description}</p>
              <p>
                <a className="text-href" href={item.html_url} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </p>
            </div>
          )}
        </li>
      ))}
    </ol>
  </div>
    
  );
};

export default GithubList;

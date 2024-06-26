import { useState, useEffect } from "react";

/**
 *
 * @param {string} url - La API para fetchear la data
 * @returns {object} El Objeto que contendra la data,funciones de ayuda y el estado de cargando..
 */

export function useFetch(url) {
  const [data, setData] = useState([]); // Inicializamos el estado como un array vacío
  const [loading, setLoading] = useState(true); // Estado para controlar si está cargando
  const [error, setError] = useState(null); // Estado para manejar errores
  const [visibleRepos, setVisibleRepos] = useState({}); // Estado para rastrear repositorios visibles

  useEffect(() => {
    //seteamos la carga en loading, por defecto:
    setLoading(true);

    fetch(url)
      .then((response) => response.json()) //la respuesta la traiga en un json
      .then((data) => {
        setData(data.items); //coloque el .items y anduvo(esto guarda los items de la respuesta)
      })
      .catch((error) => setError(error))
      //metodo finally para determinar que ya termino la carga completa
      .finally(() => setLoading(false));
  }, [url]); //efecto se ejecutará nuevamente cada vez que url cambie.

  /**
   *
   * @param {number} id el id de c/repositorio
   */

  const handleDetailsClick = (id) => {
    setVisibleRepos((prevVisibleRepos) => ({
      ...prevVisibleRepos,
      [id]: !prevVisibleRepos[id], // Alternamos la visibilidad del toggle
    }));
  };

  return { data, loading, error, handleDetailsClick, visibleRepos };
}

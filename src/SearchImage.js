import React, { useState } from 'react';

const SearchImage = () => {
  const [query, setQuery] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [definitions, setDefinitions] = useState('');

  const handleSearch = () => {
    fetch(`https://pixabay.com/api/?key=36962407-90929d1f5a20c6d4c3b129252&q=${query}&image_type=photo&image_size=medium`)
      .then(response => response.json())
      .then(data => {
        if (data.hits.length > 0) {
          setImageUrl(data.hits[0].webformatURL);
        } else {
          setImageUrl('');
        }
      })
      .catch(error => console.log(error));

    fetch(`https://es.wikipedia.org/api/rest_v1/page/summary/${query}`)
      .then(response => response.json())
      .then(data => {
        if (data.extract) {
          setDefinitions(data.extract);
        } else {
          setDefinitions('');
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <div className='container'>
      <h2>Busqueda de imagen</h2>
      <div>
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Escriba una palabra clave..." />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      <div className="container">
        {imageUrl && <img src={imageUrl} alt="Search Result" />}
      </div>
      <div>
        <h3>Definiciones encontradas:</h3>
        {definitions ? (
          <p>{definitions}</p>
        ) : (
          <p>No se encontraron definiciones.</p>
        )}
      </div>
    </div>
  );
};

export default SearchImage;
import React, { useEffect, useState } from 'react';

const DogImage = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('https://api.unsplash.com/photos/random?client_id=YOUR_ACCESS_KEY&query=dog', {
      headers: {
        Authorization: 'Bearer YOUR_ACCESS_KEY',
      },
    })
      .then(response => response.json())
      .then(data => setImageUrl(data.urls.regular))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Random Dog Image</h2>
      {imageUrl && <img src={imageUrl} alt="Random Dog" />}
    </div>
  );
};

export default DogImage;
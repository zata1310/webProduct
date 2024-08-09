import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const AddProductPage = () => {
  const { category } = useParams();
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('title', title);
    formData.append('details', details);
    formData.append('image', image);
    formData.append('category', category);

    try {
      await axios.post('/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      history.push(`/products/${category}`);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div>
      <h1>Add Product to {category}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        <label>
          Details:
          <textarea value={details} onChange={(e) => setDetails(e.target.value)} required />
        </label>
        <label>
          Image:
          <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductPage;

import { useState } from 'react';
import { useEffect } from 'react';
import s from './App.module.css';
import { fetchImages } from '../api.js';
import SearchBar from './SearchBar/SearchBar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import Loader from './Loader/Loader.jsx';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn.jsx';
import ErrorMessage from './Error/ErrorMessage.jsx';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const perPage = 10;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  //const [modalIsOpen, setIsOpen] = React.useState(false);
  //let subtitle;

  function openModal(image) {
    setIsOpen(true);
    setModalImage(image);
  }

  // function afterOpenModal() {
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
    setModalImage(null);
  }

  useEffect(() => {
    if (!query) return;

    console.log('useEffect triggered with:', { query, page });

    const getData = async () => {
      try {
        setLoading(true);
        setError(false);
        console.log('Fetching images for:', query, 'Page:', page);

        const { results, totalPages } = await fetchImages(query, page, perPage);

        if (!Array.isArray(results)) {
          console.error('Error: results is not an array', results);
          return;
        }

        console.log('API Response Data:', results);
        setImages(prevImages =>
          page === 1 ? results : [...prevImages, ...results]
        );
        setTotalPages(totalPages);
      } catch (err) {
        console.error('Fetching Error:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [query, page]);

  const handleSetQuery = newQuery => {
    console.log(newQuery);
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  return (
    <div className={s.card}>
      <h1>Welcome to the photo gallery!</h1>

      <SearchBar onSubmit={handleSetQuery} />

      {loading && (
        <div className={s.loading_container}>
          <p className={s.read_the_docs}>Loading images, please wait...</p>
          <Loader />
        </div>
      )}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <div>
          <ImageGallery images={images} openModal={openModal} />
          {page < totalPages && <LoadMoreBtn setPage={setPage} />}
          {page >= totalPages && (
            <p className={s.read_the_docs}>
              You have reached the end of the photo collection.
            </p>
          )}
        </div>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Preview"
        style={{
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
          content: {
            width: '60%',
            margin: 'auto',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'center',
          },
        }}
      >
        {modalImage && (
          <>
            <h2>Photo Preview</h2>
            <img
              src={modalImage}
              alt="Modal Content"
              style={{ width: '100%' }}
            />
            <button onClick={closeModal} className={s.close_button}>
              Close
            </button>
          </>
        )}
      </Modal>
    </div>
  );
}

export default App;

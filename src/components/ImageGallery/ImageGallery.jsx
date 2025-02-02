import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={s.gallery}>
      {images.map(item => (
        <li
          key={item.id}
          onClick={() => openModal(item)}
          //onClick={() => openModal(item.urls.regular)}
          className={s.galleryItem}
        >
          <ImageCard item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

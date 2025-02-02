const ImageCard = ({ item }) => {
  return (
    <div>
      <img
        src={item.urls?.thumb || 'https://via.placeholder.com/150'}
        alt={item.alt_description || `No description`}
      />
    </div>
  );
};

export default ImageCard;

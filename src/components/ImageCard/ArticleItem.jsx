const ArticleItem = ({ item }) => {
  console.log('Rendering Article:', item);
  if (!item) return null;
  return (
    <div>
      <li key={item.objectID}>
        <a href={item.url} target="_blank" rel="noreferrer noopener">
          {item.title}
        </a>
      </li>
    </div>
  );
};
export default ArticleItem;

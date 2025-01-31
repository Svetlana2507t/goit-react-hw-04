import ArticleItem from '../ArticleItem/ArticleItem';

const ArticleList = ({ items }) => {
  console.log('Articles component received items:', items);

  return (
    <ul>
      {items.map(item => (
        <ArticleItem key={item.objectID} item={item} />
      ))}
    </ul>
  );
};
export default ArticleList;

const LatestNewsItem = ({ title, content, image, url, publishDate }) => {
  const articleDate = new Date(Date.parse(publishDate));
  return (
    <div className="flex mb-[30px] mx-[10%] bg-[#ddd] p-5 gap-5">
      <img src={image} width={300} />
      <div>
        <h3 className="text-3xl">{title}</h3>
        <p>{content}</p>
        <div className="flex justify-between">
          <span>Published: {articleDate.toDateString()}</span>
          <a href={url} target="_blank">
            <button className="btn btn-primary text-2xl">Read More</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default LatestNewsItem;

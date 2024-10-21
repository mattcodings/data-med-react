import PropTypes from "prop-types";

const LatestNewsItem = ({ title, content, image, url, publishDate }) => {
  const articleDate = new Date(Date.parse(publishDate));
  return (
    <div className="flex mb-[30px] mx-[10%] bg-[#ddd] p-5 gap-5 flex-wrap lg:flex-nowrap">
      <img src={image} width={300} />
      <div>
        <h3 className="text-3xl">{title}</h3>
        <p>{content}</p>
        <div className="lg:flex justify-between">
          <span>Published: {articleDate.toDateString()}</span>
          <a href={url} target="_blank">
            <button className="btn btn-primary text-2xl mt-8">Read More</button>
          </a>
        </div>
      </div>
    </div>
  );
};

// validate each prop
LatestNewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
};

export default LatestNewsItem;

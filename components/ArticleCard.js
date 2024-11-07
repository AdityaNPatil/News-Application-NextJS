// components/ArticleCard.js
export default function ArticleCard({ article }) {
    const { title, description, url, urlToImage , author , source} = article;
  
    return (
      <div className="bg-white p-4 rounded-md shadow hover:shadow-lg hover:-translate-y-2 transition flex flex-col justify-evenly">
        {urlToImage && <img src={urlToImage} alt={title} className="w-full h-48 object-cover rounded" />}
        <h2 className="text-lg font-bold mt-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 bg-blue-200 p-1 w-fit rounded-xl hover:bg-blue-600 hover:text-white transition">
          Read more
        </a>
      </div>
    );
  }
  
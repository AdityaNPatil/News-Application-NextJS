'use client' // client component for hooks -- console.logs in browser
// import components
import ArticleCard from "@/components/ArticleCard";

// import hooks
import { useState, useEffect, useContext } from "react";
import { SearchContext } from "@/context/searchContext";

// api key stored in config.js
import API_KEY from "@/config"

const apikey = API_KEY || process.env.API_KEY;

// function to fetch news -- if nothing passed search general news with publishedAt sort by -- because of context
async function fetchNews(searchQuery , sortQuery) {
  const response = await fetch(`https://newsapi.org/v2/everything?q=${searchQuery}&sortBy=${sortQuery}&language=en&apiKey=${apikey}`)
  const data = await response.json(); // data is object {articles:[array of news articles] , status , totalResults} -- we need only articles
  // return articles
  return data.articles;
}


export default function Home() {

  // states to handle articles array from api response
  const [articles, setArticles] = useState([]);

  // use the searchTxt and sortText from context - to pass as parameters to function to fetch news
  const { searchTxt , sortText} = useContext(SearchContext);

  // call api whenever new text entered and search button pressed (due to onSearch function in context) / new category clicked / sort changed
  // for initial render searchTxt is already set to general and sortText is publishedAt in context
  useEffect(() => {
    fetchNews(searchTxt , sortText).then(setArticles);
  }, [searchTxt , sortText])


  return (
    <div className="min-h-[78vh]">
      {/* {console.log(articles)} */}

      {/* render articles using the fetched articles array */}
      <div className="grid grid-cols-3 gap-10">
        {articles &&
          articles.map((article, idx) => {
            if(article.title != "[Removed]")
            {return (
              <ArticleCard article={article} key={idx} />
            )}
          })
        }
      </div>
    </div>
  );
}

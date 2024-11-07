# News Application using NextJS

## API used
- [News API](https://newsapi.org/)

## For api key
- create config.js
- store api key in config.js
- use the api key to fetch news
- Here config.js is put in gitignore hence not in the repo

## Each article has following info
```json
author:null
content:"Suella Braverman forwarded government documents to her private email accounts at least 127 times while she was attorney general in a potential breach of the ministerial code, it has emerged.\r\nThe rev… [+2198 chars]"
description:"The emails, sent while she was attorney general, could amount to a breach of the ministerial code."
publishedAt:"2024-10-21T20:07:30Z"
source:{id: null, name: 'BBC News'}
title:"Braverman sent government documents to private email 127 times"
url:"https://www.bbc.com/news/articles/cvglgdp40dko"
urlToImage:"https://ichef.bbci.co.uk/news/1024/branded_news/073c/live/ab6d7110-8fdf-11ef-b3c2-754b6219680e.jpg"
```

## Workflow
1. For initial render - fetch articles from API with searchQuery as general and sortQuery as publishedAt -- both these are states changed using context
1. When user searches for a query - fetch articles from API with searchQuery as user's query 
1. Sort according to dropdown given
1. Display fetched articles as cards

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

import React from 'react'
import Article from './Article'

export default function ArticleList({articles}) {
	const articleElements = articles.map((article) => <li key = {article.id}><Article article={article}/></li>);
	return (
		<ul>
			{articleElements}
		</ul>
	)
}

//TODO: Make comments list. Show only when text is shown.
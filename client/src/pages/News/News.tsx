import React, {useEffect} from 'react'
import {NewsCard} from './NewsCard'
import M from 'materialize-css'

let newsFeedData = {
    tags: ["выплата 13 пособия", "новости офиса", "все новости"], 
    newsFeed: [
        {
            id: 'asdwqd12343415',
            title: " Новость 1",
            author: "timmeno1",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            newsBody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            views: 216,
            date: "2021-05-12",
            tags: ["новости офиса"],
            published: true,
            media: ["https://loremflickr.com/800/480", "https://loremflickr.com/800/480", "https://loremflickr.com/800/480"]
        },
        {
            id: 'asdwqd12343453',
            title: " Новость 2",
            author: "timmeno1",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            newsBody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            views: 216,
            date: "2021-04-21",
            tags: ["новости офиса"],
            published: true,
            media: ["https://loremflickr.com/800/480", "https://loremflickr.com/800/480", "https://loremflickr.com/800/480"]
        },
        {
            id: 'asdwqd12364345',
            title: " Новость 3",
            author: "Yuliya",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            newsBody: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            views: 216,
            date: "2021-05-03",
            tags: ["новости офиса"],
            published: true,
            media: ["https://loremflickr.com/800/480", "https://loremflickr.com/800/480", "https://loremflickr.com/800/480"]
        }
    ] 
}


export const News = () => {


    useEffect(() => {
        M.AutoInit();
    });


    return (
        <> 
            <div className={"container row"}>
                <div className={"col s3 m4"}>
                    <div className="widget center-align">
					    <h4 className="widget-title">Навигация</h4>

                        <div className="input-field">
                            <i className="bi bi-search prefix red-text text-lighten-2"></i>
                            <input type="text" id="autocomplete-input" className="autocomplete"/>
                            <label htmlFor="autocomplete-input">Поиск</label>
                        </div>

						<ul className="tags right-align ">
                            { newsFeedData.tags.map((tag,i)=>{
                                return <li key={i}><div className="chip red lighten-2 white-text">{tag}</div></li>
                            }) }
											
						</ul>
				    </div>
                </div>
                <div className={"col s9 m8"}>
                    { newsFeedData.newsFeed.map((newsItem) => {
                        return <NewsCard key={newsItem.id} newsItem={newsItem}/>
                    }) }

                    <button className="btn red lighten-2" type="submit" name="loadMore">Еще</button>
                    
                </div>
            </div>




        </>
    )
}
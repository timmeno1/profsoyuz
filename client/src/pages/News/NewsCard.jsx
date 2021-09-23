import React from 'react';
import {Divider} from '../../common/Divider'


export const NewsCard = (props) => {
    return (
        <div className="newsItemBody">
                <div className="card">
                    <div className="card-content cardMetaInfo">
                        <span className="chip">{props.newsItem.author}</span><br />
                        <span className="chip">{props.newsItem.date}</span><br />
                        <span className="chip">{props.newsItem.views} просмотров</span>
                        <span className="chip">{props.newsItem.tags[0]}</span>
                    </div>
                    <div className="card-image">
                        <img src={props.newsItem.media[0]} alt={""}/>
                    </div>
                    <div className="card-content">
                        <span className="card-title red-text text-lighten-2" >{props.newsItem.title}<i className="bi bi-arrow-up-square-fill right activator"></i></span>
                        <Divider />
                        <p className="grey-text text-darken-2">{props.newsItem.description}</p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title red-text text-lighten-2">{props.newsItem.title}<i className="bi bi-arrow-down-square-fill right"></i></span>
                        <p className="grey-text text-darken-2">{props.newsItem.newsBody}</p>
                    </div>
                </div>
        </div>
    )
}
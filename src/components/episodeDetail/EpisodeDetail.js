import React from 'react';
import style from './EpisodeDetail.module.css';

const EpisodeDetail = ({ cardData }) => {
  //getting properties here
  const {
    name,
    type,
    status,
    officialSite,
    image,
    summary,
    network,
    schedule,
    genres,
    episodes,
    created,
    rating,
  } = cardData;
 
//show the show details
  return (
    <div className={style.mainWrapper}>
       <div className={style.name}>
        <h1>{name}</h1>
      </div>
    <div className={style.episodeDetails}>

      <div className={style.leftSection}>
        <div className={style.imageWrapper}>
          <img src={image ? image.medium : 'placeholder_image_url'} alt={name} />
        </div>
      </div>
      <div className={style.rightSection}>
        <div className={style.summary}>
          <h2>Summary</h2>
          <div dangerouslySetInnerHTML={{__html: summary}}></div>
        </div>
        <div className={style.showInfo}>
          <div className={style.card}>
            <h2>Show Info</h2>
            <p><strong>Network:</strong> {network && network.name}</p>
            <p><strong>Country:</strong> {network && network.country && network.country.name}</p>
            <p><strong>Timezone:</strong> {network && network.country && network.country.timezone}</p>
            <p><strong>Schedule:</strong> {schedule && schedule.days && schedule.days.join(', ')} at {schedule && schedule.time} ({schedule && schedule.runtime} min)</p>
            <p><strong>Status:</strong> {status}</p>
            <p><strong>Show Type:</strong> {type}</p>
            <p><strong>Genres:</strong> {genres && genres.join(', ')}</p>
            <p><strong>Episodes ordered:</strong> {episodes}</p>
            <p><strong>Created by:</strong> {created && created.join(', ')}</p>
            <p><strong>Official site:</strong>{" "}
            <a href={officialSite} target="_blank" rel="noopener noreferrer">
              {officialSite}
            </a>
          </p>
            <p><strong>Rating:</strong> {rating && rating.average} ({rating && rating.votes} votes)</p>
          </div>
        </div>
      </div>
      
    </div>
     <div className={style.btns}>
     <button className={style.watchNowButton} onClick={() => window.location.href = officialSite}>Watch Now</button>

     </div>
    </div>
  );
}

export default EpisodeDetail;

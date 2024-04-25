import React, { useEffect } from 'react';
import styles from "./Homepage.module.css";


const Homepage = ({screenName,schedule,setScreenName,setCardData}) => {
 
  const handleEpisodeClick = (episode) => {
    setScreenName("CARDDETAIL")
    setCardData(episode)
  };

  useEffect(()=>{

  },[screenName])

  return (
    <div className={styles.container}>
      <h2>Schedule</h2>
      <div className={styles.cardContainer}>
        {schedule.map(episode => (  
          <div key={episode.id} className={styles.card} onClick={()=>handleEpisodeClick(episode.show)}>
              <img src={episode.show.image ? episode.show.image.medium : 'placeholder_image_url'} alt={episode.name} />
              <div className={styles.cardContent}>
                <h3>{episode.name}</h3>
                <p>Airdate: {episode.airdate}</p>
                <p>Airtime: {episode.airtime}</p>
                <p>Runtime: {episode.runtime}</p>
                <p>Show Name: {episode.show.name}</p>
                <p>Show Type: {episode.show.type}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;

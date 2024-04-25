import './App.css';
import Navbar from './components/navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import EpisodeDetail from './components/episodeDetail/EpisodeDetail';
import { useEffect, useState } from 'react';

function App() {
  const [screenName,setScreenName] = useState("HOMEPAGE"); 
  const [schedule, setSchedule] = useState([]);
  const [cardData , setCardData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/schedule?country=US');
        const data = await response.json();
        setSchedule(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <Navbar />
    {screenName.toUpperCase()=== "HOMEPAGE" && <Homepage setCardData={setCardData} screenName={screenName} schedule={schedule} setScreenName={setScreenName}/>}
    {screenName.toUpperCase()=== "CARDDETAIL" && <EpisodeDetail cardData={cardData}/>}
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import studioDataService from "../services/studio";
import podcastDataService from "../services/podcast";
import { useParams } from "react-router-dom";

const Show = () => {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [studioData, setStudioData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const podcastData = await podcastDataService.getPodcast(id);
        const studioData = await studioDataService.getStudio(id);

        setPodcast(podcastData);
        setStudioData(studioData);
      } catch (error) {
        console.error("Error retrieving data: ", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {podcast && (
        <div>
          <h2>{podcast.title}</h2>
          <p>{podcast.description}</p>
        </div>
      )}

      {studioData && (
        <div>
          <h3>{studioData.date}</h3>
          <p>{studioData.Sname}</p>
        </div>
      )}
    </div>
  );
};

export default Show;

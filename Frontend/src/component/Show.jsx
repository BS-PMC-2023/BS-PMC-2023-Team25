<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from "react";
import studioDataService from "../services/studio";
import podcastDataService from "../services/podcast";
import { useParams } from "react-router-dom";

export default function Show() {
  const { id } = useParams();
  const [podcasts, setPodcasts] = useState([]);
  const [studioData, setStudioData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const retrievePodcast = () => {
    podcastDataService
      .getAll()
      .then((response) => {
        console.log(response.data); // Check the response data structure
        setPodcasts(response.data.podcasts);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveStudio = () => {
    studioDataService
      .getAll()
      .then((response) => {
        console.log(response.data); // Check the response data structure
        setStudioData(response.data.studios);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    retrieveStudio();
    retrievePodcast();
  }, []);

  console.log(podcasts); // Check the structure of the podcasts state
  console.log(studioData); // Check the structure of the podcasts state

  return (
    <div className="background-simple">
      <h3
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        podcasts loans{" "}
      </h3>
      {podcasts && podcasts.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th className="th">Date</th>
              <th className="th">Email</th>
              <th className="th">Snum</th>
            </tr>
          </thead>
          <tbody>
            {podcasts.map((podcast) => (
              <tr key={podcast._id}>
                <td>{podcast.date}</td>
                <td>{podcast.email}</td>
                <td>{podcast.Snum}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No podcasts found.</p>
      )}
      <h3
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        studios loans{" "}
      </h3>
      {studioData && studioData.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th className="th">Date</th>
              <th className="th">Email</th>
              <th className="th">Snum</th>
            </tr>
          </thead>
          <tbody>
            {studioData.map((studio) => (
              <tr key={studio._id}>
                <td>{studio.date}</td>
                <td>{studio.email}</td>
                <td>{studio.snum}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No studio data found.</p>
      )}
    </div>
  );
}
>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a

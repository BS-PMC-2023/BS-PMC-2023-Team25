import React, { useState, useEffect } from "react";
import studioDataService from "../services/studio";
import podcastDataService from "../services/podcast";
import { useParams } from "react-router-dom";
import UserMenu from "./UserMenu";

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
      <UserMenu />
      <h3
        style={{
          textAlign: "center",
          color: "white",
        }}
      ></h3>
      {podcasts && podcasts.length > 0 ? (
        <table className="table white-table">
          {" "}
          {/* Add the "white-table" class */}
          <thead>
            <tr>
              <th className="th">Date</th>
              <th className="th">Email</th>
              <th className="th">Serial Number</th>
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
      ></h3>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import studioDataService from "../services/studio";
import podcastDataService from "../services/podcast";
import LoanDataService from "../services/loans";
import { useLocation } from "react-router-dom";

import { useParams } from "react-router-dom";
import UserMenu from "./UserMenu";

export default function Show() {
  const { id } = useParams();
  const [email, setEmail] = useState("");

  const [podcasts, setPodcasts] = useState([]);
  const [studioData, setStudioData] = useState([]);
  const [loans, setLoan] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const emailParam = searchParams.get("email");

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

  const retrieveLoan = () => {
    LoanDataService.getAll()
      .then((response) => {
        setLoan(response.data.loans);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    retrieveStudio();
    retrievePodcast();
    retrieveLoan();
    setEmail(emailParam);
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
      >
        Podcast Loans
      </h3>
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
            {podcasts.map(
              (podcast) =>
                podcast.email === email && (
                  <tr key={podcast._id}>
                    <td>{podcast.date}</td>
                    <td>{podcast.email}</td>
                    <td>{podcast.Snum}</td>
                  </tr>
                )
            )}
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
      <h3
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        Studio Loans
      </h3>
      {studioData && studioData.length > 0 ? (
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
            {studioData.map(
              (studio) =>
                studio.email === email && (
                  <tr key={studio._id}>
                    <td>{studio.date}</td>
                    <td>{studio.email}</td>
                    <td>{studio.snum}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      ) : (
        <p>No studios found.</p>
      )}
      <h3
        style={{
          textAlign: "center",
          color: "white",
        }}
      ></h3>
      <h3
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        Products Loans
      </h3>
      {loans && loans.length > 0 ? (
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
            {loans.map(
              (loan) =>
                loan.email === email && (
                  <tr key={loan._id}>
                    <td>{loan.date}</td>
                    <td>{loan.email}</td>
                    <td>{loan.Snumber}</td>
                  </tr>
                )
            )}
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

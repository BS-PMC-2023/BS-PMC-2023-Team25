import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import img from "../images/SCE_logo.png";
import UserMenu from "./UserMenu";
import { useLocation } from "react-router-dom";
import PodcastDataService from "../services/podcast";

export default function Podcast() {
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [dateRet, setDateRet] = useState("");

  const [reason, setReason] = useState("");
  const [snum, setSNum] = useState("");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const emailParam = searchParams.get("email");

  const [isChecked, setIsChecked] = useState(false);
  const nav = useNavigate();

  const addPodcast = (date, dateRet, email, Snum) => {
    const data = {
      date,
      dateRet,
      email,
      Snum,
    };
    const jsonData = JSON.stringify(data);
    console.log(data);
    PodcastDataService.createPodcast(data)
      .then((response) => {
        if (response.status === 200) {
          console.log("loan added");
        } else {
          console.error("Error add loan:", response.data.error);
        }
      })
      .catch((error) => {
        console.error("Error add loan: ", error);
      });
  };
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createPdf();
  };
  useEffect(() => {
    setEmail(emailParam);
  }, []);

  const createPdf = () => {
    var doc = new jsPDF("a4");

    const imageWidth = 55;
    const imageHeight = 20;
    const imageX = doc.internal.pageSize.width / 2 - imageWidth / 2;
    const imageY = 10;
    doc.addImage(img, "PNG", imageX, imageY, imageWidth, imageHeight);

    let y = 50;

    const stateVariables = [
      { name: "title", label: "Report Of Loan Podcast Room", value: snum },

      { name: "email", label: "Student Email", value: email },
      {
        name: "number prod",
        label: "Number of the Room",
        value: snum,
      },

      { name: "date ", label: "Date of Loan ", value: date },
      { name: "dateRet ", label: "Date of Return ", value: dateRet },

      { name: "reason", label: "Reason(s) of Loan ", value: reason },
    ];

    const lineHeight = doc.getLineHeight();
    stateVariables.forEach((state, i) => {
      const lines = doc.splitTextToSize(
        `${state.label} : ${state.value}`,
        doc.internal.pageSize.width - 20
      );
      if (
        y + lines.length * doc.getLineHeight() >
        doc.internal.pageSize.height
      ) {
        doc.addPage();
        y = 10;
      }

      switch (i) {
        case 0:
          doc.setFont("", "bold");
          doc.setFontSize(20);
          doc.setTextColor("#90938C");
          doc.text(`${state.label} : ${state.value}`, 70, y);
          y += 10;
          break;
        case 1:
          doc.setFont("", "bold");
          doc.setFontSize(12);
          doc.setTextColor("black");

          doc.text(`${state.label} : ${state.value}`, 10, y);
          y += 10;
          break;
        case 2:
          doc.setFont("", "bold");
          doc.setFontSize(12);
          doc.setTextColor("black");

          doc.text(`${state.label} : ${state.value}`, 10, y);
          y += 10;
          break;
        case 3:
          doc.setFont("", "bold");
          doc.setFontSize(12);
          doc.setTextColor("black");

          doc.text(`${state.label} : ${state.value}`, 10, y);
          y += 10;
          break;
        case 4:
          doc.setFont("", "bold");
          doc.setFontSize(12);
          doc.setTextColor("black");

          doc.text(`${state.label} : ${state.value}`, 10, y);
          y += 10;
          break;
        case 5:
          doc.setFont("", "bold");
          doc.setTextColor("black");

          doc.text(`${state.label} : `, 10, y);
          y += 10;
          doc.setFont("", "");
          doc.setTextColor("black");

          let ClaimText = `${state.value}`;
          doc.text(`${state.value}`, 10, y, {
            maxWidth: 100,
          });
          y += lineHeight + ClaimText.length / 15;
          break;

        default:
      }
    });

    doc.save(`loan of ${snum}.pdf`);
    const pdfData = doc.output("datauristring");
    const link = document.createElement("a");
    link.href = pdfData;
  };
  const terms =
    " Podcast room users must be registered and make reservations in advance using the online system. The room can only be used during facility operating hours. Users are responsible for leaving the room in the same condition as they found it. Food and drink are not allowed in the room. Users must vacate the room immediately after their reservation ends. The facility reserves the right to cancel any reservation for any reason without prior notice. Users must comply with any additional rules or instructions provided by facility staff. Failure to comply with these rules may result in the suspension or termination of membership privileges.";
  return (
    <div>
      <header>
        <UserMenu />
      </header>
      <div className="form">
        <form className="form-style" onSubmit={handleSubmit}>
          <h1>New Request For Podcast Room</h1>
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder={email}
            readOnly={true}
          />
          <br />
          <br />
          <label htmlFor="snum">Room Number:</label>
          <br />
          <input
            id="snum"
            onChange={(e) => {
              setSNum(e.target.value);
            }}
            type="text"
            placeholder="Room Number"
          />
          <br />
          <br />
          <label htmlFor="date">Date:</label>
          <br />
          <input
            id="date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
            type="text"
            placeholder="dd/mm/yyyy"
          />
          <br />
          <br />
          <label htmlFor="dateReturn">Date Return:</label>
          <br />
          <input
            id="dateReturn"
            onChange={(e) => {
              setDateRet(e.target.value);
            }}
            type="text"
            placeholder="dd/mm/yyyy"
          />
          <br />
          <br />
          <label htmlFor="reason">Reason:</label>
          <br />
          <textarea
            id="reason"
            onChange={(e) => {
              setReason(e.target.value);
            }}
            placeholder="Type the reason here..."
          />
          <br />
          <br />
          <input
            id="terms-and-conditions"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="terms-and-conditions">
            I accept the terms and conditions:
          </label>
          <p>{terms}</p>
          <br />
          <br />
          <div>
            <button
              className="buttonHome"
              onClick={(event) => {
                event.preventDefault();
                addPodcast(date, dateRet, email, snum);
                handleSubmit(event);
              }}
            >
              Submit
            </button>{" "}
          </div>
        </form>
      </div>
    </div>
  );
}

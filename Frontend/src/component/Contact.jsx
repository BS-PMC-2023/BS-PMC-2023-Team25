//contact
import styled from "styled-components";
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nrwtpfg",
        "template_5v3fkhb",
        form.current,
        "jBg8aMVK0eA03GWRp"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setIsSent(true);
          setTimeout(() => {
            setIsSent(false);
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form">
      <div className="form-style">
        <StyledContactForm>
          <h1>צור קשר</h1>
          <br />
          <form ref={form} onSubmit={sendEmail}>
            <label>שם מלא</label>
            <input type="text" name="user_name" placeholder="הזן את שמך המלא" />

            <label>דואר אלקטרוני</label>
            <input
              type="email"
              name="user_email"
              placeholder="הזן כתובת דואר אלקטרוני"
            />

            <label>הודעה</label>
            <textarea name="message" placeholder="הזן את ההודעה שלך"></textarea>

            <input type="submit" value="שלח" />
            {isSent && <SentWindow>Sent</SentWindow>}
          </form>
        </StyledContactForm>
      </div>
    </div>
  );
}

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  margin: 0 auto;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 20px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 55px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;

const SentWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 16px;
  border-radius: 5px;
  z-index: 9999;
`;

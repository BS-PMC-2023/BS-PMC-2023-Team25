import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD:stor/src/component/NewLoan.jsx
import StudioDataService from "../services/studio";
import PodcastDataService from "../services/podcast";

export default function NewLoan() {
  const [productCode, setProductCode] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [productType, setProductType] = useState("");
  const [transferDate, setTransferDate] = useState(""); // תאריך העברת אחריות
  const [productNumber, setProductNumber] = useState(""); // מספר מוצר להעברת אחריות

=======
import { act } from "react-dom/test-utils";

export default function NewLoan() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [seqNum, setSeqNum] = useState("");
  const [isChecked, setIsChecked] = useState(false);
>>>>>>> 2a5aed21a69f03eaf2ef7ba2e80431bacf691b22:Frontend/src/component/NewLoan.jsx
  const nav = useNavigate();

  const handleCheckboxChange = (e) => {
    act(() => {
      setIsChecked(e.target.checked);
    });
  };

  const terms =
    "המשתמש יחויב בתשלום נפרד עבור כל יום נוסף של השאלה, לפי המחיר הנקוב על ידי הלוויין. המשתמש מתחייב לטפל במוצרים בצורה המתאימה ולהחזירם במצבם המקורי. המשתמש חייב להשתמש במוצרים בהתאם להוראות היצרן והמדיניות של הלוויין. הלוויין רשאי לסרב להשאלה לפי שיקולו הפרטי. המשתמש מבטיח כי המידע שסיפק לצורך השאלת המוצרים הוא מדוייק ומעודכן.";

<<<<<<< HEAD:stor/src/component/NewLoan.jsx
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isChecked) {
      const data = {
        Snum: productCode,
        email: email,
        date: date,
      };

      console.log(data);

      if (productType === "podcast") {
        PodcastDataService.createPodcast(data)
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              console.log("Podcast request created successfully!");
              nav("/");
            } else {
              console.error(
                "Error creating podcast request: ",
                response.data.error
              );
            }
          })
          .catch((error) => {
            console.error("Error creating podcast request: ", error);
          });
      } else if (productType === "studio") {
        StudioDataService.createOpinion(data)
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              console.log("Studio request created successfully!");
              nav("/");
            } else {
              console.error(
                "Error creating studio request: ",
                response.data.error
              );
            }
          })
          .catch((error) => {
            console.error("Error creating studio request: ", error);
          });
      }
    } else {
      console.error("You must agree to the terms and conditions");
    }
  };

  const handleTransferFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      Snum: productNumber, // מספר מוצר להעברת אחריות
      email: email, // מייל
    };

    console.log(data);

    // שליחת הנתונים לשרת ועדכון המייל למוצר במסד הנתונים
    if (productType === "podcast") {
      PodcastDataService.updatePodcast(data.Snum)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            console.log("Podcast responsibility transferred successfully!");
            nav("/");
          } else {
            console.error(
              "Error transferring podcast responsibility: ",
              response.data.error
            );
          }
        })
        .catch((error) => {
          console.error("Error transferring podcast responsibility: ", error);
        });
    } else if (productType === "studio") {
      StudioDataService.updateOpinion(data.Snum)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            console.log("Studio responsibility transferred successfully!");
            nav("/");
          } else {
            console.error(
              "Error transferring studio responsibility: ",
              response.data.error
            );
          }
        })
        .catch((error) => {
          console.error("Error transferring studio responsibility: ", error);
        });
    }
  };

=======
>>>>>>> 2a5aed21a69f03eaf2ef7ba2e80431bacf691b22:Frontend/src/component/NewLoan.jsx
  return (
    <div className="background-simple">
      <h1
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        טופס להשאלה
      </h1>
      <form onSubmit={handleFormSubmit}>
        <label className="th" htmlFor="code">
          Product Code:
        </label>
        <input
          type="text"
          id="code"
          name="code"
          value={productCode}
          onChange={(e) => setProductCode(e.target.value)}
        />
<<<<<<< HEAD:stor/src/component/NewLoan.jsx
=======
        <label htmlFor="type">: הכנס קוד מוצר </label>
        <br />
        <br />
        <form data-testid="loan-form">
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="dd/mm/yyyy"
          />
          <label htmlFor="type">: תאריך החזרה </label>
>>>>>>> 2a5aed21a69f03eaf2ef7ba2e80431bacf691b22:Frontend/src/component/NewLoan.jsx

        <label
          style={{
            textAlign: "center",
            // color: "white",
            display: "inline",
          }}
          className="th"
          htmlFor="email"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="th" htmlFor="date">
          Date:
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <div>
          <br />
          <br />
          <label className="th">
            Product Type:
            <select
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
            >
              <br />

              <option value="">Please select</option>
              <option value="podcast">Podcast</option>
              <option value="studio">Studio</option>
            </select>
          </label>
        </div>

        <div>
          <label className="th">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            I agree to the terms and conditions
          </label>
        </div>

        <br />
        <button type="submit">Submit</button>
      </form>

      {/* טופס העברת אחריות */}
      <h1
        style={{
          textAlign: "center",
          color: "white",
        }}
      >
        טופס העברת בעלות השאלה
      </h1>
      <form onSubmit={handleTransferFormSubmit}>
        <label className="th" htmlFor="productNumber">
          Product Number:
        </label>
        <input
          type="text"
          id="productNumber"
          name="productNumber"
          value={productNumber}
          onChange={(e) => setProductNumber(e.target.value)}
        />

        <label className="th" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Transfer</button>
      </form>
      <br />
      <br />
      <p className="th">{terms}</p>
    </div>
  );
}

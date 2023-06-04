import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
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
=======
import { act } from "react-dom/test-utils"; // Import the 'act' function
import jsPDF from "jspdf";
import img from "../images/SCE_logo.png";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductDataService from "../services/products";
>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a

export default function NewLoan(props) {
  const [email, setEmail] = useState("");
  const [seqNum, setSeqNum] = useState("");
<<<<<<< HEAD
  const [isChecked, setIsChecked] = useState(false);
>>>>>>> 2a5aed21a69f03eaf2ef7ba2e80431bacf691b22:Frontend/src/component/NewLoan.jsx
=======
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");
  const [product, setProduct] = useState(props.prod);
  const [isChecked, setIsChecked] = useState(false); // add state for checkbox
>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a
  const nav = useNavigate();
  console.log(props);
  const togglePlace = (Snumber) => {
    let place;
    const data = { place, Snumber };
    console.log(data);
    ProductDataService.updateProd(data)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.value);
          const newPlace = "false";
          const updatedProduct = { ...product, place: newPlace };
          setProduct(updatedProduct);
          window.location.reload(); // rafraîchit la page
        } else {
          console.error("Error updating product place: ", response.data.error);
        }
      })
      .catch((error) => {
        console.error("Error updating product place: ", error);
      });
  };

  const handleCheckboxChange = (e) => {
    act(() => {
      setIsChecked(e.target.checked);
    });
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const seqNumParam = searchParams.get("Snumber");

  // Utilisez la valeur de seqNumParam dans votre composant

  useEffect(() => {
    // Effectuez les actions nécessaires avec seqNumParam
    // Par exemple, mettez à jour l'état seqNum avec seqNumParam
    setSeqNum(seqNumParam);
  }, [seqNumParam]);

  const handleSubmit = (event) => {
    event.preventDefault();
    createPdf();
  };

  //const handleFile = (event, namefile) => {
  // handleUpload(event, namefile);
  //};

  const createPdf = () => {
    var doc = new jsPDF("a4");

    const imageWidth = 55;
    const imageHeight = 20;
    const imageX = doc.internal.pageSize.width / 2 - imageWidth / 2;
    const imageY = 10;
    doc.addImage(img, "PNG", imageX, imageY, imageWidth, imageHeight);

    let y = 50;

    const stateVariables = [
      { name: "title", label: "Report Of Loan", value: seqNum },

      { name: "email", label: "Student Email", value: email },
      {
        name: "number prod",
        label: "Sequence Number of The product",
        value: seqNum,
      },

      { name: "date ", label: "Date of Loan ", value: date },
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

    // handleFile(blob, `${nameSup}`);
    doc.save(`loan of ${seqNum}.pdf`);
    const pdfData = doc.output("datauristring");
    const link = document.createElement("a");
    link.href = pdfData;
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
<<<<<<< HEAD
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
=======
    <div className="form">
      <div className="form-style" onSubmit={handleSubmit}>
        <h1>השאלה חדשה</h1>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="mail@gmail.com "
        />
        <label htmlFor="type">: הכנס mail </label>
        <br />
        <br />
        <input
          onChange={(e) => {
            setSeqNum(e.target.value);
          }}
          type="text"
          placeholder={seqNum}
          readOnly={true}
>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a
        />
<<<<<<< HEAD:stor/src/component/NewLoan.jsx
=======
        <label htmlFor="type">: הכנס קוד מוצר </label>
        <br />
        <br />
        <form data-testid="loan-form">
          <input
            onChange={(e) => {
              setDate(e.target.value);
            }}
            type="text"
            placeholder="dd/mm/yyyy"
          />
          <label htmlFor="type">: תאריך החזרה </label>
>>>>>>> 2a5aed21a69f03eaf2ef7ba2e80431bacf691b22:Frontend/src/component/NewLoan.jsx

<<<<<<< HEAD
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
=======
          <br />
          <br />
          <input
            onChange={(e) => {
              setReason(e.target.value);
            }}
            type="text"
            placeholder="סיבת השאלה"
          />
          <label htmlFor="type">: סיבת השאלה </label>
>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a

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

<<<<<<< HEAD
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
=======
          <div>
            <button
              className="buttonHome"
              onClick={() => {
                togglePlace(seqNum);
              }}
              type="submit"
              disabled={!isChecked}
            >
              שלח
            </button>
          </div>
        </form>
      </div>
>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a
    </div>
  );
}

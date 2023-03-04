// import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useState, useEffect } from "react";
// import Form from "react-bootstrap/Form";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "./Firebase";
// import NaveBar from "./navbar";
import Book from "./Book";

// import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
// import Form from "react-bootstrap/Form";
import { getDocs, collection, onSnapshot, query } from "firebase/firestore";
import { db } from "./Firebase";
function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "Books");
    console.log("got in");
    const q = query(collectionRef);

    const mydata = onSnapshot(q, (querySnapshot) => {
      console.log("snapshot");
      let temp = [];
      temp = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        writer: doc.data().writer,
        corrector: doc.data().corrector,
        topic: doc.data().topic,
        topicField: doc.data().topicField,
        worktype: doc.data().worktype,
        parts: doc.data().parts,
        pages: doc.data().pages,
        otherPrints: doc.data().otherPrints,
        about: doc.data().about,
      }));
      setBooks(temp);
      console.log(temp);
    });
  }, []);

  return (
    <>
      <div
        style={{
          textAlign: "right",
          width: "92%",
          backgroundColor: "#F8F8FF",
          margin: "auto",
          padding: "2%",
          height: 600,
        }}
      >
        <h2
          style={{ marginTop: "1%", textAlign: "center", marginBottom: "5%" }}
        >
          الصفحة الرئيسية
        </h2>
        <div>
          <table
            style={{
              border: "1px solid black",
              float: "right",
            }}
          >
            <thead>
              <tr>
                <th style={{ border: "1px solid black", padding: 5 }}>
                  نبذة عن الكتاب
                </th>
                <th style={{ border: "1px solid black", padding: 5 }}>
                  طبعات سابقة
                </th>
                <th style={{ border: "1px solid black", padding: 5 }}>
                  عددالصفحات
                </th>
                <th style={{ border: "1px solid black", padding: 5 }}>
                  عدد الأجزاء
                </th>
                <th style={{ border: "1px solid black", padding: 5 }}>
                  نوع العمل فيه
                </th>
                <th style={{ border: "1px solid black", padding: 5 }}>مجاله</th>
                <th style={{ border: "1px solid black", padding: 5 }}>
                  موضوع الكتاب
                </th>
                <th style={{ border: "1px solid black", padding: 5 }}>
                  المحقق
                </th>

                <th style={{ border: "1px solid black", padding: 5 }}>
                  المؤلف
                </th>

                <th style={{ border: "1px solid black", padding: 5 }}>
                  عنوان الكتاب كاملا
                </th>
              </tr>
            </thead>
            <tbody>
              {books.map((x, i) => (
                // <Book key={i} book={x} />
                <tr>
                  <td style={{ border: "1px solid black", padding: 5 }}>
                    {x.about}
                  </td>
                  <td style={{ border: "1px solid black", padding: 5 }}>
                    {x.otherPrints}
                  </td>
                  <td style={{ border: "1px solid black", padding: 5 }}>
                    {x.pages}
                  </td>
                  <td style={{ border: "1px solid black", padding: 5 }}>
                    {x.parts}
                  </td>
                  <td style={{ border: "1px solid black", padding: 5 }}>
                    {x.worktype}
                  </td>
                  <td style={{ border: "1px solid black", padding: 5 }}>
                    {x.topicField}
                  </td>
                  <td style={{ border: "1px solid black", padding: 5 }}>
                    {x.topic}
                  </td>
                  <td style={{ border: "1px solid black", padding: 5 }}>
                    {x.corrector}
                  </td>
                  <td style={{ border: "1px solid black", padding: 5 }}>
                    {x.writer}
                  </td>
                  <td style={{ border: "1px solid black", padding: 5 }}>
                    {x.title}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ clear: "right" }}></div>
        </div>
      </div>
    </>
  );
}
export default Home;

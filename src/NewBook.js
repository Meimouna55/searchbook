import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./Firebase";

export default function NewBook() {
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [corrector, setCorrector] = useState("");
  const [topic, setTopic] = useState("");
  const [topicField, setTopicField] = useState("");
  const [worktype, setWorktype] = useState("");
  const [parts, setParts] = useState("");
  const [pages, setPages] = useState("");
  const [otherPrints, setOtherPrints] = useState("");
  const [about, setAbout] = useState("");

  const Save = async () => {
    const docRef = await addDoc(collection(db, "Books"), {
      title: title,
      writer: writer,
      corrector: corrector,
      topic: topic,
      topicField: topicField,
      worktype: worktype,
      parts: parts,
      pages: pages,
      otherPrints: otherPrints,
      about: about,
    });

    console.log("Book added with ID: ", docRef.id);

    // alert("Thank You");
  };

  return (
    <>
      <div
        style={{
          textAlign: "right",
          width: "92%",
          backgroundColor: "#F8F8FF",
          margin: "auto",
          padding: "1%",
          borderRadius: 8,
        }}
      >
        <div></div>
        <h2 style={{ marginTop: "1%", textAlign: "center", marginBottom: "%" }}>
          بيانات الكتاب الجديد
        </h2>
        <div
          style={{
            width: "90%",
            margin: "auto",
            padding: "1%",
          }}
        >
          <div>
            <Form.Label
              style={{
                margin: 13,
                fontWeight: "bold",
                textDecoration: "underline",
                float: "right",
                textAlign: "left",
                width: 150,
                // backgroundColor: "gray",
              }}
            >
              : عنوان الكتاب كاملا
            </Form.Label>
            <Form.Control
              style={{
                width: 300,
                textAlign: "right",
                float: "right",
                margin: 6,
              }}
              type="text"
              placeholder="...عنوان الكتاب كاملا"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <br style={{ clear: "right" }} />
          <div>
            <Form.Label
              style={{
                margin: 13,
                fontWeight: "bold",
                textDecoration: "underline",
                float: "right",
                textAlign: "left",
                width: 150,
              }}
            >
              : المؤلف
            </Form.Label>

            <Form.Control
              style={{
                width: 220,
                margin: 6,
                float: "right",
                textAlign: "right",
              }}
              type="text"
              placeholder="...المؤلف"
              onChange={(e) => {
                setWriter(e.target.value);
              }}
            />

            <Form.Label
              style={{
                margin: 13,
                fontWeight: "bold",
                textDecoration: "underline",
                float: "right",
                textAlign: "right",
              }}
            >
              : المحقق
            </Form.Label>
            <Form.Control
              style={{
                width: 220,
                margin: 6,
                float: "right",
                textAlign: "right",
              }}
              type="text"
              placeholder="..المحقق"
              onChange={(e) => {
                setCorrector(e.target.value);
              }}
            />

            <br style={{ clear: "right" }} />
            <div>
              <Form.Label
                style={{
                  margin: 13,
                  fontWeight: "bold",
                  textDecoration: "underline",
                  float: "right",
                  textAlign: "left",
                  width: 150,
                }}
              >
                : موضوع الكتاب
              </Form.Label>
              <Form.Control
                style={{
                  width: 200,
                  textAlign: "right",
                  float: "right",
                  margin: 6,
                }}
                type="text"
                placeholder="..موضوع الكتاب"
                onChange={(e) => {
                  setTopic(e.target.value);
                }}
              />
              <Form.Label
                style={{
                  margin: 13,
                  fontWeight: "bold",
                  textDecoration: "underline",
                  float: "right",
                  textAlign: "right",
                }}
              >
                : مجاله
              </Form.Label>
              <Form.Control
                style={{
                  width: 240,
                  margin: 6,
                  float: "right",
                  textAlign: "right",
                }}
                type="text"
                placeholder="...مجاله"
                onChange={(e) => {
                  setTopicField(e.target.value);
                }}
              />
            </div>
            <br style={{ clear: "right" }} />
            <div>
              <Form.Label
                style={{
                  margin: 13,
                  fontWeight: "bold",
                  textDecoration: "underline",
                  float: "right",
                  textAlign: "left",
                  width: 150,
                }}
              >
                : نوع العمل فيه
              </Form.Label>
              <Form.Control
                style={{
                  width: 250,
                  textAlign: "right",
                  float: "right",
                  margin: 6,
                }}
                type="text"
                placeholder="...نوع العمل فيه"
                onChange={(e) => {
                  setWorktype(e.target.value);
                }}
              />
            </div>
            <br style={{ clear: "right" }} />
            <div>
              <Form.Label
                style={{
                  margin: 13,
                  fontWeight: "bold",
                  textDecoration: "underline",
                  float: "right",
                  textAlign: "left",
                  width: 150,
                }}
              >
                : عدد الأجزاء
              </Form.Label>
              <Form.Control
                style={{
                  width: 220,
                  textAlign: "right",
                  float: "right",
                  margin: 6,
                }}
                type="text"
                placeholder="...عدد الأجزاء"
                onChange={(e) => {
                  setParts(e.target.value);
                }}
              />
              <Form.Label
                style={{
                  margin: 13,
                  fontWeight: "bold",
                  textDecoration: "underline",
                  float: "right",
                  textAlign: "right",
                }}
              >
                : عددالصفحات
              </Form.Label>
              <Form.Control
                style={{
                  width: 200,
                  margin: 6,
                  float: "right",
                  textAlign: "right",
                }}
                type="text"
                placeholder="...عددالصفحات"
                onChange={(e) => {
                  setPages(e.target.value);
                }}
              />
            </div>
            <br style={{ clear: "right" }} />
            <div>
              <Form.Label
                style={{
                  margin: 13,
                  fontWeight: "bold",
                  textDecoration: "underline",
                  float: "right",
                  textAlign: "left",
                  width: 150,
                }}
              >
                : طبعات سابقة
              </Form.Label>
              <Form.Control
                style={{
                  width: 250,
                  textAlign: "right",
                  float: "right",
                  margin: 6,
                }}
                type="text"
                placeholder="...طبعات سابقة"
                onChange={(e) => {
                  setOtherPrints(e.target.value);
                }}
              />
            </div>
            <div style={{ clear: "right" }}></div>
            <Form.Label
              style={{
                margin: 13,
                fontWeight: "bold",
                textDecoration: "underline",
                float: "right",
                textAlign: "left",
                width: 150,
              }}
            >
              : نبذة عن الكتاب
            </Form.Label>

            <Form.Control
              style={{
                width: 250,
                textAlign: "right",
                float: "right",
                margin: 6,
                height: 50,
              }}
              type="text"
              placeholder="...نبذة عن الكتاب"
              onChange={(e) => {
                setAbout(e.target.value);
              }}
            />
            <div style={{ clear: "right" }}></div>
          </div>
          <br></br>
          <Button
            style={{ marginRight: "10%", width: "20%" }}
            href="./home.js"
            onClick={() => Save()}
            variant="primary"
          >
            إنشاء كتاب
          </Button>
          <p variant="primary">{title}</p>
          <br></br>
        </div>
      </div>
    </>
  );
}

export default function Book({ book }) {
  console.log(book);
  return (
    <>
      <p style={{ color: "black", backgroundColor: "red" }}>{book.title}</p>
    </>
  );
}

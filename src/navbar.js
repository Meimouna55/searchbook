import { Link, useMatch, useResolvedPath } from "react-router-dom";
export default function NaveBar() {
  //   const path = window.location.pathname;
  return (
    <>
      <div
        style={{
          textAlign: "right",
          width: "92%",
          backgroundColor: "#357EC7",
          margin: "auto",
          borderRadius: 8,
        }}
      >
        <nav>
          <CustomLink
            to="./home.js"
            style={{
              float: "right",
              color: "white",
              fontWeight: "bold",
              fontSize: 22,
              padding: 20,
              textDecoration: "none",

              // backgroundColor: "#1E90FF",
              // border: "2px solid #357EC7",
            }}
          >
            الصفحة الرئيسية
          </CustomLink>
          <CustomLink
            to="./NewBook.js"
            style={{
              float: "right",
              color: "white",
              fontWeight: "bold",
              fontSize: 22,
              padding: 20,
              textDecoration: "none",

              // border: "2px solid #357EC7",
              // backgroundColor: "#1E90FF",
            }}
          >
            كتاب جديد
          </CustomLink>
        </nav>
        <div style={{ clear: "right" }}></div>
      </div>
    </>
  );
}
function CustomLink({ to, children, ...props }) {
  //   const path = window.location.pathname;
  const resolvepath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvepath.pathname, end: true });
  return (
    <div className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}

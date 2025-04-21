import { Link } from "react-router-dom";

export default function DefaultHeader() {
  return (
    <header>
      <div>
        <Link to={"/"}>
          <h2>헤더 타이틀</h2>
        </Link>
      </div>
    </header>
  );
}

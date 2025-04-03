import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <h1>Homepage (Worldwise)</h1>
      {/* <a href="/pricing">Pricing page - Anchor</a> */}
      <Link to="/pricing">Pricing</Link>
    </div>
  )
}

export default Homepage;
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getAlbums } from "__mock/data";
import { getHelloWorld } from "../api/dashboard.api";
export default function Dashboard() {
  const aAlbums = getAlbums();
  const result = useQuery("hello-world", getHelloWorld);
  console.log(result);

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {aAlbums.map((album) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/album/${album.name}`}
            key={album.name}
          >
            {album.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}

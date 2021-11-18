import { useParams } from "react-router-dom";

export default function Album() {
  const params = useParams();
  return <h2>Álbum: {params.albumId}</h2>;
}

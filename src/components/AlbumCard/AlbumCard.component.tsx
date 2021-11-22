import { Container, AlbumImage, AlbumInfoContent } from "./AlbumCard.styles";

const AlbumCard = () => {
  return (
    <Container>
      <AlbumImage
        src={
          "https://ichef.bbci.co.uk/news/640/cpsprodpb/15744/production/_118667878_ka_05_friendsreunion.jpg"
        }
      />
      <AlbumInfoContent></AlbumInfoContent>
    </Container>
  );
};

export default AlbumCard;

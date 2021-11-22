import { TextCP, TextType } from "components/shared/text/text.component";
import {
  Container,
  AlbumImage,
  AlbumInfoContent,
  AlbumNameContent,
} from "./AlbumCard.styles";

interface IProps {
  albumCoverImage: string;
  albumName: string;
  creationDate: string;
}

const AlbumCard = ({ albumCoverImage, albumName, creationDate }: IProps) => {
  return (
    <Container>
      <AlbumImage src={albumCoverImage} />
      <AlbumInfoContent>
        <div>
          <TextCP>{creationDate}</TextCP>
        </div>
        <AlbumNameContent>
          <TextCP type={TextType.TITLE_48}>{albumName}</TextCP>
        </AlbumNameContent>
      </AlbumInfoContent>
    </Container>
  );
};

export default AlbumCard;

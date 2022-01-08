import { red, white } from "components/shared/colors";
import { PillsCP } from "components/shared/pills/pills.component";
import { TextCP, TextType } from "components/shared/text/text.component";
import { MdFavorite, MdFavoriteBorder, MdMoreVert } from "react-icons/md";
import {
  PhotoCardContainer,
  PhotoFavIcon,
  PhotoName,
  PhotoOptions,
} from "./photo-card.styles";

interface IProps {
  url: string;
  name: string;
  isSelected: boolean;
  isFavorite: boolean;
}

export const PhotoCardCP = ({ url, name, isSelected, isFavorite }: IProps) => {
  return (
    <PhotoCardContainer url={url}>
      <PhotoFavIcon>
        {isFavorite ? (
          <MdFavorite color={red} size={32} />
        ) : (
          <MdFavoriteBorder color={white} size={32} />
        )}
      </PhotoFavIcon>
      <PhotoOptions>
        <MdMoreVert color={white} size={32} />
      </PhotoOptions>
      <PhotoName>
        {isSelected && (
          <PillsCP data={[{ id: 1, label: "Selecionada" }]} selectedIds={[1]} />
        )}
        <TextCP type={TextType.SUBTITLE_32}>{name}</TextCP>
      </PhotoName>
    </PhotoCardContainer>
  );
};

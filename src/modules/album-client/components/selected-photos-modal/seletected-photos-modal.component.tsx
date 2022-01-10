import { black, error, red } from "components/shared/colors";
import { ModalCP } from "components/shared/modal/modal.component";
import { TextCP, TextType } from "components/shared/text/text.component";
import React, { useEffect, useState } from "react";
import { MdCheck, MdClose, MdFavorite } from "react-icons/md";
import {
  PhotoContainer,
  Photo,
  PhotoNameContainer,
  PhotoFavoriteContainer,
  PreSelectContainer,
  SelectedPhotosContainer,
} from "./selected-photos-modal.styles";

interface IPhoto {
  id: string;
  url: string;
  name: string;
  isFavorite: boolean;
  isSelected: boolean;
}

interface SelectedPhotosModalProps {
  photos: IPhoto[];
  minimumSelected: number;
  isOpen: boolean;
  onCancel: () => void;
  onClickPhoto: (photoId: string) => void;
  onTogglePreSelect: (photoId: string) => void;
  onFinishSelection: () => void;
}

const filterSelected = (photos: IPhoto[]) =>
  photos.filter((photo) => photo.isSelected);

const filterUnselected = (photos: IPhoto[]) =>
  photos.filter((photo) => !photo.isSelected);

const PhotoCP = ({
  name,
  url,
  isFavorite,
  isSelected,
  onTogglePreSelect,
  onClick,
}: IPhoto & { onTogglePreSelect: () => void; onClick: () => void }) => {
  return (
    <PhotoContainer onClick={onClick}>
      <Photo src={url} alt={name} />
      <PhotoNameContainer>
        <TextCP color={black}>{name}</TextCP>
        {isFavorite && (
          <PhotoFavoriteContainer>
            <MdFavorite color={red} size={16} />
            <TextCP color={black} type={TextType.TEXT_14}>
              Favorito
            </TextCP>
          </PhotoFavoriteContainer>
        )}
      </PhotoNameContainer>
      {isSelected ? (
        <PreSelectContainer
          onClick={(ev) => {
            ev.stopPropagation();
            onTogglePreSelect();
          }}
        >
          <MdClose size={24} />
        </PreSelectContainer>
      ) : (
        <PreSelectContainer
          onClick={(ev) => {
            ev.stopPropagation();
            onTogglePreSelect();
          }}
        >
          <MdCheck size={24} />
        </PreSelectContainer>
      )}
    </PhotoContainer>
  );
};

export const SelectedPhotosModalCP: React.FC<SelectedPhotosModalProps> = ({
  isOpen,
  minimumSelected,
  photos,
  onCancel,
  onTogglePreSelect,
  onFinishSelection,
  onClickPhoto,
}) => {
  const [selectedPhotos, setSelected] = useState(filterSelected(photos));
  const [unselectedPhotos, setUnselected] = useState(filterUnselected(photos));

  useEffect(() => {
    setSelected(filterSelected(photos));
    setUnselected(filterUnselected(photos));
  }, [photos]);

  return (
    <ModalCP
      isOpen={isOpen}
      onCancel={onCancel}
      title="Fotos pré-selecionadas"
      onOk={onFinishSelection}
      okLabel="Finalizar seleção"
      // disabled={selectedPhotos.length < minimumSelected}
    >
      <SelectedPhotosContainer>
        {selectedPhotos.map((photo) => (
          <PhotoCP
            {...photo}
            key={photo.id}
            onClick={() => onClickPhoto(photo.id)}
            onTogglePreSelect={() => onTogglePreSelect(photo.id)}
          />
        ))}
      </SelectedPhotosContainer>
      <div>
        <div>
          {selectedPhotos.length < minimumSelected && (
            <TextCP type={TextType.TEXT_14} color={error}>
              Você precisa selecionar pelo menos {minimumSelected} fotos.
            </TextCP>
          )}
        </div>
        <TextCP type={TextType.TEXT_14} color={black}>
          Clique no check para selecionar, ou volte para pré-selecionar mais
          fotos.
        </TextCP>
      </div>
      {unselectedPhotos.map((photo) => (
        <PhotoCP
          {...photo}
          key={photo.id}
          onClick={() => onClickPhoto(photo.id)}
          onTogglePreSelect={() => onTogglePreSelect(photo.id)}
        />
      ))}
    </ModalCP>
  );
};

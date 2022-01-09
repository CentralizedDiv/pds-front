import { BadgeCP } from "components/shared/badge/bade.component";
import { red, text_secondary, white } from "components/shared/colors";
import { TextCP, TextType } from "components/shared/text/text.component";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  MdChevronRight,
  MdChevronLeft,
  MdFavoriteBorder,
  MdFavorite,
  MdChat,
  MdDone,
  MdDoneAll,
  MdArrowBack,
} from "react-icons/md";
import ReactModal from "react-modal";
import {
  ActionContainer,
  ActionsContainer,
  ArrowContainer,
  CloseContainer,
  CommentActionContainer,
  IndicatorContainer,
  MainContainer,
  Photo,
  PhotoContainer,
} from "./carousel.styles";

interface BaseProps {
  photos: {
    id: string;
    url: string;
    isSelected: boolean;
    isFavorite: boolean;
  }[];
  openAtId?: string;
  allowEdit: boolean;
  isOpen: boolean;
  onClose: () => void;
  onClickComments: (photoId: string) => void;
}

interface NotAllowedEditProps {
  allowEdit: false;
}

interface AllowedEditProps {
  allowEdit: true;
  onToggleFavorite: (photoId: string) => void;
  onTogglePreSelect: (photoId: string) => void;
}

type CarouselProps = BaseProps & (NotAllowedEditProps | AllowedEditProps);

// const reducer = (_: number, action: {number}) =>

export const CarouselCP: React.FC<CarouselProps> = ({
  isOpen,
  onClose,
  photos,
  openAtId,
  allowEdit,
  onClickComments,
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(
    openAtId ? photos.findIndex((photo) => photo.id === openAtId) : 0
  );
  const [currentPhoto, setCurrentPhoto] = useState(photos[currentIndex]);
  const photoContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const changeCurrentPhoto = useCallback(
    (dir: "prev" | "next") => {
      if (dir === "prev" && currentIndex !== 0) {
        setCurrentIndex(currentIndex - 1);
      }

      if (dir === "next" && currentIndex !== photos.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    },
    [currentIndex, photos]
  );

  useEffect(() => {
    setCurrentPhoto(photos[currentIndex]);
  }, [currentIndex, photos]);

  useEffect(() => {
    setCurrentIndex(
      openAtId ? photos.findIndex((photo) => photo.id === openAtId) : 0
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openAtId]);

  if (!currentPhoto) return null;

  return (
    <ReactModal
      isOpen={isOpen}
      className="modal-content"
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.85)",
        },
        content: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
      }}
    >
      <MainContainer
        ref={containerRef}
        onClick={(ev) => {
          if (
            (ev.target as HTMLDivElement)?.isSameNode(containerRef.current) ||
            (ev.target as HTMLDivElement)?.isSameNode(photoContainerRef.current)
          )
            onClose();
        }}
      >
        <CloseContainer onClick={onClose}>
          <MdArrowBack size={16} color={white} />
          <TextCP>Voltar</TextCP>
        </CloseContainer>
        <ArrowContainer
          onClick={() => changeCurrentPhoto("prev")}
          disabled={currentIndex === 0}
        >
          <MdChevronLeft
            color={currentIndex === 0 ? text_secondary : white}
            size={96}
          />
        </ArrowContainer>
        <PhotoContainer ref={photoContainerRef}>
          {allowEdit && (
            <ActionsContainer>
              <ActionContainer
                onClick={() =>
                  (props as AllowedEditProps).onToggleFavorite(currentPhoto.id)
                }
              >
                {currentPhoto.isFavorite ? (
                  <MdFavorite color={red} size={24} />
                ) : (
                  <MdFavoriteBorder color={white} size={24} />
                )}
                <TextCP>
                  {currentPhoto.isFavorite
                    ? "Favorito"
                    : "Marcar como favorito"}
                </TextCP>
              </ActionContainer>
              <CommentActionContainer
                onClick={() => onClickComments(currentPhoto.id)}
              >
                <BadgeCP content="3">
                  <MdChat color={white} size={24} />
                </BadgeCP>
                <TextCP>Comentários</TextCP>
              </CommentActionContainer>
              <ActionContainer
                onClick={() =>
                  (props as AllowedEditProps).onTogglePreSelect(currentPhoto.id)
                }
              >
                {currentPhoto.isSelected ? (
                  <MdDoneAll color={white} size={24} />
                ) : (
                  <MdDone color={white} size={24} />
                )}
                <TextCP>
                  {currentPhoto.isSelected ? "Selecionado" : "Pré-selecionar"}
                </TextCP>
              </ActionContainer>
            </ActionsContainer>
          )}
          <Photo src={currentPhoto.url} alt={currentPhoto.url} />
          <IndicatorContainer>
            <TextCP type={TextType.TEXT_12}>
              {currentIndex + 1}/{photos.length}
            </TextCP>
          </IndicatorContainer>
        </PhotoContainer>
        <ArrowContainer
          onClick={() => changeCurrentPhoto("next")}
          disabled={currentIndex === photos.length - 1}
        >
          <MdChevronRight
            color={currentIndex === photos.length - 1 ? text_secondary : white}
            size={96}
          />
        </ArrowContainer>
      </MainContainer>
    </ReactModal>
  );
};

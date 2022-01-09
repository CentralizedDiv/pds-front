import { CarouselCP } from "components/carousel/carousel.component";
import {
  CommentsModalContext,
  CommentsModalCP,
} from "components/comments-modal/comments-modal.component";
import { ButtonCP } from "components/shared/button/button.component";
import { useCallback, useState } from "react";
import { AfterPhotoSelectionModalCP } from "../components/after-photo-selection-modal/after-photo-selection-modal.component";
import { SelectedPhotosModalCP } from "../components/selected-photos-modal/seletected-photos-modal.component";
import { Container } from "./album-client.styles";

interface UIState {
  showCarousel: boolean;
  showCommentsModal: boolean;
  showSelectedPhotosModal: boolean;
  showAfterPhotoSelectionModal: boolean;
  openCarouselAtId: string | undefined;
}
const initialUIState = {
  showCarousel: false,
  showCommentsModal: false,
  showSelectedPhotosModal: false,
  showAfterPhotoSelectionModal: false,
  openCarouselAtId: undefined,
};

export function AlbumClient() {
  const [photos, setPhotos] = useState([
    {
      id: "1",
      name: "IMG-1",
      url: "https://images.pexels.com/photos/9632418/pexels-photo-9632418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      isFavorite: false,
      isSelected: false,
    },
    {
      id: "2",
      name: "IMG-2",
      url: "https://images.pexels.com/photos/9632417/pexels-photo-9632417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      isFavorite: true,
      isSelected: true,
    },
    {
      id: "3",
      name: "IMG-3",
      url: "https://images.pexels.com/photos/9632416/pexels-photo-9632416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      isFavorite: false,
      isSelected: false,
    },
    {
      id: "4",
      name: "IMG-4",
      url: "https://images.pexels.com/photos/9632415/pexels-photo-9632415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      isFavorite: true,
      isSelected: false,
    },
  ]);
  const [UIState, setUIState] = useState<UIState>(initialUIState);

  const toggleUIState = useCallback((stateName: keyof UIState) => {
    setUIState((state) => ({ ...state, [stateName]: !state[stateName] }));
  }, []);

  const onSendMessage = useCallback((content: string) => {
    return content;
  }, []);
  const onToggleFavorite = useCallback((photoId: string) => {
    return setPhotos((_photos) =>
      _photos.map((photo) => ({
        ...photo,
        isFavorite: photo.id === photoId ? !photo.isFavorite : photo.isFavorite,
      }))
    );
  }, []);
  const onTogglePreSelect = useCallback((photoId: string) => {
    return setPhotos((_photos) =>
      _photos.map((photo) => ({
        ...photo,
        isSelected: photo.id === photoId ? !photo.isSelected : photo.isSelected,
      }))
    );
  }, []);
  const onFinishSelection = useCallback(() => {
    toggleUIState("showSelectedPhotosModal");
    toggleUIState("showAfterPhotoSelectionModal");
    return photos.filter((photo) => photo.isSelected);
  }, [photos, toggleUIState]);

  return (
    <Container>
      <ButtonCP onClick={() => toggleUIState("showCarousel")}>
        Trigger Carousel
      </ButtonCP>
      <ButtonCP onClick={() => toggleUIState("showCommentsModal")}>
        Trigger Comments Modal
      </ButtonCP>
      <ButtonCP onClick={() => toggleUIState("showSelectedPhotosModal")}>
        Trigger Selected Photos Modal
      </ButtonCP>
      <ButtonCP onClick={() => toggleUIState("showAfterPhotoSelectionModal")}>
        Trigger After Photo Selection Modal
      </ButtonCP>
      <AfterPhotoSelectionModalCP
        photographerName="Fotógrafo"
        isOpen={UIState.showAfterPhotoSelectionModal}
        onCancel={() => toggleUIState("showAfterPhotoSelectionModal")}
      />
      <SelectedPhotosModalCP
        isOpen={UIState.showSelectedPhotosModal}
        onCancel={() => toggleUIState("showSelectedPhotosModal")}
        photos={photos}
        minimumSelected={3}
        onTogglePreSelect={onTogglePreSelect}
        onFinishSelection={onFinishSelection}
        onClickPhoto={(photoId) => {
          setUIState((state) => ({
            ...state,
            openCarouselAtId: photoId,
            showCarousel: true,
          }));
        }}
      />
      <CarouselCP
        photos={photos}
        isOpen={UIState.showCarousel}
        onClose={() => {
          setUIState((state) => ({
            ...state,
            showCarousel: false,
            openCarouselAtId: undefined,
          }));
        }}
        allowEdit={true}
        openAtId={UIState.openCarouselAtId}
        onToggleFavorite={onToggleFavorite}
        onTogglePreSelect={onTogglePreSelect}
        onClickComments={() => toggleUIState("showCommentsModal")}
      />
      <CommentsModalCP
        isOpen={UIState.showCommentsModal}
        onCancel={() => toggleUIState("showCommentsModal")}
        context={CommentsModalContext.PHOTO}
        comments={[]}
        onSendMessage={onSendMessage}
      />
    </Container>
  );
}

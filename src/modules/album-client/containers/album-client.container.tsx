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
}
const initialUIState = {
  showCarousel: false,
  showCommentsModal: false,
  showSelectedPhotosModal: false,
  showAfterPhotoSelectionModal: false,
};

export function AlbumClient() {
  const [UIState, setUIState] = useState<UIState>(initialUIState);

  const toggleUIState = useCallback((stateName: keyof UIState) => {
    setUIState((state) => ({ ...state, [stateName]: !state[stateName] }));
  }, []);

  const onSendMessage = useCallback((content: string) => {
    return content;
  }, []);
  const onToggleFavorite = useCallback((photoId: string) => {
    return photoId;
  }, []);
  const onTogglePreSelect = useCallback((photoId: string) => {
    return photoId;
  }, []);
  const onFinishSelection = useCallback((selectedPhotos: string[]) => {
    return selectedPhotos;
  }, []);

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
      <CarouselCP
        photos={[]}
        isOpen={UIState.showCarousel}
        allowEdit={true}
        onToggleFavorite={onToggleFavorite}
        onTogglePreSelect={onTogglePreSelect}
      />
      <AfterPhotoSelectionModalCP
        isOpen={UIState.showAfterPhotoSelectionModal}
        onCancel={() => toggleUIState("showAfterPhotoSelectionModal")}
      />
      <SelectedPhotosModalCP
        isOpen={UIState.showSelectedPhotosModal}
        onCancel={() => toggleUIState("showAfterPhotoSelectionModal")}
        photos={[]}
        onTogglePreSelect={onTogglePreSelect}
        onFinishSelection={onFinishSelection}
      />
      <CommentsModalCP
        isOpen={UIState.showCommentsModal}
        onCancel={() => toggleUIState("showAfterPhotoSelectionModal")}
        context={CommentsModalContext.PHOTO}
        comments={[]}
        onSendMessage={onSendMessage}
      />
    </Container>
  );
}

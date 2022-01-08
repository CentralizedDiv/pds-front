import { ModalCP } from "components/shared/modal/modal.component";
import React, { useCallback, useState } from "react";

interface Photo {
  id: string;
  url: string;
  name: string;
  isFavorite: boolean;
  isSelected: boolean;
}

interface SelectedPhotosModalProps {
  photos: Photo[];
  isOpen: boolean;
  onCancel: () => void;
  onTogglePreSelect: (photoId: string) => void;
  onFinishSelection: (selectedPhotos: string[]) => void;
}

export const SelectedPhotosModalCP: React.FC<SelectedPhotosModalProps> = ({
  isOpen,
  onCancel,
  onTogglePreSelect,
  ...props
}) => {
  const [photos, setPhotos] = useState(props.photos);

  const togglePreSelect = useCallback(
    (photoId: string) => {
      setPhotos((_photos) =>
        _photos.map((photo) =>
          photo.id === photoId
            ? { ...photo, isSelected: !photo.isSelected }
            : photo
        )
      );
      onTogglePreSelect(photoId);
    },
    [onTogglePreSelect]
  );

  return (
    <ModalCP isOpen={isOpen} onCancel={onCancel} title="Fotos pré-selecionadas">
      Modal de Fotos pré-selecionadas
      {photos.map((photo) => (
        <h1 key={photo.id} onClick={() => togglePreSelect(photo.id)}>
          {photo.id}
        </h1>
      ))}
    </ModalCP>
  );
};

import { ButtonCP } from "components/shared/button/button.component";
import { IconCircle } from "components/shared/button/button.styles";
import { ModalCP } from "components/shared/modal/modal.component";
import PageWrapper from "components/shared/page-wrapper/page-wrapper.component";
import { FileListCP } from "components/shared/uploader/file-list/file-list.component";
import { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";
import { useForm } from "react-hook-form";
import {
  TitleContent,
  PillsContent,
  AlbumsGrid,
  InputContainer,
  CreateNewAlbumModalContainer,
} from "./dashboard.styles";
import { TextCP, TextType } from "components/shared/text/text.component";
import { PillsCP } from "components/shared/pills/pills.component";
import { InputCP } from "components/shared/input/input.component";
import { AlbumCard } from "modules/dashboard/components/album-card/album-card.component";
import { black } from "components/shared/colors";

interface NewAlbumFormValues {
  albumName: string;
  maxPhotos: number;
}

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPills, setSelectedPills] = useState([1]);
  const { register } = useForm<NewAlbumFormValues>();

  const pills = [
    {
      id: 1,
      label: "Todos",
    },
    {
      id: 2,
      label: "Concluídos",
    },
    {
      id: 3,
      label: "Em aberto",
    },
    {
      id: 4,
      label: "Comentário não lido",
    },
  ];

  const handleCreateNewAlbum = useCallback(() => {}, []);

  return (
    <>
      <PageWrapper
        title="Álbuns"
        headerRight={
          <ButtonCP
            icon={
              <IconCircle>
                <MdAdd color={"#ffffff"} size={16} />
              </IconCircle>
            }
            onClick={() => setIsModalOpen(true)}
          >
            Novo álbum
          </ButtonCP>
        }
      >
        <ModalCP
          isOpen={isModalOpen}
          title="Novo álbum"
          cancelLabel="Cancelar"
          onCancel={() => setIsModalOpen(false)}
          onOk={handleCreateNewAlbum}
          okLabel="Criar álbum"
        >
          <CreateNewAlbumModalContainer>
            <InputContainer>
              <InputCP
                id="albumName"
                label="Nome"
                type="name"
                {...register("albumName")}
              />
            </InputContainer>
            <InputContainer>
              <InputCP
                id="maxPhotos"
                label="Quantidade máxima de fotos"
                type="number"
                {...register("maxPhotos")}
              />
            </InputContainer>
            <TextCP color={black} overrideStyles={{ fontWeight: 400 }}>
              Fotos
            </TextCP>
            <FileListCP />
          </CreateNewAlbumModalContainer>
        </ModalCP>
        <TitleContent>
          <TextCP type={TextType.HEADING_24}>6 Álbuns</TextCP>
        </TitleContent>
        <PillsContent>
          <PillsCP
            data={pills}
            selectedIds={selectedPills}
            onClickPill={(id) => setSelectedPills([id])}
          />
        </PillsContent>
        {/** TODO
         * Call api and loop data throught cards
         */}
        <AlbumsGrid>
          <AlbumCard
            albumCoverImage="https://ichef.bbci.co.uk/news/640/cpsprodpb/15744/production/_118667878_ka_05_friendsreunion.jpg"
            albumName="Friends Reunion"
            creationDate="20 Jan 2021"
          />
          <AlbumCard
            albumCoverImage="https://ichef.bbci.co.uk/news/640/cpsprodpb/15744/production/_118667878_ka_05_friendsreunion.jpg"
            albumName="Friends Reunion"
            creationDate="20 Jan 2021"
          />
          <AlbumCard
            albumCoverImage="https://ichef.bbci.co.uk/news/640/cpsprodpb/15744/production/_118667878_ka_05_friendsreunion.jpg"
            albumName="Friends Reunion"
            creationDate="20 Jan 2021"
          />
          <AlbumCard
            albumCoverImage="https://ichef.bbci.co.uk/news/640/cpsprodpb/15744/production/_118667878_ka_05_friendsreunion.jpg"
            albumName="Friends Reunion"
            creationDate="20 Jan 2021"
          />
          <AlbumCard
            albumCoverImage="https://ichef.bbci.co.uk/news/640/cpsprodpb/15744/production/_118667878_ka_05_friendsreunion.jpg"
            albumName="Friends Reunion"
            creationDate="20 Jan 2021"
          />
          <AlbumCard
            albumCoverImage="https://ichef.bbci.co.uk/news/640/cpsprodpb/15744/production/_118667878_ka_05_friendsreunion.jpg"
            albumName="Friends Reunion"
            creationDate="20 Jan 2021"
          />
        </AlbumsGrid>
      </PageWrapper>
    </>
  );
}

import { ButtonCP } from "components/shared/button/button.component";
import { IconCircle } from "components/shared/button/button.styles";
import { ModalCP } from "components/shared/modal/modal.component";
import PageWrapper from "components/shared/page-wrapper/page-wrapper.component";
import { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";
import { TitleContent, PillsContent } from "./dashboard.styles";
import { TextCP, TextType } from "components/shared/text/text.component";
import { PillsCP } from "components/shared/pills/pills.component";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPills, setSelectedPills] = useState([1]);

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
      />
      <ModalCP
        isOpen={isModalOpen}
        title="Novo álbum"
        cancelLabel="Cancelar"
        onCancel={() => setIsModalOpen(false)}
        onOk={handleCreateNewAlbum}
        okLabel="Criar álbum"
      ></ModalCP>
      <TitleContent>
        <TextCP type={TextType.HEADING_24}>Heading 24</TextCP>
      </TitleContent>
      <PillsContent>
        <PillsCP
          data={pills}
          selectedIds={selectedPills}
          onClickPill={(id) => setSelectedPills([id])}
        />
      </PillsContent>
    </>
  );
}

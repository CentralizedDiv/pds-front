import { ButtonCP } from "components/shared/button/button.component";
import { IconCircle } from "components/shared/button/button.styles";
import { ModalCP } from "components/shared/modal/modal.component";
import PageWrapper from "components/shared/page-wrapper/page-wrapper.component";
import { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";
import { TitleContent } from "./dashboard.styles";
import { TextCP, TextType } from "components/shared/text/text.component";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    </>
  );
}

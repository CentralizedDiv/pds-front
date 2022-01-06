import { ButtonCP } from "components/shared/button/button.component";
import { IconCircle } from "components/shared/button/button.styles";
import { ModalCP } from "components/shared/modal/modal.component";
import PageWrapper from "components/shared/page-wrapper/page-wrapper.component";
import { useCallback, useState } from "react";
import { MdAdd, MdSend } from "react-icons/md";
import { useParams } from "react-router-dom";

export default function Album() {
  const params = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSendLink = useCallback(() => {}, []);
  return (
    <PageWrapper
      title={params.albumId as string}
      headerRight={
        <ButtonCP
          icon={
            <IconCircle>
              <MdAdd color={"#ffffff"} size={16} />
            </IconCircle>
          }
          onClick={() => setIsModalOpen(true)}
        >
          Gerar Link
        </ButtonCP>
      }
    >
      <ModalCP
        isOpen={isModalOpen}
        title="Gerar Link"
        onCancel={() => setIsModalOpen(false)}
        onOk={handleSendLink}
        okLabel="Enviar para o cliente"
        okIcon={<MdSend size={16} color="#ffffff" style={{ marginLeft: 2 }} />}
      ></ModalCP>
    </PageWrapper>
  );
}

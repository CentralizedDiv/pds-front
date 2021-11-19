import { useState } from "react";
import styled from "styled-components";
import { ButtonCP } from "./button/button.component";
import { black, light_blue } from "./colors";
import { ModalCP } from "./modal/modal.component";
import { PillsCP } from "./pills/pills.component";
import { TextCP, TextType } from "./text/text.component";

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

const Container = styled.div`
  display: flex;
  width: calc(100vw - 120px);
  height: calc(100vh - 120px);
  padding: 60px;
  background-color: ${black};
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-right: 24px;
`;

export function DisplaySharedComponents() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPills, setSelectedPills] = useState([1]);

  return (
    <Container>
      <InnerContainer>
        <TextCP type={TextType.TITLE_48}>Title 48</TextCP>
        <TextCP type={TextType.SUBTITLE_32}>Subtitle 32</TextCP>
        <TextCP type={TextType.HEADING_24}>Heading 24</TextCP>
        <TextCP>Text 16 (Default)</TextCP>
        <TextCP type={TextType.TEXT_14}>Text 14</TextCP>
      </InnerContainer>
      <InnerContainer>
        <PillsCP
          data={pills}
          selectedIds={selectedPills}
          onClickPill={(id) => setSelectedPills([id])}
        />
      </InnerContainer>
      <InnerContainer>
        <ButtonCP onClick={() => setIsModalOpen(true)}>Abrir modal</ButtonCP>
        <ButtonCP ghost={true}>Texto do botão</ButtonCP>
        <ButtonCP
          icon={
            <div
              style={{
                backgroundColor: light_blue,
                width: 24,
                height: 24,
                borderRadius: 12,
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              +
            </div>
          }
        >
          Texto do botão
        </ButtonCP>
        <ButtonCP
          iconPosition={"right"}
          small
          ghost
          icon={
            <div
              style={{
                border: "1px solid #fff",
                width: 18,
                height: 18,
                borderRadius: 9,
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              +
            </div>
          }
        >
          Texto do botão
        </ButtonCP>
        <ModalCP
          isOpen={isModalOpen}
          title="Novo álbum"
          cancelLabel="Cancelar"
          onCancel={() => setIsModalOpen(false)}
          okLabel="Criar álbum"
          onOk={() => setIsModalOpen(false)}
        >
          Contaúdo do Modal
          <ButtonCP onClick={() => setIsModalOpen(false)}>Fechar</ButtonCP>
        </ModalCP>
      </InnerContainer>
    </Container>
  );
}

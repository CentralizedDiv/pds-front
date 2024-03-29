import { ButtonCP } from "components/shared/button/button.component";
import { IconCircle } from "components/shared/button/button.styles";
import { black, text_secondary, white } from "components/shared/colors";
import { InputCP } from "components/shared/input/input.component";
import { ModalCP } from "components/shared/modal/modal.component";
import PageWrapper from "components/shared/page-wrapper/page-wrapper.component";
import { PillsCP } from "components/shared/pills/pills.component";
import { TextCP, TextType } from "components/shared/text/text.component";
import { PillsContent } from "modules/dashboard/containers/dashboard.styles";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  MdCloudUpload,
  MdContentCopy,
  MdLink,
  MdSend,
  MdVisibility,
} from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { isValidEmail, generateRandomString } from "utils/functions";
import { PhotoCardCP } from "../components/photo-card/photo-card.component";
import { FileListCP } from "components/shared/uploader/file-list/file-list.component";
import {
  InputContainer,
  InputPassContainer,
  GeneratePassword,
  CopiedContainer,
  PhotosContainer,
  AddPhotoModalContainer,
  ActionsContainer,
} from "./album.styles";
import { axiosInstance } from "__config/axios";

interface LinkFormValues {
  clientEmail: string;
  albumPassword: string;
}

const photos = [
  {
    url: "https://rollingstone.uol.com.br/media/_versions/pam-the-office-jenna-fischer-foto-reproducao_widelg.jpg",
    name: "Continência",
    isFavorite: true,
    isSelected: true,
    comments: [],
  },
  {
    url: "https://cdn.mos.cms.futurecdn.net/V3PRY85TQgUSjQqCLwSkSV-320-80.jpg",
    name: "Formal",
    isFavorite: false,
    isSelected: false,
    comments: ["bla"],
  },
  {
    url: "https://i.pinimg.com/736x/f2/1d/ba/f21dbab3929c43a610d276ec88d72009--acting-tips-jenna-fischer.jpg",
    name: "Muito Fofa",
    isFavorite: false,
    isSelected: true,
    comments: [],
  },
  {
    url: "https://img2.thejournal.ie/article/4010000/river/?height=400&version=4010022",
    name: "Empolgada",
    isFavorite: true,
    isSelected: false,
    comments: [],
  },
];

export default function Album() {
  const [selectedPills, setSelectedPills] = useState([1]);

  const pills = [
    {
      id: 1,
      label: "Todos",
    },
    {
      id: 2,
      label: "Selecionadas",
    },
    {
      id: 3,
      label: "Favoritas",
    },
    {
      id: 4,
      label: "Com comentário",
    },
  ];
  const params = useParams();
  const [filteredPhotos, setFilteredPhotos] = useState(photos);
  const [showSent, setShowSent] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const [isGenerateLinkModalOpen, setIsGenerateLinkModalOpen] = useState(false);
  const [isAddPhotoModalOpen, setIsAddPhotoModalOpen] = useState(false);
  const { register, setValue, watch } = useForm<LinkFormValues>();
  const watchLinkFields = watch(["clientEmail", "albumPassword"]);
  const isLinkFormValid =
    isValidEmail(watchLinkFields[0]) && !!watchLinkFields[1];

  const handleSendLink = useCallback(() => {
    axiosInstance
      .post("/mail", {
        to: watchLinkFields[0],
        subject: "O link para suas fotos está aqui!",
        message: `
        <a href="seleto.me/albuns/blabla">seleto.me/albuns/blabla</a>
        <p>Use a senha abaixo para acessar:</p>
        <p>${watchLinkFields[1]}</p>
      `,
      })
      .then(() => {
        setShowSent(true);
        setTimeout(() => {
          setShowSent(false);
        }, 3000);
      });
  }, [watchLinkFields]);
  const handleAddPhoto = useCallback(() => {}, []);
  const copyInfoToClipboard = useCallback(() => {
    if (navigator.clipboard && watchLinkFields[1]) {
      navigator.clipboard.writeText(`
        Aqui está o link para seu álbum:\n${"seleto.me/albuns/blabla"}\nUse a senha para acessar:\n${
        watchLinkFields[1]
      }
      `);
      setShowCopied(true);
      setTimeout(() => {
        setShowCopied(false);
      }, 3000);
    }
  }, [watchLinkFields]);
  const generatePassword = useCallback(() => {
    setValue("albumPassword", generateRandomString());
  }, [setValue]);

  useEffect(() => {
    setFilteredPhotos(
      photos.filter((photo) => {
        if (selectedPills.includes(1)) return true;
        if (selectedPills.includes(2)) return photo.isSelected;
        if (selectedPills.includes(3)) return photo.isFavorite;
        if (selectedPills.includes(4)) return photo.comments.length > 0;
        return true;
      })
    );
  }, [selectedPills]);

  return (
    <PageWrapper
      title={params.albumId as string}
      headerRight={
        <ButtonCP
          icon={
            <IconCircle>
              <MdCloudUpload color={"#ffffff"} size={16} />
            </IconCircle>
          }
          onClick={() => setIsAddPhotoModalOpen(true)}
        >
          Adicionar fotos
        </ButtonCP>
      }
    >
      <ActionsContainer>
        <ButtonCP
          secondary
          icon={
            <IconCircle secondary>
              <MdLink color={"#ffffff"} size={16} />
            </IconCircle>
          }
          onClick={() => setIsGenerateLinkModalOpen(true)}
        >
          Gerar Link
        </ButtonCP>
        <Link
          to={`/cliente/albuns/${params.albumId}`}
          style={{ textDecoration: "none" }}
        >
          <ButtonCP
            secondary
            icon={
              <IconCircle secondary>
                <MdVisibility color={"#ffffff"} size={16} />
              </IconCircle>
            }
          >
            Pré-visualizar
          </ButtonCP>
        </Link>
      </ActionsContainer>
      <PillsContent>
        <PillsCP
          data={pills}
          selectedIds={selectedPills}
          onClickPill={(id) => setSelectedPills([id])}
        />
      </PillsContent>
      <PhotosContainer>
        {filteredPhotos.map((photo) => (
          <PhotoCardCP
            key={photo.url}
            url={photo.url}
            name={photo.name}
            isFavorite={photo.isFavorite}
            isSelected={photo.isSelected}
          />
        ))}
      </PhotosContainer>
      <ModalCP
        isOpen={isGenerateLinkModalOpen}
        title="Gerar Link"
        onCancel={() => setIsGenerateLinkModalOpen(false)}
        onOk={handleSendLink}
        okLabel="Enviar para o cliente"
        okIcon={<MdSend size={16} color="#ffffff" style={{ marginLeft: 2 }} />}
        disabled={!isLinkFormValid}
      >
        <InputContainer>
          <InputCP
            id="clientEmail"
            label="Email"
            type="email"
            {...register("clientEmail")}
          />
          <TextCP type={TextType.TEXT_12} color={text_secondary}>
            O cliente receberá o link e a senha neste e-mail
          </TextCP>
        </InputContainer>
        <InputContainer>
          <InputPassContainer>
            <InputCP
              id="albumPassword"
              label="Senha"
              {...register("albumPassword")}
            />
            <TextCP type={TextType.TEXT_12} color={text_secondary}>
              O cliente precisará digitar esta senha para ter acesso ao álbum
            </TextCP>
            <GeneratePassword onClick={generatePassword}>
              <TextCP
                type={TextType.TEXT_12}
                overrideStyles={{ textDecoration: "underline" }}
                color={black}
              >
                Gerar automaticamente
              </TextCP>
            </GeneratePassword>
          </InputPassContainer>
        </InputContainer>
        <InputContainer>
          <InputCP
            id="link"
            label="Link"
            icon={<MdLink color={white} size={16} />}
            disabled={true}
            value={location.origin + "/cliente/albuns/" + params.albumId}
            large
          />
        </InputContainer>
        <ButtonCP
          icon={<MdContentCopy size={18} color={white} />}
          style={{ width: "100%", marginTop: 18 }}
          onClick={copyInfoToClipboard}
          disabled={!watchLinkFields[1]}
        >
          Copiar informações
        </ButtonCP>
        <CopiedContainer show={showCopied || showSent}>
          <TextCP
            type={TextType.TEXT_14}
            overrideStyles={{ marginTop: 24 }}
            color={black}
          >
            {showSent ? "Enviado!" : "Copiado!"}
          </TextCP>
        </CopiedContainer>
      </ModalCP>
      <ModalCP
        isOpen={isAddPhotoModalOpen}
        title="Upload de fotos"
        onCancel={() => setIsAddPhotoModalOpen(false)}
        onOk={handleAddPhoto}
        okLabel="Fazer upload"
        data-testid="add-photo-modal"
      >
        <AddPhotoModalContainer>
          <FileListCP />
        </AddPhotoModalContainer>
      </ModalCP>
    </PageWrapper>
  );
}

import { ButtonCP } from "components/shared/button/button.component";
import { IconCircle } from "components/shared/button/button.styles";
import { black, text_secondary, white } from "components/shared/colors";
import { InputCP } from "components/shared/input/input.component";
import { ModalCP } from "components/shared/modal/modal.component";
import PageWrapper from "components/shared/page-wrapper/page-wrapper.component";
import { TextCP, TextType } from "components/shared/text/text.component";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { MdCloudUpload, MdContentCopy, MdLink, MdSend } from "react-icons/md";
import { useParams } from "react-router-dom";
import { generateRandomString, isValidEmail } from "utils/functions";
import {
  GeneratePassword,
  InputContainer,
  InputPassContainer,
} from "./album.styles";

interface LinkFormValues {
  clientEmail: string;
  albumPassword: string;
}

export default function Album() {
  const params = useParams();
  const [showCopied, setShowCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, setValue, watch } = useForm<LinkFormValues>();
  const watchLinkFields = watch(["clientEmail", "albumPassword"]);
  const isLinkFormValid =
    isValidEmail(watchLinkFields[0]) && !!watchLinkFields[1];

  const handleSendLink = useCallback(() => {}, []);
  const copyInfoToClipboard = useCallback(() => {
    if (navigator.clipboard && watchLinkFields[1]) {
      navigator.clipboard.writeText(`
        Aqui está o link para seu álbum:\n${"selete.me/albuns/blabla"}\nUse a senha para acessar:\n${
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
        >
          Adicionar fotos
        </ButtonCP>
      }
    >
      <ButtonCP
        secondary
        icon={
          <IconCircle secondary>
            <MdLink color={"#ffffff"} size={16} />
          </IconCircle>
        }
        onClick={() => setIsModalOpen(true)}
      >
        Gerar Link
      </ButtonCP>
      <ModalCP
        isOpen={isModalOpen}
        title="Gerar Link"
        onCancel={() => setIsModalOpen(false)}
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
            disabled={true}
            value={location.origin + "/cliente/albuns/" + params.albumId}
          />
        </InputContainer>
        <ButtonCP
          small
          icon={<MdContentCopy size={18} color={white} />}
          style={{ width: "100%", marginTop: 18 }}
          onClick={copyInfoToClipboard}
          disabled={!watchLinkFields[1]}
        >
          Copiar informações
        </ButtonCP>
        {showCopied && (
          <TextCP
            type={TextType.TEXT_14}
            overrideStyles={{ marginTop: 24 }}
            color={black}
          >
            Copiado!
          </TextCP>
        )}
      </ModalCP>
    </PageWrapper>
  );
}

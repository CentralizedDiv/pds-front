import { black, text_secondary } from "components/shared/colors";
import { ModalCP } from "components/shared/modal/modal.component";
import { TextCP, TextType } from "components/shared/text/text.component";
import { Comment as CommentModel } from "models/comment.model";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { MdSend } from "react-icons/md";
import styled from "styled-components";
import {
  Comment,
  CommentsContainer,
  ContentEditable,
  ContentEditableContainer,
  ContentEditablePlaceholder,
  ContextContainer,
  InputContainer,
  Tail,
} from "./comments-modal.styles";

export enum CommentsModalContext {
  ALBUM = "ALBUM",
  PHOTO = "PHOTO",
}

interface CommentsModalProps {
  currentUserId: string;
  comments: CommentModel[];
  context: CommentsModalContext;
  isOpen: boolean;
  onCancel: () => void;
  onSendMessage: (content: string) => void;
}

const PhotoCP = ({ name, url }: { name: string; url: string }) => {
  const PhotoContainer = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
    margin: 12px 0;
    padding: 0 4px;
  `;
  const Photo = styled.img`
    width: 60px;
    height: 60px;

    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0px 1px 5px 0px rgb(0 0 0 / 25%);
  `;
  const PhotoNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 8px;
  `;
  return (
    <PhotoContainer>
      <Photo src={url} alt={name} />
      <PhotoNameContainer>
        <TextCP color={black}>{name}</TextCP>
      </PhotoNameContainer>
    </PhotoContainer>
  );
};

export const CommentsModalCP: React.FC<CommentsModalProps> = ({
  currentUserId,
  comments,
  isOpen,
  context,
  onCancel,
  onSendMessage,
}) => {
  const [currentMessage, setCurrentMessage] = useState<string | null>(null);
  const commentsContainerRef = useRef<HTMLDivElement>(null);
  const messageRef = useRef<HTMLDivElement>(null);

  const sendMessage = useCallback(() => {
    if (currentMessage) {
      if (messageRef.current) messageRef.current.innerText = "";
      onSendMessage(currentMessage);
      setCurrentMessage(null);
    }
  }, [currentMessage, onSendMessage]);

  const scrollDown = useCallback(() => {
    if (commentsContainerRef.current)
      commentsContainerRef.current.scrollTop =
        commentsContainerRef.current.scrollHeight;
  }, []);

  useEffect(() => {
    function handler(ev: KeyboardEvent) {
      if (
        ev.key === "Enter" &&
        messageRef.current?.isSameNode(document.activeElement)
      ) {
        ev.preventDefault();
        sendMessage();
      }
    }
    window.addEventListener("keypress", handler);

    return () => {
      window.removeEventListener("keypress", handler);
    };
  }, [sendMessage]);

  useEffect(() => {
    scrollDown();
  }, [scrollDown, comments]);

  return (
    <ModalCP
      isOpen={isOpen}
      onCancel={onCancel}
      title="Comentários"
      withoutPadding
    >
      <ContextContainer>
        {context === CommentsModalContext.ALBUM ? (
          <TextCP type={TextType.HEADING_24} color={black}>
            {comments[0]?.album.name}
          </TextCP>
        ) : (
          <PhotoCP
            url={comments[0]?.photo.url}
            name={comments[0]?.photo.name}
          />
        )}
      </ContextContainer>
      <CommentsContainer ref={commentsContainerRef}>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            side={comment.createdBy.id === currentUserId ? "right" : "left"}
          >
            <Tail
              side={comment.createdBy.id === currentUserId ? "right" : "left"}
            />
            <TextCP color={black}>{comment.content}</TextCP>
          </Comment>
        ))}
      </CommentsContainer>
      <InputContainer>
        <ContentEditableContainer>
          {!currentMessage && (
            <ContentEditablePlaceholder>
              <TextCP color={text_secondary}>Digite uma mensagem</TextCP>
            </ContentEditablePlaceholder>
          )}
          <ContentEditable
            ref={messageRef}
            contentEditable
            onInput={(ev) => {
              setCurrentMessage((ev.target as HTMLDivElement).innerText.trim());
            }}
          ></ContentEditable>
        </ContentEditableContainer>
        <MdSend
          color={currentMessage ? black : text_secondary}
          size={24}
          style={{ cursor: "pointer" }}
          onClick={sendMessage}
        />
      </InputContainer>
    </ModalCP>
  );
};

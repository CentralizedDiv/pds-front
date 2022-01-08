import { error } from "components/shared/colors";
import { TextCP, TextType } from "components/shared/text/text.component";
import { ShellCP } from "components/shell/shell.component";
import { Link, Navigate, useLocation } from "react-router-dom";
import styled from "styled-components";

export function App() {
  const location = useLocation();
  if (location.pathname === "/") return <Navigate to="/albuns" replace />;
  return <ShellCP />;
}

const NotFoundCountainer = styled.div`
  padding: 24px;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export function NotFound() {
  return (
    <NotFoundCountainer>
      <TextCP type={TextType.TITLE_48} color={error}>
        Oops!
      </TextCP>
      <TextCP>Não há nada aqui!</TextCP>
      <Link
        to={"/albuns"}
        style={{
          color: "#ffffff",
          textUnderlineOffset: "4px",
        }}
      >
        <TextCP>Voltar</TextCP>
      </Link>
    </NotFoundCountainer>
  );
}


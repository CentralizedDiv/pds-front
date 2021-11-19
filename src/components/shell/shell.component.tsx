import { useState } from "react";
import { Outlet } from "react-router-dom";
import { MenuCP } from "./menu/menu.component";
import { ShellContainer, ShellContent } from "./shell.styles";

export function ShellCP() {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <ShellContainer>
      <MenuCP
        isOpen={menuOpened}
        onClickTrigger={() => setMenuOpened(!menuOpened)}
      />
      <ShellContent menuOpened={menuOpened}>
        <Outlet />
      </ShellContent>
    </ShellContainer>
  );
}

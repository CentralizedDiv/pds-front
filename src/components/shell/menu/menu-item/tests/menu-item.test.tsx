import { shallow } from "enzyme";
import { TextCP } from "components/shared/text/text.component";
import {
  Button,
  HiddenIcon,
  MenuItemContent,
  MenuItemName,
} from "../menu-item.styles";
import { MenuItemCP } from "../menu-item.component";

describe("MenuItemCP", () => {
  const props = {
    label: "menuItemLabel",
    icon: <span>icon</span>,
    isMenuOpened: false,
    isSelected: true,
  };

  it("Should render the menu item correctly", () => {
    const wrapper = shallow(<MenuItemCP {...props} />);

    const wrapperExpected = (
      <Button isSelected={props.isSelected}>
        <MenuItemContent>
          {props.icon}
          <MenuItemName>
            <TextCP>{props.label}</TextCP>
          </MenuItemName>
          {!props.isMenuOpened && <HiddenIcon>{props.icon}</HiddenIcon>}
        </MenuItemContent>
      </Button>
    );

    expect(wrapper.matchesElement(wrapperExpected)).toBeTruthy();
  });
});

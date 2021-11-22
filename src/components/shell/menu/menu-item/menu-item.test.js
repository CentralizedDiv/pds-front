import { shallow } from "enzyme";
import { TextCP } from "components/shared/text/text.component";
import { Button, MenuItemContent, MenuItemName } from "./menu-item.styles";
import { MenuItemCP } from "./menu-item.component.tsx";

describe("MenuItemCP", () => {
  const props = {
    label: "menuItemLabel",
    icon: "JSX.Element mock",
    isMenuOpened: false,
    isSelected: true,
  };

  it("Should render the menu item correctly", () => {
    const wrapper = shallow(<MenuItemCP {...props} />);

    const wrapperExpected = (
      <Button isMenuOpened={props.isMenuOpened} isSelected={props.isSelected}>
        <MenuItemContent isMenuOpened={props.isMenuOpened}>
          {props.icon}
          <MenuItemName>
            <TextCP>{props.label}</TextCP>
          </MenuItemName>
        </MenuItemContent>
      </Button>
    );

    expect(wrapper.matchesElement(wrapperExpected)).toBeTruthy();
  });
});

import React from "react";
import { shallow } from "enzyme";
import PageWrapper from "components/shared/page-wrapper/page-wrapper.component";
import { ModalCP } from "components/shared/modal/modal.component";
import Dashboard from "./dashboard.container";

describe("MenuItemCP", () => {
  const mockSetState = jest.fn();

  beforeEach(() => {
    jest
      .spyOn(React, "useState")
      .mockImplementation((value) => [value, mockSetState]);
  });

  it("Should handle ModalCP onCancel correctly", () => {
    const wrapper = shallow(<Dashboard />);
    const newAlbumButton = wrapper.find(PageWrapper).prop("headerRight").props;
    newAlbumButton.onClick();

    expect(mockSetState).toHaveBeenCalledTimes(1);
    expect(mockSetState).toHaveBeenCalledWith(true);
  });

  it("Should handle ModalCP onCancel correctly", () => {
    const wrapper = shallow(<Dashboard />);
    const newAlbumButton = wrapper.find(ModalCP);
    newAlbumButton.invoke("onCancel")();

    expect(mockSetState).toHaveBeenCalledTimes(1);
    expect(mockSetState).toHaveBeenCalledWith(false);
  });
});

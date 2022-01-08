import React from "react";
import { shallow } from "enzyme";
import PageWrapper from "components/shared/page-wrapper/page-wrapper.component";
import Album from "../album.container";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("MenuItemCP", () => {
  const mockSetState = jest.fn();

  beforeEach(() => {
    jest
      .spyOn(React, "useState")
      .mockImplementation((value) => [value, mockSetState]);
  });

  it("Should open the add photo modal correctly when click on add photo button", () => {
    const wrapper = shallow(<Album />);
    wrapper.find(PageWrapper).prop("headerRight").props.onClick();
    expect(mockSetState).toHaveBeenCalledTimes(1);
    expect(mockSetState).toHaveBeenCalledWith(true);
  });

  it("Should handle the add photo modal correctly", () => {
    const wrapper = shallow(<Album />);
    wrapper.find(PageWrapper).prop("headerRight").props.onClick();
    expect(mockSetState).toHaveBeenCalledTimes(1);
    expect(mockSetState).toHaveBeenCalledWith(true);

    const addPhotoModal = wrapper.find('[data-testid="add-photo-modal"]');
    expect(addPhotoModal).toHaveLength(1);
    expect(addPhotoModal.prop("title")).toEqual("Upload de fotos");
    expect(addPhotoModal.prop("okLabel")).toEqual("Fazer upload");
  });
});

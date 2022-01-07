import { shallow } from "enzyme";
import { FileListCP } from "../file-list/file-list.component";
import { FileListItemCP } from "../file-list-item/file-list-item.component";
import { UploaderCP } from "../uploader/uploader.component";
import { FileListGlobalProgressContainer } from "../file-list/file-list.styles";

describe("FileListCP", () => {
  window.URL.createObjectURL = jest.fn();

  afterEach(() => {
    (window.URL.createObjectURL as jest.Mock).mockReset();
  });

  it("Should handle onDrop and onDelete correctly", () => {
    const wrapper = shallow(<FileListCP />);
    const fileInput = wrapper.find(UploaderCP);

    const file = new File([""], "test-file");
    fileInput.invoke("onDrop")([file, file]);

    let renderedFiles = wrapper.find(FileListItemCP);
    expect(renderedFiles).toHaveLength(2);
    expect(wrapper.find(FileListGlobalProgressContainer)).toBeTruthy();

    renderedFiles.at(0).invoke("onDelete")();
    renderedFiles = wrapper.find(FileListItemCP);
    expect(renderedFiles).toHaveLength(0);
  });
});

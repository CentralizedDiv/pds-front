import { UploaderCP } from "../uploader/uploader.component";
import { fireEvent, render } from "@testing-library/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

describe("UploaderCP", () => {
  it("Should handle input change correctly", () => {
    const onDrop = jest.fn();
    const { getByLabelText, getByText } = render(
      <DndProvider backend={HTML5Backend}>
        <UploaderCP onDrop={onDrop} />
      </DndProvider>
    );

    const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });

    fireEvent.change(getByLabelText("Escolher arquivo(s)"), {
      target: {
        files: [file],
      },
    });
    expect(onDrop).toHaveBeenCalledWith([file]);

    const dropZone = getByText("Arraste e solte seus arquivos aqui!");

    fireEvent.dragEnter(dropZone, {
      dataTransfer: {
        files: [file],
        types: ["Files"],
      },
    });
    fireEvent.dragOver(dropZone, {
      dataTransfer: {
        files: [file],
        types: ["Files"],
      },
    });
    fireEvent.drop(dropZone, {
      dataTransfer: {
        files: [file],
        types: ["Files"],
      },
    });
    expect(onDrop).toHaveBeenCalledWith([file]);
  });

  it("Should render error when file is not an image", () => {
    const onDrop = jest.fn();
    const { getByLabelText, getByText } = render(
      <DndProvider backend={HTML5Backend}>
        <UploaderCP onDrop={onDrop} />
      </DndProvider>
    );

    const file = new File(["(⌐□_□)"], "chucknorris.txt", {
      type: "plain/text",
    });

    fireEvent.change(getByLabelText("Escolher arquivo(s)"), {
      target: {
        files: [file],
      },
    });
    expect(onDrop).toHaveBeenCalledTimes(0);

    expect(
      getByText(
        "Escolha apenas arquivos de imagem válidos (jpg, jpeg, png, raw, cr2)"
      )
    ).toBeTruthy();
  });

  it("Should render error when multiple is false and multiple files are dropped", () => {
    const onDrop = jest.fn();
    const { getByLabelText, getByText } = render(
      <DndProvider backend={HTML5Backend}>
        <UploaderCP onDrop={onDrop} multiple={false} />
      </DndProvider>
    );

    const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
    fireEvent.change(getByLabelText("Escolher arquivo(s)"), {
      target: {
        files: [file, file],
      },
    });
    expect(onDrop).toHaveBeenCalledTimes(0);

    expect(getByText("Escolha apenas um arquivo.")).toBeTruthy();
  });
});

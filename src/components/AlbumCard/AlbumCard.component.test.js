import { shallow } from "enzyme";
import { TextCP, TextType } from "components/shared/text/text.component";
import {
  Container,
  AlbumImage,
  AlbumInfoContent,
  AlbumNameContent,
} from "./AlbumCard.styles";
import AlbumCard from "./AlbumCard.component";

describe("AlbumCard", () => {
  const props = {
    albumCoverImage: "srcMockImage.png",
    albumName: "Meu album",
    creationDate: "11 nov 2021",
  };

  it("Should render correctly", () => {
    const wrapper = shallow(<AlbumCard {...props} />);

    const wrapperExpected = (
      <Container>
        <AlbumImage src={props.albumCoverImage} />
        <AlbumInfoContent>
          <div>
            <TextCP>{props.creationDate}</TextCP>
          </div>
          <AlbumNameContent>
            <TextCP type={TextType.TITLE_48}>{props.albumName}</TextCP>
          </AlbumNameContent>
        </AlbumInfoContent>
      </Container>
    );

    expect(wrapper.matchesElement(wrapperExpected)).toBeTruthy();
  });
});

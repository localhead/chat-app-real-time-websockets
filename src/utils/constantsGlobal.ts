import placeholderDark from "../assets/images/placeholderImageDark.jpg";
import placeholderGray from "../assets/images/placeholderImageGray.png";
import placeholderWhite from "../assets/images/placeholderImageWhite.jpg";

type PlaceHolderRecord = "white" | "gray" | "dark";

export const INIT_CHAT_ID = 4;

export const placeHolderImage = (type: PlaceHolderRecord) => {
  switch (type) {
    case "dark": {
      return placeholderDark;
    }
    case "white": {
      return placeholderWhite;
    }
    case "gray": {
      return placeholderGray;
    }

    default:
      return placeholderDark;
  }
};

export const sunflowerLink =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Sunflower_Taleghan.jpg/800px-Sunflower_Taleghan.jpg";

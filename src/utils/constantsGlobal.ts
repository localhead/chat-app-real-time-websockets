import placeholderDark from "../assets/images/placeholderImageDark.jpg";
import placeholderGray from "../assets/images/placeholderImageGray.png";
import placeholderWhite from "../assets/images/placeholderImageWhite.jpg";

type PlaceHolderRecord = "white" | "gray" | "dark";

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

import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faSmile } from "@fortawesome/free-regular-svg-icons";

export const getIcon = (icon: string) => {
  switch (icon) {
    case "smile":
      return faSmile;
    case "heart":
      return faHeart;
    case "link-external":
      return faExternalLinkAlt;
    default:
      return undefined;
  }
};

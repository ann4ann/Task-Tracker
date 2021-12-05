const setPosition = (position) => {
  switch (position) {
    case "bottom right":
      return "position-absolute bottom-0 end-0";
    case "bottom left":
      return "position-absolute bottom-0 start-0";
    case "bottom center":
      return "position-absolute bottom-0 start-50 translate-middle-x";
    case "top right":
      return "position-absolute top-0 end-0";
    case "top left":
      return "position-absolute top-0 start-0";
    case "top center":
      return "position-absolute top-0 start-50 translate-middle-x";

    default:
      break;
  }
};

export default setPosition;

export const textAreaStyles = (
  message: string,
  heightLimit: number
): object => {
  return {
    resize: "none",
    overflowY:
      message.length > 0 && message.length >= heightLimit ? "auto" : "hidden",
  };
};

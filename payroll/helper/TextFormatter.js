export const capitalizeWords = (string) => {
  return string
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export const manageLength = (string , length) => {
  return string.length > length ? string.slice(0, length) + " " + "..."  : string;
}

export const formatTag = (string) => {
  const atIndex = string.indexOf("@");
  if (atIndex !== -1) {
    const spaceIndex = string.indexOf(" ", atIndex);
    if (spaceIndex !== -1) {
      const tag = string.slice(atIndex, spaceIndex);
      return string.replace(tag, `<span class="text-primary">${tag}</span>`);
    }
  }
  return string;
};

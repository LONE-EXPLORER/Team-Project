export const stringAvatar = (name: any, avatarSx?: any) => {
  const sx = {
    width: 32,
    height: 32,
    fontSize: "small",
    backgroundColor: "var(--primary_main)",
    textTransform: "uppercase",
    ...avatarSx,
  };
  if (name && name !== "unknown") {
    const nameSplit = name.split(" ");

    return {
      sx,
      children: `${nameSplit[0][0]}${
        nameSplit.length > 1 ? nameSplit[1][0] : ""
      }`,
    };
  } else
    return {
      sx,
    };
};

import xRequest from "..";

export const getEntireRoomsData = (offset = 0, size = 20) => {
  return xRequest.get({
    url: "/entire/list",
    params: {
      offset,
      size,
    },
  });
};

import axios from "../request";

export const createNewLink = async (body) => {
  try {
    const { data } = await axios.post("link", body);
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

export const getLinks = async (query, page) => {
  try {
    const { data } = await axios.get(
      `link?page=${page}&size=10&query=${query || ""}`
    );
    return data;
  } catch (e) {}
};

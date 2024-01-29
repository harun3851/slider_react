import axios from "axios";
 
const baseURL =import.meta.env.VITE_BASEURL;
export const getAllData = async () => {
  try {
    const res = await axios.get(`${baseURL}/api/contact`);
    return res.data.allContacts;
  } catch (error) {
    console.log(error);
  }
};
export const addContact = async (data) => {
  if (data.image) {
    const form = new FormData();
    const name = Date.now() + data.image.name;
    form.append("name", name);
    form.append("file", data.image);
    data.image = name;

    try {
      await axios.post(`${baseURL}/api/upload`, form);
    } catch (error) {
      throw Error(error);
    }
  }
  try {
    const res = await axios.post(`${baseURL}/api/contact/create`, data);
    return res.newContact;
  } catch (error) {
    throw new Error(error);
  }
};





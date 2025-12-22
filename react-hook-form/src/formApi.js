import axios from "axios";

const BASE =
  "https://wordpress-1471720-5962383.cloudwaysapps.com/wp-json/flexiforms-pro/v1/forms/contect-form";

export const getFormConfig = async () => {
  const res = await axios.get(`${BASE}/config`);
  console.log(res);
  return res.data;
};

export const submitFormData = async (formData) => {
  const res = await axios.post(`${BASE}/submit`, formData);
  console.log(res);
  return res.data;
};

import axios from "axios";

export const SupplierSignUpData = async (newData) => {
  try {
    console.log("URL:", import.meta.VITE_AUTH_DATA);
    const credentials = await axios.post(
      import.meta.env.VITE_AUTH_DATA,
      newData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = credentials.data || [];
    return response;
  } catch (error) {
    console.log("Error:", error);
  }
};

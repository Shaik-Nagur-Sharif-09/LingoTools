import axios from "axios";

export const translateText = async (
  text,
  from = "en",
  to = "te"
) => {
  try {
    const response = await axios.post(
      `https://free-google-translator.p.rapidapi.com/external-api/free-google-translator?from=${from}&to=${to}&query=${encodeURIComponent(
        text
      )}`,
      {
        translate: text,
      },
      {
        headers: {
          "Content-Type":
            "application/json",
          "x-rapidapi-host":
            "free-google-translator.p.rapidapi.com",
          "x-rapidapi-key":
            import.meta.env
              .VITE_RAPID_API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
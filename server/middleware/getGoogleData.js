import axios from "axios";

export const getGoogleData = async (req, res, next) => {
  const { access_token } = req.body;
  const googleUrl =
    "https://www.googleapis.com/oauth2/v1/userinfo?access_token=";

  const { data } = await axios.get(googleUrl + access_token, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      Accept: "application/json",
    },
  });
  req.userData = data;
  next();
};

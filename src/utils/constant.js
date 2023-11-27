export const USER_AVATAR = 'https://t3.ftcdn.net/jpg/03/10/34/56/360_F_310345668_z9VNiycGG6d0f1dANxQpIRoFPNX90LBp.jpg'


export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" }
];
export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY

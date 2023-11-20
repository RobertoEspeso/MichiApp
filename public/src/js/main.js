const API_FUNCIONAL =
  "https://api.thecatapi.com/v1/images/search?limit=3&api_key=live_k7qC2SeS2CbxJmPueGqEU1iq18FrbTfV1jTxzKemRDwY2GuXjRwdFcMrvNr15hcq";
const API_URL = "https://api.thecatapi.com/v1/images/search?";
const API_KEY =
  "api_key=live_k7qC2SeS2CbxJmPueGqEU1iq18FrbTfV1jTxzKemRDwY2GuXjRwdFcMrvNr15hcq";
const API_URL_LIMIT = (limit, key) =>
  `${API_URL}limit=${limit}&${API_KEY}
`;
const API_URL_FAVORITES = "";
async function loadRandomMichis() {
  const res = await fetch(API_URL_LIMIT(2, API_KEY));
  console.log(API_URL_LIMIT(2, API_KEY));
  const data = await res.json();
  console.log(data);
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");

  img1.src = data[0].url;
  img2.src = data[1].url;
}

loadRandomMichis();

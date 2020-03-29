import axios from "axios";


// const axiosInstance = axios.create({
//     baseURL: "http://www.mocky.io/v2/5e80db613000002c006f95c9",
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Content-Type": "application/json",
//       "Ocp-Apim-Subscription-Key": "4102aa5eb63c4485ad92d36003c5dc68",
//       Pragma: "no-cache"
//     },
//     timeout: 240000
//   });


//   export const getNamesAPI = () =>
//   axiosInstance
//     .post()
//     .then(response => response.data);

export const getNamesAPI = () =>
    axios.get('http://www.mocky.io/v2/5e80db613000002c006f95c9')
  .then((response) => { return response.data;
    console.log( "reponse data ", response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
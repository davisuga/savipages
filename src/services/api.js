import axios from 'axios';
export const api = axios.create({
    baseURL:'https://parseapi.back4app.com/classes/',
    headers: {
        'X-Parse-Application-Id': '47RAnYvxm7rWLUTUZYHt9SItJjd9FnmWj5ZK5g92',
        'X-Parse-REST-API-Key': 'ZMbHFNcQ1Rvh7bIpoctydiF9yRtZDrnJ81pzhtdF',
        'Content-Type': 'application/json'
      },

})
const url = 'https://parseapi.back4app.com/classes/offer';
const config = {
   headers: {
       'X-Parse-Application-Id': '47RAnYvxm7rWLUTUZYHt9SItJjd9FnmWj5ZK5g92',
       'X-Parse-REST-API-Key': 'ZMbHFNcQ1Rvh7bIpoctydiF9yRtZDrnJ81pzhtdF'
   }
};
export function req_offer() {
   return  axios.get(url, config);
}
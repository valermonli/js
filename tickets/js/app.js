//START js/config.js
const config = {
  url: "https://aviasales-api.herokuapp.com",
}
//export default config;
//END js/config.js

//START apiService
//import config from "../js/config";

class Api{
  constructor(config){
    this.url = config.url;
  }
  async countries(){
    try{
      const response = await axios.get(`${this.url}/countries`);
      //console.log(response);
      return response.data;
    }catch(err){
      console.log(err);
      return Promise.reject(err);
    }
  }
  async cities(){
    try{
      const response = await axios.get(`${this.url}/cities`);
      //console.log(response);
      return response.data;
    }catch(err){
      console.log(err);
      return Promise.reject(err);
    }
  }
  async prices(){

  }
}

const api = new Api(config);

//export default api;
//END apiService

//import api from '../services/apiServices';

//START Locations.js
class Locations{
  constructor(api){
    this.api = api;
    //console.log(this.api);
    this.countries = null;
    this.cities = null;
  }
  async init(){
    const response = await Promise.all([
      this.api.countries(),
      this.api.cities(),
    ]);

    const [countries, cities] = response;
    this.countries = countries;
    this.cities = cities;

    return response;
  }
  getCitiesByCountryCode(code){
    return this.cities.filter(city => city.country_code === code);
  }
}
const locations = new Locations(api);
//END Locations.js

locations.init().then(res => {
  //console.log(res);
  console.log(locations);
  console.log(locations.getCitiesByCountryCode("PE"));
})

// api.contries().then(res => {
//   console.log(res);
// });
// api.cities().then(res => {
//   console.log(res);
// });


import config from "../js/config";

class Api{
  constructor(config){
    this.url = config.url;
  }
  async contries(){
    try{
      const response = await axios.get(`${this.url}/countries`);
      console.log(response);
    }catch(err){
      console.log(err);
      return Promise.reject(err);
    }
  }
  async cities(){
    try{
      const response = await axios.get(`${this.url}/cities`);
      console.log(response);
    }catch(err){
      console.log(err);
      return Promise.reject(err);
    }
  }
  async prices(){

  }
}

const api = new Api(config);

export default api;
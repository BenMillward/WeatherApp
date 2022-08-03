import { ICurrentConditions } from "../global/interfaces/interfaces";
import { currentConditions } from "../fixture/CurrentConditions";

class Data {

  private apiKey = 'IBxh1QA4Kl7QwpRyHMBGOsm0IGGaG4M4';

  public getCurrentConditions = (locationCode = 322307): Promise<ICurrentConditions[]> => {
    // default Truro, Cornwall
    // return Promise.resolve(currentConditions);
    return this.fetchData<ICurrentConditions[]>(`http://dataservice.accuweather.com/currentconditions/v1/${locationCode}?apikey=${this.apiKey}&details=true`)
  }

  private fetchData<T>(url: string): Promise<T> {
    return fetch(`${url}`, {
      method: 'GET',
      mode: "cors",
    }).then((res) => 
      res.json()
    ).then((result) => {
      return result as T;
    }).catch((err) =>{
      console.error(`failed to retrieve data from url: ${url}`, err)
      return Promise.reject();;
    });
  }
}

const store = new Data();

export { Data, store as DataStore}

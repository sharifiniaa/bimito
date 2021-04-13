import httpClient from '../httpClient';
import {API} from '../../constants';

class CarsRequests extends httpClient {
    constructor() {
        super(API.BASE_URL + API.ROOT);
    }

    companies = () => this.instance.get(API.COMPANIES);

    thirdCarTypes = () => this.instance.get(API.THIRD_CAR_TYPES);

    carThirdDiscount = () => this.instance.get(API.CAR_THIRD_DISCOUNT);
}

const carApis = new CarsRequests();
export default carApis;

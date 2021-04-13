import axios from 'axios';

class HttpClient {
    constructor(baseURL, contentType = 'application/json') {
        this.instance = axios.create({
            headers: {
                Accept: '*/*',
                'Content-Type': contentType,
            },
            baseURL,
            transformRequest: [
                function (data, headers) {
                    // TODO: get token from cookie or localStorage
                    const token = false;
                    if (token) headers.token = `${token}`;
                    // check for formData
                    if (headers['Content-Type'] === 'multipart/form-data') {
                        const formData = new FormData();
                        for (const key in data) {
                            formData.append(key, data[key]);
                        }
                        return formData;
                    } else {
                        return JSON.stringify(data);
                    }
                },
            ],
        });

        this._initializeResponseInterceptor();
    }

    _initializeResponseInterceptor = () => {
        this.instance.interceptors.response.use(
            this._handleResponse,
            this._handleError,
        );
    };

    _handleResponse = ({data}) => data;

    _handleError = (error) => Promise.reject(error);
}

export default HttpClient;

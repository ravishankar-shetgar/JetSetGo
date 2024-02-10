import {AxiosResponse} from 'axios';

export type ApiResponseType<T> = AxiosResponse<T> | false;

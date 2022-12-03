import axios, { AxiosStatic } from 'axios';
import { STORAGE_KEYS } from '../common/consts/app-keys.const';

type Config = {
  url: string;
  body?: any;
  headers?: any;
};

export class HttpService {
  public baseUrl: string | undefined;

  public fetchingService: AxiosStatic;

  public apiVersion: string;

  constructor(
    baseUrl = 'http://localhost:4200',
    fetchingService = axios,
    apiVersion = 'api'
  ) {
    this.baseUrl = baseUrl;
    this.fetchingService = fetchingService;
    this.apiVersion = apiVersion;
  }

  private getFullApiUrl(url: string) {
    return `${this.baseUrl}/${this.apiVersion}/${url}`;
  }

  private populateTokenToHeaderConfig() {
    return {
      Authorization: localStorage.getItem(STORAGE_KEYS.TOKEN),
    };
  }

  private extractUrlAndDataFromConfig({
    data,
    url,
    ...configWithoutDataAndUrl
  }: any) {
    return configWithoutDataAndUrl;
  }

  get(config: Config, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig(),
      };
    }
    return this.fetchingService.get(
      this.getFullApiUrl(config.url),
      this.extractUrlAndDataFromConfig(config)
    );
  }

  post(config: Config, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig(),
      };
    }
    return this.fetchingService.post(
      this.getFullApiUrl(config.url),
      config.body,
      this.extractUrlAndDataFromConfig(config)
    );
  }

  put(config: Config, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig(),
      };
    }
    return this.fetchingService.put(
      this.getFullApiUrl(config.url),
      config.body,
      this.extractUrlAndDataFromConfig(config)
    );
  }

  patch(config: Config, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig(),
      };
    }
    return this.fetchingService.patch(
      this.getFullApiUrl(config.url),
      config.body,
      this.extractUrlAndDataFromConfig(config)
    );
  }

  delete(config: Config, withAuth = true) {
    if (withAuth) {
      config.headers = {
        ...config.headers,
        ...this.populateTokenToHeaderConfig(),
      };
    }
    return this.fetchingService.delete(
      this.getFullApiUrl(config.url),
      this.extractUrlAndDataFromConfig(config)
    );
  }
}

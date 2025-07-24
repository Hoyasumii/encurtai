declare namespace NodeJS {
  export interface ProcessEnv {
    API_HOST: string;
    VERSION: string;
    ENV: string;
    DB_HOST: string;
    DAYS_TO_REMOVE_LINK: string;
  }
}
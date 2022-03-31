declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BAR_VERSION: string;
    }
  }
}

export {};

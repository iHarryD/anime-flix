export interface errorMessage {
  message: string;
}

export interface axiosErrorInterface {
  response: {
    data: errorMessage;
  };
}

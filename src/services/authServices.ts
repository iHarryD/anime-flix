import React from "react";
import { baseAxiosInstance } from "./baseAxiosInstance";
import { AxiosError, AxiosResponse } from "axios";

export async function login(
  email: string,
  password: string,
  loadingState: React.SetStateAction<any>,
  successCallback?: (
    result: AxiosResponse<{
      _id: string;
      email: string;
      firstName: string;
      message: string;
      token: string;
    }>
  ) => void,
  failureCallback?: (err: AxiosError<any> | Error) => void
) {
  try {
    loadingState(true);
    const result = await baseAxiosInstance().post("/login", {
      email,
      password,
    });
    if (result.status === 200 && successCallback) {
      successCallback(result);
    }
  } catch (err: any) {
    if (failureCallback) {
      failureCallback(err);
    }
    console.log(err);
  } finally {
    loadingState(false);
  }
}

export async function signup(
  userData: any,
  loadingState: React.SetStateAction<any>,
  successCallback?: (result: AxiosResponse) => void,
  failureCallback?: (err: AxiosError<any> | Error) => void
) {
  try {
    loadingState(true);
    const result = await baseAxiosInstance().post("/signup", {
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      dateOfBirth: userData.dob,
      password: userData.password,
    });
    if (result.status === 200 && successCallback) {
      successCallback(result);
    }
  } catch (err: any) {
    if (failureCallback) {
      failureCallback(err);
    }
    console.log(err);
  } finally {
    loadingState(false);
  }
}

import { OpenweathermapItem } from "../interfaces/openweathermap";import { createAction } from "@reduxjs/toolkit";export const loadingStart = createAction('LOADING_START')export const loadingSuccess = createAction('LOADING_SUCCESS',    (list: OpenweathermapItem[]) => ({        payload: list    }))
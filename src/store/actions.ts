import { OpenweathermapItem } from "../interfaces/openweathermap";import { ActionCreatorWithPayload, createAction } from "@reduxjs/toolkit";import { PayloadActionCreator, PrepareAction } from "@reduxjs/toolkit/src/createAction";export const loadingStart: any = createAction('LOADING_START');export const loadingSuccess = createAction<PrepareAction<OpenweathermapItem[]>, any>('LOADING_SUCCESS',    (list: OpenweathermapItem[]) => ({        payload: list    }))
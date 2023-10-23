import React, { Component } from 'react';import ReactDOM from 'react-dom/client';import reportWebVitals from './reportWebVitals';import { App } from "./components/app/app.component";import { configureStore } from '@reduxjs/toolkit'import { Provider } from "react-redux";import { apiOpenWeatherReducer } from "./store/api-open-weather.reducer";import { listenerMiddleware } from "./store/middleWares";import { combineReducers } from "redux";import { mapCloudsStateReducer } from "./store/map-clouds.reducer";const root = ReactDOM.createRoot(document.getElementById('root'));import { routerReducer, syncHistoryWithStore } from 'react-router-redux';import { inject, observer } from "mobx-react";import { observable, makeAutoObservable } from "mobx";export const rootReducer = combineReducers({    apiOpenWeatherReducer,    mapCloudsStateReducer,    routing: routerReducer,}) class Timer {    secondsPassed = 0    constructor() {        makeAutoObservable(this, {            secondsPassed: observable        })    }    increaseTimer() {        this.secondsPassed += 1    }}const myTimer = new Timer()// A function component wrapped with `observer` will react// to any future change in an observable it used before.//const TimerView = observer(({ timer }: any) => <span>Seconds passed: {timer.secondsPassed}</span>)@observerclass TimerView extends Component<{timer: any}, any>{    @observable count = 0;    handle = () => {        this.count++    }    render() {        return <>            <div onClick={()=>myTimer.increaseTimer()}>Seconds passed: {this.props.timer.secondsPassed}</div>        </>;    }}const store = configureStore({    reducer: rootReducer,    middleware: (getDefaultMiddleware) =>        getDefaultMiddleware().prepend(listenerMiddleware.middleware),})root.render(     // <Counter store={myStore}/>    // <TimerView timer={myTimer} />    <Provider store={store}>        <App/>    </Provider>    // <React.StrictMode>    //     <App/>    // </React.StrictMode>);/*setInterval(() => {    myTimer.increaseTimer()}, 1000)*/// If you want to start measuring performance in your app, pass a function// to log results (for example: reportWebVitals(console.log))// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitalsreportWebVitals(null);
import { createBrowserRouter, Outlet, useParams } from "react-router-dom";import { Layout } from "../components/layout/layout.component";import { Home, homeLoader } from "../components/home/home.component";import { deferredLoader, DeferredPage } from "../components/deffered/deffered.component";import { ForecastLayoutItemComponent } from "../components/forecast-layout-item/forecast-layout-item.component";import React, { Component } from "react";import { MobxTestComponent } from "../components/mobx-test/mobx-test.component";import { MySimpleComponent } from "../components/my-simple/my-simple.component";export const myRouter = createBrowserRouter([    {        path: "todos",        Component: () => <>Todos</>,    },    {        path: 'simple',        Component: MySimpleComponent    },    {        path: "mobx",        Component: MobxTestComponent    },    {        path: "/",        Component: Layout,        children: [            {                index: true,                loader: homeLoader,                Component: Home,            },            {                path: "deferred",                loader: deferredLoader,                Component: DeferredPage,            },            {                path: 'forecast-item/:id',                Component: ForecastLayoutItemComponent,            },            /*{                path: "todos",                action: todosAction,                loader: todosLoader,                Component: TodosList,                ErrorBoundary: TodosBoundary,                children: [                    {                        path: ":id",                        loader: todoLoader,                        Component: Todo,                    },                ],            },            {                path: "deferred",                loader: deferredLoader,                Component: DeferredPage,            },*/        ],    },    {        path: '*',        Component: () => <h1> Not found</h1>    },], {    basename: '/',// '/C:/Projects/weather/dist/index.html'    //  basename: '/C:/Projects/weather-3/dist/index.html',// '/C:/Projects/weather/dist/index.html'});
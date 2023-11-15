import { createBrowserRouter, Outlet, useParams } from "react-router-dom";import { Layout } from "../components/layout/layout.component";import { Home, homeLoader } from "../components/home/home.component";import { deferredLoader, DeferredPage } from "../components/deffered/deffered.component";import { ForecastLayoutItemComponent } from "../components/forecast-layout-item/forecast-layout-item.component";import React, { Component } from "react";import { MobxTestComponent } from "../components/mobx-test/mobx-test.component";import { MySimpleComponent } from "../components/my-simple/my-simple.component";import { ReactDefinitionComponent } from "../components/tech-check/component-definition/react-definition.component";import { TypeCheckingComponent } from "../components/tech-check/type-checking/type-checking.component";import { LifeCycleComponent } from "../components/tech-check/life-cycle/life-cycle.component";import { HooksComponent } from "../components/tech-check/hooks/hooks.component";import { ReactDomComponent } from "../components/tech-check/react-dom/react-dom.component";import { FormsComponent } from "../components/tech-check/forms/forms.component";import { ReusePatternsComponent } from "../components/tech-check/reuse-patterns/reuse-patterns.component";import { ReduxHelpComponent } from "../components/tech-check/redux-help/redux-help.component";import { MyContextComponent } from "../components/tech-check/my-context/my-context.component";import { MyRoutingComponent } from "../components/tech-check/my-routing/my-routing.component";import { PerformanceComponent } from "../components/tech-check/performance/performance.component";import { TestComponent } from "../components/tech-check/test/test.component";import { SecurityComponent } from "../components/tech-check/security/security.component";export const myRouter = createBrowserRouter([    {        path: "todos",        Component: () => <>Todos</>,    },    {        path: 'simple',        Component: MySimpleComponent    },    {        path: "mobx",        Component: MobxTestComponent    },    {        path: "/",        Component: Layout,        children: [            {                index: true,                loader: homeLoader,                Component: Home,            },            {                path: 'component-definition',                Component: ReactDefinitionComponent            },            {                path: 'type-checking',                Component: TypeCheckingComponent            },            {                path: 'life-cycle',                Component: LifeCycleComponent            },            {                path: 'hooks',                Component: HooksComponent            },            {                path: 'react-dom',                Component: ReactDomComponent            },            {                path: 'forms',                Component: FormsComponent            },            {                path: 'reuse-patterns',                Component: ReusePatternsComponent            },            {                path: 'redux-help',                Component: ReduxHelpComponent            },            {                path: 'context',                Component: MyContextComponent            },            {                path: 'routing',                Component: MyRoutingComponent            },            {                path: 'performance',                Component: PerformanceComponent            },            {                path: 'testing',                Component: TestComponent            },            {                path: 'security',                Component: SecurityComponent            },            {                path: "deferred",                loader: deferredLoader,                Component: DeferredPage,            },            {                path: 'forecast-item/:id',                Component: ForecastLayoutItemComponent,            },            /*{                path: "todos",                action: todosAction,                loader: todosLoader,                Component: TodosList,                ErrorBoundary: TodosBoundary,                children: [                    {                        path: ":id",                        loader: todoLoader,                        Component: Todo,                    },                ],            },            {                path: "deferred",                loader: deferredLoader,                Component: DeferredPage,            },*/        ],    },    {        path: '*',        Component: () => <h1> Not found</h1>    },], {    basename: '/',// '/C:/Projects/weather/dist/index.html'    //  basename: '/C:/Projects/weather-3/dist/index.html',// '/C:/Projects/weather/dist/index.html'});
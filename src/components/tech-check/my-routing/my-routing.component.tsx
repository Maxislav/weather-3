export const MyRoutingComponent = () => {    return <>            <div className={'pre-wrap'}>                {                    `function Fallback() {    return <p>Performing initial data load</p>;}                    function MyLoader(): Promise<{date: string}> {    await sleep();    return {        date: new Date().toISOString(),    };}function RouterComponent(){    let data = useLoaderData() as {date: string};    return <>    RouterComponent    //children    <Outlet />    </>}                    export const myRouter = createBrowserRouter([        {            path: "todos",            loader: MyLoader,            Component: () => RouterComponent,        },    ],    {     basename: '/',    })                           `                }                <h4>                    Implementation                </h4>                <div className={'pre-wrap'}>                    {                        `<RouterProvider router={ myRouter } fallbackElement={ <Fallback/> }/>`                    }                </div>            </div>    </>}
import './App.css';
import stt from './adpp.module.less'
import { createBrowserRouter, RouterProvider, useLoaderData } from "react-router-dom";
import {Layout} from "./components/layout/layout.component";
import { Home } from "./components/home/home.component";
console.log(stt.dd)
interface HomeLoaderData {
    date: string;
}

export function sleep(n: number = 500) {
    return new Promise((r) => setTimeout(r, n));
}

export async function homeLoader(): Promise<HomeLoaderData> {
    await sleep();
    return {
        date: new Date().toISOString(),
    };
}

function DeferredPage(){
    let data = useLoaderData() as HomeLoaderData;
    return (
        <>
            <h2>DeferredPage</h2>
            <p>Date from loader: {data.date}</p>
        </>
    );
}

let router = createBrowserRouter([
    {
        path: "deferred",
        loader: homeLoader,
        Component: DeferredPage,
    },
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                loader: homeLoader,
                Component: Home,
            },

            /*{
                path: "todos",
                action: todosAction,
                loader: todosLoader,
                Component: TodosList,
                ErrorBoundary: TodosBoundary,
                children: [
                    {
                        path: ":id",
                        loader: todoLoader,
                        Component: Todo,
                    },
                ],
            },
            {
                path: "deferred",
                loader: deferredLoader,
                Component: DeferredPage,
            },*/
        ],
    },
], {
   // basename: '',// '/C:/Projects/weather/dist/index.html'
    basename: '/C:/Projects/weather-3/dist/index.html',// '/C:/Projects/weather/dist/index.html'
});


export function Fallback() {
    return <p>Performing initial data load</p>;
}


export  function App() {
    return <div>
            ololo
        <RouterProvider router={router} fallbackElement={<Fallback />} />
    </div>;
}
/*

export const App = () => {
  const [count, setCount] = useState(10);
  const update = () => {
    setCount(count+1)
  }

  return (
    <div className="App">
      <h1 className={style.dd}>{count}</h1>
        <Testtsx/>
      <button onClick={update}>
        update
      </button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
//export default App;
*/

import {    createContext,    Reducer,    useContext,    useEffect,    useLayoutEffect,    useReducer,    useRef,    useState,    useTransition} from "react";import  './hooks.component.less'import { WithTransitionComponent } from "./with-transition.component";const initialState: MyState = { count: 0 };function init(initialCount: number): MyState {    return { count: initialCount };}interface MyState {    count: number}function reducer(state: MyState, action: { type: string }): MyState {    switch (action.type) {        case 'increment':            return { count: state.count + 1 };        case 'decrement':            return { count: state.count - 1 };        default:            throw {                count: 0            };    }}const r: Reducer<MyState, { type: string }> = reducerconst themes = {    light: {        foreground: "#000000",        background: "#eeeeee"    },    dark: {        foreground: "#ffffff",        background: "#222222"    }};const ThemeContext = createContext(themes.light);function InnerComponent() {    const theme = useContext(ThemeContext)    return <>        <button>            Inner button            theme: { theme.foreground }        </button>    </>}const UseReducerComponent = () => {    const [state, dispatch] = useReducer(r, initialState, () => initialState ) as any;    return <div>        UseReducerComponent        <div>{state.count}</div>        <button onClick={()=>dispatch({type: 'increment'})}>            dispatch        </button>    </div>}export function HooksComponent() {    const [count, setState] = useState(0)    useEffect(() => {        return () => {            console.log('after component update')        }    }, [count])    const inputEl = useRef(null)    const square = useRef(null)    useLayoutEffect(() => {        square.current.style.height = square.current.clientWidth+'px'    },[])    return <>        <div>            <h4>                useState            </h4>            <div className={'pre-wrap'}>                {`const [count, setCount] = useState(0);<button onClick={() => setCount(count + 1)}>    Click me</button>                `}            </div>            <h4>                useEffect            </h4>            <div className={'pre-wrap'}>                {`useEffect(() => {    document.title = \`You clicked ${ count } times\`;    return () => { /*finished callback*/}}, []);useEffect = [    componentDidMount    componentDidUpdate    componentWillUnmount]`                }            </div>            <h4>                useContext            </h4>            <div className={'pre-wrap'}>                {                    `const themes = {    light: {        foreground: "#000000",        background: "#eeeeee"    },    dark: {        foreground: "#ffffff",        background: "#222222"    }};const ThemeContext = createContext(themes.light);function InnerComponent() {    const theme = useContext(ThemeContext)    return <>        <button>            Inner button            theme: { theme.foreground }        </button>    </>}                                                            `                }            </div>            <h4>                useReducer            </h4>            <div className={'flex-row'}>                <div className={'pre-wrap'}>                    {                        `const [todos, dispatch] = useReducer(todosReducer);function reducer(state: MyState, action: { type: string }): MyState {    switch (action.type) {        case 'increment':            return { count: state.count + 1 };        case 'decrement':            return { count: state.count - 1 };        default:            throw {                count: 0            };    }}<> {state.count}  <button onClick={()=>dispatch({type: 'increment'})}></button></>                    `                    }                </div>                <div>                    <UseReducerComponent/>                </div>            </div>            <div>                <h4>                    useCallback                </h4>                <div className={'pre-wrap'}>                    {`const memoizedCallback = useCallback(  () => {    doSomething(a, b);  },  [a, b],);useCallback(fn, deps) эквивалентен useMemo(() => fn, deps).`                    }                </div>                <h4>                    useMemo                </h4>                <div className={'pre-wrap'}>                    {`function TodoList({ todos, tab }) {  const visibleTodos = useMemo(    () => filterTodos(todos, tab),    [todos, tab]  );  // ...}`                    }                </div>            </div>            <h4>                useRef            </h4>            <div className={'flex-row'}>                <div className={'pre-wrap'}>                    {                        `  const inputEl = useRef(initialValue); //const inputEl = useRef(null)<>      <input ref={inputEl} type="text" />      <button onClick={()=>inputEl.current.focus()}>Focus the input</button></>                                                          `                    }                </div>                <div>                    <input ref={inputEl}/>                    <button onClick={() => inputEl.current.focus()}>                        set focus                    </button>                </div>            </div>            <h4>                useLayout            </h4>            <div ref={square} style={{width: '30px', background: "red"}}>                sss            </div>            <div className={'pre-wrap'}>                {                    `                        useLayoutEffect(() => {        square.current.style.height = square.current.clientWidth+'px'    },[])                                        `                }            </div>            <h4>                useTransition            </h4>            <div className={'pre-wrap'}>                {                    `function filter(slots: any[], value: string): any[] {    return slots.filter((it: any) => {        return it.name.toLowerCase().includes(value)    })}export const WithTransitionComponent = () => {    const [isPending, startTransition] = useTransition()    const [slots, setSlots] = useState([])    const [search, setValue] = useState('')    useEffect(() => {        setSlots(src.contentSlot)    })    const handleChange = (e: any) => {        e.target.value        startTransition(() => {            setValue(e.target.value)        })    }    return <>        <input onChange={ handleChange }/>        <div>            { isPending }        </div>        <Slots slots={ filter(slots, search) }></Slots>    </>}                                                                                                    `                }            </div>            <div>                <WithTransitionComponent/>            </div>        </div>    </>}
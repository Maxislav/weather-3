import React, {memo, useState} from "react";

interface MyDataInterface{
    count: number,
    increase: () => void
}
const InnerComponent = ({count, increase}: MyDataInterface): React.JSX.Element => {
    return <>
        <div>
            <h4>
                Inner component {count}
            </h4>
            <button onClick={increase}>
                increase
            </button>
        </div>
    </>
}

function LogProps(props: MyDataInterface) {
    return<>
        <div>LogProps component</div>
        <InnerComponent {...props}></InnerComponent>
    </>
}
LogProps.displayName = "LogProps(InnerComponent)"
const Dd = memo(LogProps, (p1: MyDataInterface, p2: MyDataInterface) => {
    if(p2.count === 5){
        return true
    }
    return false
})
export const HigherOrderComponent = () => {
    const [count, setCount] = useState(0)

    return <>

        <div>
            <h4>HigherOrderComponent</h4>
            <InnerComponent count={count} increase={() => setCount(count+1)}/>
            <LogProps count={count} increase={() => setCount(count+1)}></LogProps>
            <Dd count={count} increase={() => setCount(count+1)}></Dd>
        </div>
        <div>
            <h4> src</h4>
            <div className={'pre-wrap'}>
                {
                    `
                 
interface MyDataInterface{
    count: number,
    increase: () => void
}
const InnerComponent = ({count, increase}: MyDataInterface): React.JSX.Element => {
    return <>
        <div>
            <h4>
                Inner component {count}
            </h4>
            <button onClick={increase}>
                increase
            </button>
        </div>
    </>
}

function LogProps(props: MyDataInterface) {
    return<>
        <div>LogProps component</div>
        <InnerComponent {...props}></InnerComponent>
    </>
}
LogProps.displayName = "LogProps(InnerComponent)"
const Dd = memo(LogProps, (p1: MyDataInterface, p2: MyDataInterface) => {
    if(p2.count === 5){
        return true
    }
    return false
})
export const HigherOrderComponent = () => {
    const [count, setCount] = useState(0)

    return <>
        <div>
            <h4>HigherOrderComponent</h4>
            <InnerComponent count={count} increase={() => setCount(count+1)}/>
            <LogProps count={count} increase={() => setCount(count+1)}></LogProps>
            <Dd count={count} increase={() => setCount(count+1)}></Dd>
        </div>
    </>
}   
                    
                    `
                }
            </div>
        </div>
    </>
}


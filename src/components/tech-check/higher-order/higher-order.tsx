import React, { useState} from "react";

type MyDataInterface ={
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

function logProps(OriginalComponent: any, shouldUpdate: (a: any, b: any) => boolean) {

    let prevNumber: number = null;
    let prevResult: React.JSX.Element | undefined;
    function Aa(props: MyDataInterface){
        if(prevResult!==undefined && !shouldUpdate(prevNumber, props.count)){
            return prevResult
        }

        prevNumber = props.count
        prevResult =  <>
            <div>LogProps component </div>
            <OriginalComponent {...props}></OriginalComponent>
        </>


        return prevResult
    }
    Aa.displayName = "LogProps(InnerComponent)"
    return Aa
}
const LogProps = logProps(InnerComponent, (p1, p2) => {
    console.log(p1, p2)
    return false
})


const SomeComponent = () => {
    const [count, setCount] = useState(0)
    return <>

        <div>
            <h4>HigherOrderComponent</h4>
            <InnerComponent count={count} increase={() => setCount(count+1)}/>

            <LogProps count={count} increase={() => setCount(count+1)}/>
        </div>

    </>
}

export const HigherOrderComponent = () => {
    return <>

        <div>
           <SomeComponent/>
        </div>
        <div>
            <h4> src</h4>
            <div className={'pre-wrap'}>
                {
                    `

type MyDataInterface ={
    count: number,
    increase: () => void
}


const SomeComponent = () => {
    const [count, setCount] = useState(0)
    return <>

        <div>
            <h4>HigherOrderComponent</h4>
            <InnerComponent count={count} increase={() => setCount(count+1)}/>
            
             Higher Order Component
            <LogProps count={count} increase={() => setCount(count+1)}/>
        </div>
    
    </>
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

function logProps(OriginalComponent: any, shouldUpdate: (a: any, b: any) => boolean) {

    let prevNumber: number = null;
    let prevResult: React.JSX.Element | undefined;
    function Aa(props: MyDataInterface){
        if(prevResult!==undefined && !shouldUpdate(prevNumber, props.count)){
            return prevResult
        }

        prevNumber = props.count
        prevResult =  <>
            <div>LogProps component </div>
            <OriginalComponent {...props}></OriginalComponent>
        </>


        return prevResult
    }
    Aa.displayName = "LogProps(InnerComponent)"
    return Aa
}
const LogProps = logProps(InnerComponent, (pi, p2) => {
    return false
})

              
                    `
                }
            </div>
        </div>
    </>
}


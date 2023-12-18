import React, {memo, useState} from "react";

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

function logProps(OriginalComponent: any, callback: () => boolean) {
    function Aa(props: MyDataInterface){
        callback()
        return  <>
            <div>LogProps component</div>
            <OriginalComponent {...props}></OriginalComponent>
        </>
    }
    Aa.displayName = "LogProps(InnerComponent)"
    return Aa
}
const LogProps = logProps(InnerComponent, () => {
    return false
})

export const HigherOrderComponent = () => {
    const [count, setCount] = useState(0)

    return <>

        <div>
            <h4>HigherOrderComponent</h4>
            <InnerComponent count={count} increase={() => setCount(count+1)}/>

            <LogProps count={count} increase={() => setCount(count+1)}/>
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

function logProps(OriginalComponent: any) {
    function Aa(props: any){
        return  <>
            <div>LogProps component</div>
            <OriginalComponent {...props}></OriginalComponent>
        </>
    }
    Aa.displayName = "LogProps(InnerComponent)"
    return Aa
}
const LogProps = logProps(InnerComponent)
                    
                    `
                }
            </div>
        </div>
    </>
}


import React, { Component } from "react";import { computed, makeObservable, observable, configure, action, reaction, runInAction  } from "mobx";import { observer } from "mobx-react";import styles from './mobx-test.component.less'configure({    'enforceActions': 'observed'});const makeReq = (): Promise<string> => {    return new Promise((resolve) => {     setTimeout(() => {         resolve('response ok')     }, 1000)    })}// @makeObservableclass MyStore{    @observable count: number = 0;    @observable name = 'initial name'    @observable loading = false    @observable result =  ''    constructor() {        makeObservable(this )    }    @computed    get nikName(){        return 'nickName - '.concat(this.name.substring(0,3))    }    handleName(){        setTimeout(() => {            this.name = 'other name'        }, 500)    }    @action('Handle plus')    handlePlus = () => {        this.count++    }    handleRequest = async () => {        this.loading = true;        const res = await makeReq()        runInAction(() => {            this.loading = false            this.result = res        })    }}const myStore = new MyStore();@observerclass CounterComponent extends Component<{store:  MyStore}, {}>{   /* @disposeOnUnmount    someReactionDisposer = reaction<number>(() => myStore.count, () => {        console.log('count changed', myStore.count)    }, {delay: 1000})*/    handleIncrement = () => {        this.props.store.handlePlus()    }    render() {        const {count, nikName} = this.props.store        return <div className={styles.container}>            <h1>                Count : {count} {nikName}            </h1>            <button onClick={() => myStore.handlePlus()}>                handlePlus -{'>'} {this.props.store.count}            </button>            <button onClick={() => this.props.store.handleName()}>                handleName {this.props.store.name}            </button>            <button onClick={ this.handleIncrement }>                handleIncrement { this.props.store.count }            </button>            <div>                {myStore.loading.toString()}            </div>            <button onClick={()=> myStore.handleRequest()}>                handleRequest {myStore.result}            </button>        </div>;    }}export class MobxTestComponent extends Component<any, any>{            render() {                return <>                   <CounterComponent store={myStore} />                </>            }}
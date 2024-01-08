import { useState } from "react";import styles from './forms.component.less'const content =    `    export const FormsComponent = () =>{    const [value, setState] = useState('init value')    const  handleSubmit = (event)=> {        alert('A name was submitted: ' + this.state.value);        event.preventDefault();    }    const handleChange = (event) => {        setState(event.target.value);    }    return <>        <form onSubmit={handleSubmit}>            <label>                Name:                <input type="text" value={value} onChange={handleChange} />            </label>            <input type="submit" value="Submit" />        </form>    </>}            `interface Dd {    name: string,    lastName: string}export const FormsComponent = () => {    //const [value, setState] = useState('initial value')    const [formValues, setFormValues] = useState<Dd>({        lastName: 'Lipatov',        name: 'maxim'    })    const handleSubmit = (event: any) => {        event.preventDefault();    }    const handleChange = (event: any): any => {        setFormValues((d: Dd) => {            const keyL: string = event.target.name;            return {                ...d,                [keyL]: event.target.value            }        })    }    return <>        <div className={ 'flex-row' }>            <div className={ styles.myForm }>                <form onSubmit={ handleSubmit }>                    <label>                        <div>                            Name:                        </div>                        <input type="text" name={ 'name' } value={ formValues.name } onChange={ handleChange }/>                    </label>                    <label>                        <div>                            Last name:                        </div>                        <input type="text" name={ 'lastName' } value={ formValues.lastName } onChange={ handleChange }/>                    </label>                    <input type="submit" value="Submit"/>                </form>                <div>                    { formValues.name }                </div>                <div>                    { formValues.lastName }                </div>            </div>            <div className={ 'pre-wrap small' }>                { content }            </div>        </div>    </>}
import { OpenweathermapItem } from "../../interfaces/openweathermap";import styles from './forecast-list-item.component.less';import dateFormat from "dateformat";import { Link, NavLink, useNavigate } from "react-router-dom";import { NavigateFunction } from "react-router/dist/lib/hooks";export function ForecastListItemComponent({ data, children, index}: { data: OpenweathermapItem, children: string,index: number }) {    const navigate = useNavigate()    return <>        <div onClick={()=>navigate('forecast-item/'+index)} className={ styles.container }>            <div className={styles.date}>                {dateFormat(data.dt*1000, 'ddd dd')}            </div>            <div className={styles.time}>                {dateFormat(data.dt*1000, 'HH:MM')}            </div>            <div className={ styles.temperature }>                 { 0<data.main.temp ? '+'+data.main.temp : '-'+data.main.temp } &#8451;            </div>            <div>                { children }            </div>        </div>    </>}
import { useState } from "react";import styles from './map-clouds.component.less'import { OPEN_WEATHER_APPID } from "../../constant/open-weather-appid";export function MapCloudsComponent(){    const getImagesLink = (): Array<string> => {        let arr = [];        for (let y = 42; y<= 44; y++){            for (let x = 72; x<=77; x++){                arr.push(`https://b.sat.owm.io/vane/2.0/weather/CL/7/${x}/${y}?appid=${OPEN_WEATHER_APPID}`)            }        }        return arr;    }    const [items, setState] = useState<string[]>(getImagesLink())    return <>        <div className={styles.container}>            {items.map((url, index) => {                return <img key={index} src={url}/>            })}        </div>    </>}
import { useState } from "react";import { OpenweathermapItem } from "../../interfaces/openweathermap";import styles from './map-tiles.component.less'export function MapTilesComponent(){    const zoom = 7;    const getImagesLink = (): Array<string> => {        let arr = [];        for (let y = 42; y<= 44; y++){            for (let x = 72; x<=77; x++){                arr.push(`https://tile.openstreetmap.org/7/${x}/${y}.png`)            }        }        return arr;    }    const [items, setState] = useState<string[]>(getImagesLink())     return <>         <div className={styles.container}>             {items.map((url, index) => {                 return <img key={index} src={url}/>             })}         </div>     </>}
export interface OpenweathermapItem {    clouds: {        all: number    },    dt: number,    dt_txt: string,    main: {        temp: number,        humidity: number    }}export interface OpenweathermapDay{    dt: number,    data: OpenweathermapItem}
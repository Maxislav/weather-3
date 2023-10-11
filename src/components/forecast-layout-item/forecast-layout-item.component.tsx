import { useParams } from "react-router-dom";import { connect, useSelector } from "react-redux";import { ApiOpenWeatherState } from "../../store/api-open-weather.reducer";import { selectForecastItem } from "../../store/selectors";import { useEffect, useState } from "react";import { OpenweathermapItem } from "../../interfaces/openweathermap";import { FadeInOut } from "../fade-in-out/fade-in-out.component";const mapStateToProps = (state: { apiOpenWeatherReducer: ApiOpenWeatherState }) => {    // const routeParams: any = useParams()    return {        list: state.apiOpenWeatherReducer.list,    }}export const ForecastLayoutItemComponent = connect(mapStateToProps)(({ list }) => {    const routeParams: any = useParams();    const _item = useSelector(selectForecastItem)(routeParams.id);    const [item, setState]  = useState<OpenweathermapItem>(null);    useEffect(() => {        _item && setState(_item)    }, [_item])    return <>        <FadeInOut show={item} duration={500}>            <h1>{item && item.dt}</h1>        </FadeInOut>    </>})
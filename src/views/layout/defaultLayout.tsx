import {Outlet} from "react-router-dom";
import {MenuComponent} from "./component/menuComponent.tsx";

export const DefaultLayout = () => {
    return <>
        <MenuComponent />
        <Outlet/>
    </>
}

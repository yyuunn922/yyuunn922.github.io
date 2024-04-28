import {Outlet} from "react-router-dom";

export const DefaultLayout = () => {
    return <>
        <div className={'lg:w-[1200px] border'}>메인 레이아웃</div>
        <Outlet />
    </>
}

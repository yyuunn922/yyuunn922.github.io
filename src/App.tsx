import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {DefaultLayout} from "./views/layout/defaultLayout.tsx";
import {PortpolioPage} from "./views/portpolioPage.tsx";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path={""} element={<PortpolioPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

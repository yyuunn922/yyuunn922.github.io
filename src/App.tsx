import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {DefaultLayout} from "./views/layout/defaultLayout.tsx";
import {BlogMainPage} from "./views/blog/blogMainPage.tsx";
import {PortpolioPage} from "./views/portpolioPage.tsx";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path={""} element={<TestPage />} />*/}
                <Route element={<DefaultLayout />}>
                    <Route path={""} element={<PortpolioPage />} />
                    <Route path={"blog"} element={<BlogMainPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

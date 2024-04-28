import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <div className={'fixed top-3 flex items-center justify-center w-full z-40'}>
            <div className={'lg:w-[1200px]'}>
                <div className={'w-full flex flex-row items-center px-4 py-2 bg-dim-translucent rounded'}>
                    <div>
                        <span className={'text-2xl font-bold text-white'}><Link to={""}>yyuunn922's</Link></span>
                    </div>
                    <div className={'flex-1'} />
                    <div className={'flex flex-row'}>
                        <Link to={"/blog"}>
                            <li className={'text-white'}>블로그</li>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

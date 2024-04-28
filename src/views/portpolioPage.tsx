import {GradiantTextComponent} from "./component/gradiantTextComponent.tsx";
import {TypingAnimationComponent} from "./component/typingAnimationComponent.tsx";
import {useState} from "react";

export const PortpolioPage = () => {
    return <>
        <TypingComponent />
        <div className={'h-screen bg-red-500'}>
            메인 배너123
        </div>
    </>
}


const TypingComponent = () => {
    const [firstBannerCursor, setFirstBannerCursor] = useState(true);
    const [secondStart, setSecondStart] = useState(false)
    const [, setSecondBannerCursor] = useState(false);
    const [threeStart, setThreeStart] = useState(false)
    const [threeBannerCursor, setThreeBannerCursor] = useState(false);
    const [thorStart, setThorStart] = useState(false);
    const [thorBannerCursor, setThorBannerCursor] = useState(false);

    return (
        <div className='h-screen'>
            <div className={'sticky top-1/2 flex justify-center -translate-y-1/2'}>
                <div className={'flex w-full items-center justify-center flex-col font-bold'}>
                    {/*첫번째*/}
                    <GradiantTextComponent className={'lg:text-9xl'}>
                        <TypingAnimationComponent textList={['반갑습니다!']} repeat={false} cursor={firstBannerCursor}
                          endEvent={() => {
                              setSecondStart(true);
                              setSecondBannerCursor(true);
                              setFirstBannerCursor(false);
                          }}/>
                    </GradiantTextComponent>
                    {/*두번째*/}
                    <div className={'flex flex-row w-full'}>
                        <div className={'flex-1 flex flex-row whitespace-nowrap'}>
                            <div className={'w-full pr-2'}/>
                            <GradiantTextComponent className={'lg:text-9xl'}>
                                <TypingAnimationComponent
                                    textList={['백엔드', '풀스택 가능한', '호기심이 많은']}
                                    start={secondStart}
                                    repeat={true}
                                    cursor={secondStart}
                                    endEvent={() => setFirstBannerCursor(false)}
                                    firstEvent={() => {
                                        setSecondStart(false);
                                        setSecondBannerCursor(false);
                                        setThreeBannerCursor(true);
                                        setThreeStart(true);
                                    }}/>
                            </GradiantTextComponent>
                        </div>
                        <div className={'flex-1'}>
                            <GradiantTextComponent className={'lg:text-9xl text-black'}>
                                <TypingAnimationComponent
                                    textList={['개발자']}
                                    start={threeStart}
                                    repeat={false}
                                    cursor={threeBannerCursor}
                                    endEvent={() => {
                                        setThreeBannerCursor(false);
                                        setThorBannerCursor(true);
                                        setThorStart(true);
                                        setThreeStart(true);
                                    }}/>
                            </GradiantTextComponent>
                        </div>
                    </div>
                    {/*세번째*/}
                    <GradiantTextComponent className={'lg:text-9xl'}>
                        <TypingAnimationComponent
                            textList={['최윤석 입니다!']}
                            repeat={false}
                            cursor={thorBannerCursor}
                            start={thorStart}
                            endEvent={() => {
                                setSecondBannerCursor(true);
                                setSecondStart(true);
                                setThorBannerCursor(false);
                            }}/>
                    </GradiantTextComponent>
                </div>
            </div>
        </div>
    )
}

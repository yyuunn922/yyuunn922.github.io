import {TypingAnimationComponent} from "./component/typingAnimationComponent.tsx";
import {GradiantTextComponent} from "./component/gradiantTextComponent.tsx";

export const TestPage = () => {
    return <>
        <div className={'flex flex-row items-center'}>
            <GradiantTextComponent>
                <TypingAnimationComponent textList={["안녕하세요, 저는 개발자 최윤석입니다.", "만나서 반가워요!!", "저를 좀 뽑아주세요!"]} repeat={true} />
            </GradiantTextComponent>
        </div>
    </>
}

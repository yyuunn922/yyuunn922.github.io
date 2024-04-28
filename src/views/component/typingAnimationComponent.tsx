import {useEffect, useState} from 'react';
import * as React from "react";

type TypingAnimationComponentType = {
    repeat?: boolean;
    cursor?: boolean;
    textList: string[];
    start?: boolean
    endEvent?: () => void;
    firstEvent?: () => void;
}

export const TypingAnimationComponent: React.FC<TypingAnimationComponentType> = ({ firstEvent, repeat = true, endEvent, cursor = true , textList, start = true}) => {
    const [displayText, setDisplayText] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const [listIndex, setListIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (firstEvent && listIndex === 0 && !init && charIndex === textList[listIndex].length -1) {
            firstEvent()
            setInit(true);
        }

        if (!start) {
            return
        }


        let typingSpeed = isDeleting ? 50 : 100; // Speed up when deleting

        if (!repeat && !isDeleting && listIndex === textList.length - 1 && charIndex === textList[listIndex].length) {
            return;
        }

        if (!isDeleting && charIndex < textList[listIndex].length ) {
            setTimeout(() => {
                setDisplayText(textList[listIndex].slice(0, charIndex+1));
                setCharIndex(charIndex + 1);
            }, typingSpeed)
        }

        if (!isDeleting && charIndex == textList[listIndex].length) {
            setTimeout(() => {
                setIsDeleting(true);
            }, 800)
        }

        if (isDeleting && charIndex !== 0){
            setTimeout(() => {
                setDisplayText(textList[listIndex].slice(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            }, typingSpeed)
        }

        if (isDeleting && charIndex === 0 && listIndex < textList.length - 1) {
            setTimeout(() => {
                setIsDeleting(false);
                setListIndex(listIndex + 1)
            }, typingSpeed)
        }

        if (listIndex === textList.length - 1 && repeat && charIndex === 0 && isDeleting) {
            setTimeout(() => {
                setIsDeleting(false);
                setListIndex(0);
            }, 400)
        }

        if (listIndex === textList.length - 1 && !repeat && textList[listIndex].length -1 === charIndex) {
            if (endEvent) {
                setTimeout(() => {
                    endEvent()
                }, typingSpeed)
            }
        }

    }, [repeat, listIndex, charIndex, isDeleting, displayText, start]);

    return <>
        <span>{displayText} {cursor && <span className={'animate-cursor text-black relative'}>|</span>}</span>
    </>
};

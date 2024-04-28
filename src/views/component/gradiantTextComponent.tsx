import {ReactNode} from "react";

export const GradiantTextComponent = ({children, className}: {children: ReactNode, className?: string}) => {
    return <span
        className={`text-transparent bg-clip-text bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 ${className}`}>
        {children}
    </span>
}

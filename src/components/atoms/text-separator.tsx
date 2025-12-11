import type { FunctionComponent } from "react";
import { Separator } from "../ui/separator";

interface TextSeparatorProps {
    text?: string;
    children?: React.ReactNode
}

const TextSeparator: FunctionComponent<TextSeparatorProps> = ({ text, children }) => {
    return (<div className="flex flex-row items-center gap-2">
        <p className="w-fit text-xs">
            {text}
            {children}
        </p>
        <div className="flex-1">
            <div className="w-full border border-dashed" />
        </div>
    </div>);
}

export default TextSeparator;
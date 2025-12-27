import type { FunctionComponent } from "react";
import { Fade } from "../animate-ui/primitives/effects/fade";

interface FadeContainer {
    children: React.ReactNode
}

const FadeContainer: FunctionComponent<FadeContainer> = ({ children }) => {
    return (<Fade className="h-full" transition={{ type: 'spring', stiffness: 200, damping: 20, duration: 400 }} >
        {children}
    </Fade>);
}

export default FadeContainer;

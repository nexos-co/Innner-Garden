import { cn } from "@/lib/utils";
import type { FunctionComponent } from "react";

interface SplitScreenProps {
    children: React.ReactNode[],
    className?: string,
}

const SplitScreen: FunctionComponent<SplitScreenProps> = ({
    children,
    className,
}) => {
    return (
        <div className={cn("flex w-full flex-row", className)}>
            {...children}
        </div>
    );
}

export default SplitScreen;
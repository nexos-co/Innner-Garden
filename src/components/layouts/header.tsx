import { topBarLinks } from "@/lib/constants/sidebar.constant";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import type { FunctionComponent } from "react";

interface HeaderProps {

}

const Header: FunctionComponent<HeaderProps> = () => {
    return (<header className="w-full h-[7vh] bg-background-secondary px-10">
        <div className="flex items-center justify-end h-full">
            {
                topBarLinks.map((link) => (
                    <Link to={link.url}>
                        <Button className={'bg-background-secondary text-xs w-fit'} variant='ghost'>
                            <p className="relative">
                                {link.name}
                                {link.updates && <div className="w-2 h-2 rounded-full bg-primary absolute top-0 -right-2"></div>}
                            </p>
                        </Button>
                    </Link>
                ))
            }
        </div>
    </header>);
}

export default Header;
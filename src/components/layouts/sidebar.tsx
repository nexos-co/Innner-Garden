import { sidebarLinks } from "@/lib/constants/sidebar.constant";
import { Button } from "../ui/button";
import { Link, useLocation } from "@tanstack/react-router";

export function Sidebar() {
  const location = useLocation();
  const current = location.pathname.split('/')[1];

  return (
    <div className="h-[93vh] max-w-60 w-fit p-5  ">
      <div className='flex flex-col gap-4'>
        {sidebarLinks.map((link) => {
          return <Link to={link.url}>
            <Button className={current === link.url.replace('/', '') ? 'bg-background-secondary font-semibold': '' } variant='ghost'>
              <link.icon />
              {link.name}
            </Button>
          </Link>
        })}
      </div>
    </div>
  )
}
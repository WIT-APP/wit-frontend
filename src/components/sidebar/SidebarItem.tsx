import { useContext } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "./Sidebar";

interface SidebarItemProps {
  icon: any;
  text: string;
  active: boolean;
  onClick: () => void;
}

export function SidebarItem({ icon, text, active, onClick }: SidebarItemProps) {
  const { expanded } = useContext(SidebarContext);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link to={`/${text}`}>
      <li
        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-color group
          ${
            active
              ? "bg-lightgreen2 text-yellow2"
              : "hover:bg-yellow2 text-white2"
          } 
          ${expanded ? "" : "max-sm:hidden sm:top-2"}`}
        onClick={handleClick}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all" ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {!expanded && (
          <div
            className={`hidden sm:block 
        absolute left-full rounded-md px2 py-1 ml-6
        bg-lightgreen2 text-green2 text-sm
        invisible opacity-20 -translate-x-3 transition-all
        group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
          >
            {text}
          </div>
        )}
      </li>
    </Link>
  );
}

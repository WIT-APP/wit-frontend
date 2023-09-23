import { ChevronRight, ChevronLeft } from "lucide-react";
import { ReactNode, createContext, useState } from "react";

import witLogo from "../../assets/witLogo.png";
interface SidebarContextType {
  expanded: boolean;
}

interface SidebarProps {
  children: ReactNode;
}

export const SidebarContext = createContext<SidebarContextType>({
  expanded: false,
});

export default function Sidebar({ children }: SidebarProps) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside
      className={`h-screen ${
        expanded ? "sm:min-w-[250px] sm:w-1/5 w-screen" : "sm:w-20 w-0"
      }`}
    >
      <nav className="h-full flex flex-col bg-green2 border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center text-white2">
          <img
            src={witLogo}
            className={`overflow-hidden transition-all ${
              expanded ? "w-10" : "w-0"
            }`}
            alt="Work in tech logo"
          />
          <p
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
          >
            WORK IN TECH
          </p>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg hover:bg-yellow2 bg-green2 z-10"
          >
            {expanded ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
        <div className="border-t flex p-3">
          <div
            className={`
            flex justify-bettween items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }
            `}
          >
            <div>
              <h4 className="font-semibold text-white2"> TITO </h4>
              <span className="text-xs text-white2"> TITO@gmail.com </span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

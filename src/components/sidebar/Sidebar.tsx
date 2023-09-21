import { ChevronRight, ChevronLeft } from "lucide-react";
import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside
      className={`h-screen ${
        expanded ? "sm:min-w-[250px] sm:w-1/5" : "sm:w-20 w-0"
      }`}
    >
      <nav className="h-full flex flex-col bg-black border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center text-white">
          {/* <img
            src=""
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          /> */}
          <p
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
          >
            LOGO
          </p>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg hover:bg-lightgreen bg-green"
          >
            {expanded ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
        <div className="border-t flex p-3">
          {/* <img src="" alt="" className="w-10 h-10 rounded-md"/> */}
          <div
            className={`
            flex justify-bettween items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }
            `}
          >
            <div>
              <h4 className="font-semibold text-white"> TITO </h4>
              <span className="text-xs text-white"> TITO@gmail.com </span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-color group
        ${active ? "bg-green text-white" : "hover:bg-lightgreen text-white"} 
        ${expanded ? "" : "max-sm:hidden sm:top-2"}`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-white ${
            expanded ? "" : "hidden sm:top-2 sm:block"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`hidden sm:block 
      absolute left-full rounded-md px2 py-1 ml-6
      bg-lightgreen text-green text-sm
      invisible opacity-20 -translate-x-3 transition-all
      group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
    `}
        >
          {text}
        </div>
      )}
    </li>
  );
}

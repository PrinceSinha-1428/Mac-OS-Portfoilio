import WindowControls from "@components/WindowControls";
import { locations } from "@constants";
import WindowWrapper from "@hoc/WindowWrapper";
import useLocation from "@store/location";
import useWindowStore from "@store/window";
import type { FolderNode, TreeNode } from "@types";
import clsx from "clsx";
import { Search } from "lucide-react";
import type { FC } from "react";

const Finder: FC = () => {

   const activeLocation = useLocation(state => state.activeLocation);
   const setActiveLocation = useLocation(state => state.setActiveLocation);
   const openWindow = useWindowStore(state => state.openWindow);

   const isFolder = (node: TreeNode): node is FolderNode => {
  return Array.isArray((node as FolderNode).children);
};

   const openItem = (item:  TreeNode) => {
      if ("fileType" in item && item.fileType === "pdf") {
         return openWindow("resume");
      }
      if (isFolder(item)) {
         return setActiveLocation(item);
      }
      if(["fig", "url"].includes(item.fileType) && item.href){
         return window.open(item.href, "_blank")
      }
      openWindow(`${item.fileType}${item.kind}`, item);
   }

  return (
    <>
      <div id="window-header">
         <WindowControls target="finder" />
         <Search className="icon" />
      </div>   
      <div className="bg-white flex h-full">
         <div className="sidebar">
            <div>
               <h3>Favorites</h3>
               <ul>
                  {Object.values(locations).map((location) => (
                     <li key={location.id} onClick={() => setActiveLocation(location)} className={clsx(location.id === activeLocation?.id ? "active" : "not-active" )}>
                        <img src={location.icon} className="w-4" alt={location.name} />
                        <p className="text-sm font-medium truncate">{location.name}</p>
                     </li>
                  ))}
               </ul>
            </div>
            <div>
               <h3>Work</h3>
               <ul>
                  {locations.work.children.map((item) => (
                     <li key={item.id} onClick={() => setActiveLocation(item)} className={clsx(item.id === activeLocation?.id ? "active" : "not-active" )}>
                        <img src={item.icon} className="w-4" alt={item.name} />
                        <p className="text-sm font-medium truncate">{item.name}</p>
                     </li>
                  ))}
               </ul>
            </div>
            </div>
            <ul className="content">
               {activeLocation?.children.map((item) => (
                  <li key={item.id} className={item.position} onClick={() => openItem(item)}>
                     <img src={item.icon} alt={item.name} />
                     <p>{item.name}</p>
                  </li>
               ))}
            </ul>
        </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;

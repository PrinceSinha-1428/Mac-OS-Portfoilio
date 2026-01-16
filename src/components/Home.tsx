import { locations } from "@constants";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";
import clsx from "clsx";
import useWindowStore from "@store/window";
import useLocation from "@store/location";

const projects  = locations.work?.children || []

const Home = () => {

   const openWindow = useWindowStore(state => state.openWindow);
   const setActiveLocation = useLocation(state => state.setActiveLocation);

   const handlOpenFinderProject = (project: any) => {
      setActiveLocation(project);
      openWindow("finder");
   }

   useGSAP(() => {
      Draggable.create(".folder")
   },[])

  return (
    <section id="home">
      <ul>
         {projects.map((project) => (
            <li key={project.id} className={clsx("group folder", project.windowPosition)} onClick={() => handlOpenFinderProject(project)}>
               <img src="/images/folder.png" alt={project.name} />
               <p>{project.name}</p>
            </li>
         ))}
      </ul>
    </section>
  );
}

export default Home;

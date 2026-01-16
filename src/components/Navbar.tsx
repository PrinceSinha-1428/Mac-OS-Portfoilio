import { navIcons, navLinks } from "@constants";
import useWindowStore from "@store/window";
import dayjs from "dayjs";

const Navbar = () => {
   const openWindow = useWindowStore(state => state.openWindow);
  return (
    <nav>
      <div>
         <img src="/images/logo.svg" alt="logo" />
         <p className="font-bold">Prince&apos;s Portfolio</p>
         <ul>
            {navLinks.map(({id, name, type }) => (
               <li key={id} onClick={() => openWindow(type)}>
                  <p className="font-semibold">{name}</p>
               </li>
            ))}
          <a href="https://github.com/PrinceSinha-1428">
            <p className="font-semibold">Github</p>
         </a>
         </ul>
      </div> 
      <div>
        
         <ul>
            {navIcons.map(({id, img}) => (
               <li key={id}>
                  <img src={img} className="icon-hover" alt={`icon-${id}`} />
               </li>
            ))}
         </ul>
         <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div> 
    </nav>
  );
}

export default Navbar;

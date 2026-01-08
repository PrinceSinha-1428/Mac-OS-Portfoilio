import WindowControls from "@components/WindowControls";
import { techStack } from "@constants";
import WindowWrapper from "@hoc/WindowWrapper";
import { Check, Flag } from "lucide-react";

const Terminal = () => {

  
  return (
   <>
    <div id="window-header" className="bg-black/90">
      <WindowControls target="terminal"/>
      <h2>Tech Stack</h2>
    </div>
    <div className="techstack bg-black/90 text-white">
     <p>
      <span className="font-bold">@prince% </span>
      show tech stack
     </p>
     <div className="label">
         <p className="w-32">Category</p>
         <p>Technologies</p>
     </div>
     <ul className="content">
      {techStack.map(({category, items}) => (
         <li key={category} className="flex">
            <Check className="check" size={20}/>
            <h3>{category}</h3>
            <ul>
               {items.map((item, idx) => (
                  <li key={idx}>{item} {idx < items.length -1 ? ",": ""}</li>
               ))}
            </ul>
         </li>
      ))}
     </ul>
     <div className="footnote">
      <p>
         <Check size={20} /> 5 of 5 stacks loaded successfully (100%)
      </p>
      <p className="text-white">
         <Flag size={25} fill="white" /> Render time 5ms
      </p>
     </div>
    </div>
   </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, 'terminal');

export default TerminalWindow;

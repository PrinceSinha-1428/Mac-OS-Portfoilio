import type { WindowKey } from '@store/window';
import useWindowStore from '@store/window';
import { Maximize2, Minus, X } from 'lucide-react';

interface WindowControlsProps{
   target: WindowKey;
}

const WindowControls = ({ target }: WindowControlsProps) => {
   const closeWindow = useWindowStore(state => state.closeWindow);
  return (
  <div id='window-controls'>
   <div className='close flex justify-center items-center p-0.5 text-black' onClick={() => closeWindow(target)}><X size={14} className='font-bold text-black'/></div>
   <div className='minimize flex justify-center items-center p-0.5 text-black' ><Minus size={14} className='font-bold text-black'/></div>
   <div className='maximize flex justify-center items-center p-0.5 text-black' ><Maximize2 size={14} className='font-bold text-black'/></div>
  </div>
  );
}

export default WindowControls;

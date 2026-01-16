import WindowControls from "@components/WindowControls";
import WindowWrapper from "@hoc/WindowWrapper";
import useWindowStore from "@store/window";

interface ImageData {
   name?: string;
   imageUrl?: string;
}

const Image = () => {

   const windows = useWindowStore(state => state.windows);
   const data = windows.imgfile?.data as ImageData;

   if(!data) return null;
   const { name, imageUrl } = data;

   

  return (
    <>
     <div id="window-header">
         <WindowControls target="imgfile"/>
         <h2>{name}</h2>
      </div> 
      <div className="p-5 bg-white">
         {imageUrl && (
            <img src={imageUrl} alt={name} className="w-full h-auto max-w-[70vh] object-contain rounded" />
         )}
      </div>
    </>
  );
};

const ImageFile = WindowWrapper(Image, "imgfile")

export default ImageFile;

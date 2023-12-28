import ImageSlider from '@components/ImageSlider'

const Gallery = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen">
      <div className='w-full flex flex-col justify-center items-center h-72 lg:h-96 bg-cover bg-no-repeat' style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/assets/gallery_bg.jpg')" }}>
        <h1 className="text-4xl lg:text-8xl capitalize text-white font-extrabold">our Gallery</h1>
        <h3 className="text-sm p-4 lg:text-4xl capitalize text-slate-200 italic mt-4">Discover Our Visual Symphony</h3>
      </div>
      <ImageSlider  />
    </div>
  );
};

export default Gallery;

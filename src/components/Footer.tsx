import imagefooter from '../../public/footer-image.png' 

export const Footer = () => {
  return (
    <footer className="bg-green2 text-white fixed bottom-0 p-2 w-full hidden md:block mt-10">
    <div className="flex justify-center items-center">
      <img
        src={imagefooter}
        alt="Footer Image"
        style={{ objectPosition: 'center bottom', width: "30%" }}
      />
      <div className="text-sm absolute right-2 bottom-2">
          Todos los derechos reservados.
      </div>
    </div>
  </footer>
);
};




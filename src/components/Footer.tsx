
export const Footer = () => {
  return (
    <footer className="bg-green text-white fixed bottom-0 w-full p-2 hidden sm:block">
    <div className="flex justify-center items-center">
      <img
        src="footer-image.png"
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




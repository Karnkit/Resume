import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-yellow pt-2">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-blue">
            DREAM BOX
          </p>
          <br/>
          <p className="font-playfair text-md text-red">
            tel. 088-969-6514
            <br/>
            Email : Karnkit.c@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

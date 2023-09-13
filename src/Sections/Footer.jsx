import { footerLinks, socialMedia } from "../Constants";
import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";

const Footer = () => {
    return (
        <div className="max-container">
            <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                <div className=" flex flex-col item-start">
                    <a href="/">
                        <img src={footerLogo} alt="" width={150} height={46} />
                    </a>
                    <p className="mt-6 text-base leading-7 font-montserrat text-white sm:max-w-sm">Lorem ipsom Lorem ipsomLorem ipsomLorem ipsomLorem ipsomLorem ipsomLorem ipsomLorem ipsomLorem ipsomLorem ipsomLorem ipsomLorem ipsom</p>
                </div>
            </div>
            <div className="flex items-center gap-5 mt-8">{socialMedia.map((icon) => (<div className="flex justify-center items-center w-12 h-12 bg-white rounded-full" key={icon}><img src={icon.src} alt="icon" width={24} height={24} /></div>))}</div>
            <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap mt-10">
                {footerLinks.map((section) => (<div key={section}>
                    <h4 className=" text-white font-montserrat text-2xl leading-normal font-medium">{section.title}</h4>
                    <ul>
                        {section.links.map((link) => (<li className="text-white font-montserrat mt-3 text-base leading-normal hover:text-slate-gray cursor-pointer" key={link.name}>
                            <a href="#">{link.name}</a>
                        </li>))}
                    </ul>
                </div>))}
            </div>
            <div className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center">
                <div className="flex flex-1 justify-start items-center font-montserrat cursor-pointer"><img src={copyrightSign} alt="copyright" width={20} height={20} className=" rounded-full m-0" /><p> ALL Right Reseved</p></div><p className=" font-montserrat cursor-pointer">Terms and Condition</p>
            </div>
        </div>
    );
};

export default Footer;

import NavBar from "@/components/NavBar"
import Image from "next/image"
import facebook_logo from "@/assets/images/fb_logo.png"
import ig_logo from "@/assets/images/Instagram_logo.png"
import gmail_logo from "@/assets/images/gmail_logo.png"
import banner from "@/assets/images/banner.png"
import logo from "@/assets/images/chefjeplogo.jpg"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

const Header = () =>{
    return (
        <>
            <header >
                <NavBar />
                <div className=" relative">
                <div className="absolute h-full w-full opacity-60 -z-50">
                        <Image src={banner}  className=" h-full w-full " alt="ChefJep Banner" />

                </div>
                <div className=" relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
                    <div className="flex flex-col items-center justify-center lg:flex-row">
                        <div className="rounded-full border-8 shadow-xl">
                        <Image src={logo} className=" h-48 w-48 rounded-full sm:h-48" alt="author" />
                        </div>
                        <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
                        <h1 className="text-center font-serif  text-4xl sm:text-left sm:text-5xl md:text-6xl bg-gradient-to-b from-yellow-600 via-yellow-300 to-yellow-200 text-transparent bg-clip-text font-bold drop-shadow-[0_8px_5px_rgba(0,0,0,1)]">
                            Welcome to Chef Jep!
                        </h1>
                        <h1 className="text-center font-serif text-lg italic bg-gradient-to-b from-yellow-600 via-yellow-300 to-yellow-200 text-transparent bg-clip-text font-bold drop-shadow-[0_8px_5px_rgba(0,0,0,1)]">
                            Home of the Famous Lomi sa Palayok
                        </h1>
                        <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                            <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                                <h2 className="font-serif text-lg  bg-gradient-to-b from-yellow-600 via-yellow-300 to-yellow-200 text-transparent bg-clip-text font-extralight drop-shadow-[0_8px_5px_rgba(0,0,0,1)]">Visit our Page at!</h2>
                            </div>
                            
                            <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                                
                                <ContactLink href="mailto:chefjepdalig@gmail.com" imgSrc={gmail_logo} alt="Gmail"/>
                                <ContactLink href="https://www.instagram.com/chefjeplomi" imgSrc={ig_logo}  alt="Instagram"/>
                                <ContactLink href="https://www.facebook.com/chefjep/" imgSrc={facebook_logo}  alt="Facebook"/>
                                
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </header>
        </>



    );

}

const ContactLink = ({href,imgSrc,alt}:{href:string, imgSrc:StaticImport, alt:string}) => {
    return (
        <button className=" p-2 inline-flex items-center space-x-2 rounded">
            <a className="bg-white rounded" href={href} target="_blank" > <Image width={20} height={20}  src={imgSrc} alt={alt}/></a>
        </button>
    )
}


export default Header;
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-4">
            <div className="container flex justify-between items-center">
                <div>
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src="/images/logo-light.svg" alt="Jayanta biswas" width={36} height={36} />
                        <span className="text-xl font-bold">Jayanta</span>
                    </Link>
                </div>

                <div className="text-end">
                    &copy; 2020 - { (new Date()).getFullYear() } by <Link href="https://jayanta.me" className="underline hover:no-underline">Jayanta</Link>. All Rights Reserved. <br /> 
                    Powered by <Link href="https://oporishim.com/" target="_blank" className="underline hover:no-underline">Oporishim</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

export default function Home() {
	return (
		<main>
			<Navigation />

			{/* Hero area */}
			<header>
				<div className="container grid grid-cols-2 items-center py-20">
					<div>
						<article className="space-y-4 mb-10">
							<h2 className="text-5xl">
								<span>Hello I&rsquo;am</span> {' '}
								<span className="font-black">Jayanta Biswas.</span>
							</h2>

							<h2 className="text-5xl">
								<span className="font-black">Full-stack</span> {' '}
								<span>Developer</span>
							</h2>

							<h2 className="text-5xl">
								<span>Based In</span> {' '}
								<span className="font-black">Bangladesh.</span>
							</h2>

							<p className="text-gray-500">I&apos;m Jayanta Biswas Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
						</article>

						<nav className="flex space-x-4">
							<Link href="/" title="GitHub" className="p-3 border-2 border-black hover:bg-black hover:text-white rounded">
								<FaGithub size={22} />
							</Link>

							<Link href="/" title="Linkedin" className="p-3 border-2 border-black hover:bg-black hover:text-white rounded">
								<FaLinkedin size={22} />
							</Link>

							<Link href="/" title="Facebook" className="p-3 border-2 border-black hover:bg-black hover:text-white rounded">
								<FaFacebook size={22} />
							</Link>

							<Link href="/" title="Twitter" className="p-3 border-2 border-black hover:bg-black hover:text-white rounded">
								<FaTwitter size={22} />
							</Link>
						</nav>
					</div>

					<figure>
						<Image src='/images/developer.svg' width={889} height={596} alt="Developer" />
					</figure>
				</div>
			</header>
		</main>
	);
}


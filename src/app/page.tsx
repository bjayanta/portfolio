import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import { FaAws, FaFacebook, FaGitAlt, FaGithub, FaJs, FaLaravel, FaLinkedin, FaLinux, FaNode, FaPhp, FaPython, FaReact, FaTwitter } from "react-icons/fa6";
import { SiDart, SiExpress, SiFlutter, SiMongodb, SiMysql, SiNestjs } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export default function Home() {
	return (
		<main>
			<Navigation />

			{/* Hero area */}
			<header>
				<div className="container grid grid-cols-2 items-center py-20">
					<div>
						<article className="space-y-6 mb-10">
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

			{/* My Skills */}
			<section>
				<div className="container text-center py-16">
					<h2 className="text-5xl">
						<span>My</span> {' '}
						<span className="font-black">Skills</span>
					</h2>
				</div>

				<div className="container grid grid-cols-5 gap-6">
					<figure className="flex flex-col justify-center items-center space-y-6 border-2 border-black py-10 rounded hover:bg-black hover:text-white">
						<FaJs size={64} />
						<figcaption className="text-xl font-bold">JavaScript</figcaption>
					</figure>

					<figure className="flex flex-col justify-center items-center space-y-6 border-2 border-black py-10 rounded hover:bg-black hover:text-white">
						<FaReact size={64} />
						<figcaption className="text-xl font-bold">React</figcaption>
					</figure>

					<figure className="flex flex-col justify-center items-center space-y-6 border-2 border-black py-10 rounded hover:bg-black hover:text-white">
						<RiNextjsFill size={64} />
						<figcaption className="text-xl font-bold">Next.JS</figcaption>
					</figure>

					<figure className="flex flex-col justify-center items-center space-y-6 border-2 border-black py-10 rounded hover:bg-black hover:text-white">
						<FaNode size={64} />
						<figcaption className="text-xl font-bold">Node.js</figcaption>
					</figure>

					<figure className="flex flex-col justify-center items-center space-y-6 border-2 border-black py-10 rounded hover:bg-black hover:text-white">
						<SiExpress size={64} />
						<figcaption className="text-xl font-bold">Express.js</figcaption>
					</figure>

					<figure className="flex flex-col justify-center items-center space-y-6 border-2 border-black py-10 rounded hover:bg-black hover:text-white">
						<SiNestjs size={64} />
						<figcaption className="text-xl font-bold">NestJS</figcaption>
					</figure>

					<figure className="flex flex-col justify-center items-center space-y-6 border-2 border-black py-10 rounded hover:bg-black hover:text-white">
						<FaPhp size={64} />
						<figcaption className="text-xl font-bold">PHP</figcaption>
					</figure>

					<figure className="flex flex-col justify-center items-center space-y-6 border-2 border-black py-10 rounded hover:bg-black hover:text-white">
						<FaLaravel size={64} />
						<figcaption className="text-xl font-bold">Laravel</figcaption>
					</figure>

					<figure className="flex flex-col justify-center items-center space-y-6 border-2 border-black py-10 rounded hover:bg-black hover:text-white">
						<FaPython size={64} />
						<figcaption className="text-xl font-bold">Python</figcaption>
					</figure>

					<figure className="flex flex-col justify-center items-center space-y-6 border-2 border-black py-10 rounded hover:bg-black hover:text-white">
						<SiMysql size={64} />
						<figcaption className="text-xl font-bold">MySQL</figcaption>
					</figure>

					<figure className="flex flex-col justify-center items-center space-y-6 border-2 border-black py-10 rounded hover:bg-black hover:text-white">
						<SiMongodb size={64} />
						<figcaption className="text-xl font-bold">MongoDB</figcaption>
					</figure>

					<figure className="flex flex-col justify-center items-center space-y-6 border-2 border-black py-10 rounded hover:bg-black hover:text-white">
						<SiDart size={64} />
						<figcaption className="text-xl font-bold">Dart</figcaption>
					</figure>

					<figure className="flex flex-col justify-center items-center space-y-6 border-2 border-black py-10 rounded hover:bg-black hover:text-white">
						<SiFlutter size={64} />
						<figcaption className="text-xl font-bold">Flutter</figcaption>
					</figure>

					<figure className="flex flex-col justify-center items-center space-y-6 border-2 border-black py-10 rounded hover:bg-black hover:text-white">
						<FaAws size={64} />
						<figcaption className="text-xl font-bold">AWS</figcaption>
					</figure>

					<figure className="flex flex-col justify-center items-center space-y-6 border-2 border-black py-10 rounded hover:bg-black hover:text-white">
						<FaLinux size={64} />
						<figcaption className="text-xl font-bold">Linux</figcaption>
					</figure>

					<figure className="flex flex-col justify-center items-center space-y-6 border-2 border-black py-10 rounded hover:bg-black hover:text-white">
						<FaGitAlt size={64} />
						<figcaption className="text-xl font-bold">Git</figcaption>
					</figure>
				</div>
			</section>

			
		</main>
	);
}


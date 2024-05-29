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

				<div className="container grid grid-cols-5 gap-6 mb-24">
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

			{/* My Experience */}
			<section className="bg-black text-white">
				<div className="container text-center py-16">
					<h2 className="text-5xl">
						<span>My</span> {' '}
						<span className="font-black">Experience</span>
					</h2>
				</div>

				<div className="container space-y-6 mb-24">
					{/* AmharcTech */}
					<article className="border border-zinc-600 rounded-lg p-12 hover:bg-zinc-800">
						<div className="flex items-center justify-between">
							<figure className="flex items-center space-x-6 mb-4">
								<Link href="https://amharctech.com/" target="_blank">
									<Image src="/images/amharctech.png" width={32} height={32} alt="AmharcTech" />
								</Link>
								
								<figcaption className="text-2xl font-semibold">
									Full-stack web developer at AmharcTech
								</figcaption>
							</figure>
							
							<p className="text-zinc-300">February 2023 - Present</p>
						</div>

						<p className="text-zinc-300">As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google&lsquo;s core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
					</article>

					{/* MaxSOP */}
					<article className="border border-zinc-600 rounded-lg p-12 hover:bg-zinc-800">
						<div className="flex items-center justify-between">
							<figure className="flex items-center space-x-6 mb-4">
								<Link href="https://maxsop.com/" target="_blank">
									<Image src="/images/maxsop.jpg" width={32} height={32} alt="MaxSOP" />
								</Link>
								
								<figcaption className="text-2xl font-semibold">
									Senior software developer at MaxSOP
								</figcaption>
							</figure>
							
							<p className="text-zinc-300">September 2019 - January 2023</p>
						</div>

						<p className="text-zinc-300">As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google&lsquo;s core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
					</article>

					{/* USITSolution */}
					<article className="border border-zinc-600 rounded-lg p-12 hover:bg-zinc-800">
						<div className="flex items-center justify-between">
							<figure className="flex items-center space-x-6 mb-4">
								<Link href="https://usitsolution.net/" target="_blank">
									<Image src="/images/usitsolution.png" width={32} height={32} alt="USITSolution" />
								</Link>
								
								<figcaption className="text-2xl font-semibold">
									Senior software developer at USITSolution
								</figcaption>
							</figure>
							
							<p className="text-zinc-300">February 2018 - September 2019</p>
						</div>

						<p className="text-zinc-300">As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google&lsquo;s core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
					</article>

					{/* Freelance IT Lab */}
					<article className="border border-zinc-600 rounded-lg p-12 hover:bg-zinc-800">
						<div className="flex items-center justify-between">
							<figure className="flex items-center space-x-6 mb-4">
								<Link href="https://www.freelanceit.com.bd/" target="_blank">
									<Image src="/images/freelanceitlab.png" width={32} height={32} alt="Freelance IT Lab" />
								</Link>
								
								<figcaption className="text-2xl font-semibold">
									Senior software developer at Freelance IT Lab
								</figcaption>
							</figure>
							
							<p className="text-zinc-300">February 2015 - January 2018</p>
						</div>

						<p className="text-zinc-300">As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google&lsquo;s core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
					</article>

					{/* Freelance IT Lab */}
					<article className="border border-zinc-600 rounded-lg p-12 hover:bg-zinc-800">
						<div className="flex items-center justify-between">
							<figure className="flex items-center space-x-6 mb-4">
								<Link href="https://www.freelanceit.com.bd/" target="_blank">
									<Image src="/images/freelanceitlab.png" width={32} height={32} alt="Freelance IT Lab" />
								</Link>
								
								<figcaption className="text-2xl font-semibold">
									Junior software developer at Freelance IT Lab
								</figcaption>
							</figure>
							
							<p className="text-zinc-300">August 2013 - January 2015</p>
						</div>

						<p className="text-zinc-300">As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google&lsquo;s core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
					</article>
				</div>
			</section>
		</main>
	);
}

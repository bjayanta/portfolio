import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import { SiDart, SiExpress, SiFlutter, SiMongodb, SiMysql, SiNestjs } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { Metadata } from "next";
import { 
	FaAws, 
	FaFacebook, 
	FaGitAlt, 
	FaGithub, 
	FaJs, 
	FaLaravel, 
	FaLink, 
	FaLinkedin, 
	FaLinux, 
	FaNode, 
	FaPhp, 
	FaPython, 
	FaReact, 
	FaTwitter 
} from "react-icons/fa6";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: 'Jayanta Biswas | Full-stack developer',
	keywords: 'Full Stack developer, Web developer, Web designer, Software developer, Mobile app developer, Android app developer, Back-end developer, Fornt-end developer, PHP developer, Laravel developer, WordPress developer, WordPress Theme developer, WordPress Plugins developer, JavaScript developer, React developer, Vue developer, Dart developer, Flutter app developer',
	description: 'Experienced Software Developer familiar with a wide range of programming utilities and languages. Knowledgeable of Full Stack (Backend and Frontend) and Mobile app development requirements. I am working as a developer since 2013 and completed 190+ projects and skilled in Python, Django, JavaScript, React JS, Dart, Flutter, PHP, Laravel, SQL, PostgreSQL, and Firebase. Also, I have good knowledge on GitHub, GitLab, Bitbucket like latest web tools that can make the work much easier. A strong communicator with the ability to convey ideas clearly with an emphasis on client satisfaction. Along with my journey learning about Full Stack Development I have learned an increasing amount about accurate time estimation, accountability, project management, and the importance of proper communication with stakeholders. Feel free to discuss any project related to my work experience and skills.',
	metadataBase: new URL('https://jayanta.me'),
};

export default function Home() {
	return (
		<>
			<Navigation />

			{/* Hero area */}
			<header className="py-24">
				<div className="container grid grid-cols-2 items-center">
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

			<main>
				{/* My Skills */}
				<section>
					<div className="container text-center py-16">
						<h2 className="text-5xl">
							<span>My</span> {' '}
							<span className="font-black">Skills</span>
						</h2>
					</div>

					<div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-24">
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

					<div className="container space-y-6 pb-24">
						{/* AmharcTech */}
						<article className="border border-zinc-600 rounded-lg p-12 hover:bg-zinc-800">
							<div className="flex flex-col md:flex-row items-start justify-between">
								<figure className="flex items-center space-x-6 mb-4">
									<Link href="https://amharctech.com/" target="_blank">
										<Image src="/images/amharctech.png" width={32} height={32} alt="AmharcTech" />
									</Link>
									
									<figcaption className="text-2xl font-semibold">
										Full-stack web developer at AmharcTech
									</figcaption>
								</figure>
								
								<p className="text-zinc-300 mb-6 md:mb-0">February 2023 - Present</p>
							</div>

							<p className="text-zinc-300">As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google&lsquo;s core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
						</article>

						{/* MaxSOP */}
						<article className="border border-zinc-600 rounded-lg p-12 hover:bg-zinc-800">
							<div className="flex flex-col md:flex-row items-start justify-between">
								<figure className="flex items-center space-x-6 mb-4">
									<Link href="https://maxsop.com/" target="_blank">
										<Image src="/images/maxsop.jpg" width={32} height={32} alt="MaxSOP" />
									</Link>
									
									<figcaption className="text-2xl font-semibold">
										Senior software developer at MaxSOP
									</figcaption>
								</figure>
								
								<p className="text-zinc-300 mb-6 md:mb-0">September 2019 - January 2023</p>
							</div>

							<p className="text-zinc-300">As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google&lsquo;s core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
						</article>

						{/* USITSolution */}
						<article className="border border-zinc-600 rounded-lg p-12 hover:bg-zinc-800">
							<div className="flex flex-col md:flex-row items-start justify-between">
								<figure className="flex items-center space-x-6 mb-4">
									<Link href="https://usitsolution.net/" target="_blank">
										<Image src="/images/usitsolution.png" width={32} height={32} alt="USITSolution" />
									</Link>
									
									<figcaption className="text-2xl font-semibold">
										Senior software developer at USITSolution
									</figcaption>
								</figure>
								
								<p className="text-zinc-300 mb-6 md:mb-0">February 2018 - September 2019</p>
							</div>

							<p className="text-zinc-300">As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google&lsquo;s core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
						</article>

						{/* Freelance IT Lab */}
						<article className="border border-zinc-600 rounded-lg p-12 hover:bg-zinc-800">
							<div className="flex flex-col md:flex-row items-start justify-between">
								<figure className="flex items-center space-x-6 mb-4">
									<Link href="https://www.freelanceit.com.bd/" target="_blank">
										<Image src="/images/freelanceitlab.png" width={32} height={32} alt="Freelance IT Lab" />
									</Link>
									
									<figcaption className="text-2xl font-semibold">
										Senior software developer at Freelance IT Lab
									</figcaption>
								</figure>
								
								<p className="text-zinc-300 mb-6 md:mb-0">February 2015 - January 2018</p>
							</div>

							<p className="text-zinc-300">As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google&lsquo;s core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
						</article>

						{/* Freelance IT Lab */}
						<article className="border border-zinc-600 rounded-lg p-12 hover:bg-zinc-800">
							<div className="flex flex-col md:flex-row items-start justify-between">
								<figure className="flex items-center space-x-6 mb-4">
									<Link href="https://www.freelanceit.com.bd/" target="_blank">
										<Image src="/images/freelanceitlab.png" width={32} height={32} alt="Freelance IT Lab" />
									</Link>
									
									<figcaption className="text-2xl font-semibold">
										Junior software developer at Freelance IT Lab
									</figcaption>
								</figure>
								
								<p className="text-zinc-300 mb-6 md:mb-0">August 2013 - January 2015</p>
							</div>

							<p className="text-zinc-300">As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google&lsquo;s core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
						</article>
					</div>
				</section>

				{/* About me */}
				<section className="py-24">
					<div className="container grid grid-cols-2">
						<figure>
							<Image src='/images/about-me.svg' width={480} height={480} alt="About me" />
							<figcaption></figcaption>
						</figure>

						<article>
							<h2 className="text-5xl mb-16">
								<span>About</span> {' '}
								<span className="font-black">Me</span>
							</h2>

							<p className="mb-6">I&lsquo;m a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>

							<p className="mb-6">I began my journey as a web developer in 2015, and since then, I&lsquo;ve continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I&lsquo;m building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>

							<p>When I&lsquo;m not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
						</article>
					</div>
				</section>

				{/* My Projects */}
				<section className="py-24 bg-black text-white">
					<div className="container text-center mb-20">
						<h2 className="text-5xl">
							<span>My</span> {' '}
							<span className="font-black">Projects</span>
						</h2>
					</div>

					<div className="container space-y-16 mb-16">
						{/* SMS Amharctech */}
						<article className="grid grid-cols-2 items-center">
							<figure>
								<Image 
									src="/images/projects/sms-amharctech.png" 
									alt="Service Management System"
									className="rounded-xl"
									width={512} 
									height={512} />
							</figure>
							
							<div className="space-y-4">
								<h2 className="text-5xl font-extrabold">01</h2>
								<h3 className="text-3xl font-bold">Service Management System (SMS)</h3>
								<p className="text-zinc-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officiis harum in doloremque doloribus corporis, esse similique molestiae necessitatibus, temporibus quaerat sit neque, laborum accusamus veritatis culpa quasi laudantium placeat.</p>
								<Link href="https://sms.amharctech.com/" target="_blank" className="inline-block hover:text-orange-600">
									<FaLink size={24} />
								</Link>
							</div>
						</article>

						{/* ePOS Amharctech */}
						<article className="grid grid-cols-2 items-center">
							<div className="space-y-4">
								<h2 className="text-5xl font-extrabold">02</h2>
								<h3 className="text-3xl font-bold">E-Point of Sale (EPOS)</h3>
								<p className="text-zinc-500">AT EPOS stands out as a highly customizable EPOS solution. It offers a comprehensive set of features and aspects that can be tailored to fit an individual business’s requirements. This adaptability empowers businesses to optimize their operations, enhance customer experiences, and make data-driven decisions.</p>
								<Link href="https://sms.amharctech.com/" target="_blank" className="inline-block hover:text-orange-600">
									<FaLink size={24} />
								</Link>
							</div>

							<figure>
								<Image src="/images/projects/epos-amharctech.png" width={512} height={512} alt="ePOS" className="rounded-xl" />
							</figure>
						</article>

						{/* LMS MaxSOP */}
						<article className="grid grid-cols-2 items-center">
							<figure>
								<Image 
									src="/images/projects/pacemaker-maxsop.png" 
									alt="Learning Management System"
									className="rounded-xl"
									width={512} 
									height={512} />
							</figure>
							
							<div className="space-y-4">
								<h2 className="text-5xl font-extrabold">03</h2>
								<h3 className="text-3xl font-bold">Learning Management System (LMS)</h3>
								<p className="text-zinc-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officiis harum in doloremque doloribus corporis, esse similique molestiae necessitatibus, temporibus quaerat sit neque, laborum accusamus veritatis culpa quasi laudantium placeat.</p>
								<Link href="https://www.pacemakerbd.com/" target="_blank" className="inline-block hover:text-orange-600">
									<FaLink size={24} />
								</Link>
							</div>
						</article>
					</div>

					<div className="container text-center">
						<Link 
							href="/"
							className="inline-block border-2 rounded-md px-6 py-2 uppercase hover:bg-white hover:text-black"
						>
							See more projects
						</Link>
					</div>
				</section>

				{/* My Testimonial */}
				<section className="py-24">
					<div className="container text-center mb-20">
						<h2 className="text-5xl">
							<span>My</span> {' '}
							<span className="font-black">Testimonial</span>
						</h2>
					</div>

					<div className="container grid grid-cols-3 gap-6 mb-16">
						<figure className="group p-12 shadow-lg rounded-lg hover:bg-black hover:text-white">
							<div className="w-24 h-24 mx-auto border border-black rounded-full overflow-hidden mb-8 bg-white">
								<Image src="/images/clients/client.png" alt="Vasile (Lica) G." width={96} height={96} />
							</div>

							<figcaption className="space-y-6 text-center text-neutral-800 group-hover:text-white">
								<p>Jayanta has been an absolute joy to work with. His expertise, professionalism and communication skills are the best I&lsquo;ve ever worked with.</p>
								<div className="w-1/2 h-1 mx-auto border-b-2 border-black group-hover:border-white"></div>
								<h2 className="text-lg font-semibold">Vasile (Lica) G. <br/> Senior Technical Support Manager (USA)</h2>
								<p>Upwork</p>
							</figcaption>
						</figure>

						<figure className="group p-12 shadow-lg rounded-lg hover:bg-black hover:text-white">
							<div className="w-24 h-24 mx-auto border border-black rounded-full overflow-hidden mb-8 bg-white">
								<Image src="/images/clients/client.png" alt="Vasile (Lica) G." width={96} height={96} />
							</div>

							<figcaption className="space-y-6 text-center text-neutral-800 group-hover:text-white">
								<p>Pleasant and open communication, always on hand for feedback, very eager to deliver exactly what i wanted, i was pleasantly surprised by just how my expectations were met and exceeded as well.</p>
								<div className="w-1/2 h-1 mx-auto border-b-2 border-black group-hover:border-white"></div>
								<h2 className="text-lg font-semibold">Charith Heenpalla <br/> Sri Lanka, Colombo</h2>
								<p>Upwork</p>
							</figcaption>
						</figure>

						<figure className="group p-12 shadow-lg rounded-lg hover:bg-black hover:text-white">
							<div className="w-24 h-24 mx-auto border border-black rounded-full overflow-hidden mb-8 bg-white">
								<Image src="/images/clients/client.png" alt="Vasile (Lica) G." width={96} height={96} />
							</div>

							<figcaption className="space-y-6 text-center text-neutral-800 group-hover:text-white">
								<p>We are impressed by how quickly Jayanta understood our business and provided the software solution. After-sales support is great and we are happy.</p>
								<div className="w-1/2 h-1 mx-auto border-b-2 border-black group-hover:border-white"></div>
								<h2 className="text-lg font-semibold">Dr. Anik Ghosh <br/> Founder & CEO - PacemakerBD</h2>
								<p>Local</p>
							</figcaption>
						</figure>
					</div>

					<div className="container text-center">
						<Link 
							href="/"
							className="inline-block border-2 border-black rounded-md px-6 py-2 uppercase hover:bg-black hover:text-white"
						>
							See more testimonials
						</Link>
					</div>
				</section>

				{/* Contact Form */}
				<ContactForm />
			</main>

			{/* Footer */}
			<Footer />
		</>
	);
}

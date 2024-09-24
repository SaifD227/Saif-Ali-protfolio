// pages/Blog.tsx

import Image from "next/image";
import image from '../assets/download (8).jpeg';
import image1 from '../assets/download (9).jpeg';

const Blog :React.FC = () => {
  return (
    <div className="min-h-screen p-8 bg-orange-100 mt-20 from-blue-100 to-gray-200">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-orange-500 mb-2">My Portfolio</h1>
        <h2 className="text-lg text-gray-600">Front-End Developer</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <section className="p-6 bg-white rounded-lg shadow-xl">
          <h2 className="text-4xl font-semibold mb-4 text-orange-500">Skills</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-lg  text-gray-600">HTML</li>
            <li className="text-lg  text-gray-600">CSS</li>
            <li className="text-lg  text-gray-600">JavaScript</li>
            <li className="text-lg  text-gray-600">React</li>
            <li className="text-lg  text-gray-600">Bootstrap</li>
            <li className="text-lg  text-gray-600">Git</li>
            <li className="text-lg  text-gray-600">Next.js</li>
            <li className="text-lg  text-gray-600">TypeScript</li>
            <li className="text-lg  text-gray-600">Tailwind</li>
            <li className="text-lg  text-gray-600">Sass</li>
            <li className="text-lg  text-gray-600">GitHub</li>
            <li className="text-lg  text-gray-600">GraphQL</li>
            <li className="text-lg  text-gray-600">PostgreSQL</li>
            <li className="text-lg  text-gray-600">Express.js</li>
            <li className="text-lg  text-gray-600">React Native</li>
          </ul>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-xl">
          <h2 className="text-4xl font-semibold mb-4 text-orange-500">Projects</h2>
          <ul className="space-y-6">
            <li>
              <strong className="text-3xl text-orange-500">Project 1:</strong><span className="text-gray-600 text-lg">E-commerce Website</span> 
              <br />
              <a
                href="https://netflix-nu-steel.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Project
              </a>
              <Image
                src={image1} // Corrected this line
                alt="Project 1"
                width={400}
                height={200}
                className="mt-4 rounded-md shadow-lg"
              />
            </li>
            <li>
              <strong className="text-3xl text-orange-500">Project 2:</strong><span className="text-gray-600 text-lg"> Netflix Clone</span>
              <br />
              <a
                href="https://netflix-9i58.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Project
              </a>
              <Image
                src={image} // This is correct
                alt="Project 2"
                width={400}
                height={200}
                className="mt-4 rounded-md shadow-lg"
              />
            </li>
          </ul>
        </section>

        <section className="p-6 bg-white rounded-lg shadow-xl space-y-6">
          <h2 className="text-4xl font-semibold mb-4 text-orange-500">Work Experience</h2>
          <ul className="space-y-4">
            <li>
              <strong className="font-bold text-3xl text-orange-500">Front-End Develope:</strong><p className="text-gray-600 text-lg"> Front-End Developer (2022-Present)
             </p> <br />
              <p className="text-gray-600 text-lg">
              Responsibilities: Building responsive websites, collaborating with
              designers.</p>
            </li>
            <li>
              <strong className="text-3xl text-orange-500">Company Name:</strong><p className="text-gray-600 text-lg"> Intern (2023-2024)</p>
              <br />
              <p className="text-gray-600 text-lg">
              Responsibilities: Assisting in front-end development tasks.
          </p>  </li>
          </ul>

          <h2 className="text-4xl font-semibold mb-4 text-orange-500">Education</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li className="text-gray-600 text-lg"> Computer Science field related</li>
            <li className="text-gray-600 text-lg">Certification in Front-End Development</li>
          </ul>

          <h2 className="text-4xl font-semibold mb-4 text-orange-500">Contact Me</h2>
       
           <p> Email:{" "}
            <a
              href=" saifaalii237@gmail.com"
              className="text-blue-500 underline"
            >
              your-email@example.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Your LinkedIn
            </a>
          </p>

    
        </section>
      </div>
    </div>
  );
};

export default Blog;

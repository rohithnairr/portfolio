import Image from "next/image";
import image1 from "./images/image1.png"
import crowdafrik from "./images/CrowdAfrik.png"
import indegene from "./images/indegene.png"
import techenut from "./images/techenut.png"
import glass from "./images/glass.png"
import circle from "./images/circle.png"
import triangle from "./images/traingle.png"
import square from "./images/square.png"
import Works from "./components/recentworks"
import Blog from "./components/blogs"
import Footer from "./components/footer"

export default function Home() {
  return (
    <>

      <div className='container mx-auto p-4'>

        <div className='grid lg:grid-cols-2 gap-4 mt-16 sm:grid-cols-1 md:grid-cols-2  text-grey-900'>
          <div className='mt-0 lg:mt-60 md:mt-52'  data-aos="fade-right">
            <h1 className="font-bold text-4xl lg:text-5xl font-VT323 pb-4 ">Hey !</h1>
            <h1 className="font-bold text-4xl lg:text-5xl font-VT323">I’m Rohith Nair</h1>
            <h2 className="text-2xl pt-2 d font-VT323">Senior Product Designer, Developer </h2>
            <p className="pt-5 pb-14 max-w-l font-thin font-VT323 text-l text-gray-400">With four years of experience in the field of designing and development, I'm committed to uniting people and technology, harnessing its potential to empower individuals, and driving positive change in society.</p>
            <a className="text-xl text-blue-500 mt-8 font-VT323 font-semibold underline" href="mailto:rohithnairreghu@gmail.com">Get in Touch &#8594;</a>
          </div>
          <div className='mt-12'>
            <Image
              className="w-full h-auto"
              src={image1}
              alt={'main image'}
            />
            <div>

            </div>
          </div>
        </div>

        <div className='grid lg:grid-cols-4 gap-4  sm:grid-cols-1 md:grid-cols-2 mt-48 text-white'  >
          <div className="pt-12"><Image
            className="max-w-sm h-auto mx-auto"
            src={crowdafrik}
            alt={'main image'}
          /></div>
          <div className="pt-12"><Image
            className="max-w-sm h-auto mx-auto lg:mt-8"
            src={indegene}
            alt={'main image'}
          /></div>
          <div className="pt-12"><Image
            className="max-w-sm h-auto mx-auto lg:mt-8"
            src={techenut}
            alt={'main image'}
          /></div>
          <div className="pt-12"><Image
            className="max-w-sm h-auto mx-auto lg:mt-4"
            src={glass}
            alt={'main image'}
          /></div>
        </div>

        <div className='grid lg:grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-3 pt-64 text-white'>
          <div className="pt-12 text-white"><Image
            className="max-w-sm h-auto mx-auto"
            src={circle}
            alt={'main image'}
          />
            <h3 className=" font-VT323 font-semibold text-center my-8 text-xl">Product Design</h3>
            <p className=" font-VT323 font-light text-center my-8 text-xl" >As a product designer with a passion for my craft, I have gained experience working for both large organizations and fast-paced startups, giving me a unique perspective on the field.</p>
          </div>
          <div className="pt-12  text-white"><Image
            className="max-w-sm h-auto mx-auto "
            src={triangle}
            alt={'main image'}
          />
            <h3 className=" font-VT323 font-semibold text-center my-8 text-xl">Front End Development</h3>
            <p className=" font-VT323 font-light text-center my-8 text-xl" >Front-end developer passionate about building beautiful and user-friendly interfaces with Next.js, React, HTML, CSS, and JavaScript.</p>
          </div>
          <div className="pt-12  text-white"><Image
            className="max-w-sm h-auto mx-auto "
            src={square}
            alt={'main image'}
          />
            <h3 className=" font-VT323 font-semibold text-center my-8 text-xl">User Experience Designer</h3>
            <p className=" font-VT323 font-light text-center my-8 text-xl" >As a user experience designer who values precision and depth, I am passionate about creating accessible and simple products that all humans can enjoy.</p>
          </div>

        </div>


        <div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-2 bg-white p-4 mt-72 text-black ">
          <div className="my-8">
            <h3 className="text-black font-VT323 font-semibold text-5xl text-center">4+</h3>
            <p className="text-black text-center font-light mt-4 text-l"> Years Of Experience</p>
          </div>
          <div className="my-8">
          <h3 className="text-black font-VT323 font-semibold text-5xl text-center">50+</h3>
            <p className="text-black text-center font-light mt-4 text-l">Design Projects</p>
          </div>
          <div className="my-8">
          <h3 className="text-black font-VT323 font-semibold text-5xl text-center">30+</h3>
            <p className="text-black text-center font-light mt-4 text-l">Development Projects</p>
          </div>
          <div className="my-8">
          <h3 className="text-black font-VT323 font-semibold text-5xl text-center">20+</h3>
            <p className="text-black text-center font-light mt-4 text-l">Collaborations</p>
          </div>
        </div>

       <div className="mt-40 font-VT323 font-bold text-3xl">
        <h1> Recent works</h1>
        <Works/>
        </div>

        <div className="mt-40 font-VT323 font-bold text-3xl">
        <h1> Blogs</h1>
        <Blog/>
        </div>


        





      </div>
      <Footer/>
    </>

  )
}

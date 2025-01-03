'use client'
import ToggleBtn from '@/components/ToggleBtn'
import { FaInstagram, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'
import { MenuDock } from '@/components/MenuDock'
// import { useState } from "react";
import { AppleCardsCarouselDemo } from '@/components/worksCarousel'

export default function Home() {
  // const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="px-8 pt-5 flex flex-col bg-gray-50 dark:bg-gray-900 dark:text-white ">
      <div className=" flex justify-end w-full">
        <ToggleBtn />
      </div>

      <div className="w-full md:h-[610px] my-3 gap-3 flex ">
        <div className="h-full w-2/6 flex flex-col justify-between p-5 bg-gray-200 dark:border-gray-200 dark:border-2 dark:bg-gray-900 dark:text-white  rounded-2xl">
          <div className="text-2xl">
            <h1>One Step at a Time.</h1>
            <h1>One punch at a Time.</h1>
            <h1>One Round at a Time.</h1>
          </div>

          <p>
            Hi, I’m Ashfaq Jani, <br />
            Your go-to <u>Web Developer</u> for elevating your brand
            <br />
            perception. Let&apos;s design the experience you want to see
            <br />
            tomorrow.
          </p>
        </div>

        <div className=" h-full w-1/6 flex flex-col gap-3 ">
          <div className="w-full h-1/2 flex flex-col justify-between p-7 bg-gray-200 dark:border-gray-200 dark:border-2 dark:bg-gray-900 rounded-2xl">
            <h1 className="text-3xl font-mono">EST. 2004</h1>
            <div className="flex">
              <div className="flex flex-col mr-2">
                <p className="text-xs">Born in</p>
                <p className="text-2xl  font-mono">INDIA</p>
              </div>
              <Image src="/flag.jpg" width={60} height={15} alt=" " />
            </div>
          </div>
          <div className="w-full h-1/2 bg-gray-200 dark:border-gray-200 dark:border-2 dark:bg-gray-900 rounded-2xl">
            <Image className="rounded-2xl" src="/dp.jpeg" width={300} height={300} alt=" " />
          </div>
        </div>

        {/* this is the menu component  */}
        <div className=" h-full w-3/6 bg-gray-200 dark:border-gray-200 dark:border-2 dark:bg-gray-900 flex flex-col items-end p-7 justify-between rounded-2xl">
          <h1 className="text-3xl font-mono hover:cursor-pointer">MENU +</h1>
          <MenuDock />
        </div>
      </div>

      <div className="w-full h-96 mb-3  flex gap-3">
        <div className="w-2/3 h-full rounded-2xl flex justify-center items-center dark:text-black bg-[#D7FFD0]">
          <h1 className="text-[80px] leading-snug ">
            Full-Stack Web Dev by Day,
            <br />
            Aspiring Game Dev by Night.
          </h1>
        </div>
        <div className=" w-1/3 h-full rounded-2xl flex flex-col p-5   py-10 bg-gray-200 dark:border-gray-200 dark:border-2 dark:bg-gray-900">
          <p className="mb-8 text-lg">
            Crafting Interactive Worlds: Fullstack Developer & Game Designer
            <br /> (Unity)
          </p>
          <p>
            I&apos;m passionate about bringing websites and games to life with a unique blend of technical expertise and artistic vision. As a full-stack developer, I leverage JavaScript, ReactJS, and
            React to build user-friendly and scalable web applications. But my true passion lies in game design. I&apos;m an aspiring game designer interested in Unity, eager to translate captivating
            concepts into immersive realities. I see the potential for seamless integration between these seemingly disparate worlds and constantly seek innovative ways to bridge the gap.
          </p>
        </div>
      </div>

      <div className="w-full h-96  flex gap-3">
        <div className="w-1/3 h-full rounded-2xl p-10 flex justify-center items-center bg-gray-200 dark:border-gray-200 dark:border-2 dark:bg-gray-900">
          <h1 className="text-[60px]  leading-snug ">What are the things I can help you with?</h1>
        </div>
        <div className="w-2/3 h-full rounded-2xl flex justify-center items-center bg-gray-900 dark:border-gray-200 dark:border-2 dark:bg-gray-900"></div>
      </div>

      <div className="w-full h-[650px] flex gap-3">
        <div className="w-2/3 h-[92%] mt-3 rounded-2xl flex justify-center items-center bg-gray-200 dark:border-gray-200 dark:border-2 dark:bg-gray-900">
          <iframe
            className="rounded-2xl w-full h-full"
            src="https://www.youtube.com/embed/n019h9Pp7Vw"
            title="Cypher Link"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="w-1/3 h-full -mt-10 rounded-2xl flex justify-center items-center bg-gray-900 dark:border-gray-200 dark:border-2 dark:bg-gray-900"></div>
      </div>

      <div className="w-full h-[500px] -mt-7 flex  rounded-2xl  justify-center items-center bg-gray-900 dark:border-gray-200 dark:border-2 dark:bg-gray-900"></div>

      <AppleCardsCarouselDemo />

      <div className="w-full h-[450px] rounded-2xl flex  bg-[#D7FFD0] dark:text-black">contact</div>

      <div className=" w-full flex mb-5 mt-20  justify-between">
        <p>
          &copy; {new Date().getFullYear()}
          <a href="https://github.com/ashfaqjani916">Ashfaq Jani.</a> All rights reserved.
        </p>

        <div className="flex gap-2">
          <div className="flex gap-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

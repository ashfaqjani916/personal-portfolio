import ToggleBtn from "@/components/ToggleBtn";
import { FaInstagram, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="px-8 pt-5 border-red-600 border-2 flex flex-col bg-gray-50 ">

      <div className=" flex justify-end w-full">
        <ToggleBtn />
      </div>

      <div className="w-full md:h-[500px] my-3 gap-3 flex ">
        <div className="h-full w-2/6 bg-gray-200  rounded-2xl">

        </div>

        <div className=" h-full w-1/6 flex flex-col gap-3 ">
          <div className="w-full h-1/2 bg-gray-200 rounded-2xl">

          </div>
          <div className="w-full h-1/2 bg-gray-200 rounded-2xl">

          </div>
        </div>

        <div className=" h-full w-3/6 bg-gray-200 rounded-2xl">

        </div>

      </div>


      <div className="w-full h-96 mb-3  flex gap-3">
        <div className="w-2/3 h-full rounded-2xl flex justify-center items-center bg-[#D7FFD0]">
          <h1 className="text-[80px] leading-snug">
            Full-Stack Web Dev by Day,
            <br />
            Aspiring Game Dev by Night.
          </h1>
        </div>
        <div className=" w-1/3 h-full rounded-2xl bg-gray-200">

        </div>
      </div>

      <div className="w-full h-96  flex gap-3">
        <div className="w-1/3 h-full rounded-2xl flex justify-center items-center bg-gray-200">
        </div>
        <div className="w-2/3 h-full rounded-2xl flex justify-center items-center bg-gray-900">
        </div>
      </div>

      <div className="w-full h-[650px] flex gap-3">
        <div className="w-2/3 h-[92%] mt-3 rounded-2xl flex justify-center items-center bg-gray-200">
        </div>
        <div className="w-1/3 h-full -mt-10 rounded-2xl flex justify-center items-center bg-gray-900">
        </div>
      </div>

      <div className="w-full h-[500px] -mt-7 flex  rounded-2xl  justify-center items-center bg-gray-600">

      </div>

      <div className="w-full h-[500px] mt-3 flex mb-3 overflow-y-scroll  gap-3 ">
        <div className="w-[480px] h-full rounded-2xl flex   bg-gray-200">
        </div>
        <div className="w-[480px] h-full rounded-2xl flex   bg-gray-200">
        </div>
        <div className="w-[480px] h-full rounded-2xl flex   bg-gray-200">
        </div>
        <div className="w-[480px] h-full rounded-2xl flex   bg-gray-200">
        </div>
        <div className="w-[480px] h-full rounded-2xl flex   bg-gray-200">
        </div>
        <div className="w-[480px] h-full rounded-2xl flex   bg-gray-200">
        </div>
        <div className="w-[480px] h-full rounded-2xl flex   bg-gray-200">
        </div>
        <div className="w-[480px] h-full rounded-2xl flex   bg-gray-200">
        </div>
        <div className="w-[480px] h-full rounded-2xl flex   bg-gray-200">
        </div>
      </div>

      <div className="w-full h-[450px] rounded-2xl flex  bg-[#D7FFD0]">
        contact
      </div>

      <div className=" w-full flex mb-5 mt-20  justify-between">
        <p>
          &copy; {new Date().getFullYear()}<a href="https://github.com/ashfaqjani916">Ashfaq Jani.</a> All rights reserved.
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
  );
}

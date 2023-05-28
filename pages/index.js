import Image from "next/image";
import React, { useState } from "react";
import { vape } from "../public/head/about.jpg";
import { BiCart, BiMenu, BiSearch } from "react-icons/bi";
import { TfiShoppingCart } from "react-icons/tfi";
import {
  BsShieldLock,
  BsChevronCompactLeft,
  BsChevronCompactRight,
} from "react-icons/bs";
import { GiAnticlockwiseRotation } from "react-icons/gi";
import { HiOutlineMapPin, HiOutlinePhone } from "react-icons/hi";
import { RiMapPinLine } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
//import '../styles/globals.css';
import css from "../components/Home.module.css";
import data from "../utils/data"; /*  */
import ProductItem from "@/components/ProductItem";
import newReleaseData from "@/utils/newReleaseData";
import NewReleaseItem from "@/components/NewReleaseItem";
export default function Home() {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const slides = [
    {
      url: "/images/bgnew4.jpg",
    },
    {
      url: "/images/bgnew1.jpg",
    },
    {
      url: "/images/bgnew6.jpg",
    },
    {
      url: "/images/bgnew5.jpg",
    },
    {
      url: "/images/bgnew8.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      {/*head */}
      <div className=" h-[600px] w-full m-auto py-16 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-contain duration-500 relative"
        >
          {/*menu bar */}
          <div className="flex flex-row items-center justify-between w-full z-50 absolute top-5 ">
            <div className="text-white font-bold ms-8 text-2xl italic">
              V A P E
            </div>

            <div className="flex flex-row items-center me-8">
              <div className="p-2  text-white font-bold">
                <BiSearch size={20} />
              </div>

              <div className="p-2  text-white font-bold">
                <TfiShoppingCart size={20} />
              </div>
              <div className="p-2  text-white font-bold">
                <BiMenu size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-gray-400 text-white cursor-pointer h-40 w-8">
          <div className=" h-full relative">
            <BsChevronCompactLeft
              onClick={prevSlide}
              size={25}
              className="absolute top-14 -left-1 text-center mx-auto"
            />
          </div>
        </div>

        {/* text on image */}
        <div className="w-full bg-red-300 z-10  m-auto absolute top-[55%] bg-transparent  items-center justify-center">
          <p className=" font-bold text-center text-white text-lg mb-2">
            The Best Look
          </p>
          <p className="text-4xl font-bold text-center text-white mb-2">
            Anytime Anywhere
          </p>
          <p className="font-bold text-center text-white text-lg mb-2">
            Starts from 10,000 MMK
          </p>

          <div className="border-[1px] w-20 py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer m-auto bg-gray-400">
            <div className=" items-center justify-center">
              <p className="  text-center text-white">View</p>
            </div>
          </div>
        </div>
        {/* Right Arrow */}

        <div className="  hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-gray-400 text-white cursor-pointer h-40 w-8">
          <div className=" h-full relative">
            <BsChevronCompactRight
              onClick={nextSlide}
              size={25}
              className="absolute top-14 -left-1 text-center mx-auto"
            />
          </div>
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      {/*Best Deals*/}
      <div className="flex flex-row items-center justify-center mb-5">
        <div className="  items-center justify-center">
          <p className="text-3xl font-bold text-center mb-1">Best Deals </p>
          <p className=" text-black text-center ">Just For You</p>
        </div>
      </div>
      <div className="max-w-[1050px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
        {data.products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
      {/*button */}
      <div className="border-[1px] w-40 py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer m-auto bg-gray-400">
        <div className=" items-center justify-center">
          <div>
            <p className="  text-center text-white">View More</p>
          </div>
        </div>
      </div>
      {/*Membership Program*/}
      <div className="max-w-[1050px] grid grid-cols-1 md:grid-cols-2 mx-auto  mt-10 ">
        {/* card1*/}
        <div className=" block  items-center md:w-[525px] rounded-lg h-[250px] md:h-[230px] bg-black mx-auto mb-5">
          <div className="items-center justify-center">
            <div className="flex flex-row">
              <div className="ms-5 ">
                <img
                  src="/images/badge3.jfif"
                  alt=""
                  className="rounded-full my-1 mt-1  shadow w-[50px] h-[50px]"
                />

                <p className="text-white text-2xl md:text-3xl font-bold ">
                  Membership Program
                </p>
                <p className="text-white">Be a Vape Pi member and get our</p>
                <p className="text-white">special exclusive offers</p>

                <div className="border-[1px] w-20 py-1 rounded-full shadow-sm hover:shadow-md transition cursor-pointer  bg-gray-400 mt-3">
                  <div className=" items-center justify-center">
                    <p className="  text-center text-white">View</p>
                  </div>
                </div>
              </div>

              <img
                src="/images/vv2.jpg"
                alt="image"
                className="rounded-lg  shadow w-[280px] md:w-[340px] h-[250px] md:h-[230px] "
              />
            </div>
          </div>
        </div>

        {/* card2*/}
        <div className="  block  items-center md:w-full h-[230px] mx-auto ">
          <div className="flex flex-row">
            <div className=" block  items-center w-[200px] md:w-[263px] rounded-lg mx-auto bg-black h-[230px] ">
              <img
                src="/images/vv2.jpg"
                alt="image"
                className="rounded-lg  shadow w-[100px] h-[140px] ms-5 "
              />
              <div className="flex flex-row justify-between mx-5">
                <div>
                  <p className="text-md text-white font-bold">Devices</p>
                  <p className="text-md text-white ">Find the best for</p>
                  <p className="text-md text-white ">you here</p>
                </div>
                <BsChevronCompactRight size={15} className="text-white mt-2" />
              </div>
            </div>
            {/* card3*/}
            <div className="flex flex-col w-[200px] md:-w-full">
              <div className="mb-1 block  items-center  w-[180px] md:w-[250px] rounded-lg mx-auto bg-black h-[113px]">
                <img
                  src="/images/vv2.jpg"
                  alt="image"
                  className="rounded-lg  shadow w-[60px] h-[60px] ms-5 "
                />
                <div className="flex flex-row justify-between mx-5">
                  <div>
                    <p className=" text-white text-xs font-bold">Devices</p>
                    <p className="text-xs text-white ">Find the best for</p>
                    <p className="text-xs text-white ">you here</p>
                  </div>
                  <BsChevronCompactRight
                    size={10}
                    className="text-white mt-2"
                  />
                </div>
              </div>
              <div className="block  items-center  w-[180px] md:w-[250px] rounded-lg mx-auto bg-black h-[113px]">
                <img
                  src="/images/vv2.jpg"
                  alt="image"
                  className="rounded-lg  shadow  w-[60px]  h-[60px] ms-5 "
                />
                <div className="flex flex-row justify-between mx-5">
                  <div>
                    <p className=" text-white text-xs font-bold">Disposable</p>
                    <p className="text-xs text-white ">Easy, clean &</p>
                    <p className="text-xs text-white ">Superb flavor</p>
                  </div>
                  <BsChevronCompactRight
                    size={10}
                    className="text-white mt-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* new release*/}
      <div className="flex flex-row items-center justify-center mt-7">
        <div className=" flex flex-row items-center justify-center mb-1">
          <p className="text-3xl text-red-500 me-1  font-bold">New </p>
          <p className="text-3xl text-black font-bold">Released</p>
        </div>
      </div>
      <p className=" text-black text-center mb-5">
        Try Our Latest Flavors Here
      </p>

      <div className=" max-w-[1050px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  mx-auto">
        {newReleaseData.products.map((product) => (
          <NewReleaseItem product={product} key={product.id} />
        ))}
      </div>
      {/*button */}
      <div className="border-[1px] w-40 py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer m-auto bg-gray-400 mt-3">
        <div className=" items-center justify-center">
          <div>
            <p className="  text-center text-white">View More</p>
          </div>
        </div>
      </div>
      {/* Try New Flavor*/}

      <div className="max-w-[1050px] h-[200px] w-full m-auto mt-10 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-contain duration-500 relative"
        ></div>

        {/* text on image */}
        <div className="w-[220px]  bg-gray-200 z-10  m-auto absolute bottom-8 left-5 items-center justify-center rounded-xl">
          <p className="text-black text-2xl left m-auto text-center py-2">
            Try New Flavor
          </p>
          <p className="text-black text-xl m-auto text-center">
            Citrus Monster
          </p>

          <div className="border-[2px] mb-2 bg-blue-200 w-24 mt-3 py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer m-auto justify-center items-center ">
            <p className="text-black m-auto text-center">View</p>
          </div>
        </div>
        {/* Right Arrow */}

        <div className="  hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-gray-400 text-white cursor-pointer h-40 w-8">
          <div className=" h-full relative">
            <BsChevronCompactRight
              onClick={nextSlide}
              size={25}
              className="absolute top-14 -left-1 text-center mx-auto"
            />
          </div>
        </div>
      </div>

      {/*Devices*/}
      <div className=" w-[1050px] h-[200px]   bg-black  border-[1px]  m-auto mt-10 rounded-lg relative ">
        <img
          src="/images/vv2.jpg"
          className="absolute bottom-0 z-10 w-[200px] h-[190px]"
        />

        <p className="text-white z-10 absolute top-20 left-40 text-xl mb-2">
          Devices
        </p>

        <p className="text-white z-10 absolute top-28 left-40 mb-1">
          Find the best for
        </p>
        <p className="text-white z-10 absolute top-32 left-40">you here</p>

        <Image
          src="/images/smoke.jfif"
          width={300}
          height={200}
          className="absolute bottom-0 left-10"
        />
        <div className="flex flex-row justify-between ms-48 me-48 absolute left-32 top-6 ">
          {/* card1*/}
          <div className="me-1">
            <img
              src="/images/v2.jfif"
              className="rounded-lg mb-1 w-[100px] h-[100px] relative"
            />
            <div className="  absolute top-9 left-20 rounded-full border-[1px] bg-gray-300">
              <BsChevronCompactRight
                size={25}
                className=" text-center mx-auto p-1"
              />
            </div>
            <p className="text-center text-white text-md">Refreshing </p>
            <p className="text-center text-white text-sm">30,000MMK</p>

            <div className="px-2 w-28 h-10 m-auto  rounded-full text-yellow-500 flex flex-row">
              <AiFillStar size={15} className="me-0.5 " />
              <p className="text-center text-xs text-yellow-500">600Points</p>
            </div>
          </div>
          {/* card2*/}
          <div className="me-1">
            <img
              src="/images/v3.jfif"
              className="rounded-lg mb-1 w-[100px] h-[100px] "
            />

            <p className="text-center text-white text-md">Refreshing </p>
            <p className="text-center text-white text-sm">30,000MMK</p>

            <div className="px-2 w-28 h-10 m-auto  rounded-full text-yellow-500 flex flex-row">
              <AiFillStar size={15} className="me-0.5 " />
              <p className="text-center text-xs text-yellow-500">600Points</p>
            </div>
          </div>
          {/* card3*/}
          <div className="me-1">
            <img
              src="/images/v5.jfif"
              className="rounded-lg mb-1 w-[100px] h-[100px] "
            />

            <p className="text-center text-white text-md">Refreshing </p>
            <p className="text-center text-white text-sm">30,000MMK</p>

            <div className="px-2 w-28 h-10 m-auto  rounded-full text-yellow-500 flex flex-row">
              <AiFillStar size={15} className="me-0.5 text-center" />
              <p className="text-center text-xs text-yellow-500">600Points</p>
            </div>
          </div>
          {/* card4*/}
          <div className="me-1">
            <img
              src="/images/v9.jfif"
              className="rounded-lg mb-1 w-[100px] h-[100px] "
            />

            <p className="text-center text-white text-md">Refreshing </p>
            <p className="text-center text-white text-sm">30,000MMK</p>

            <div className="px-2 w-28 h-10 m-auto  rounded-full text-yellow-500 flex flex-row">
              <AiFillStar size={15} className="me-0.5 " />
              <p className="text-center text-xs text-yellow-500">600Points</p>
            </div>
          </div>
          {/* card5*/}
          <div className="me-1 z-10">
            <img
              src="/images/v3.jfif"
              className="rounded-lg mb-1 w-[100px] h-[100px] "
            />

            <p className="text-center text-white text-md">Refreshing </p>
            <p className="text-center text-white text-sm">30,000MMK</p>

            <div className="px-2 w-28 h-10 m-auto  rounded-full text-yellow-500 flex flex-row">
              <AiFillStar size={15} className="me-0.5 " />
              <p className="text-center text-xs text-yellow-500">600Points</p>
            </div>
          </div>
        </div>
        <Image
          src="/images/smoke.jfif"
          width={200}
          height={200}
          className="absolute bottom-0 right-0"
        />
      </div>
      {/* Pods*/}
      <div className=" w-[1050px] h-[200px]  bg-black   border-[1px]  m-auto mt-10 rounded-lg relative ">
        <img
          src="/images/vv2.jpg"
          className="absolute bottom-0 z-10 w-[200px] h-[190px]"
        />

        <p className="text-white z-10 absolute top-20 left-40 text-xl mb-2">
          Pods
        </p>

        <p className="text-white z-10 absolute top-28 left-40 mb-1">
          Find the best for
        </p>
        <p className="text-white z-10 absolute top-32 left-40">you here</p>

        <Image
          src="/images/smoke.jfif"
          width={300}
          height={200}
          className="absolute bottom-0 left-10"
        />
        <div className="flex flex-row justify-between ms-48 me-48 absolute left-32 top-6 ">
          {/* card1*/}
          <div className="me-1">
            <img
              src="/images/v2.jfif"
              className="rounded-lg mb-1 w-[100px] h-[100px] "
            />
            <div className="  absolute top-9 left-20 rounded-full border-[1px] bg-gray-300">
              <BsChevronCompactRight
                size={25}
                className=" text-center mx-auto p-1"
              />
            </div>
            <p className="text-center text-white text-md">Refreshing </p>
            <p className="text-center text-white text-sm">30,000MMK</p>

            <div className="px-2 w-28 h-10 m-auto  rounded-full text-yellow-500 flex flex-row">
              <AiFillStar size={15} className="me-0.5 " />
              <p className="text-center text-xs text-yellow-500">600Points</p>
            </div>
          </div>
          {/* card2*/}
          <div className="me-1">
            <img
              src="/images/v3.jfif"
              className="rounded-lg mb-1 w-[100px] h-[100px] "
            />

            <p className="text-center text-white text-md">Refreshing </p>
            <p className="text-center text-white text-sm">30,000MMK</p>

            <div className="px-2 w-28 h-10 m-auto  rounded-full text-yellow-500 flex flex-row">
              <AiFillStar size={15} className="me-0.5 " />
              <p className="text-center text-xs text-yellow-500">600Points</p>
            </div>
          </div>
          {/* card3*/}
          <div className="me-1">
            <img
              src="/images/v5.jfif"
              className="rounded-lg mb-1 w-[100px] h-[100px] "
            />

            <p className="text-center text-white text-md">Refreshing </p>
            <p className="text-center text-white text-sm">30,000MMK</p>

            <div className="px-2 w-28 h-10 m-auto  rounded-full text-yellow-500 flex flex-row">
              <AiFillStar size={15} className="me-0.5 text-center" />
              <p className="text-center text-xs text-yellow-500">600Points</p>
            </div>
          </div>
          {/* card4*/}
          <div className="me-1">
            <img
              src="/images/v9.jfif"
              className="rounded-lg mb-1 w-[100px] h-[100px] "
            />

            <p className="text-center text-white text-md">Refreshing </p>
            <p className="text-center text-white text-sm">30,000MMK</p>

            <div className="px-2 w-28 h-10 m-auto  rounded-full text-yellow-500 flex flex-row">
              <AiFillStar size={15} className="me-0.5 " />
              <p className="text-center text-xs text-yellow-500">600Points</p>
            </div>
          </div>
          {/* card5*/}
          <div className="me-1 z-10">
            <img
              src="/images/v3.jfif"
              className="rounded-lg mb-1 w-[100px] h-[100px] "
            />

            <p className="text-center text-white text-md">Refreshing </p>
            <p className="text-center text-white text-sm">30,000MMK</p>

            <div className="px-2 w-28 h-10 m-auto  rounded-full text-yellow-500 flex flex-row">
              <AiFillStar size={15} className="me-0.5 " />
              <p className="text-center text-xs text-yellow-500">600Points</p>
            </div>
          </div>
        </div>
        <Image
          src="/images/smoke.jfif"
          width={200}
          height={200}
          className="absolute bottom-0 right-0"
        />
      </div>
      {/*Disposable*/}
      <div className=" w-[1050px] h-[200px]  bg-black   border-[1px]  m-auto mt-10 rounded-lg relative ">
        <img
          src="/images/vv2.jpg"
          className="absolute bottom-0 z-10 w-[200px] h-[190px]"
        />

        <p className="text-white z-10 absolute top-20 left-40 text-xl mb-2">
          Disposable
        </p>

        <p className="text-white z-10 absolute top-28 left-40 mb-1">
          Find the best for
        </p>
        <p className="text-white z-10 absolute top-32 left-40">you here</p>

        <Image
          src="/images/smoke.jfif"
          width={300}
          height={200}
          className="absolute bottom-0 left-10"
        />
        <div className="flex flex-row justify-between ms-48 me-48 absolute left-32 top-6 ">
          {/* card1*/}
          <div className="me-1 ">
            <img
              src="/images/v2.jfif"
              className="rounded-lg mb-1 w-[100px] h-[100px] "
            />
            <div className="  absolute top-9 left-20 rounded-full border-[1px] bg-gray-300">
              <BsChevronCompactRight
                size={25}
                className=" text-center mx-auto p-1"
              />
            </div>
            <p className="text-center text-white text-md ">Refreshing </p>
            <p className="text-center text-white text-sm me-3">30,000MMK</p>

            <div className="px-2 w-28 h-10 m-auto  rounded-full text-yellow-500 flex flex-row">
              <AiFillStar size={15} className="me-0.5 " />
              <p className="text-center text-xs text-yellow-500">600Points</p>
            </div>
          </div>
          {/* card2*/}
          <div className="me-1">
            <img
              src="/images/v3.jfif"
              className="rounded-lg mb-1 w-[100px] h-[100px] "
            />

            <p className="text-center text-white text-md">Refreshing </p>
            <p className="text-center text-white text-sm">30,000MMK</p>

            <div className="px-2 w-28 h-10 m-auto  rounded-full text-yellow-500 flex flex-row">
              <AiFillStar size={15} className="me-0.5 " />
              <p className="text-center text-xs text-yellow-500">600Points</p>
            </div>
          </div>
          {/* card3*/}
          <div className="me-1">
            <img
              src="/images/v5.jfif"
              className="rounded-lg mb-1 w-[100px] h-[100px] "
            />

            <p className="text-center text-white text-md">Refreshing </p>
            <p className="text-center text-white text-sm">30,000MMK</p>

            <div className="px-2 w-28 h-10 m-auto  rounded-full text-yellow-500 flex flex-row">
              <AiFillStar size={15} className="me-0.5 text-center" />
              <p className="text-center text-xs text-yellow-500">600Points</p>
            </div>
          </div>
          {/* card4*/}
          <div className="me-1">
            <img
              src="/images/v9.jfif"
              className="rounded-lg mb-1 w-[100px] h-[100px] "
            />

            <p className="text-center text-white text-md">Refreshing </p>
            <p className="text-center text-white text-sm">30,000MMK</p>

            <div className="px-2 w-28 h-10 m-auto  rounded-full text-yellow-500 flex flex-row">
              <AiFillStar size={15} className="me-0.5 " />
              <p className="text-center text-xs text-yellow-500">600Points</p>
            </div>
          </div>
          {/* card5*/}
          <div className="me-1 z-10">
            <img
              src="/images/v3.jfif"
              className="rounded-lg mb-1 w-[100px] h-[100px] "
            />

            <p className="text-center text-white text-md">Refreshing </p>
            <p className="text-center text-white text-sm">30,000MMK</p>

            <div className="px-2 w-28 h-10 m-auto  rounded-full text-yellow-500 flex flex-row">
              <AiFillStar size={15} className="me-0.5 " />
              <p className="text-center text-xs text-yellow-500">600Points</p>
            </div>
          </div>
        </div>
        <Image
          src="/images/smoke.jfif"
          width={200}
          height={200}
          className="absolute bottom-0 right-0"
        />
      </div>

      {/*footer*/}
      <div className="max-w-[1050px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto  mt-5">
        <div className="mb-5 block   w-[262px]  mx-auto">
          <div className="flex flex-col items-center ">
            <div>
              <p className="text-lg mb-2 font-semibold">Customer Service</p>

              <div className="flex  mb-2 items-center ">
                <div>
                  <BsShieldLock size={15} />
                </div>

                <p className="px-2 ">Terms & Privacy Policy</p>
              </div>

              <div className="flex items-center  ">
                <div>
                  <GiAnticlockwiseRotation size={15} />
                </div>

                <p className="px-2">Return Policy</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5 block   w-[262px] mx-auto">
          <div className="flex flex-col items-center ">
            <div>
              <p className="text-lg mb-2  md:w-auto font-semibold">Language</p>
              <div onChange={handleChange}>
                <input type="radio" value="Unicode" name="gender" /> Myanmar
                (Unicode)
                <br />
                <input type="radio" value="Zawgyi" name="gender" /> Myanmar
                (Zawgyi)
                <br />
                <input
                  type="radio"
                  value="English"
                  name="gender"
                  defaultChecked
                />
                English
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5 block   w-[262px]   mx-auto">
          <div className="flex flex-col items-center ">
            <div>
              <p className=" text-lg mb-2 font-semibold">Contact Us</p>
              <div className="flex flex-row">
                <RiMapPinLine size={20} className="mt-1" />

                <div className="px-2 ">
                  <p>Main Road, </p>

                  <p>Thingyangyun Tsp,</p>
                  <p> Yangon.</p>
                </div>
              </div>

              <div className="flex flex-row">
                <HiOutlinePhone size={20} />
                <p className="px-2">09458489458</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5 block  w-[262px]  mx-auto">
          <div className="flex flex-col items-center ">
            <div>
              <p className="text-lg mb-2 font-semibold">Download Our App</p>
              <div className="relative w-40 h-40 md:w-30 md:h-36">
                <Image
                  src="/images/qr.png"
                  alt=""
                  fill
                  className="rounded-lg "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5 block   w-[262px]   mx-auto">
          <div className="flex flex-col items-center ">
            <div>
              <p className="text-lg">Payment</p>
              <div className="flex flex-row">
                <img
                  src="/images/kpay.png"
                  className="w-[45px] h-[35px] me-1"
                />
                <img src="/images/wave.png" className="w-[45px] h-[33px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5 block   w-[262px]   mx-auto">
          <div className="flex flex-col items-center ">
            <div>
              <p className="text-lg">Follow Us On</p>
              <div className="flex flex-row">
                <img src="/images/fb.png" className="w-[35px] h-[35px] me-2" />
                <img src="/images/ig.png" className="w-[35px] h-[35px] me-2" />
                <img
                  src="/images/viber.png"
                  className="w-[35px] h-[35px] me-2"
                />
                <img
                  src="/images/telegram.png"
                  className="w-[35px] h-[35px] me-2"
                />
                <img src="/images/twitter.png" className="w-[35px] h-[35px] " />
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mt-10 mb-10">
        &copy; Copyright 2023 C by D Co., Ltd. All rights reserved.
      </p>

      {/* testing*/}
    </>
  );
}

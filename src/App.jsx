import  { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import { FaLongArrowAltRight } from "react-icons/fa";
import {BsSearch} from "react-icons/bs"
import {LiaHeartbeatSolid} from 'react-icons/lia'
export default function App() {
  
  const [text, setText] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const toggleTab = () => {
      setIsOpen(!isOpen);
    };
const handleInputChange = (event) => {
  setText(event.target.value);
};
    return (
      <>
        <header className="py-8 lg:pt-6 lg:pb-14 bg-white">
          <div className="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y0">
            <div className="flex justify-center lg:justify-normal">
              <a href="#">
                <img src="../assets/img/header/logo.svg" />
              </a>
            </div>
            <div className="flex flex-col gapy4 lg:flex-row lg:gap-x-10 lg:gap-y-0">
              <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
                <FaMapMarker className="text-2xl text-accent" />
                <div className="text-secondary">123 Arling, Miolia, Ny</div>
              </div>
              <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
                <AiFillPhone className="text-2xl text-accent" />
                <div className="text-secondary">(+487) 384 9452</div>
              </div>
              <button className="btn btn-sm btn-outline w-[240px] lg:w-auto mx-auto lg:mx-0">
                Book Now
              </button>
              {/* Mobile Nav*/}
              <nav
                className="bg-white fixed w-[300px] top-0 h-screen left-0 shadow-2xl lg:hidden transition-all
                duration-300  z-20"
              >
                <div className="tab">
                  <div
                    className="tab-header bg-primary w-8 h-8 relative  top-0 flex justify-center items-center
              rounded-tr-lg rounded-b-lg cursor-pointer transition-all"
                  >
                    <button onClick={toggleTab} className="toggle-button">
                      {isOpen ? (
                        <FaLongArrowAltRight className="text-2xl text-white" />
                      ) : (
                        <FaLongArrowAltRight />
                      )}
                    </button>
                  </div>
                  {isOpen && (
                    <div className="tab-content px-12 flex flex-col gap-y-12 h-full">
                      <a href="#">
                        <img src="/assets/img/header/logo.svg" />
                      </a>
                      <ul className="flex flex-col gap-y-5">
                        <li>
                          <a
                            href="#"
                            className="text-secondary hover:text-accent transition-all duration-300"
                          >
                            Home
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-secondary hover:text-accent transition-all duration-300"
                          >
                            Doctors
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-secondary hover:text-accent transition-all duration-300"
                          >
                            Departments
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-secondary hover:text-accent transition-all duration-300"
                          >
                            Services
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-secondary hover:text-accent transition-all duration-300"
                          >
                            Blog
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-secondary hover:text-accent transition-all duration-300"
                          >
                            Contact
                          </a>
                        </li>
                      </ul>
                      <form className="relative flex gap-x-[10px]">
                        <label htmlFor="textInput">
                          <BsSearch className="text-2xl text-accent" />
                        </label>
                        <input
                          type="text"
                          id="textInput"
                          value={text}
                          placeholder="Search..."
                          onChange={handleInputChange}
                          className="outline-none w-[160px] border-b-2 focus:border-b-2 focus:border-accent placeholder:italic"
                        />
                      </form>
                    </div>
                  )}
                </div>
              </nav>
              {/* Desktop Nav*/}
              <nav
                className="absolute bg-white w-full left-0 -bottom-[86px] shadow-custom1 h-16
              rounded-[10px] hidden lg:flex lg:items-center lg:justify-between lg:px-[50px] "
              >
                <ul className="flex gap-x-4">
                  <li>
                    <a
                      href="#"
                      className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                    >
                      Doctors
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                    >
                      Departments
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" text-secondary hover:text-accent transition-all duration-300"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <form className="relative flex gap-x-[10px]">
                  <label
                    htmlFor="textInput"
                    className="flex justify-center items-center group:"
                  >
                    <BsSearch className="text-2xl text-accent" />
                  </label>
                  <input
                    type="text"
                    id="textInput"
                    value={text}
                    placeholder="Search..."
                    onChange={handleInputChange}
                    className="outline-none w-[100px] focus:w-[180px] focus:border-b-2 focus:border-accent placeholder:italic placeholder:text-base transition-all duration-150"
                  />
                </form>
              </nav>
            </div>
          </div>
        </header>
        {/* <!--Hero Section--> */}
        <section className="hero bg-gray-200 py-12 xl:pt-12 overflow-hidden xl:pb-0">
          <div className="container mx-auto h-full">
            <div className="flex flex-col xl:flex-row items-center justify-between h-full">
              <div className="hero_text xl:w-[48%] text-center xl:text-left">
                <div className="flex items-center bg-white py-[10px] px-[10px] w-max gap-x-2 mb-[26px] rounded-full mx-auto xl:mx-0">
                  <LiaHeartbeatSolid className="text-2xl text-accent" />
                  <div className="uppercase text-base font-medium text-[#9ab4b7] tracking-[2.24px]">
                    Live Your Life
                  </div>
                </div>
                <h1 className="h1 mb-6">We care about your health</h1>
                <p className=" mb-[43px] md:max-w-xl">
                  Vitae aliquant vestibular obit advising massa diam in
                  dignissim. Risus tellus libero elements aliquant Rectus
                  adapting est outer mi queue none non vivaria est.
                </p>
                <button className="btn btn-lg btn-accent mx-auto xl:mx-0">
                  Contact Us
                </button>
              </div>
              <div className="hero_img hidden xl:flex max-w-[700px] self-end">
                <img src="/assets/img/hero/img.png" />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats section">
          <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-y-6 justify-between">
              <div className="stats__item flex-1 xl:border-r flex flex-col items-center">
                <div className="text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2">
                  +5120
                </div>
                <div>Happy Patients</div>
              </div>
              <div className="stats__item flex-1 xl:border-r flex flex-col items-center">
                <div className="text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2">
                  +26
                </div>
                <div>Total Branches</div>
              </div>
              <div className="stats__item flex-1 xl:border-r flex flex-col items-center">
                <div className="text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2">
                  +53
                </div>
                <div>Senior Doctors</div>
              </div>
              <div className="stats__item flex-1  flex flex-col items-center">
                <div className="text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2">
                  +10
                </div>
                <div>Years Experience</div>
              </div>
              
            </div>
          </div>
        </section>

        <div className="h-[4000px]"></div>
      </>
    );
  }
  

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../lib/TailwindComponents";

export default function Home() {
  const [navActive, setNavActive] = useState(false);

  const toggleNavActive = () => {
    setNavActive(!navActive);
  };
  const deactivateNav = () => {
    setNavActive(false);
  };
  useEffect(() => {
    console.log(window.location.href);
  }, []);
  return (
    <div className=" relative">
      <div
        className="fixed inset-0 w-screen h-screen -z-10"
        style={{
          background: "url('/photo1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      ></div>
      <div className="backdrop-blur-md">
        <Container className=" min-h-screen flex justify-center py-[2rem]">
          <div className="min-w-[24rem] md:min-w-[30rem] drop-shadow-lg">
            <div
              className=" w-full aspect-[1/1.5]"
              style={{
                background: "url('/photo1.jpg')",
                backgroundSize: "180%",
                backgroundPosition: "top",
              }}
            ></div>
            <div className="flex flex-col bg-[#282828]">
              <div className=" px-3 py-8 flex flex-col gap-2 justify-between items-center text-white">
                <h3 className=" font-medium text-2xl">New Album Release</h3>
                <span className="small"> Lordina The Soprano</span>
              </div>

              <a
                href=""
                className=" bg-[#4b4b4b] btns-music border-b-[0.5px] border-white border-opacity-30 hover:bg-opacity-50"
              >
                <div className=" p-8 py-12 flex justify-between items-center">
                  {/* <img
                    src="/logos/main.png"
                    alt=""
                    className=" max-w-[100px]"
                  /> */}
                  <span className=" flex items-center justify-center w-full gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      fill="#ffffff"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,152v56a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v56H208V152a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,132.69V40a8,8,0,0,0-16,0v92.69L93.66,106.34a8,8,0,0,0-11.32,11.32Z"></path>
                    </svg>
                    <span className=" text-[0.8rem] text-white">
                      Download Event Brochure
                    </span>
                  </span>
                </div>
              </a>

              <a
                href="https://open.spotify.com/artist/3y9dp9aHQ2LBUbuepkiddU"
                className=" bg-[#4b4b4b] btns-music border-b-[0.5px] border-white border-opacity-30 hover:bg-opacity-50"
              >
                <div className=" p-8 py-12 flex justify-between items-center">
                  <img
                    src="/logos/spotify.png"
                    alt=""
                    className=" max-w-[100px]"
                  />
                  <span className=" flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      fill="#ffffff"
                      viewBox="0 0 256 256"
                    >
                      <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                    </svg>
                    <span className=" text-[0.8rem] text-white">play</span>
                  </span>
                </div>
              </a>

              <a
                href="https://music.apple.com/gh/artist/lordina-the-soprano/1541823690"
                className=" bg-[#4b4b4b] btns-music border-b-[0.5px] border-white border-opacity-30 hover:bg-opacity-50"
              >
                <div className=" p-8 py-12 flex justify-between items-center">
                  <img
                    src="/logos/apple-music.png"
                    alt=""
                    className=" max-w-[100px]"
                  />
                  <span className=" flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      fill="#ffffff"
                      viewBox="0 0 256 256"
                    >
                      <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                    </svg>
                    <span className=" text-[0.8rem] text-white">play</span>
                  </span>
                </div>
              </a>

              <a
                href="https://www.deezer.com/en/artist/114671392"
                className=" bg-[#4b4b4b] btns-music border-b-[0.5px] border-white border-opacity-30 hover:bg-opacity-50"
              >
                <div className=" p-8 py-12 flex justify-between items-center">
                  <img
                    src="/logos/deezer.png"
                    alt=""
                    className=" max-w-[100px]"
                  />
                  <span className=" flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      fill="#ffffff"
                      viewBox="0 0 256 256"
                    >
                      <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                    </svg>
                    <span className=" text-[0.8rem] text-white">play</span>
                  </span>
                </div>
              </a>

              <a
                href="https://www.youtube.com/channel/UCYgGF8phVzaNGJtR79By8vQ"
                className=" bg-[#4b4b4b] btns-music border-b-[0.5px] border-white border-opacity-30 hover:bg-opacity-50"
              >
                <div className=" p-8 py-12 flex justify-between items-center">
                  <img
                    src="/logos/youtube.png"
                    alt=""
                    className=" max-w-[100px]"
                  />
                  <span className=" flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      fill="#ffffff"
                      viewBox="0 0 256 256"
                    >
                      <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                    </svg>
                    <span className=" text-[0.8rem] text-white">play</span>
                  </span>
                </div>
              </a>

              <a
                href="https://music.amazon.com/artists/B08P67XZ2Y/lordina-the-soprano?tag=ton08-20"
                className=" bg-[#4b4b4b] btns-music border-b-[0.5px] border-white border-opacity-30 hover:bg-opacity-50"
              >
                <div className=" p-8 py-12 flex justify-between items-center">
                  <img
                    src="/logos/amazon.png"
                    alt=""
                    className=" max-w-[100px]"
                  />
                  <span className=" flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      fill="#ffffff"
                      viewBox="0 0 256 256"
                    >
                      <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path>
                    </svg>
                    <span className=" text-[0.8rem] text-white">buy</span>
                  </span>
                </div>
              </a>

              <a
                href="https://www.boomplay.com/artists/18461625?from=search"
                className=" bg-[#4b4b4b] btns-music border-b-[0.5px] border-white border-opacity-30 hover:bg-opacity-50"
              >
                <div className=" p-8 py-12 flex justify-between items-center">
                  <img
                    src="/logos/boomplay.png"
                    alt=""
                    className=" max-w-[100px]"
                  />
                  <span className=" flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      fill="#ffffff"
                      viewBox="0 0 256 256"
                    >
                      <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                    </svg>
                    <span className=" text-[0.8rem] text-white">play</span>
                  </span>
                </div>
              </a>

              <a
                href="https://www.tiktok.com/@lordinathesoprano"
                className=" bg-[#4b4b4b] btns-music border-b-[0.5px] border-white border-opacity-30 hover:bg-opacity-50"
              >
                <div className=" p-8 py-12 flex justify-between items-center">
                  <img
                    src="/logos/tiktok.png"
                    alt=""
                    className=" max-w-[100px]"
                  />
                  <span className=" flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      fill="#ffffff"
                      viewBox="0 0 256 256"
                    >
                      <path d="M224,152v56a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v56H208V152a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,132.69V40a8,8,0,0,0-16,0v92.69L93.66,106.34a8,8,0,0,0-11.32,11.32Z"></path>
                    </svg>
                    <span className=" text-[0.8rem] text-white">
                      use <br /> sound
                    </span>
                  </span>
                </div>
              </a>

              <a
                href="https://www.tiktok.com/@lordinathesoprano"
                className=" bg-[#4b4b4b] btns-music border-b-[0.5px] border-white border-opacity-30 hover:bg-opacity-50"
              >
                <div className=" p-8 py-12 flex justify-between items-center">
                  <img
                    src="/logos/audiomack.png"
                    alt=""
                    className=" max-w-[100px]"
                  />
                  <span className=" flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      fill="#ffffff"
                      viewBox="0 0 256 256"
                    >
                      <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
                    </svg>
                    <span className=" text-[0.8rem] text-white">play</span>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

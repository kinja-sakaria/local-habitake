/* eslint-disable @next/next/no-img-element */
"use client";
import { SendIcon } from "@/components/assets";
import Text from "@/components/elements/Text";
import { chats } from "@/data/chats";
import {
  faPaperclip,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ChatApp() {
  const [selectedChat, setSelectedChat] = useState(chats[0]);
  const [showChat, setShowChat] = useState(false);

  return (
    <section className="container mx-auto lg:max-w-screen-xl lg:pb-[120px] tablet:pb-[60px] mobile:pb-[30px]">
      <div
        className="flex h-full min-h-screen w-full flex-col md:flex-row rounded-[23.84px]"
        style={{
          boxShadow: "0px 1.32px 9.27px 0px rgba(0, 0, 0, 0.11)",
        }}
      >
        {/* Sidebar */}
        <div
          className={`w-full md:w-1/3 lg:w-1/3 border-r border-[#E6E6E6]  overflow-y-auto md:block ${
            showChat ? "hidden" : "block"
          }`}
        >
          <div className="p-7">
            <h2 className="text-[28px] font-semibold mb-7 md:leading-extra-tight text-[#1E1E1E]">
              Chats
            </h2>
            <div className="flex items-center w-full max-w-md px-4 py-3.5 border border-lightGray rounded-[30px] bg-white">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-gray-600 w-4 h-4 mr-2"
              />
              <input
                type="text"
                placeholder="Search"
                className="w-full outline-none text-base placeholder:text-primaryBlack"
              />
            </div>
          </div>
          <ul className="overflow-y-auto max-h-[calc(100vh-200px)] pr-1 scrollbar-hide">
            {chats.map((chat, idx) => (
              <>
                <li
                  key={idx}
                  onClick={() => {
                    setSelectedChat(chat);
                    setShowChat(true);
                  }}
                  className={`flex items-center justify-between px-7 py-4 cursor-pointer mb-2 hover:bg-[#E6E6EA] ${
                    selectedChat.name === chat.name ? "bg-[#E6E6EA]" : ""
                  }`}
                >
                  <div className="flex items-center md:gap-4 mobile:gap-3 ">
                    <div className="md:w-[52px] md:h-[52px] mobile:w-11 mobile:h-11">
                      <img
                        src={chat.image}
                        alt={chat.name}
                        className="rounded-full w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col md:gap-y-2 mobile:gap-y-1">
                      <span className="font-semibold md:text-lg mobile:text-base text-primaryBlack leading-extra-tight">
                        {chat.name}
                      </span>
                      <span className="text-[#8A8A8A] md:text-base mobile:text-sm font-normal truncate">
                        {chat.message}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] text-primaryBlack font-normal self-baseline">
                    {chat.time}
                  </span>
                </li>
              </>
            ))}
          </ul>
          <div className="flex justify-end px-7 mb-7">
            <button className="w-12 h-12 text-white bg-green rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faPlus} className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chat Area */}
        <div
          className={`relative flex flex-col flex-1 md:block ${
            showChat ? "block" : "hidden md:block"
          }`}
        >
          {/* Header for mobile */}
          <div className="border-b-2 border-l mobile:border-l-0 border-[#E6E6E6] py-4 px-7 flex items-center gap-4">
            <button
              className="md:hidden text-lg text-primaryBlack "
              onClick={() => setShowChat(false)}
            >
              ←
            </button>
            <div className="w-[52px] h-[52px]">
              <img
                src={selectedChat.image}
                alt={selectedChat.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <Text size="xl" weight="bold" className="text-black">
              {selectedChat.name}
            </Text>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto p-7">
            <div className="flex justify-end">
              <div className="bg-[#CEFFED] text-base p-2.5 rounded-[13px] max-w-xs text-secondaryGreen font-normal md:leading-[26px]">
                Hi dude, How are you?
                <div className="text-right text-xs text-secondaryGreen leading-extra-tight">
                  1:28 PM
                </div>
              </div>
            </div>
            <div className="flex justify-start gap-2.5">
              <div className="w-10 h-10 mobile:w-11 mobile:h-11 shrink-0">
                <img
                  src={selectedChat.image}
                  alt={selectedChat.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="bg-[#E6E6EA] text-base p-2.5 rounded-[14px] max-w-xs text-[#00243F] font-normal md:leading-[26px]">
                Thanks too. I’m also good. Both is going good also.
                <div className="text-right text-xs text-[#00243F] leading-extra-tight">
                  1:29 PM
                </div>
              </div>
            </div>
          </div>

          {/* Fixed bottom input */}
          <div className="absolute bottom-0 left-0 w-full py-5 px-7  border-t border-[#E6E6E6] ">
            <div className="flex items-center gap-2.5">
              <FontAwesomeIcon
                icon={faPaperclip}
                className="text-darkGray w-6 h-6 font-normal"
              />
              <input
                type="text"
                placeholder="Write something..."
                className="flex-1 focus:outline-none placeholder:text-darkGray text-xl font-normal"
              />
              <button className="bg-primaryBlue text-white p-2 rounded-full w-[52px] h-[52px] mobile:w-9 mobile:h-9 flex justify-center items-center cursor-pointer hover:bg-[#40409d]">
                <SendIcon className="w-6 h-6" />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

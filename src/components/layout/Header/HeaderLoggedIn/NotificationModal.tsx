/* eslint-disable @next/next/no-img-element */
"use client";
import { RefObject, useEffect } from "react";

// Compoments of the elements folder
import Text from "@/components/elements/Text";

// Data
import { allNotifications } from "@/data/notifications";
import { groupNotificationsByDate } from "@/utils/groupNotifications";

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalRef: RefObject<HTMLDivElement>;
}

const NotificationModal: React.FC<NotificationModalProps> = ({
  isOpen,
  onClose,
  modalRef,
}) => {
  const groupedNotifications = groupNotificationsByDate(allNotifications);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>     
      <div
        ref={modalRef}
        className={`fixed top-[82px] right-0 h-screen lg:w-[444px] md:w-[320px] mobile:w-full bg-white  z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          boxShadow: "-2px 5px 6px 0px rgba(0, 0, 0, 0.12)",
        }}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <h2 className="text-[20px] font-semibold leading-extra-tight text-[#333333]">
            Notifications
          </h2>
          <button
            className="text-[#B0B0B0] hover:text-primaryBlack w-6 h-6"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <div className="p-6 overflow-y-auto h-[calc(100%-130px)]">          
          <>
            {Object.entries(groupedNotifications).map(([section, items]) =>
              items.length > 0 ? (
                <div key={section} className="pb-4">
                  <Text
                    size="lg"
                    weight="bold"
                    className="leading-extra-tight text-[#252B5C] pb-4"
                  >
                    {section}
                  </Text>
                  {items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-primaryGrayDark rounded-[25px] p-2.5 flex items-center justify-between shadow-sm mb-2.5 hover:bg-[#C0BAD1]"
                    >
                      {/* Left section: Avatar + Text */}
                      <div className="flex items-center gap-3.5 flex-1 min-w-0">
                        <div className="min-w-[50px] w-[50px] h-[50px] shrink-0">
                          <img
                            src={item.avatar || item.icon}
                            alt={item.name}
                            className="w-full h-full rounded-[25px] border-[3px] border-white object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          {item.name && (
                            <Text
                              size="normal"
                              weight="bold"
                              className="text-[#333A54] leading-extra-tight pb-1.5 truncate"
                            >
                              {item.name}
                            </Text>
                          )}
                          <div className="pb-1.5">
                            <Text
                              size="small"
                              weight="normal"
                              className="text-primaryGray leading-extra-tight"
                            >
                              {item.message}{" "}
                            </Text>
                            {item.action && (
                              <span className="font-medium text-sm leading-extra-tight">
                                {item.action}
                              </span>
                            )}
                          </div>

                          <p className="text-[10px] font-normal text-darkGray leading-extra-tight">
                            {item.time}
                          </p>
                        </div>
                      </div>

                      {/* Right section: Thumbnail */}
                      {item.thumbnail && (
                        <div className="w-[60px] h-[50px] shrink-0 ml-4">
                          <img
                            src={item.thumbnail}
                            alt="thumbnail"
                            className="w-full h-full object-cover rounded-[10px] border-[3px] border-white"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : null
            )}
          </>
        </div>
      </div>
    </>
  );
};

export default NotificationModal;

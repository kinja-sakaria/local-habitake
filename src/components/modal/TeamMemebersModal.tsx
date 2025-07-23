import React from "react";
import Text from "../elements/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface TeamMembersModalProps {
  isOpen: boolean;
  editMode: boolean;
  onClose: () => void;
  backToProfile: () => void;
}

const TeamMembersModal: React.FC<TeamMembersModalProps> = ({
  isOpen,
  editMode,
  onClose,
  backToProfile,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl  lg:w-[576px] mobile:w-full md:max-h-[calc(100vh-40px)] mobile:max-h-[calc(100vh-120px)] overflow-y-auto">
        <div
          className="flex items-center justify-between px-6 py-3"
          style={{
            boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 className="text-base font-semibold leading-extra-tight text-primaryBlack">
            {editMode ? "Edit Profile" : "My Profile"}
          </h2>
          <button
            className="text-primaryBlack w-5 h-5 font-semibold"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <div className="border border-lightGray my-10 mx-6 py-4 px-6 rounded-xl">
          <div className="flex items-center pb-6" onClick={backToProfile}>
            <FontAwesomeIcon icon={faArrowLeft} className="w-5 h-5" />
            <Text
              size="xl"
              weight="extrabold"
              className="text-primaryBlack pl-4 leading-extra-tight"
            >
              Team Memebers
            </Text>
          </div>

          <div className="grid grid-cols-3 gap-2.5 bg-lightGray rounded-t-xl px-4 py-1.5 text-primaryBlack font-medium text-sm">
            <div>Sr. No.</div>
            <div>Name</div>
            <div>Role</div>
          </div>

          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
            (item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 items-center gap-2.5 ${editMode ? "py-1" : "px-4 py-3"}`}
              >
                <div
                  className={`text-primaryBlack text-sm font-normal leading-extra-tight ${editMode ? "pl-5" : "pl-0"}`}
                >
                  {item}
                </div>
                {editMode ? (
                  <input
                    type="text"
                    className="border border-lightGray rounded-md px-2 py-1 text-primaryBlack text-base"
                    placeholder="Enter Name"
                    defaultValue="John Deo"
                  />
                ) : (
                  <div className="text-primaryBlack text-base">John Deo</div>
                )}
                {editMode ? (
                  <input
                    type="text"
                    className="border border-lightGray rounded-md px-2 py-1 text-primaryBlack text-base"
                    placeholder="Enter Role"
                    defaultValue="ABC"
                  />
                ) : (
                  <div className="text-primaryBlack text-base">ABC</div>
                )}
              </div>
            )
          )}
         
        </div>
         {editMode && (
          <div className="pb-10 px-6">

            <button className="w-full py-2 bg-green text-white rounded-full hover:bg-green/90 transition ">
              Update
            </button>
          </div>
          )}
      </div>
    </div>
  );
};

export default TeamMembersModal;

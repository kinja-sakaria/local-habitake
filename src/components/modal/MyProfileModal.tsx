/* eslint-disable @next/next/no-img-element */
import React, {  useState } from "react";

// Compoments of the elements folder
import Text from "../elements/Text";
import Button from "../elements/Button";
import TextField from "../elements/TextField";

// Assets
import { DeleteIcon, EyeIcon, EyeIconInvisible } from "../assets";

interface MyProfileModalProps {
  role: string;
  isOpen: boolean;
  editMode: boolean;
  onClose: () => void;
  onViewAll: () => void;
  handleEditmode: () => void;
}

const MyProfileModal: React.FC<MyProfileModalProps> = ({
  role,
  isOpen,
  editMode,
  onClose,
  onViewAll,
  handleEditmode,
}) => {
  const [showPassword, setshowPassword] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string>(
    "/assets/images/avatar2.jpg"
  );
  const [idProofPreview, setIdProofPreview] = useState<string>(
    "/assets/images/aadhar.png"
  );

  const togglePasswordVisibility = () => {
    setshowPassword(!showPassword);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  const handleIdProofChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIdProofPreview(URL.createObjectURL(file));
    }
  };

  const handleDeleteIdProof = () => {
    setIdProofPreview("");
  };
  

  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm select-none h-full min-h-screen"
>
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
        <div className="py-10 px-6">
          {/* Avatar */}
          <div className="flex items-center justify-between md:gap-5 mobile:gap-2.5 rounded-[20px] border border-lightGray py-4 px-6 mb-4">
            <img
              src={previewImage}
              alt="profile"
              className="rounded-full md:w-[80px] md:h-[80px] mobile:w-[50px] mobile:h-[50px] object-cover"
            />

            <div className="flex-1 flex items-center justify-between gap-4 ">
              <div className="border-2 border-[#C0BAD1] rounded-xl flex items-center h-10 md:w-full mobile:w-full">
                <label
                  className={`flex items-center gap-2 border-r border-[#D2D2D2] py-2.5 md:px-4 mobile:px-1 ${
                    editMode
                      ? "cursor-pointer"
                      : "cursor-not-allowed opacity-50"
                  }`}
                >
                  <input
                    type="file"
                    className="hidden"
                    disabled={!editMode}
                    onChange={handleFileChange}
                    accept="image/png, image/jpeg, image/jpg, image/webp"
                  />
                  <span className="text-sm  text-[#323232] font-medium md:leading-extra-tight">
                    Choose File
                  </span>
                </label>
                <span
                  className={`text-sm font-medium md:leading-extra-tight select-none  py-2.5 md:px-4 mobile:px-1 ${editMode ? "text-[#323232]" : "text-[#323232]/40"}`}
                >
                  No file chosen
                </span>
              </div>
              <div className="border border-lightGray p-2.5 rounded-lg md:h-10 ">
                <DeleteIcon
                  className={`${editMode ? "fill-[#333A54]" : "fill-[#ADB0BB]"}`}
                />
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="border border-lightGray rounded-xl py-4 px-6 mb-4">
            <Text
              size="xl"
              weight="bold"
              className="text-primaryBlack leading-extra-tight pb-6"
            >
              Profile
            </Text>

            <div className="space-y-5">
              <div
                className={`grid grid-cols-2 gap-2  items-center ${editMode ? "gap-y-2" : ""}`}
              >
                <span
                  className={`${editMode ? "font-medium" : "font-normal"}  text-base leading-extra-tight text-primaryBlack`}
                >
                  Full Name
                </span>
                {editMode ? (
                  <TextField placeholder="Enter Name" />
                ) : (
                  <span className="text-primaryBlack font-medium text-base leading-extra-tight">
                    John Deo
                  </span>
                )}
              </div>

              <div
                className={`grid grid-cols-2 gap-2  items-center ${editMode ? "gap-y-2" : ""}`}
              >
                <span
                  className={`${editMode ? "font-medium" : "font-normal"}  text-base leading-extra-tight text-primaryBlack`}
                >
                  Email ID
                </span>
                {editMode ? (
                  <TextField value="demo123@gmail.com" disabled />
                ) : (
                  <span className="text-primaryBlack font-medium text-base leading-extra-tight">
                    johndeo@gmail.com
                  </span>
                )}
              </div>

              <div
                className={`grid grid-cols-2 gap-2  items-center ${editMode ? "gap-y-2" : ""}`}
              >
                <span
                  className={`${editMode ? "font-medium" : "font-normal"}  text-base leading-extra-tight text-primaryBlack`}
                >
                  Password
                </span>
                {editMode ? (
                  <div className="relative">
                    <TextField
                      disabled
                      value="123456"
                      placeholder="Password"
                      type={showPassword ? "text" : "password"}
                      rightIcon={
                        showPassword ? (
                          <EyeIcon onClick={togglePasswordVisibility} />
                        ) : (
                          <EyeIconInvisible
                            onClick={togglePasswordVisibility}
                          />
                        )
                      }
                    />
                  </div>
                ) : (
                  <span className="text-primaryBlack font-medium text-base leading-extra-tight">
                    ••••••••
                  </span>
                )}
              </div>
            </div>
          </div>
          {role !== "buyer" && (
            <>
              {/* ID Proof */}
              <div className="border border-lightGray rounded-xl py-4 px-6 ">
                <Text
                  size="xl"
                  weight="bold"
                  className="text-primaryBlack leading-extra-tight pb-6"
                >
                  {role === "agency" ? "Agency Logo" : "ID Proof"}
                </Text>
                <div className="relative">
                  {idProofPreview ? (
                    <div className="w-full h-[242px]">
                      <img
                        src={idProofPreview}
                        alt="id-proof"
                        className="rounded-[18px] w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-[242px] border  flex items-center justify-center rounded-[18px]">
                      <label className="cursor-pointer text-primary text-sm">
                        <input
                          type="file"
                          className="hidden"
                          onChange={handleIdProofChange}
                          accept="image/png, image/jpeg, image/jpg, image/webp"
                        />
                        {role === "agency" ? "Upload Agency Logo" : "Upload ID Proof"}
                      </label>
                    </div>
                  )}

                  {editMode && idProofPreview && (
                    <button
                      onClick={handleDeleteIdProof}
                      className="absolute inset-0 flex items-center justify-center rounded-[18px] backdrop-blur-[6px] bg-[#000929]/40"
                    >
                      <div className="bg-white border border-lightGray p-[9px] rounded-lg">
                        <DeleteIcon className="fill-[#333A54]" />
                      </div>
                    </button>
                  )}
                </div>
              </div>
              {role === "agency" && (
                <div className="border border-lightGray rounded-xl py-4 px-6 mt-4">
                  <div className="flex justify-between items-end">
                    <Text
                      size="xl"
                      weight="bold"
                      className="text-primaryBlack leading-extra-tight self-baseline"
                    >
                      Team Members
                    </Text>
                    <Button
                      color="primary"
                      rounded="full"
                      className="!h-[27px] max-w-[75px] cursor-pointer py-1.5 px-[14px] !text-xs !font-semibold !leading-extra-tight"
                      variant="contained"
                      onClick={onViewAll}
                    >
                      View all
                    </Button>
                  </div>

                  <div className="mt-6">
                    <div className="grid grid-cols-3 gap-2.5 bg-lightGray rounded-t-xl px-4 py-3 text-primaryBlack font-medium text-sm leading-extra-tight">
                      <div>Sr. No.</div>
                      <div>Name</div>
                      <div>Role</div>
                    </div>

                    {[1, 2, 3, 4].map((item, index) => (
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
                          <div className="text-primaryBlack text-base">
                            John Deo
                          </div>
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
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
          <button
            // onClick={() => setEditMode(!editMode)}
            onClick={handleEditmode}
            className="w-full py-2 bg-green text-white rounded-full hover:bg-green/90 transition mt-10"
          >
            {editMode ? "Update" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfileModal;

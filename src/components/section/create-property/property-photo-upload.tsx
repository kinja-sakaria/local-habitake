/* eslint-disable @next/next/no-img-element */
"use client";
import { UploadPhoto } from "@/components/assets";
import Heading from "@/components/elements/Heading";
import Text from "@/components/elements/Text";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

interface UploadedImage {
  file: File;
  label: string;
  url: string;
}

export default function PropertyPhotoUploader() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [error, setError] = useState<string | null>(null);

  const [photos, setPhotos] = useState<UploadedImage[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const validFiles: UploadedImage[] = [];
    let hasError = false;

    Array.from(files).forEach((file) => {
      if (file.size > 8 * 1024 * 1024) {
        hasError = true;
        return;
      }

      validFiles.push({
        file,
        label: "",
        url: URL.createObjectURL(file),
      });
    });

    if (hasError) {
      toast.error("Some images were not uploaded because they exceed 8MB.");
    } else {
      setError(null);
    }

    setPhotos((prev) => [...prev, ...validFiles]);
  };

  const handleRemove = (index: number) => {
    const newPhotos = [...photos];
    newPhotos.splice(index, 1);
    setPhotos(newPhotos);
  };

  const handleLabelChange = (index: number, label: string) => {
    const updated = [...photos];
    updated[index].label = label;
    setPhotos(updated);
  };

  return (
    <div className="pt-10 mobile:pt-5">
      <div
        className="bg-white rounded-2xl p-10 mobile:p-5"
        style={{ boxShadow: "0px 0px 20px 0px rgba(12, 37, 65, 0.1)" }}
      >
        <Heading
          variant="h6"
          weight="bold"
          className="text-primaryBlack mb-8 mobile:mb-4"
        >
          Add Property Photos{" "}
          <span className="text-green">
            ({photos.length.toString().padStart(2, "0")})
          </span>
        </Heading>
        <Text size="normal" weight="normal" className="mb-4 text-[#333A54]">
          The maximum photo size is 8 MB. Formats: jpeg, jpg, png. Put the main
          picture first.
        </Text>

        {/* Scrollable Photo Grid */}
        <div className="max-h-[400px] overflow-y-auto  scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 border border-[#E0E5EB] rounded-xl p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="relative border rounded-lg overflow-hidden shadow-sm group"
              >
                <img
                  src={photo.url}
                  alt={`upload-${index}`}
                  className="w-full h-[180px] object-cover"
                />
                 {/* DELETE ICON ON HOVER */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#111827] bg-opacity-40 opacity-0 group-hover:opacity-100 transition">
                  <button
                    className="bg-white rounded-sm w-8 h-8 flex items-center justify-center"
                    onClick={() => handleRemove(index)}
                  >
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className="w-5 h-5 text-[#333A54]"
                    />
                  </button>
                </div>
                 {/* LABEL INPUT - always visible */}
                <input
                  type="text"
                  placeholder="Enter label"
                  value={photo.label}
                  onChange={(e) => handleLabelChange(index, e.target.value)}
                  className="absolute top-2 left-2 bg-white text-xs font-medium px-2 py-1 rounded-md focus:outline-none placeholder:text-darkGray text-[#333A54] h-5 w-[82px] md:leading-extra-tight"
                />
              </div>
            ))}
            {error && (
              <p className="text-red-600 text-sm font-medium mb-3">{error}</p>
            )}

            {/* Upload Button */}
            <div
              onClick={() => fileInputRef.current?.click()}
              className="flex flex-col items-center justify-center border border-dashed border-disableGray rounded-lg cursor-pointer hover:border-green-500 transition h-[180px] bg-lightGray"
            >
              <UploadPhoto />
              <Text
                size="normal"
                weight="medium"
                className="text-primaryGray mt-2"
              >
                Upload photos
              </Text>
              <input
                type="file"
                ref={fileInputRef}
                accept="image/png, image/jpeg, image/jpg"
                multiple
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

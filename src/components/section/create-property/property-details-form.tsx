"use client";
import React, { useState } from "react";
import Heading from "@/components/elements/Heading";
import TextField from "@/components/elements/TextField";
import { BedRoomIcon, RentalIcon, ShowerIcon } from "@/components/assets";
import Text from "@/components/elements/Text";
import { CheckboxGroupProps, FilterGroupProps } from "@/data/add-property";

const FilterGroup: React.FC<FilterGroupProps> = ({
  label,
  options,
  selected,
  setSelected,
  icon,
}) => (
  <div className="mb-6 flex justify-between mobile:flex-col mobile:gap-y-3 mobile:mb-3">
    <Text
      size="normal"
      weight="medium"
      className="text-primaryBlack md:leading-extra-tight"
    >
      {label} *
    </Text>
    <div className="flex flex-wrap gap-2">
      {options.map((item) => (
        <button
          key={item.value}
          className={`border rounded-full px-5 py-3 text-sm font-medium flex items-center gap-1.5 ${
            selected === item.value
              ? "border-green text-green-600  bg-[#D7EFE6] text-green"
              : "border-lightGray text-primaryGray hover:bg-[#D7EFE6] hover:border-green hover:text-green"
          }`}
          onClick={() => setSelected(item.value)}
        >
          {icon && item.value !== "Any" && (
            <span className="text-lg">{icon}</span>
          )}
          {item.label}
        </button>
      ))}
    </div>
  </div>
);

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  title,
  items,
  selectedItems,
  toggleItem,
}) => (
  <div className="mb-6">
    <Text size="large" weight="medium" className="text-primaryBlack mb-4">
      {title}
    </Text>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-4">
      {items.map((item: string) => (
        <label key={item} className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={selectedItems.includes(item)}
            onChange={() => toggleItem(item)}
            className="accent-green w-4 h-4"
          />
          <span
            className={`${selectedItems.includes(item) ? "text-primaryBlack" : "text-primaryGray"} text-base font-normal md:leading-extra-tight`}
          >
            {item}
          </span>
        </label>
      ))}
    </div>
  </div>
);

export default function PropertyDetailsForm() {
  const [bedroom, setBedroom] = useState("Any");
  const [bathroom, setBathroom] = useState("Any");
  const [parking, setParking] = useState("Any");
  const [amenities, setAmenities] = useState<string[]>([]);

  const amenityList = [
    "TV set",
    "Air conditioning",
    "Drying machine",
    "Fireplace",
    "Security cameras",
    "Washing machine",
    "Separate workplace",
    "Closet",
    "Shower cabin",
    "Balcony",
    "Kitchen",
    "Refrigerator",
    "Patio",
    "Whirlpool",
    "Bar",
  ];

  const toggleAmenity = (item: string) => {
    setAmenities((prev) =>
      prev.includes(item) ? prev.filter((a) => a !== item) : [...prev, item]
    );
  };

  return (
    <div className="pt-10 mobile:pt-5">
      <div
        className=" bg-white rounded-2xl p-10 mobile:p-5"
        style={{ boxShadow: "0px 0px 20px 0px rgba(12, 37, 65, 0.1)" }}
      >
        <Heading
          variant="h6"
          weight="bold"
          className="text-primaryBlack mb-8 mobile:mb-4"
        >
          Property Details
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mobile:gap-4">
          <div>
            <TextField
              label="Property Name"
              requiredMark
              placeholder="Enter here"
            />
          </div>
          <div>
            <TextField
              label="Total Area "
              requiredMark
              placeholder="Enter here"
            />
          </div>
          <div>
            <TextField label="Property size" placeholder="Enter here" />
          </div>
          <div>
            <TextField label="Floor Number" placeholder="Enter here" />
          </div>
        </div>
        <div className="mt-8 mobile:mt-4">
          <FilterGroup
            label="Bedrooms"
            options={[
              { label: "Any", value: "Any" },
              { label: "1", value: "1" },
              { label: "2", value: "2" },
              { label: "3", value: "3" },
              { label: "4", value: "4" },
              { label: "5", value: "5" },
            ]}
            selected={bedroom}
            setSelected={setBedroom}
            icon={<BedRoomIcon className="hover:text-green w-4 h-4" />}
          />

          <FilterGroup
            label="Bathrooms"
            options={[
              { label: "Any", value: "Any" },
              { label: "1", value: "1" },
              { label: "2", value: "2" },
              { label: "3", value: "3" },
              { label: "4", value: "4" },
              { label: "5", value: "5" },
            ]}
            selected={bathroom}
            setSelected={setBathroom}
            icon={<ShowerIcon className="hover:text-green w-4 h-4" />}
          />

          <FilterGroup
            label="Parking spots"
            options={[
              { label: "Any", value: "Any" },
              { label: "1", value: "1" },
              { label: "2", value: "2" },
              { label: "3", value: "3" },
              { label: "4", value: "4" },
              { label: "5", value: "5" },
            ]}
            selected={parking}
            setSelected={setParking}
            icon={<RentalIcon className="fill-none w-4 h-4" />}
          />
        </div>
        <div>
          <CheckboxGroup
            title="Amenities"
            items={amenityList}
            selectedItems={amenities}
            toggleItem={toggleAmenity}
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="description"
            className="block text-base font-medium text-primaryBlack mb-2"
          >
            Description <span className="text-primaryBlack">*</span>
          </label>
          <Text
            size="normal"
            weight="normal"
            className="text-primaryGray mb-2 md:leading-extra-tight"
          >
            Here you can let your imagination run wild and describe the property
            in the best possible way!
          </Text>
          <textarea
            id="description"
            name="description"
            rows={6}
            placeholder="Describe your property"
            className="w-full py-[14px] px-[18px] border rounded-lg border-lightGray bg-white text-base text-primaryBlack font-medium leading-extra-tight focus:outline-none focus:ring-0 placeholder:text-textDarkGray placeholder:font-normal placeholder:leading-extra-tight resize-none"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

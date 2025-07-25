"use client";

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

// Components of the elements folder
import Text from "@/components/elements/Text";
import Button from "@/components/elements/Button";
import TextField from "@/components/elements/TextField";
import { useRouter } from "next/navigation";
import { paths } from "@/routes/paths";

const containerStyle = {
  width: "100%",
  height: "310px",
  overflow: "hidden",
};

const center = {
  lat: 43.774697,
  lng: 11.255814,
};

export default function SelectLocationView() {
  const router = useRouter();

  const getCountyFromCoords = async (lat: number, lng: number) => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
    );
    const data = await response.json();
    // console.log("data" , data)

    if (data.status === "OK") {
      const result = data.results[0];
      const components = result.address_components;

      const countyComponent = components.find(
        (component: { types: string | string[] }) =>
          component.types.includes("administrative_area_level_2")
      );

      return countyComponent ? countyComponent.long_name : "County not found";
    } else {
      throw new Error("Geocoding failed");
    }
  };

  const handleSelectOnMap = async () => {
    if (!navigator.geolocation || !navigator.permissions) {
      alert("Geolocation is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        // console.log('Lat/Lng:', latitude, longitude);

        try {
          const county = await getCountyFromCoords(latitude, longitude);
          console.log("County name:", county);
          // You can set this to a state like setCountyName(county)
        } catch (error) {
          console.error("Error getting county:", error);
        }
      },
      (error) => {
        console.warn("Geolocation error:", error);
      }
    );
  };

  return (
    <>
      <p className="font-normal text-lg mobile:text-base leading-[100%] text-primaryLight mobile:leading-6">
        Select your location to find relevant properties near you.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push(paths.onboardingScreen.propertyType);
        }}
      >
        <div className="pt-6">
          <TextField
            label=""
            type="text"
            placeholder="Location detail"
            className="!h-[60px] !bg-primaryGrayDark !rounded-[10px] !border-none"
            LeftIcon={
              <FontAwesomeIcon
                icon={faLocationDot}
                className="w-5 h-5 text-primaryBlue"
              />
            }
            value="1012 Ocean avanue, New yourk, USA"
          />
        </div>

        <div className="pt-[18px] relative">
          <div className="rounded-[24px] overflow-hidden">
            <LoadScript
              googleMapsApiKey={
                process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""
              }
            >
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
                options={{ disableDefaultUI: false }}
              />
              <Marker position={center} />
            </LoadScript>
          </div>
          <div
            onClick={handleSelectOnMap}
            className="cursor-pointer text-center text-[#252B5C] h-[50px] w-full text-base font-normal leading-extra-tight absolute bottom-[-2px] flex items-center justify-center p-[15px] rounded-tl-[14px] rounded-tr-[14px] rounded-bl-3xl rounded-br-3xl"
            style={{
              backdropFilter: "blur(20px)",
              background: "rgba(255, 255, 255, 0.5)",
            }}
          >
            select on map
          </div>
        </div>
        <div className="pt-[70px]">
          <Text size="normal" weight="medium" textAlign="center">
            <a
              href={paths.onboardingScreen.propertyType}
              className="text-primaryBlack leading-extra-tight cursor-pointer"
            >
              Skip
            </a>
          </Text>
        </div>

        <div className="pt-7">
          <Button
            color="primary"
            rounded="full"
            variant="contained"
            size="large"
            className="w-full cursor-pointer"           
          >
            Next
          </Button>
        </div>
      </form>
    </>
  );
}

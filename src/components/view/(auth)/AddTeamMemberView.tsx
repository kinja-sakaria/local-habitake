/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useState } from "react";

// Components of the elements folder
import Text from "@/components/elements/Text";
import Button from "@/components/elements/Button";
import TextField from "@/components/elements/TextField";
import RoleDropdown from "@/components/elements/DropDown";


export default function AddTeamMemberView() {

    const [members, setMembers] = useState([
        { name: "", role: "Seller" },
        { name: "", role: "Seller" }
    ]);

    const handleAddMember = () => {
        setMembers([...members, { name: "", role: "Seller" }]);
    };

    const handleNameChange = (index: number, value: string) => {
        const updated = [...members];
        updated[index].name = value;
        setMembers(updated);
    };

    const handleRoleChange = (index: number, value: string) => {
        const updated = [...members];
        updated[index].role = value;
        setMembers(updated);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted members:", members);
        // You can send `members` data to your API here
    };

    return (
        <>
            <div className="text-2xl font-medium text-primaryBlack leading-[100%] mobile:leading-3">
                Add Team Members
            </div>

            <p className="font-normal text-lg mobile:text-base leading-[100%] text-primaryLight pt-4">
                Lorem ipsum dolor sit amet
            </p>

            <div className="pt-10">
                <form onSubmit={handleSubmit}>
                    <div className="h-full max-h-96 overflow-y-scroll pr-1">
                        {members.map((member, index) => (
                            <>
                                <div
                                    key={index}
                                    className="flex gap-3 lg:w-full md:flex-row flex-col pb-6"
                                >
                                    <TextField
                                        label="Member Name"
                                        type="text"
                                        placeholder="Enter Name"
                                        className="w-full md:w-full"
                                        value={member.name}
                                        onChange={(e) => handleNameChange(index, e.target.value)}
                                    />

                                    <RoleDropdown
                                        label="Role"
                                        options={["Seller", "Normal Agent", "Agency", "Buyer"]}
                                        defaultValue={member.role}
                                        onChange={(val) => handleRoleChange(index, val)}
                                        className="lg:w-full md:w-full"
                                    />
                                </div>
                            </>
                        ))}
                    </div>

                    <Text
                        size="normal"
                        weight="medium"
                        textAlign="right"
                        className="text-green leading-extra-tight cursor-pointer mobile:pt-2"
                        onClick={handleAddMember}
                    >
                        + Add Members
                    </Text>

                    <div className="pt-40">
                        <Text size="normal" weight="medium" textAlign="center">
                            <a
                                href="/sign-in"
                                className="text-primaryBlack leading-extra-tight cursor-pointer"
                            >
                                Back
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
                            type="submit"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}

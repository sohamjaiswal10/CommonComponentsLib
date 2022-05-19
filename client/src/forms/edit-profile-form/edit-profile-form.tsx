import React, { useState } from "react";
import { BigBox } from "../../components/big-box";
import { ImageInput } from "../../components/form/inputs/image-input";
import { IEditProfileFormProps } from "./edit-profile-form.types";
import { SyntheticEvent } from "react";
import { Form } from "../../components/form";

import "./edit-profile-form.scss";
import { TextInput } from "../../components/form/inputs/text-input";
import { Typography } from "../../components/typography";
import { darkGrey, white } from "../../common/colors";
import { Section } from "../../components/section";
import { TextAreaInput } from "../../components/form/inputs/text-area-input";
import { TAGLINE_LIMIT } from "../../common/global";
import { SubmitInput } from "../../components/form/inputs/submit-input";

import Axios from "axios";

export const EditProfileForm = ({
  avatar,
  banner,
  username,
  nickname,
  about,
  tagline,
}: IEditProfileFormProps) => {
  const [currentAvatar, setAvatar] = useState(avatar);
  const [currentBanner, setBanner] = useState(banner);
  const [currentUsername, setUsername] = useState(username);
  const [currentNickname, setNickname] = useState(nickname);
  const [currentAbout, setAbout] = useState(about);
  const [currentTagline, setTagline] = useState(tagline);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const profile = {
      avatar: currentAvatar,
      banner: currentBanner,
      username: currentUsername,
      nickname: currentNickname,
      about: currentAbout,
      tagline: currentTagline,
    };

    Axios.post("http://localhost:3001/users/about/profile", { profile }).then(
      (serverResponse) => {
        console.log(serverResponse);
      }
    );
  };

  return (
    <div className="editProfileForm">
      <BigBox>
        <Form onSubmit={handleSubmit}>
          <div className="header">
            <ImageInput
              extraClassnames={["banner"]}
              radius="0%"
              image={currentBanner}
              onChange={setBanner}
              previewWidth={"100%"}
              previewHeight={"30rem"}
            />
            <ImageInput
              extraClassnames={["avatar"]}
              radius="50%"
              image={currentAvatar}
              onChange={setAvatar}
              previewWidth={"15rem"}
              previewHeight={"15rem"}
              shadow
              border={0.125}
            />
          </div>
          <div className="body">
            <div className="userDetails">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                }}
              >
                <Typography
                  label="@"
                  weight={500}
                  size={1.5}
                  color={darkGrey}
                />
                <TextInput
                  label={`${currentUsername}`}
                  onChange={setUsername}
                />
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  paddingLeft: "2.5rem",
                }}
              >
                <TextInput
                  label={`${currentNickname}`}
                  onChange={setNickname}
                />
              </div>
            </div>
            <Section
              heading="About"
              content={
                <TextAreaInput label={currentAbout} onChange={setAbout} />
              }
            />
            <Section
              heading="Tagline"
              content={
                <TextAreaInput
                  label={currentTagline}
                  onChange={setTagline}
                  maxlength={TAGLINE_LIMIT}
                  rows={1}
                />
              }
            />
            <SubmitInput
              button={{
                onClick: () => null,
                typography: {
                  label: "Save Changes!",
                  color: white,
                  weight: 600,
                  size: 1.5,
                },
              }}
            />
          </div>
        </Form>
      </BigBox>
    </div>
  );
};

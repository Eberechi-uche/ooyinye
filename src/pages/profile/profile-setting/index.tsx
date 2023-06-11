import SingleContentLayout from "@/Components/Layout/SingleContent.Layout";
import {
  Flex,
  Text,
  Input,
  Button,
  Image,
  Icon,
  Textarea,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { FcPlus } from "react-icons/fc";
import { CiTwitter, CiMail } from "react-icons/ci";
import { useFileUpload } from "@/Hooks/Profile/useFileUpload";
import { useProfileData } from "@/Hooks/Profile/useProfileData";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/Components/Firebase/ClientApp";
import { UserDetails } from "@/Hooks/Profile/useProfileData";
import { useRouter } from "next/router";
import TextHeader from "@/Components/Headers/TextHeader";
import useGetProfileDetails from "@/Hooks/DataFetching/useGetProfileInfo";

const Setting: React.FC = () => {
  const { file, onFileUpload, setFile } = useFileUpload();
  const route = useRouter();
  const [user] = useAuthState(auth);
  const { updateUserBio, updateUserDp, loading, updateError } =
    useProfileData();
  const [wordCount] = useState(250);
  const [userDetails, setUserDetails] = useState<UserDetails>({
    Bio: "",
    twitter: "",
    email: "",
  });
  const profileId = `@${user?.email?.split("@")[0]}`;
  const { getProfileDetails, profileDetails } = useGetProfileDetails(profileId);
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleProfileUpdate = async () => {
    await updateUserBio(userDetails);
  };
  useEffect(() => {
    setError("");
    if (file && file.length / 1024 > 600) {
      setError("file too large, should be less than 400kb");
      return;
    }
  }, [file]);
  useEffect(() => {
    if (profileDetails) {
      setUserDetails({
        Bio: profileDetails.Bio!,
        twitter: profileDetails.twitter!,
        email: profileDetails.email!,
      });
    }

    getProfileDetails();
    console.log(profileDetails);
  }, [profileDetails.Bio]);
  return (
    <SingleContentLayout>
      <Flex width={"100%"} justify={"center"} flexDir={"column"} px={"3"}>
        <Flex flexDir={"column"} textAlign={"center"}>
          <TextHeader text="setting" />
          <Text fontSize={"sm"} textAlign={"left"}>
            Update your bio, profile, picture, and add links to your socials
          </Text>
        </Flex>
        <Flex my={"5"} width={"100%"} position={"relative"}>
          <Image
            src={file ? file : user?.photoURL!}
            boxSize={"90px"}
            borderRadius={"full"}
            alt={"profile-picture"}
            objectFit={"cover"}
            onClick={() => {
              fileRef.current?.click();
            }}
          />
          <Icon
            as={FcPlus}
            fontSize={"3xl"}
            color={"green.400"}
            position={"absolute"}
            left={"60px"}
            top={"70%"}
          />
          <Input
            type={"file"}
            display={"none"}
            ref={fileRef}
            onChange={onFileUpload}
          />
          <Flex align={"flex-end"} ml={"5"} display={file ? "flex" : "none"}>
            {error ? (
              <>
                <Text fontSize={"sm"} fontWeight={"600"} color={"red.500"}>
                  {error}
                </Text>
              </>
            ) : (
              <>
                <Button
                  variant={"solid"}
                  colorScheme="red"
                  color={"white"}
                  mr={"5"}
                  onClick={() => {
                    setFile("");
                  }}
                  isDisabled={loading}
                >
                  cancel
                </Button>
                <Button
                  variant={"solid"}
                  colorScheme="whatsapp"
                  color={"white"}
                  isLoading={loading}
                  onClick={async () => {
                    await updateUserDp(file);
                    setFile("");
                    route.reload();
                  }}
                >
                  use
                </Button>
              </>
            )}
          </Flex>
        </Flex>
        <Flex flexDir={"column"}>
          <Textarea
            height={"90px"}
            placeholder="your bio"
            maxLength={wordCount}
            value={userDetails.Bio}
            onChange={handleInputChange}
            name={"Bio"}
          />
          <Text
            color={
              wordCount - userDetails.Bio.length > 0 ? "green.400" : "red.400"
            }
            fontWeight={"400"}
            fontSize={"sm"}
          >
            {wordCount - userDetails.Bio.length} remaining
          </Text>
        </Flex>
        <Stack spacing={4} mt={"4"}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={CiTwitter} fontSize={"2xl"} />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Twitter link"
              name={"twitter"}
              value={userDetails.twitter}
              onChange={handleInputChange}
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement>
              <Icon as={CiMail} fontSize={"2xl"} />
            </InputLeftElement>
            <Input
              placeholder="e-mail"
              name={"email"}
              value={userDetails.email}
              onChange={handleInputChange}
            />
          </InputGroup>
        </Stack>
      </Flex>
      <Flex my={"7"} width={"100%"} justify={"flex-end"} px={"3"}>
        <Button
          colorScheme="green"
          color={"#fff"}
          onClick={handleProfileUpdate}
          isLoading={loading}
          isDisabled={userDetails.Bio.length < 10}
        >
          update
        </Button>
      </Flex>
    </SingleContentLayout>
  );
};

export default Setting;

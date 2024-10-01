import { HStack, Image, VStack } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import GameHeading from "./GameHeading";
import { GameQuery } from "../App";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <VStack>
        <SearchInput onSearch={onSearch} />
      </VStack>

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

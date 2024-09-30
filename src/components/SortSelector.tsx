import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  selectedPlatform: Platform | null;
  setSelectedPlatform: (platform: Platform | null) => void;
}

const SortSelector = () => {
  const sortCategories = [
    "Relevance",
    "Date added",
    "Name",
    "Realease Date",
    "Popularity",
    "Average rating",
  ];
  //   const { data, error, isLoading } = usePlatforms();
  //   if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Ordered By: Relevance
      </MenuButton>
      <MenuList>
        {sortCategories.map((cat) => (
          <MenuItem key={cat} onClick={() => console.log(cat)}>
            {cat}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

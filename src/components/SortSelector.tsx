import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  selectedSort: string;
  setSelectedSort: (sort: string) => void;
}

const SortSelector = ({ selectedSort, setSelectedSort }: Props) => {
  const sortCategories = [
    { value: "relevance", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "-name", label: "Name" },
    { value: "-release", label: "Release date" },
    { value: "metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  //   const { data, error, isLoading } = usePlatforms();
  //   if (error) return null;

  const currentSortOrder = sortCategories.find(
    (order) => order.value === selectedSort
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentSortOrder?.label}
      </MenuButton>
      <MenuList>
        {sortCategories.map((cat) => (
          <MenuItem
            key={cat.value}
            value={cat.value}
            onClick={() => setSelectedSort(cat.value)}
          >
            {cat.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

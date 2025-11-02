import Input from "../UI/Input/Input";

interface SearchBoxProps {
  onSearch: (value: string) => void;
  value: string;
}

const SearchBox = ({ value, onSearch }: SearchBoxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };
  return (
    <Input
      id="search"
      value={value}
      onChange={handleChange}
      type="text"
      placeHolder="Search notes"
      style={{ height: "42px", alignSelf: "center" }}
    />
  );
};

export default SearchBox;

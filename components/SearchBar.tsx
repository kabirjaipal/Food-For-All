import React from "react";

type SearchBarProps = {
  searchTerm: string;
  onSearchTermChange: (searchTerm: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchTermChange,
}) => {
  return (
    <div className="flex items-center w-[100%] ">
      <input
        type="text"
        placeholder="Search food..."
        className="px-4 py-2 border rounded w-[100%] border-black"
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
      />
      <button
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => onSearchTermChange("")}
      >
        Clear
      </button>
    </div>
  );
};

export default SearchBar;

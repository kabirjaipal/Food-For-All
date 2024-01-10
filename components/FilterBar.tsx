import React from "react";

type FilterBarProps = {
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
  searchTerm: string;
  onSearchTermChange: (searchTerm: string) => void;
  categories: string[];
};

const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  onCategorySelect,
  searchTerm,
  onSearchTermChange,
  categories,
}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 rounded ${
            selectedCategory === null
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => onCategorySelect(null)}
        >
          All
        </button>
        {categories?.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded ${
              selectedCategory === category
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => onCategorySelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <input
        type="text"
        placeholder="Search food..."
        className="px-4 py-2 border rounded"
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
      />
    </div>
  );
};

export default FilterBar;

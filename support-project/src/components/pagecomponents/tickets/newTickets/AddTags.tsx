import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { TAGS } from "../../../../data/newTicketTags";

const AddTags = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredTags = TAGS.filter((tag) =>
    tag.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <div className="relative w-80">
        {!isSearchMode && (
          <button
            onClick={() => {
              setIsSearchMode(true);
              setIsOpen(true);
            }}
            className="w-full border-none text-2xl font-medium rounded-lg px-4 py-2 text-left text-gray-900 hover:bg-gray-50"
          >
            + Add tag
          </button>
        )}

        {isSearchMode && (
          <div
            className="border rounded-lg px-3 py-2 flex items-center justify-between"
            onClick={() => setIsOpen(true)}
          >
            <input
              type="text"
              placeholder="Search tag..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full outline-none text-2xl"
              autoFocus
            />
            <ChevronDown size={18} />
          </div>
        )}

        {isOpen && (
          <div className="absolute mt-1 w-full bg-white border rounded-lg shadow-md max-h-48 overflow-y-auto z-50">
            <div className="px-3 py-2 text-xl text-gray-600 font-semibold bg-gray-200 uppercase">
              All Teams
            </div>

            {filteredTags.map((tag) => (
              <div
                key={tag}
                onClick={() => {
                  setSelectedTag(tag);
                  setIsOpen(false);
                  setIsSearchMode(false);
                  setSearch("");
                }}
                className="px-4 py-2 hover:bg-gray-100 text-xl cursor-pointer"
              >
                {tag}
              </div>
            ))}

            {filteredTags.length === 0 && (
              <div className="px-4 py-2 text-gray-400">No results</div>
            )}
          </div>
        )}

        {selectedTag && (
          <div className="mt-2 inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1 text-2xl rounded-full ">
            {selectedTag}
            <button
              onClick={() => setSelectedTag(null)}
              className="text-blue-500 hover:text-blue-700"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddTags;

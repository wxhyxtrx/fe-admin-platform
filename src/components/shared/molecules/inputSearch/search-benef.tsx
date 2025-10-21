import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export interface BeneficiaryOpt {
  accountName: string;
  accountNo: string;
  bankName: string;
  isAdded?: boolean;
  amount?: number;
  id?: string;
}

interface SearchBenefProps {
  options: BeneficiaryOpt[];
  onSelect: (accountNumber: string) => void;
  selectedAccounts?: string[];
}

const SearchBenef: React.FC<SearchBenefProps> = ({
  options,
  onSelect,
  selectedAccounts = [],
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<BeneficiaryOpt[]>([]);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Update filtered options when options or search query changes
  useEffect(() => {
    if (options && options.length > 0) {
      const filtered = options.filter(
        (option) =>
          option.accountName
            ?.toLowerCase()
            ?.includes(searchQuery?.toLowerCase()) ||
          option?.accountNo?.includes(searchQuery)
      );
      setFilteredOptions(filtered);
    }
  }, [searchQuery, options]);

  // Reset search query when dropdown closes
  useEffect(() => {
    if (!isOpen) setSearchQuery("");
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleFocus = () => {
    setIsOpen(true);
  };

  // Prepare options with selected state
  const optionsWithSelection = filteredOptions.map((option) => ({
    ...option,
    isAdded: selectedAccounts.includes(option.accountNo),
  }));

  return (
    <div className="relative w-full">
      <div className="flex w-full">
        <Input
          placeholder="Search by name or account number"
          value={searchQuery}
          onChange={handleSearch}
          // onFocus={handleFocus}
          onClick={handleFocus}
          className="border border-neutral-500 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Search className="my-auto size-5 shrink-0 opacity-50 -ml-8" />
      </div>

      {isOpen && filteredOptions.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute z-20 top-10 flex flex-col bg-white w-full shadow-lg rounded-b-lg border border-gray-200"
        >
          <h2 className="text-gray-600 px-4 py-2 text-sm border-b line-clamp-1">
            Beneficiary List
          </h2>

          <div className="max-h-[300px] overflow-y-auto">
            {optionsWithSelection.map((option) => (
              <div
                key={option.accountNo}
                className="flex items-center justify-between p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
              >
                <div className="flex-1">
                  <p className="font-medium text-gray-800 line-clamp-1">
                    {option.accountName}
                  </p>
                  <p className="text-sm text-gray-600 line-clamp-1">
                    {option.bankName} | {option.accountNo}
                  </p>
                </div>
                <div className="flex items-center">
                  {option.isAdded && (
                    <span className="mr-2 text-xs text-neutral-700 italic">
                      Added
                    </span>
                  )}
                  <input
                    type="checkbox"
                    checked={option.isAdded}
                    onChange={() => onSelect(option.accountNo)}
                    className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500 accent-primary-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBenef;

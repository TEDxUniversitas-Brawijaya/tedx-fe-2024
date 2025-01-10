import { Button } from "@/components/shared/button";
import { Input } from "@/components/shared/input";
import { cn } from "@/lib/utils";
import { SearchIcon, XIcon } from "lucide-react";

interface ISearchBar {
  defaultValue?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onResetSearch: () => void;
}

export default function SearchBar({
  defaultValue,
  onChange,
  onResetSearch,
  placeholder = "Cari Data",
}: ISearchBar) {
  return (
    <div
      className={cn(
        "flex max-w-[400px] items-center overflow-hidden rounded-md border ring-neutral-900 focus-within:ring-2",
      )}
    >
      <Input
        placeholder={placeholder}
        className="w-full rounded-none border-none focus-visible:ring-0"
        defaultValue={defaultValue}
        onChange={onChange}
      />
      <Button
        onClick={onResetSearch}
        size={"icon"}
        variant={"outline"}
        className="h-full rounded-none border-none px-3 text-neutral-400"
      >
        {defaultValue ? <XIcon size={20} /> : <SearchIcon size={20} />}
      </Button>
    </div>
  );
}

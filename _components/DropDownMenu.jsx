"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/_lib/utils";
import { Button } from "@/_components/ui/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/_components/ui/Command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/_components/ui/Popover";

import { specialties } from "@/_lib/specialties";
import { useQueryParams } from "@/_hooks/useQueryParams";

export default function DropDownMenu({handleSpecialtyChange}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const { setQueryParam } = useQueryParams();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="min-w-[300px] justify-between  bg-white/50 rounded-md border px-3 py-2 text-sm outline-none focus-visible:ring-1 focus-visible:ring-ring placeholder:text-muted-foreground"
        >
          {value ? (
            specialties.find((specialty) => specialty.value === value)?.label
          ) : (
            <p className="text-muted-foreground"> Select Specialty... </p>
          )}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search specialty..." className="h-9" />
          <CommandList>
            <CommandEmpty>No specialty found.</CommandEmpty>
            <CommandGroup>
              {specialties.map((specialty) => (
                <CommandItem
                  key={specialty.value}
                  value={specialty.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    handleSpecialtyChange(currentValue)
                    setQueryParam("specialty", currentValue);
                  }}
                >
                  {specialty.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === specialty.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

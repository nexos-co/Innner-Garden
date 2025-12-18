// src/components/ui/search-select.tsx (or similar path)
import React, { useState, useMemo, type FunctionComponent } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BadgePlusIcon, Check, ChevronDown, PlusCircle, SmilePlus } from "lucide-react"; // Added PlusCircle

// --- New: Type for an item in the search select ---
export interface SelectableItem {
    id: string;
    name: string;
    icon?: React.ReactNode; // Optional: For displaying an avatar/icon
}

interface SearchSelectProps {
    items: SelectableItem[];
    selectedItemId?: string | undefined;
    onSelectItem: (itemId: string | undefined) => void;
    placeholder?: string;
    emptyMessage?: string;
    dialogTitle?: string;
    className?: string; // For the trigger button
    triggerLabel?: string; // Text on the trigger button when nothing is selected
}

const SearchSelect: FunctionComponent<SearchSelectProps> = ({
    items,
    selectedItemId,
    onSelectItem,
    placeholder = "Select item...",
    emptyMessage = "No items found.",
    dialogTitle = "Select an item",
    className,
    triggerLabel = "Pick an item",
}) => {
    const [open, setOpen] = useState(false);
    const [commandInputValue, setCommandInputValue] = useState("");

    const selectedItem = useMemo(
        () => items.find((item) => item.id === selectedItemId),
        [selectedItemId, items]
    );

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    className={cn(
                        "w-full justify-between text-left font-normal",
                        !selectedItem && "text-muted-foreground",
                        className
                    )}
                >
                    {selectedItem ? (
                        <div className="flex items-center gap-2">
                            {selectedItem.icon}
                            <span>{selectedItem.name}</span>
                        </div>
                    ) : (
                        <span>{triggerLabel}</span>
                    )}
                    <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </DialogTrigger>
            <DialogContent className="p-2 sm:max-w-md">
                <DialogHeader className="p-4 border-b">
                    <h3 className="text-lg font-semibold">{dialogTitle}</h3>
                </DialogHeader>
                <Command shouldFilter={false} className="pr-2 bg-background">
                    <CommandInput
                        placeholder={placeholder}
                        value={commandInputValue}
                        onValueChange={setCommandInputValue}
                        className="pr-4 border-none shadow-none"
                    />
                    <CommandList>
                        <CommandEmpty>{emptyMessage}</CommandEmpty>
                        <CommandGroup>
                            {items
                                .filter((item) =>
                                    item.name.toLowerCase().includes(commandInputValue.toLowerCase())
                                )
                                .map((item) => (
                                    <CommandItem
                                        key={item.id}
                                        value={item.name}
                                        onSelect={() => {
                                            if (selectedItemId === item.id) {
                                                onSelectItem(undefined);
                                            } else {
                                                onSelectItem(item.id);
                                            }
                                            setOpen(false);
                                        }}
                                        className={cn(
                                            "flex items-center justify-between",
                                            selectedItemId === item.id && "bg-background-secondary text-primary"
                                        )}
                                    >
                                        <div className="flex items-center gap-2">
                                            {item.icon}
                                            <span>{item.name}</span>
                                        </div>
                                        {selectedItemId === item.id && (
                                            <Check className="h-4 w-4 ml-auto" />
                                        )}
                                    </CommandItem>
                                ))}
                            {commandInputValue && !items.some(item => item.name.toLowerCase() === commandInputValue.toLowerCase()) && (
                                <CommandItem
                                    onSelect={() => {
                                        onSelectItem(commandInputValue);
                                        setOpen(false);
                                    }}
                                    className="flex items-center justify-end"
                                >
                                    <SmilePlus className="mr-2 h-6 w-6" /> Create "{commandInputValue}"
                                </CommandItem>
                            )}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </DialogContent>
        </Dialog>
    );
};

export default SearchSelect;

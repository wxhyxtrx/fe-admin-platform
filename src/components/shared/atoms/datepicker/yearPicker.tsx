"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

interface YearPickerProps {
    value?: number
    onChange?: (year: number) => void
    className?: string
    placeholder?: string
    minYear?: number
    maxYear?: number
}

export function YearPicker({
    value,
    onChange,
    className,
    placeholder = "Select year",
    minYear = 1900,
    maxYear = new Date().getFullYear(),
}: YearPickerProps) {
    const [open, setOpen] = React.useState(false)
    const [currentPage, setCurrentPage] = React.useState(0)
    const yearsPerPage = 20
    const totalYears = maxYear - minYear + 1
    const totalPages = Math.ceil(totalYears / yearsPerPage)

    const years = React.useMemo(() => {
        const startYear = maxYear - currentPage * yearsPerPage
        const endYear = Math.max(startYear - yearsPerPage, minYear)
        return Array.from({ length: startYear - endYear + 1 }, (_, i) => startYear - i)
    }, [currentPage, maxYear, minYear])

    const handleYearSelect = (year: number) => {
        onChange?.(year)
        setOpen(false)
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className={cn("w-[180px] justify-between text-left font-normal", !value && "text-muted-foreground", className)}
                >
                    {value || placeholder}
                    <CalendarIcon className="h-4 w-4" color="#707070" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[180px] p-0">
                <div className="flex items-center justify-between border-b p-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
                        disabled={currentPage >= totalPages - 1}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <div className="text-sm font-medium">
                        {years[years.length - 1]} - {years[0]}
                    </div>
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                        disabled={currentPage === 0}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
                <ScrollArea className="max-h-[180px]">
                    <div className="grid grid-cols-2 gap-1 p-2">
                        {years.map((year) => (
                            <Button
                                key={year}
                                variant={year === value ? "default" : "ghost"}
                                className={cn("h-8 text-sm", year === value && "bg-primary-700 text-white")}
                                onClick={() => handleYearSelect(year)}
                            >
                                {year}
                            </Button>
                        ))}
                    </div>
                </ScrollArea>
            </PopoverContent>
        </Popover>
    )
}


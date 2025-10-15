"use client"

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { format } from "date-fns"
import { CalendarIcon } from 'lucide-react'
import React from 'react'

export default function DatePicker() {
    const [date, setDate] = React.useState<Date>(new Date())
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"secondary"}
                    className={cn(
                        "w-[180px] justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                >
                    {format(date, 'dd MMM yyyy')}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    required
                    disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                    }
                />
                    {/* mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                    }
                /> */}
            </PopoverContent>
        </Popover>
    )
}

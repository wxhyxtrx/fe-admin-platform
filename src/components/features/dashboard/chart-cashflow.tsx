"use client";
import DatePicker from "@/components/shared/atoms/datepicker";
import PercentCalc from "@/components/shared/atoms/percent-calculate";
import Text from "@/components/shared/atoms/text";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatCurrency } from "@/lib/utils";
import { CgArrowsExchangeV } from "react-icons/cg";
import { PiArrowDownLeftBold, PiArrowUpRightBold } from "react-icons/pi";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
} from "recharts";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--color-primary)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export default function ChartCashflow() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center gap-5">
          <Text className="flex items-center gap-2 text-xl">
            <CgArrowsExchangeV className="text-accent text-2xl!" />
            Cashflow
          </Text>
          <div className="flex items-center gap-2">
            <DatePicker />
            <Tabs defaultValue="monthly">
              <TabsList>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row items-start gap-5 divide-x divide-border">
          <ChartContainer config={chartConfig} className="w-full max-h-72 pe-5">
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <defs>
                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-desktop)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-desktop)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-mobile)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-mobile)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <Area
                dataKey="mobile"
                type="natural"
                fill="url(#fillMobile)"
                fillOpacity={0.4}
                stroke="var(--color-mobile)"
                stackId="a"
              />
              <Area
                dataKey="desktop"
                type="natural"
                fill="url(#fillDesktop)"
                fillOpacity={0.4}
                stroke="var(--color-desktop)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
          <div
            id="chart-data"
            className="max-w-4/12 w-full divide-y divide-border px-5"
          >
            <div className="py-8 flex items-center gap-4">
              <div className="size-10 rounded-2xl bg-primary p-2 flex items-center justify-center">
                <PiArrowDownLeftBold className="text-4xl text-white" />
              </div>
              <div>
                <Text className="text-gray-400">Income</Text>
                <div>
                  <Text variant="h3">{formatCurrency(1000000)}</Text>
                  <PercentCalc variant="up" value={10} />
                </div>
              </div>
            </div>
            <div className="py-8 flex items-center gap-4">
              <div className="size-10 rounded-2xl bg-chart-1 p-2 flex items-center justify-center">
                <PiArrowUpRightBold className="text-4xl text-white" />
              </div>
              <div>
                <Text className="text-gray-400">Sales</Text>
                <div>
                  <Text variant="h3">40 Pcs</Text>
                  <PercentCalc variant="down" value={10} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

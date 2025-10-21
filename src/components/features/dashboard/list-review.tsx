import PercentCalc from "@/components/shared/atoms/percent-calculate";
import Text from "@/components/shared/atoms/text";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AiOutlineShoppingCart, AiOutlineUsergroupAdd } from "react-icons/ai";
import { LiaBoxesSolid } from "react-icons/lia";
export default function ListReview() {
  const data = [
    {
      title: "Pelanggan",
      icon: AiOutlineUsergroupAdd,
      value: "+30 Orang",
      percent: 10,
      vs: 700,
      type: "up",
    },
    {
      title: "Pesanan",
      icon: AiOutlineShoppingCart,
      value: "+120 invoice",
      percent: 20,
      vs: 600,
      type: "up",
    },
    {
      title: "Barang",
      icon: LiaBoxesSolid,
      value: "+12 Pcs",
      percent: 5,
      vs: 600,
      type: "down",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-5">
      {data.map((item) => (
        <Card key={item.title} className="py-4 gap-4">
          <CardHeader className="px-4 py-0 flex justify-between">
            <Text
              variant="span"
              className="flex items-center gap-3 font-medium"
            >
              <item.icon className="text-xl text-accent" />
              {item.title}
            </Text>
            <Text variant="span" className="text-gray-400">
              30 Hari terakhir
            </Text>
          </CardHeader>
          <CardContent className="py-0 px-4 space-y-1.5">
            <div className="flex items-end gap-2">
              <Text variant="h3">{item.value}</Text>
              <PercentCalc
                variant={item.type as "up" | "down"}
                value={item.percent}
              />
            </div>
            <Text variant="span" className="text-gray-400">
              dari {item.vs} periode terakhir
            </Text>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

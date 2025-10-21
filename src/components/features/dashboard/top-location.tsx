import Tables from "@/components/shared/atoms/Table/Tables";
import Text from "@/components/shared/atoms/text";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { MdStars } from "react-icons/md";

type TTopLocation = {
  location: string;
  staff: string;
  income: number;
};

const dataLocation = [
  { location: "Jakarta", staff: "Andi Wijaya", income: 185000000 },
  { location: "Surabaya", staff: "Budi Santoso", income: 132500000 },
  { location: "Bandung", staff: "Siti Rahma", income: 95000000 },
  { location: "Medan", staff: "Maria Elisabeth", income: 121000000 },
  { location: "Bali", staff: "Dewi Lestari", income: 143500000 },
];

export default function TopLocation() {
  function getTop1Location(data: TTopLocation[]): TTopLocation | null {
    if (!data.length) return null;

    // Urutkan descending berdasarkan income
    const sorted = [...data].sort((a, b) => b.income - a.income);
    return sorted[0];
  }

  const top1 = getTop1Location(dataLocation);
  const columnTopLocation: Column<TTopLocation>[] = [
    {
      label: "No",
      renderCell: () => null,
      className: "",
    },
    {
      label: "Lokasi",
      renderCell: ({ location }) => (
        <p className="flex items-center gap-2">
          {top1?.location === location && (
            <MdStars className="text-yellow-600 text-lg" />
          )}
          {location}
        </p>
      ),
      className: "",
    },
    {
      label: "Petugas",
      renderCell: ({ staff }) => <p className="line-clamp-1">{staff}</p>,
      className: "",
    },
    {
      label: "Pendapatan",
      renderCell: ({ income }) => <p>{formatCurrency(income)}</p>,
    },
  ];
  return (
    <Card>
      <CardHeader className="flex justify-between gap-5 items-center">
        <Text variant="h5" className="p-0 text-stone-900 dark:text-white leading-5">Lokasi Terbaik</Text>
      </CardHeader>
      <CardContent>
        <Tables data={dataLocation} columns={columnTopLocation} />
      </CardContent>
    </Card>
  );
}

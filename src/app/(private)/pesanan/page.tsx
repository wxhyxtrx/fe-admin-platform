import ListPesanan from "@/components/features/pesanan/list-pesanan";
import Text from "@/components/shared/atoms/text";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";

export default function PesananPage() {
  return (
    <Card>
      <div className="px-5 flex justify-between items-center gap-5">
        <Text variant="h5">
          Daftar Pesanan
        </Text>
        <Button>
          Tambah Pesanan
        </Button>
      </div>
      <ListPesanan />
    </Card>
  );
}

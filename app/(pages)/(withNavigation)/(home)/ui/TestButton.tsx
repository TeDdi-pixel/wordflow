"use client";

import { UnitCard } from "@/entities/unit-card";
import { useRouter } from "next/navigation";

const TestButton = ({ id }: { id: string }) => {
  const router = useRouter();

  return (
    <button
      id={id}
      type="button"
      className="cursor-pointer"
      onClick={() => router.push(`/card-set/${id}`)}
    >
      Redirect
    </button>
  );
};

export default TestButton;

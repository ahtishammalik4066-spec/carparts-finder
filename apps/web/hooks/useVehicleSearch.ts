"use client";

import { useState } from "react";

export interface VehicleSearchState {
  makeId: string;
  modelId: string;
  yearId: string;
  partId: string;
  condition: string;
}

const initialState: VehicleSearchState = {
  makeId: "",
  modelId: "",
  yearId: "",
  partId: "",
  condition: "",
};

export function useVehicleSearch() {
  const [search, setSearch] = useState<VehicleSearchState>(initialState);

  const updateField = (field: keyof VehicleSearchState, value: string) => {
    setSearch((prev) => {
      const next = { ...prev, [field]: value };
      // Reset dependent fields
      if (field === "makeId") {
        next.modelId = "";
        next.yearId = "";
      }
      if (field === "modelId") {
        next.yearId = "";
      }
      return next;
    });
  };

  const reset = () => setSearch(initialState);

  return {
    search,
    updateField,
    reset,
  };
}
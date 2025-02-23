import React from "react";
import type { Route } from "./+types/home";
import SpecimenTable from "~/SpecimenTable/SpecimenTable";

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
  return [
    { title: "MycoLog" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <SpecimenTable />;
}

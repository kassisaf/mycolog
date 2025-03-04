import React from "react";
import type { Route } from "./+types/home";
import Card from "~/components/layout/Card";
import Header from "~/components/layout/Header";
import Quote from "~/components/utility/Quote";
import SpecimenTable from "~/components/SpecimenTable";
import FruitingChamber from "~/components/FruitingChamber/FruitingChamber";

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
  return [
    { title: "MycoLog" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Header />

      <main className="my-5 flex h-full flex-col gap-8">
        <Card header="Fruiting Chamber">
          <FruitingChamber />
        </Card>

        <Card header="Active Specimen">
          <SpecimenTable
            columns={["Label", "Stage", "Last Update"]}
            data={placeholderData}
          />
        </Card>
      </main>

      <footer className="aboslute bottom-0 mb-2 p-3 text-lg text-slate-200">
        <Quote
          quote="The only difference between screwing around and science is writing
              it down."
          author="Adam Savage"
        />
      </footer>
    </>
  );
}

const placeholderData = [
  {
    label: "K1",
    stage: "Fruiting",
    lastUpdate: {
      date: "2/22",
      message: "Photo added",
    },
  },
  {
    label: "K2",
    stage: "Fruiting",
    lastUpdate: {
      date: "2/22",
      message: "Photo added",
    },
  },
  {
    label: "SG1",
    stage: "Fruiting",
    lastUpdate: {
      date: "2/19",
      message: "Recolonizing -> Fruiting",
    },
  },
  {
    label: "SG2",
    stage: "Fruiting",
    lastUpdate: {
      date: "2/19",
      message: "Recolonizing -> Fruiting",
    },
  },
  {
    label: "SB1",
    stage: "Fruiting",
    lastUpdate: {
      date: "2/19",
      message: "Recolonizing -> Fruiting",
    },
  },
  {
    label: "SM1",
    stage: "Fruiting",
    lastUpdate: {
      date: "2/19",
      message: "Recolonizing -> Fruiting",
    },
  },
  {
    label: "L1",
    stage: "Aborted",
    lastUpdate: {
      date: "2/22",
      message: "Aborted: Trichoderma contamination, dumped to compost",
    },
  },
];

import React from "react";
import type { Route } from "./+types/home";
import { SpecimenTable, Quote } from "~/components/mycolog";
import Card from "~/components/mycolog/Card";

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
      <div className="sticky top-0 mb-3 flex w-full flex-row items-center justify-between bg-zinc-600 pl-4 shadow-xl sm:pr-2 sm:pl-8">
        <h1 className="text text-3xl font-bold">MycoLog</h1>
        <button className="cursor-pointer p-2 text-5xl hover:bg-zinc-500">
          🍄
        </button>
      </div>

      <main className="my-5 flex h-full flex-col gap-8">
        <Card header="Fruiting Chamber">
          <div>Photo feed</div>
          <div>Temperature: 61.3 F (not controlled)</div>
          <div>Humidity: 95% (setpoint 90%)</div>
          <div>O2: ??% (setpoint: ??-??)</div>
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

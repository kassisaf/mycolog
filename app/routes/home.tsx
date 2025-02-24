import React from "react";
import type { Route } from "./+types/home";
import { SpecimenTable } from "~/components/mycolog";
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
    <div className="flex h-full w-full flex-col items-center">
      <h1 className="my-5 text-3xl font-bold">🍄 Welcome to MycoLog 🍄</h1>

      <div className="flex flex-col space-y-8">
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
      </div>
    </div>
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

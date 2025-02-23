import React from "react";
import { TableBody } from "react-aria-components";
import {
  Cell,
  Column,
  Row,
  Table,
  TableHeader,
} from "~/Components/ReactAriaTailwind";

const placeholderData = [
  {
    label: "K1",
    stage: "Fruiting",
    lastUpdate: "[2/22] Photo added",
  },
  {
    label: "K2",
    stage: "Fruiting",
    lastUpdate: "[2/22] Photo added",
  },
  {
    label: "SG1",
    stage: "Fruiting",
    lastUpdate: "[2/19] Recolonizing -> Fruiting",
  },
  {
    label: "SG2",
    stage: "Fruiting",
    lastUpdate: "[2/19] Recolonizing -> Fruiting",
  },
  {
    label: "SB1",
    stage: "Fruiting",
    lastUpdate: "[2/19] Recolonizing -> Fruiting",
  },
  {
    label: "SM1",
    stage: "Fruiting",
    lastUpdate: "[2/19] Recolonizing -> Fruiting",
  },
  {
    label: "L1",
    stage: "Aborted",
    lastUpdate: "[2/22] Aborted: Trichoderma contamination, dumped to compost",
  },
];

const SpecimenTable = () => {
  return (
    <Table aria-label="Files" selectionMode="multiple">
      <TableHeader>
        <Column isRowHeader>Label</Column>
        <Column>Stage</Column>
        <Column>Last Update</Column>
      </TableHeader>
      <TableBody>
        {placeholderData.map((data) => (
          <Row key={data.label}>
            <Cell>{data.label}</Cell>
            <Cell>{data.stage}</Cell>
            <Cell>{data.lastUpdate}</Cell>
          </Row>
        ))}
      </TableBody>
    </Table>
  );
};

export default SpecimenTable;

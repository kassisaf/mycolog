import React from "react";
import {
  WiHumidity as Humidity,
  WiThermometer as Temperature,
} from "react-icons/wi";
import { SiO2 as Oxygen } from "react-icons/si";
import { BsFillCameraVideoOffFill as VideoOffline } from "react-icons/bs";

// TODO: Fan spinning icon when fans are running

const FruitingChamber = () => {
  return (
    <>
      <div className="mb-2 flex h-90 w-160 items-center justify-center border-4 border-zinc-500 bg-zinc-700">
        <VideoOffline size={100} className="text-zinc-400" />
      </div>

      <div className="flex flex-col gap-2">
        <div>
          <Temperature size={32} className="inline" />
          <span> 61.3 F (not controlled)</span>
        </div>
        <div>
          <Humidity size={32} className="inline" />
          <span> 95% (setpoint 90%)</span>
        </div>
        <div>
          <Oxygen size={22} className="ml-1.5 inline" />
          <span className="pl-1.5"> ??% (setpoint: ??-??)</span>
        </div>
      </div>
    </>
  );
};

export default FruitingChamber;

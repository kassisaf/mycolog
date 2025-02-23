import React from "react";
import {
  type ColorAreaProps as AriaColorAreaProps,
  ColorArea as AriaColorArea,
} from "react-aria-components";
import { composeTailwindRenderProps } from "./utils";
import { ColorThumb } from "./ColorThumb";

export interface ColorAreaProps extends AriaColorAreaProps {}

export function ColorArea(props: ColorAreaProps) {
  return (
    <AriaColorArea
      {...props}
      className={composeTailwindRenderProps(
        props.className,
        "h-56 w-56 rounded-lg bg-gray-300 dark:bg-zinc-800 forced-colors:bg-[GrayText]"
      )}
      style={({ defaultStyle, isDisabled }) => ({
        ...defaultStyle,
        background: isDisabled ? undefined : defaultStyle.background,
      })}
    >
      <ColorThumb />
    </AriaColorArea>
  );
}

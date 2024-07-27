import { ComponentProps } from 'react';
import { VariantProps } from 'class-variance-authority';
declare const css: (props?: {
    color?: "blue" | "red";
} & import("class-variance-authority/dist/types").ClassProp) => string;
type ButtonProps = ComponentProps<'button'> & VariantProps<typeof css>;
export declare const Button: import("react").ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
export {};

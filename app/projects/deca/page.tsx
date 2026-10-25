import type { Metadata } from "next";
import DecaCaseStudy from "./DecaCaseStudy";

export const metadata: Metadata = {
  title: "DECA Compiler — Willem Adnet",
  description:
    "A compiler for the Deca language targeting the IMA abstract machine: lexing, parsing, contextual analysis and code generation, plus a CORDIC trigonometry extension and an energy-consumption study.",
};

export default function DecaProject() {
  return <DecaCaseStudy />;
}

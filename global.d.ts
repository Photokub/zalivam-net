
import React from "react";

declare module "react" {
  // augment CSSProperties here
  interface CSSProperties {
    "--value"?: string | number;
    "--size"?: string | number;
    "--thickness"?: string | number;
    "style"?: string | number;
  }
}

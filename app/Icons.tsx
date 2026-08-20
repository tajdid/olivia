"use client";

import { ArrowUpRight } from "@phosphor-icons/react";

export function Arrow() {
  return <ArrowUpRight aria-hidden="true" size={16} weight="bold" />;
}

export function ServiceArrow() {
  return <ArrowUpRight className="card-arrow" aria-hidden="true" size={26} weight="regular" />;
}

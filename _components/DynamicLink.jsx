"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DynamicLink({ children, basePath }) {
  const pathname = usePathname();

  // Determine the base path
  const currentBasePath = basePath || pathname.split("/")[1];

  // Construct the correct URL
  const href = `/${currentBasePath}/${item.url}`.replace(/\/+/g, "/");

  return <Link href={href}>{children}</Link>;
}

import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}



export function convertTitleToSlug(arr) {
  return arr.map((obj) => {
    const title = obj.title.toLowerCase().replace(/\s+/g, '-');
    return { ...obj, title };
  });
}
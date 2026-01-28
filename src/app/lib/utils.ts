import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const logEnv = () => {
  console.log('\tOPENAI_API_KEY:', process.env.OPENAI_API_KEY);
};

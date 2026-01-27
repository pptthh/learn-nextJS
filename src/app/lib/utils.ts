import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isProduction = process.env.NODE_ENV === 'production';
export const isDevelopment = !isProduction;

export const logEnv = () => {
  console.log('\tOPENAI_API_KEY:', process.env.OPENAI_API_KEY);
  console.log('\tTEST_KEY:', process.env.TEST_KEY);
  console.log('\tprocess:', process);
  // console.log('\tenv', process.env);

//  console.log('Environment Variables:');

  // for (const [key, value] of Object.entries(process.env)) {
  //   console.log(`\t\t${key}: ${value}`);
  // }
};

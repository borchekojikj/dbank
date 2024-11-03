import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'checkBalanc' : () => Promise<number>,
  'compound' : () => Promise<undefined>,
  'topUp' : (arg_0: number) => Promise<undefined>,
  'withdrawl' : (arg_0: number) => Promise<undefined>,
}
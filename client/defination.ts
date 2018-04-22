export enum Actions {
  hover='hover',
  validation='validation',
  complete='complete'
}

type Tseverity = 'error' | 'waring' | 'ignore';

export interface Diagnostic {
  severity: Tseverity,
}


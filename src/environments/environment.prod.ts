import { environment as environmentBase } from './environment';
import { Env } from './types/env';

const env: Env = { production: true };
export const environment: Env = { ...environmentBase, ...env };
import { Resource } from './types/Resource';
import { V3AdminOptions } from '@/types/V3AdminOptions';

export default class V3Admin {
  resources: Array<Resource>;

  constructor({ resources }: V3AdminOptions) {
    this.resources = resources;
  }
}

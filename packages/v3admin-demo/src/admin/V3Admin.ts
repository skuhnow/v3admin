import { Resource } from './types/Resource';

export default class V3Admin {
  resources: Array<Resource>;

  constructor({ resources }) {
    this.resources = resources.map((resource) => {
      return typeof resource === 'string' ? { name: resource } : resource;
    });
  }
}

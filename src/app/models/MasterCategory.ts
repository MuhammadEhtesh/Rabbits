export class MasterCategory {
  _id: string;
  name: string;

  constructor(name: string = null, id: string = null) {
    this.name = name;
    this._id = id;
  }
}

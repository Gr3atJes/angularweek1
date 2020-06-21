export class Goal {
    publicshowDescription: boolean;
    constructor(public id: number,public name: string,public description: string, public CompleteDate: Date){
      this.showDescription=false;
    }
  }
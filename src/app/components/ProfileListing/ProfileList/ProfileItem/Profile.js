export default class {
  constructor(profile){
    this.firstName = profile.name.first;
    this.lastName = profile.name.last;
    this.imageUrl = profile.picture.small;
    this.email = profile.email;
  }
}

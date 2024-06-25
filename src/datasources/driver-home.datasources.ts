import { mockPassengers, mockWaitlist } from "@/mock/driver/passengers";

export default class DriverHomeDataSource {
  static getCurrentPassengers() {
    return mockPassengers;
  }

  static getCurrentWaitList() {
    return mockWaitlist;
  }

  // pour la partie liste des offres
  static getOffersLists(){
    return {}
  }
}

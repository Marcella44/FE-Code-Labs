export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log(this.activeToInactiveCounter);
  }

  incrementInactivetoActive() {
    this.inactiveToActiveCounter++;
    console.log(this.inactiveToActiveCounter);
  }

}

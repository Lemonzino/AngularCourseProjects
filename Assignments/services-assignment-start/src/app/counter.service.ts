export class CounterService {
	actToInact: number = 0;
	inactToAct: number = 0;

	moveActToInact() {
		this.actToInact++;
		console.log("Active -> Inactive | count: " + this.actToInact);
	}

	moveInactToAct() {
		this.inactToAct++;
		console.log("Inactive -> Active | count: " + this.inactToAct);
	}
}

export class RandomCountService {
    private el1Num: number = 0;
    private el2Num: number = 0;

    incEl1() {
        this.el1Num++;
    }

    incEl2() {
        this.el2Num++;
    }

    getValues() {
        console.log("El1 num: " + this.el1Num, "El2 num: " + this.el2Num);
    }
}
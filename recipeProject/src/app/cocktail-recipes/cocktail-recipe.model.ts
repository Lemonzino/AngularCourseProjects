export class CocktailRecipe {
    constructor(
        public id: string,
        public name: string,
        public imgUrl: string,
        public detail?: string,
        public category?: string,
        public alcholic?: string,
        public glassType?: string,
        public ingredients?: {
            ingredName: string,
            ingredAmount: string
        }[]
    ) { }
}
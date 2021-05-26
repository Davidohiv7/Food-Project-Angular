
export function createArrayFromNumber(number:any) {
    const arrayOfNumbers:number[] = []
        for (let i = 1; i <= number; i++) {
            arrayOfNumbers.push(i);
        }
    return arrayOfNumbers     
}
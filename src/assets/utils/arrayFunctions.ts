
export function createArrayFromNumber(number:any) {
    const arrayOfNumbers:number[] = []
        for (let i = 1; i <= number; i++) {
            arrayOfNumbers.push(i);
        }
    return arrayOfNumbers     
}

export function manageDietType(dietType: string, typesArray:any[]) {
    if(dietType !== '-Select a diet') {
        const validation = typesArray.includes(dietType.toLowerCase())
        if(!validation) {
            return [...typesArray, dietType]
        }
        if(validation) {
            return typesArray.filter(diet => diet !== dietType)
        }
    }
    return []
}


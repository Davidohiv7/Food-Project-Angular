
export const capitalize = (lowerCaseWord:string) => {
    const lowerCaseWordComprobation = lowerCaseWord.toLowerCase()
    return lowerCaseWordComprobation.charAt(0).toUpperCase() + lowerCaseWordComprobation.slice(1)
}

export const capitalizeArray = (lowerCaseAray:string[]) => {
    const capArrar = lowerCaseAray.map(str => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    })
    return capArrar
}


// @ts-check

export const EXPECTED_MINUTES_IN_OVEN = 40;

export function remainingMinutesInOven(num) {
    return 40 - num
 
}

export function preparationTimeInMinutes(num) {
     let time = num * 2
    return time
}  

export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
    let minsPerLayer = numberOfLayers * 2
   return minsPerLayer + actualMinutesInOven
}
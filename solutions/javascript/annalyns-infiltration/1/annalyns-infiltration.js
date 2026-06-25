// @ts-check
//

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:

// Now help Annalyn free her best friend!

/**
 * The fast attack is available when the knight is sleeping
 *
 * @param {boolean} knightIsAwake
 *
 * @return {boolean} Whether or not you can execute a fast attack.
 */
export const knightIsAwake = true;

export function canExecuteFastAttack(knightIsAwake) {
   let fast_attack
   if (knightIsAwake) {
       fast_attack = false
     return fast_attack
   }else if (!knightIsAwake) {
     fast_attack = true
     return fast_attack
   }
}

/**
 * A useful spy captures information, which they can't do if everyone's asleep.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can spy on someone.
 */
export const archerIsAwake = false
export const prisonerIsAwake = true
export const petDogIsPresent = false;


export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
    let spy

  if (archerIsAwake || knightIsAwake || prisonerIsAwake) {
     spy = true
    return spy
  } else  {
    spy = false
    return spy
  }
}

/**
 * You'll get caught by the archer if you signal while they're awake.
 *
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can send a signal to the prisoner.
 */


export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if (!archerIsAwake && prisonerIsAwake) {
    return true;
  }
  return false;
}

/**
 * The final stage in the plan: freeing Annalyn's best friend.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 * @param {boolean} petDogIsPresent
 *
 * @returns {boolean} Whether or not you can free Annalyn's friend.
 */
export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) {
  if (petDogIsPresent && !archerIsAwake) {
    return true;
  }

  if (
    prisonerIsAwake &&
    !knightIsAwake &&
    !archerIsAwake
  ) {
    return true;
  }

  return false;
}

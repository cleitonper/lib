/**
 * Gera um uuid
 */
export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (letter) {
    const randomLetter = Math.random() * 16 | 0;
    const replacedLetter = letter == 'x' ? randomLetter : (randomLetter & 0x3 | 0x8);
    return replacedLetter.toString(16);
  });
};
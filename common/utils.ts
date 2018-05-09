import * as ts from 'typescript';

export function toUCamelCase(word: string) {
  if (!word) {
    return word;
  }

  const firstChar = word.slice(0, 1);

  return firstChar.toUpperCase() + word.slice(1);
}

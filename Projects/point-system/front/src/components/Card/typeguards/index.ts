function isOfType<T extends object>(obj: T, keys: string[]): obj is T {
  return keys.every((key) => key in obj);
}

export { isOfType };

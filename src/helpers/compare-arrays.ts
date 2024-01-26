type CompareArrays = (arr1: unknown[], arr2: unknown[]) => boolean;

export const compareArrays: CompareArrays = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

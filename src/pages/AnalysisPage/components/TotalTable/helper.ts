type GetArrayWithoutKey<T, Y extends keyof T> = (data: Array<T>, keys: Array<Y>) => Array<Omit<T, Y>>;

export const getArrayWithoutKeys: GetArrayWithoutKey<any, any> = (data, keys) => {
  const newData: any[] = JSON.parse(JSON.stringify(data));

  return newData.map(item => {
    keys.forEach(key => {
      delete item[key];
    });
    return item;
  })
};

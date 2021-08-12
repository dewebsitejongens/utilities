/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import arrayEach from './array-each';

type TReducer<T> = (
  initialValue: any,
  item: T,
  index: number,
  length: number,
  collection: T[]
) => T;

/**
 * Array reduce.
 *
 * @param collection
 * @param reducer
 * @param initialValue
 */
const arrayReduce = <T>(collection: T[], reducer: TReducer<T>, initialValue: any) => {
  let returnValue = initialValue;

  arrayEach<T>(collection, (item, index, length) => {
    returnValue = reducer(returnValue, item, index, length, collection);
  });

  return returnValue;
};

export default arrayReduce;

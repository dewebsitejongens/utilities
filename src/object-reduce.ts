/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import objectEach from './object-each';

type TReducer<T> = (
  initialValue: any,
  item: T,
  key: number | string,
  collection: Record<string | number, T>
) => any;

/**
 * Object reduce.
 *
 * @param collection
 * @param reducer
 * @param initialValue
 */
const objectReduce = <T>(
  collection: Record<string | number, T>,
  reducer: TReducer<T>,
  initialValue: any,
) => {
  let returnValue = initialValue;

  objectEach<T>(collection, (item, index) => {
    returnValue = reducer(returnValue, item, index, collection);
  });

  return returnValue;
};

export default objectReduce;

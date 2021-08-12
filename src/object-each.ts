/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import arrayEach from './array-each';

type TIterator<T> = (item: T, key: string, obj: Record<string, T>) => void;

/**
 * Object each.
 *
 * @param obj
 * @param iterator
 */
const objectEach = <T>(obj: Record<string, T>, iterator: TIterator<T>) => {
  // Get keys.
  const keys = Object.keys(obj);

  // Loop trough keys and get property.
  arrayEach(keys, (key) => {
    iterator(obj[key], key, obj);
  });
};

export default objectEach;

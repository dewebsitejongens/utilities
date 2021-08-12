/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

type TIterator<T> = (item: T, index: number, length: number, collection: T[]) => void;

/**
 * Array each.
 *
 * @param collection
 * @param iterator
 */
const arrayEach = <T>(collection: T[], iterator: TIterator<T>) => {
  for (let i = 0, { length } = collection; i < length; i += 1) {
    iterator(collection[i], i, length, collection);
  }
};

export default arrayEach;

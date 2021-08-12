/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import objectEach from './object-each';

type TPredicate<T> = (item: T, key: string, obj: Record<string, T>) => boolean;

/**
 * Object find.
 *
 * @param obj
 * @param predicate
 */
const objectFind = <T>(obj: Record<string, T>, predicate: TPredicate<T>): T | null => {
  let hit: T | null = null;

  objectEach<T>(obj, (item, key) => {
    if (hit) {
      return;
    }

    const res = predicate(item, key, obj);
    if (res) {
      hit = item;
    }
  });

  return hit;
};

export default objectFind;

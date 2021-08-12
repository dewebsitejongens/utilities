/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import objectEach from './object-each';

/**
 * Omit
 *
 * @param obj
 * @param keys
 */
const omit = <T extends Record<string, any>, K extends [...(keyof T)[]]>(obj: T, keys: K): {
  [K2 in Exclude<keyof T, K[number]>]: T[K2]
} => {
  const ret = {} as {
    [B in keyof typeof obj]: (typeof obj)[B]
  };

  objectEach(obj, (v, key: keyof typeof obj) => {
    if (!(keys.includes(key))) {
      ret[key] = obj[key];
    }
  });

  return ret;
};

export default omit;

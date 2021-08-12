/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import isArray from './is-array';
import isString from './is-string';

/**
 * Dot-notation get.
 *
 * @param obj
 * @param key
 * @param def
 */
const get = (obj, key, def?) => {
  let k: any[] = [];

  if (isString(key)) {
    k = key.split('.');
  } else if (!isArray(key)) {
    k = [key];
  } else if (isArray(key)) {
    k = key;
  }

  if (k.length === 0) {
    return def;
  }

  let newObj = obj;
  for (let i = 0; i < k.length; i += 1) {
    newObj = newObj ? newObj[k[i]] : undefined;
  }

  return typeof newObj === 'undefined' ? def : newObj;
};

export default get;

/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import isObject from './is-object';
import ObjectEach from './object-each';

function objectMerge<T, A>(
  base: T,
  source1: A
): T & A;

function objectMerge<T, A, B>(
  base: T,
  source1: A,
  source2: B
): T & A & B;

function objectMerge<T, A, B, C>(
  base: T,
  source1: A,
  source2: B,
  source3: C
): T & A & B & C;

function objectMerge<T, A, B, C, D>(
  base: T,
  source1: A,
  source2: B,
  source3: C,
  source4: D
): T & A & B & C & D;

/**
 * Object merge.
 *
 * @param base
 * @param objs
 */
function objectMerge(base: any, ...objs: any[]): any {
  const newBase = base;

  for (let i = 0, len = objs.length; i < len; i += 1) {
    const obj: Record<any, any> = objs[i];

    ObjectEach(obj, (item, key) => {
      if (isObject(item) && isObject(newBase[key])) {
        newBase[key] = objectMerge(newBase[key], item);
      } else {
        newBase[key] = item;
      }
    });
  }

  return newBase;
}

export default objectMerge;

/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import objectReduce from './object-reduce';

describe('object-reduce', () => {
  const obj = {
    1: 10,
    2: 20,
    3: 30,
    4: 40,
  };

  it('should reduce an object', () => {
    expect(objectReduce(obj, (output, value) => output + value, 0)).toEqual(100);
  });
});

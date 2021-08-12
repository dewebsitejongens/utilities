/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import objectFind from './object-find';

describe('object-find', () => {
  it('should iterate an object', () => {
    const obj = {
      a: 10,
      b: 20,
      c: 30,
      d: 40,
    };

    expect(objectFind(obj, (item) => item === 10)).toEqual(obj.a);
  });
});

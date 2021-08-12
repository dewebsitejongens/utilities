/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import arrayFind from './array-find';

describe('array-find', () => {
  it('should iterate an array', () => {
    const obj = [
      10,
      20,
      30,
      40,
    ];

    expect(arrayFind(obj, (value) => value === 10)).toEqual(obj[0]);
  });
});

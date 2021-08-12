/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import get from './get';

describe('get', () => {
  it('should get value from object', () => {
    const obj = {
      test: {
        test: 1,
      },
      arr: [
        {
          test: 1,
        },
        15,
      ],
    };

    expect(get(obj, 'test.test')).toBe(1);
    expect(get(obj, 'arr.1')).toBe(15);
    expect(get(obj, 'arr.0.test')).toBe(1);

    expect(get(obj, ['test', 'test'])).toBe(1);
    expect(get(obj, ['arr', 1])).toBe(15);
    expect(get(obj, ['arr', 0, 'test'])).toBe(1);
  });

  it('should get value from array', () => {
    const arr = [
      {
        test: 1,
      },
      15,
    ];

    expect(get(arr, '0.test')).toBe(1);
    expect(get(arr, 1)).toBe(15);
  });
});

/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import objectMerge from './object-merge';

describe('object-merge', () => {
  const obj1 = {
    test: 'hallo',
  };

  const obj2 = {
    hallo: 'test',
  };

  const obj3 = {
    test: {
      hallo: 'test',
      arr: [
        1,
        2,
        3,
      ],
    },
  };

  it('should merge deep', () => {
    expect(objectMerge(obj1, obj2)).toEqual({
      hallo: 'test',
      test: 'hallo',
    });

    expect(objectMerge(obj1, obj2, obj3)).toEqual({
      test: {
        hallo: 'test',
        arr: [
          1,
          2,
          3,
        ],
      },
      hallo: 'test',
    });
  });
});

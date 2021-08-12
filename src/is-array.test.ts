/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import isArray from './is-array';

describe('is-array', () => {
  it('should match type array', () => {
    const obj = {
      test: 1,
    };

    const arr = [
      'test',
    ];

    expect(isArray(obj)).toBeFalsy();
    expect(isArray(arr)).toBeTruthy();
  });
});

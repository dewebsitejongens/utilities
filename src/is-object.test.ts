/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import isObject from './is-object';

describe('is-object', () => {
  it('should match type object', () => {
    const obj = {
      test: 1,
    };

    const arr = [
      'test',
    ];

    expect(isObject(obj)).toBeTruthy();
    expect(isObject(arr)).toBeFalsy();
  });
});

/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import isString from './is-string';

describe('is-string', () => {
  it('should match type string', () => {
    const str = 'test';

    const arr = [
      'test',
    ];

    expect(isString(str)).toBeTruthy();
    expect(isString(arr)).toBeFalsy();
  });
});

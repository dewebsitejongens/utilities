/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import isNumber from './is-number';

describe('is-number', () => {
  it('should match type string', () => {
    const number = 1;

    const arr = [
      'test',
    ];

    expect(isNumber(number)).toBeTruthy();
    expect(isNumber(arr)).toBeFalsy();
  });
});

/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import arrayReduce from './array-reduce';

describe('arrayReduce', () => {
  it('should reduce an array', () => {
    expect(arrayReduce([1, 2, 3], (out, value) => out + value, 0)).toEqual(6);
  });
});

/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import objectEach from './object-each';

describe('object-each', () => {
  it('should iterate an object', () => {
    const iterator = jest.fn();

    const obj = {
      1: 10, 2: 20, 3: 30, 4: 40,
    };

    objectEach(obj, iterator);

    expect(iterator).toHaveBeenCalledTimes(4);
    expect(iterator).toHaveBeenCalledWith(10, '1', obj);
    expect(iterator).toHaveBeenCalledWith(20, '2', obj);
    expect(iterator).toHaveBeenCalledWith(30, '3', obj);
    expect(iterator).toHaveBeenCalledWith(40, '4', obj);
  });
});

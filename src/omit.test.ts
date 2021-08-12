/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import omit from './omit';

describe('omit', () => {
  it('should exclude keys from object', () => {
    const obj = {
      color: '#000',
      backgroundColor: '#fff',
    };

    expect(omit(obj, ['color'])).toStrictEqual({
      backgroundColor: '#fff',
    });

    expect(omit(obj, ['color', 'backgroundColor'])).toStrictEqual({});
  });
});

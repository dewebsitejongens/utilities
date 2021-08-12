/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

const prefix: string = 'Invariant failed';

/**
 * Invariant.
 *
 * @param condition
 * @param message
 */
const invariant = (condition: boolean, message: string) => {
  if (condition) {
    return;
  }

  throw new Error(process.env.NODE_ENV === 'production' ? prefix : `${prefix}: ${message}`);
};

export default invariant;

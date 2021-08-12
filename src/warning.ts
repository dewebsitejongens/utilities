/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

/**
 * Warning.
 *
 * @param condition
 * @param message
 */
const warning = (condition: boolean, message: string) => {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  if (condition) {
    return;
  }

  const text = `Warning: ${message}`;

  if (typeof console !== 'undefined') {
    // eslint-disable-next-line no-console
    console.warn(text);
  }

  throw new Error(text);
};

export default warning;

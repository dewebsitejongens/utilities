/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

/**
 * Debounce function.
 *
 * @param func
 * @param ms
 */
const debounce = (func: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function base(this: any, ...args: any[]) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => func.apply(this, args), ms);
  };
};

export default debounce;

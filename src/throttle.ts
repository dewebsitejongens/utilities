/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

/**
 * Throttle function.
 *
 * @param func
 * @param wait
 */
const throttle = <T extends Function>(func: T, wait: number = 300) => {
  let inThrottle: boolean;
  let lastFn: ReturnType<typeof setTimeout>;
  let lastTime: number;

  return function base(this, ...args) {
    const context = this;

    if (!inThrottle) {
      func.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);

      lastFn = setTimeout(() => {
        if (Date.now() - lastTime >= wait) {
          func.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};

export default throttle;

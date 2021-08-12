/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

/**
 * Is array.
 *
 * @param val
 */
const isArray = (val: any): val is [] => Array.isArray(val);

export default isArray;

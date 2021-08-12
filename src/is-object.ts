/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

/**
 * Is object.
 *
 * @param val
 */
const isObject = (val: any): val is object => val != null && typeof val === 'object' && Array.isArray(val) === false;

export default isObject;

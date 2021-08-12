/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

/**
 * Is string.
 *
 * @param val
 */
const isString = (val: any): val is string => val != null && typeof val === 'string';

export default isString;

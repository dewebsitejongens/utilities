/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

/**
 * Is number
 *
 * @param val
 */
const isNumber = (val): val is number => typeof val === 'number' && !Number.isNaN(val);

export default isNumber;

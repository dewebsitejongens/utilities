/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

type TPredicate<T> = (value: T, index: number, length: number, obj: T[]) => boolean;

/**
 * Array find.
 *
 * @param collection
 * @param predicate
 */
const arrayFind = <T>(
  collection: T[],
  predicate: TPredicate<T>,
): T | null => collection.find((
    value,
    index,
    obj,
  ) => predicate(value, index, obj.length, obj)) || null;

export default arrayFind;

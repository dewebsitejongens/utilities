/*
 * Copyright (c) 2021 De Website Jongens. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

/**
 * Is browser check.
 */
const isBrowser = () => !!(typeof window !== 'undefined' && window.document && window.document.createElement);

export default isBrowser;

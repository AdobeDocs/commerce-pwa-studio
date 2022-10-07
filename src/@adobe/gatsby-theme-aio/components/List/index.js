/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import '@spectrum-css/typography';
import { css } from '@emotion/react';

const listBase = css`
  margin-top: var(--spectrum-global-dimension-size-100);
  margin-bottom: var(--spectrum-global-dimension-size-350);
  margin-left: 2rem;
  padding-left: 0;
  color: #444;
  font-weight: 400;
  li {
    list-style: none;
    margin-right: 1rem;
    line-height: 1.5;
    &::before {
      background: #3273de;
      border-radius: 50%;
      display: inline-block;
      color: #fff;
      text-align: center;
      margin-left: -2rem;
      font-weight: 600;
    }
  }`;

const numbers = css`
  li {
    margin: 1rem 0 1rem 0.25rem;
    font-size: 1.1rem;
    &::before {
      content: counter(list-item);
      width: 1.4rem;
      height: 1.4rem;
      line-height: 1.3rem;
      margin-right: 0.7rem;
      margin-top: 0.2rem;
      position: absolute;
      font-size: 1rem;
    }
  }`;

const bullets = css`
  li {
    margin: 1rem 0 1rem -0.75rem;
    font-size: 1.1rem;
    &::before {
      background: #333;
      content: ' ';
      height: 0.45rem;
      width: 0.45rem;
      margin-left: -1rem;
      margin-right: 0.5rem;
      margin-top:0.6rem;
      position: absolute;
    }
  }`;

const List = ({ children, elementType = 'ul', className, ...props }) => {
  const Element = elementType;

  if (elementType === 'ol') {
    return (
      <Element className='spectrum-Body spectrum-Body--sizeM' css={[listBase, numbers]} {...props}>
        {children}
      </Element>
    );
  }

  return (
    <Element className='spectrum-Body spectrum-Body--sizeM' css={[listBase, bullets]} {...props}>
      {children}
    </Element>
  );
};

List.propTypes = {
  elementType: PropTypes.string
};

export { List };

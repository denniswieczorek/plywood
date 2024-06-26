/*
 * Copyright 2012-2015 Metamarkets Group Inc.
 * Copyright 2015-2020 Imply Data, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const { expect } = require('chai');

const { testImmutableClass } = require('immutable-class-tester');

const plywood = require('../plywood');

const { AttributeInfo, $, ply, r } = plywood;

describe('AttributeInfo', () => {
  it('is immutable class', () => {
    testImmutableClass(AttributeInfo, [
      { name: 'time', type: 'TIME' },
      { name: 'color', type: 'STRING' },
      { name: 'cut', type: 'STRING' },
      { name: 'cut', type: 'STRING', cardinality: 100 },
      { name: 'cut', type: 'STRING', range: { start: 'A', end: 'F' } },
      { name: 'tags', type: 'SET/STRING' },
      { name: 'carat', type: 'NUMBER', nativeType: 'STRING' },
      { name: 'count', type: 'NUMBER', unsplitable: true, maker: { op: 'count' } },
      {
        name: 'price',
        type: 'NUMBER',
        unsplitable: true,
        maker: { op: 'sum', expression: { op: 'ref', name: 'price' } },
      },
      { name: 'tax', type: 'NUMBER', unsplitable: true },
      { name: 'vendor_id', nativeType: 'hyperUnique', type: 'NULL' },
    ]);
  });
});

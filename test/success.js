/**
 * Copyright (c) 2015 Meizu bigertech, All rights reserved.
 * http://www.bigertech.com/
 * @author wuyanxin
 * @date  15/10/14
 * @description
 *
 */

var assert = require('assert');

describe('needAnSuccess', function () {
  it('iGiveYou', function () {
    assert.equal(1, 1, '1 equals 1');
  });

  it('another success case', function () {
    assert.equal(2, 3, '2 equals 2');
  });
});

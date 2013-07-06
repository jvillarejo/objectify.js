var assert = require("assert");
var array = require("../release/objectify")

describe('Array', function() { 
  describe('#first()', function(){
    it('should return the first value of array or null if not present', function() {
      assert.equal(1, [1,2,3].first());
      assert.equal(null, [].first());
    });
  });
});
function SampleObject() {};

SampleObject.prototype.myFirstFunction = function() {
  this.someAttribyte = 'Yay!'
}

SampleObject.prototype.mySecondFunction = function (val_1, val_2) {
  var result = val_1 + val_2;
  return result
}

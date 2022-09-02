function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0)
    return [];
  var pos = 0;
  var neg = 0;
  for (var i=0, l=input.length; i<l; ++i)
  {
    if (input[i] > 0)
      ++ pos;
    else
    neg += input[i];
  }
  return [pos, neg];
}
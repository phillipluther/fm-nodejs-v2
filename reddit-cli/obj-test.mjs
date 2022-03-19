const deepNestedObj = {
  top: true,
  nested: [
    {
      lets: 'get deep',
      or: 'not',
      that: false,
    },
    {
      lets: 'get deeper',
      or: 'so',
      that: [
        {
          one: 1,
          two: 2,
          three: 4,
          nonsensical: true,
        },
        {
          one: 1,
          two: 2,
          three: 3,
          nonsensical: false,
        },
      ],
    },
  ],
};

console.log('COMPARE\n-------');
console.log(deepNestedObj);
console.log(JSON.stringify(deepNestedObj, null, 2));

function iTakeFoo(foo: 'foo') { }

const test = {
  someProp: 'foo' as 'foo'
};

iTakeFoo(test.someProp);
function fib(n) {
  // Key is to understand these cannot be iteratively created, always have them in place
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];
    result.push(a + b);
  }
  return result[n];
}


function fibRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

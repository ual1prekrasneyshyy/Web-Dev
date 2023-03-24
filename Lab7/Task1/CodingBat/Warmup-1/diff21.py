def diff21(n):
  if n <= 21:
    return 21 - n
  return 2 * (n-21)


print(diff21(19))
print(diff21(21))
print(diff21(25))


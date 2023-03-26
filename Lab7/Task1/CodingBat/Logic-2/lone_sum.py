def lone_sum(a, b, c):
    if a != b and b != c and a != c:
        return a + b + c
    if a == b == c:
        return 0
    if a == b:
        return c
    if b == c:
        return a
    if a == c:
        return b


print(lone_sum(1, 2, 3))
print(lone_sum(3, 2, 3))
print(lone_sum(3, 3, 3))
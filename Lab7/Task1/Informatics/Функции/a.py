def min(a: int, b: int, c: int, d: int)-> int:
    m = a

    if m > b:
        m = b

    if m > c:
        m = c

    if m > d:
        m = d

    return m


x, y, z, t = tuple(map(int, input().split()))

print(min(x, y, z, t))

def power(a: float, n: int) -> float:
    p = 1.0

    for i in range(n):
        p *= a

    return p


inp = input().split()

print(power(float(inp[0]), int(inp[1])))

def xor(a: int, b: int) -> int:
    return a ^ b


a, b = list(map(int, input().split()))
print(xor(a, b))

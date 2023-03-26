def close_far(a, b, c):
    if abs(a-b) <= 1:
        return abs(a-c) >= 2 and abs(b-c) >= 2
    if abs(a-c) <= 1:
        return abs(a-b) >= 2 and abs(b-c) >= 2
    return False


print(close_far(1, 2, 10))
print(close_far(1, 2, 3))
print(close_far(4, 1, 3))
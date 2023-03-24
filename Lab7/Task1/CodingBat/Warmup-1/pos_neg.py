def pos_neg(a, b, negative):
    if negative:
        return a < 0 and b < 0
    return a > 0 and b < 0 or a < 0 and b > 0


print(pos_neg(34, -65, False))
print(pos_neg(-54, -33, False))

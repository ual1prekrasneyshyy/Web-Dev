def fix_teen(n):
    if n == 15 or n == 16:
        return n
    if 13 <= n <= 19:
        return 0
    return n


def no_teen_sum(a, b, c):
    return fix_teen(a) + fix_teen(b) + fix_teen(c)


print(no_teen_sum(1, 2, 3))
print(no_teen_sum(2, 13, 1))
print(no_teen_sum(2, 1, 14))

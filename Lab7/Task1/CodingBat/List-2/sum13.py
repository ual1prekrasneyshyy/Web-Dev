def sum13(nums):
    s = 0

    r = 0

    for n in nums:
        if r == 1:
            r = 0
        elif n != 13:
            s += n
        else:
            r += 1

    return s


print(sum13([1, 2, 2, 1]))
print(sum13([1, 1]))
print(sum13([1, 2, 2, 1, 13]))
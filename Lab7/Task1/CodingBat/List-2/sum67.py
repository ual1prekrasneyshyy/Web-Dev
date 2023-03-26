def sum67(nums):
    s = 0

    b = 0

    for n in nums:
        if n == 6:
            b = 1
        elif n == 7:
            if b == 1:
                b = 0
            else:
                s += n
        elif b == 1:
            continue
        else:
            s += n

    return s


print(sum67([1, 2, 2]))
print(sum67([1, 2, 2, 6, 99, 99, 7]))
print(sum67([1, 1, 6, 7, 2]))

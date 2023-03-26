def common_end(a, b):
    return a[0] == b[0] or a[-1] == b[-1]


print(common_end([1, 3, 5], [1, 5, 4]))
print(common_end([2, 6], [1, 4, 6]))
print(common_end([1, 6], [7, 2]))
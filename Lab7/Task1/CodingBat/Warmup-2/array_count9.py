def array_count9(nums):
    counter = 0

    for n in nums:
        counter += n == 9

    return counter


print(array_count9([1, 2, 9]))
print(array_count9([1, 9, 9]))
print(array_count9([1, 9, 9, 3, 9]))
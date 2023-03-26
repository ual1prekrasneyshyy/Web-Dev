def count_evens(nums):
    evens = 0

    for n in nums:
        evens += n % 2 == 0

    return evens


print(count_evens([2, 1, 2, 3, 4]))
print(count_evens([2, 2, 0]))
print(count_evens([1, 3, 5]))
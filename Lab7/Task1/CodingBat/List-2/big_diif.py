def big_diff(nums):
    maximum = nums[0]
    minimum = nums[0]

    for n in nums[1:]:
        maximum = max(maximum, n)
        minimum = min(minimum, n)

    return maximum - minimum


print(big_diff([10, 3, 5, 6]))
print(big_diff([7, 2, 10, 9]))
print(big_diff([2, 10, 7, 2]))
def first_last6(nums):
    return nums[0] == 6 or nums[-1] == 6


print(first_last6([6, 4, 3, 3]))
print(first_last6([3, 5, 2, 1, 6]))
print(first_last6([4, 5, 3, 2]))
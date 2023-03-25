def same_first_last(nums):
    return len(nums) >= 1 and nums[0] == nums[-1]


print(same_first_last([1, 5, 4, 3, 1]))
print(same_first_last([4, 3, 6, 3, 2]))
print(same_first_last([3, 7, 3]))
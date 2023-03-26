def max_end3(nums):
    return [max(nums[0], nums[-1]) for i in range(3)]


print(max_end3([1, 2, 3]))
print(max_end3([11, 5, 9]))
print(max_end3([2, 11, 3]))
def has22(nums):
    for i in range(1, len(nums)):
        if nums[i-1] == 2 and nums[i] == 2:
            return True

    return False


print(has22([1, 2, 2]))
print(has22([1, 2, 1, 2]))
print(has22([2, 1, 2]))
def array_front9(nums):
    if len(nums) > 4:
        nums = nums[:4]

    return 9 in nums


print(array_front9([1, 2, 9, 3, 4]))


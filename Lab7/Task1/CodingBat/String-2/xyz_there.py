def xyz_there(str):
    for i in range(0, len(str)-2):
        if str[i:i+3] == 'xyz':
            if i == 0:
                return True
            if str[i-1] != '.':
                return True

    return False


print(xyz_there('abcxyz'))
print(xyz_there('abc.xyz'))
print(xyz_there('xyz.abc'))
def count_hi(str):
    counter = 0

    for i in range(len(str)-1):
        counter += str[i:i+2] == 'hi'

    return counter


print(count_hi('abc hi ho'))
print(count_hi('ABChi hi'))
print(count_hi('hihi'))
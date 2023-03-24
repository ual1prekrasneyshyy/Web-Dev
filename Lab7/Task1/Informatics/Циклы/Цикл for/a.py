a = int(input())
b = int(input())

for i in range(a if a % 2 == 0 else a+1, b if b % 2 == 1 else b+1, 2):
    print(i, end=' ')

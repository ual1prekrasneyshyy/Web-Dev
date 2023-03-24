n = int(input())

while n > 1:
    if n % 2:
        print('NO')
        break
    else:
        n /= 2

if n == 1:
    print('YES')
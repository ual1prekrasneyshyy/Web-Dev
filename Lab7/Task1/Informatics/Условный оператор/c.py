#partial solution

n = input()
k = int(input())

if len(n) != 4:
    print('NO' if k == 1 else 'YES')
else:
    if n[0] == n[-1] and n[1] == n[2]:
        print('YES' if k == 1 else 'NO')
    else:
        print('NO' if k == 1 else 'YES')
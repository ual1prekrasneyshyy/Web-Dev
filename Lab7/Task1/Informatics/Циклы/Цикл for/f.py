x = input()

b = False

for c in x[::-1]:
    if c != '0' or c == '0' and b:
        print(c, end='')

        if not b:
            b = True

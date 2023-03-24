def swap_case(s):
    s1 = ''

    for c in s:
        if c.isupper():
            s1 += c.lower()
        else:
            s1 += c.upper()

    return s1

if __name__ == '__main__':
    s = input()
    result = swap_case(s)
    print(result)
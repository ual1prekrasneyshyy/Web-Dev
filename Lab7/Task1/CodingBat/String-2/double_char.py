def double_char(str):
    s = ''
    for c in str:
        s += c * 2
    return s


print(double_char('The'))
print(double_char('AAbb'))
print(double_char('Hi-There'))
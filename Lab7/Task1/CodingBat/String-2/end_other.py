def end_other(a, b):
    if len(a) > len(b):
        return a[len(a)-len(b):].lower() == b.lower()
    return b[len(b)-len(a):].lower() == a.lower()


print(end_other('Hiabc', 'abc'))
print(end_other('AbC', 'HiaBc'))
print(end_other('abc', 'abXabc'))
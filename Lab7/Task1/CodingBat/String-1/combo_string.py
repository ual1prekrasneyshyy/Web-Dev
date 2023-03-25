def combo_string(a, b):
    if len(b) < len(a):
        return b + a + b
    return a + b + a


print(combo_string('Hi', 'world'))
print(combo_string('Hello', 'John'))
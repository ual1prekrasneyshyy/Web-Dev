def not_string(str):
    if str[:3] == 'not':
        return str
    return 'not ' + str


print(not_string('not string'))
print(not_string('string'))
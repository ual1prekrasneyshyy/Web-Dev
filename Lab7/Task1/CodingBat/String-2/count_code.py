def count_code(str):
    codes = 0

    for i in range(len(str)-3):
        codes += str[i] == 'c' and str[i+1] == 'o' and str[i+3] == 'e'

    return codes


print(count_code('aaacodebbb'))
print(count_code('codexxcode'))
print(count_code('cozexxcope'))
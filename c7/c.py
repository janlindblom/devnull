import sys;

bignum = sys.maxint / 1000;

def factorize(number):
    return factorize_do(number,number)

def factorize_do(number,static):
    if static == number:
        return factorize_do(number-1,static)
    else:
        if number == 0:
            return;
        if static % number != 0:
            return factorize_do(static/number,static)
        else:
            return factorize_do(number-1,static)

print factorize(21)
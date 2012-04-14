
iterable = [1,2,3,5,7,10,19,23,30]

def attempt2(m,list):
    if len(list) > 0:
        x = list.pop()
        return attempt(x,m,list)
    else:
        return False

def attempt(x,m,list):
    print 'x='+str(x)
    isy = m - x
    print 'y='+str(isy)+'?'
    print list
    if isy in list:
        print 'found y'
        return True
    else:
        attempt2(m,list)
    return False

print attempt2(3,iterable)
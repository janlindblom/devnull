data="asdf"

def output(data,format="xml"):
    exec "output_"+format+"("+data+")"

def output_xml(data):
    print "XML! : "+data
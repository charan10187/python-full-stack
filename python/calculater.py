def calculater(oper,val):
    result=0
    if oper==add:
        for i in range(0,len(val)):
            result=result+val[i]
            return result
    elif oper==sub:
        for i in range(0,len(val)):
            result=val[i]-result
            return result
    elif oper==mult:
            for i in range(0,len(val)):
                result=val[i]-result
                return result
    elif oper==dev:
            val[0]//val[1]
                return result
    else:
         return "invalid"
    




public with sharing class Controller {
    @AuraEnabled( cacheable = true )  
    public static Integer add(Integer firstNumber , Integer secondNumber){
        return (firstNumber + secondNumber);
    }
    @AuraEnabled( cacheable = true )  
    public static Integer fetchvalue(Integer key){
    Integer retrivevalue;
    map<integer,integer> m1 = new map<integer,Integer>();
    m1.put(1,3);
    m1.put(2,4);
    m1.put(3,6);
    m1.put(4,8);
    m1.put(5,1);
    If(key != Null &&  m1.containskey(key)){
    retrivevalue= m1.get(key);
    }
    return retrivevalue;
}
@AuraEnabled( cacheable = true )
public static List<String> Table(String str){
List<String> listOfString = new List<String>();
try {
    
    If(!str.contains('@') && !str.contains('#') && !str.contains('/') && !str.contains('|') ){
     If(str.length()>1){
          str = str.removeEnd(',');
     }
        listOfString=str.split(',');
    }
    }
 catch (Exception e) {
    throw new AuraHandledException(e.getMessage());
    }
     return listOfString;
}
}

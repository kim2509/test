<!--
/***********************************************************************
  1. ���� : ��¥ �Է½� "-" �� �ٿ��ش�.
************************************************************************/
function nextPosition(obj,nextObj){
  var cnt   =   0;
  for(var i = 0; i < obj.value.length; i ++)
  {
    if(obj.value.substring(i, i + 1) == '-')
    {
    }else{
        cnt = cnt +1;
    }
  }
  if (cnt == 8){
    nextObj.focus();
  }
}

function OnFocusColor(fld)
{
    fld.style.backgroundColor="#E4F6E8";
}

function LostFocusColor(fld)
{
    fld.style.backgroundColor="";
}
var i;

/***********************************************************************
  1. ���� : Text�� ������ �ҹ��ڸ� �빮�ڷ� �ٲ��ش�.
************************************************************************/
function js_UpperCase() {
  if(!(event.keyCode < 97 || event.keyCode > 122)) {
    event.keyCode -= 32;
    event.returnValue=true;
  }
}

/***********************************************************************
  1. ���� : Text�� ������ �빮�ڸ� �ҹ��ڷ� �ٲ��ش�.
************************************************************************/
function js_LowerCase() {
  if(!(event.keyCode < 65 || event.keyCode > 90)) {
    event.keyCode += 32;
    event.returnValue=true;
  }
}

/************************************************************************************

 js_DateType() : ������� ���� �ִ� Input box �󿡼� ������� üũ�ϴ� �Լ�
                    ���� ���ڰ��߿��� type���� ������� �����ڸ� ������ �� �ִ�.
                    js_js_DateType(this, "/") | 20000101-->2000/01/01

 ��뿹      : <input ... onblur = "js_js_DateType(this, "/")">

*************************************************************************************/

function js_DateType(obj, type)
{
   var sDate=obj.value.replace(/(\,|\.|\-|\/|[ ])/g,"");
//   var sFormat="YYYYMMDD";
   var aDaysInMonth=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
   if (sDate.length == 0)
        return;
   if (sDate.length != 8 )
   {
        alert("��¥�� �߸� �Է��Ͽ����ϴ�.\n��¥������ YYYYMMDD�Դϴ�.");
        obj.focus();
        return ;
   }
   else
   {
        var iYear=eval(sDate.substr(0,4));
        var iMonth=eval(sDate.substr(4,2));
        var iDay=eval(sDate.substr(6,2));
        var iDaysInMonth=(iMonth!=2)?aDaysInMonth[iMonth-1]:((iYear%4==0 && iYear%100!=0 || iYear % 400==0)?29:28);
        if( (iDay!=null && iMonth!=null && iYear!=null  && iMonth<13 && iMonth>0 && iDay>0 && iDay<=iDaysInMonth) == false )
        {
            alert("������ ��¥�� ������ �ٽ� Ȯ���Ͻʽÿ�");
            obj.focus();
            return;
        }
        else
        {
            iMonth = (iMonth >=10)? iMonth:"0"+iMonth;
            iDay = (iDay>=10 )? iDay:"0"+iDay;
            obj.value=""+iYear+type+iMonth+type+iDay;
            return true;
        }
   }
}

/************************************************************************************
20021113 �߰�
 js_js_DateType2()      : �⵵�� �Է��ϰ��ϴ� �Լ�

 ��뿹                 : <input ... onKeypress = "js_js_DateType2(this)">

*************************************************************************************/

function js_DateType2(obj)
{
    if( obj.value.length == 0 ){ return false; }
    if(eval(obj.value.length != 4 ))
    {
        alert("�⵵ ������ YYYY�Դϴ�.");
        obj.value = "";
        obj.focus();
        return false;
    }
    if (isNaN(Number(obj.value))) {
        alert("�⵵�� ���ڸ� �Է��ϼž� �մϴ�.");
        obj.value = "";
        obj.focus();
    }
    return true;
}

/************************************************************************************
20021210 �߰�
 js_js_DateType3()      : ����� �Է��ϰ��ϴ� �Լ�

 ��뿹                 : <input ... onKeypress = "js_js_DateType3(this)">

*************************************************************************************/

function js_DateType3(obj, type)
{
   var sDate=obj.value.replace(/(\,|\.|\-|\/|[ ])/g,"");
//   var sFormat="YYYYMMDD";
   if (sDate.length == 0)
        return;
   if (sDate.length != 6 )
   {
        alert("�߸� �Է��Ͽ����ϴ�.\n�Է������� YYYYMM�Դϴ�.");
        obj.value="";
        obj.focus();
        return ;
   }
   else
   {
        var iYear=eval(sDate.substr(0,4));
        var iMonth=eval(sDate.substr(4,2));
        if( (iMonth!=null && iYear!=null  && iMonth<13 && iMonth>0 ) == false )
        {
            alert("�߸� �Է��ϼ̽��ϴ�. �ٽ� Ȯ���Ͻʽÿ�");
            obj.value="";
            obj.focus();
            return;
        }
        else
        {
            iMonth = (iMonth >=10)? iMonth:"0"+iMonth;
            obj.value=""+iYear+type+iMonth;
            return true;
        }
   }
}


/************************************************************************************
20021113 �߰�
 js_OnlyNumber()        : ���ڸ��� �Է��ϱ� ���� �Լ�

 ��뿹                 : <input ... onKeypress = "js_OnlyNumber(this)">

*************************************************************************************/

function js_OnlyNumber(obj)
{
    sFilter="[0-9]";
    if(sFilter)
    {
      var sKey=String.fromCharCode(event.keyCode);
      var re=new RegExp(sFilter);
      // Enter�� Ű�˻縦 ���� �ʴ´�.
      if(   event.keyCode !=   9  && event.keyCode !=  37 && event.keyCode !=  39 && event.keyCode !=   8
      	 && event.keyCode !=  46  && event.keyCode !=  96 && event.keyCode !=  97 && event.keyCode !=  98
      	 && event.keyCode !=  99  && event.keyCode != 100 && event.keyCode != 101 && event.keyCode != 102
      	 && event.keyCode != 103  && event.keyCode != 104 && event.keyCode != 105 && event.keyCode != 110
      	 && event.keyCode != 190  && sKey          != "\r" && !re.test(sKey) ){
    	  event.returnValue=false;
      }
	  // Enter Ű�� ���� �ʰ� �Ѵ�.
      if (event.keyCode == 13){event.returnValue =false;}
    }
}

/************************************************************************************
2003-03-25 �߰�
 js_CheckTel(this)      : ���ڿ� ')' ,'-'�� �Է��ϱ� ���� �Լ�

 ��뿹                 : <input ... onBlur = "js_CheckTel(this)">

*************************************************************************************/

function js_CheckTel(obj)
{
    var num = "0123456789-.";
    var resident_num = obj.value;
    for(var i = 0; i < resident_num.length; i ++)
        {
            if(num.indexOf(resident_num.substring(i, i + 1)) < 0)
            {
                alert("���� �Ǵ� - �� �Է��ϼ���.");
                obj.value = "";
                obj.focus();
                return 0;
            }
        }
        return 1;
}

/************************************************************************************
2003-03-25 �߰�
 js_OnlyNumber4()       : ���ڿ�'-'�� �Է��ϱ� ���� �Լ�

 ��뿹                 : <input ... onKeypress = "js_OnlyNumber4(this)">

*************************************************************************************/

function js_OnlyNumber4(obj)
{
    sFilter="[0-9]";
    if(sFilter)
    {
      var sKey=String.fromCharCode(event.keyCode);
      var re=new RegExp(sFilter);
      // "Enter"�� "."�� Ű�˻縦 ���� �ʴ´�.
      if(sKey!="\r" && sKey!="\-" && !re.test(sKey)) {event.returnValue=false;}

      // Enter Ű�� ���� �ʰ� �Ѵ�.
      if (event.keyCode == 13){event.returnValue =false;}
    }
}

/************************************************************************************
2003-03-25 �߰�
 js_PostCheck()     : ���ڿ�'-'�� �Է��ϱ� ���� �Լ�

 ��뿹                 : <input ... onKeypress = "js_js_OnlyNumber4(this)">

*************************************************************************************/

function js_PostCheck(obj)
{
   var result = obj.value;
   if(result.length == 0){return false;}
   result = trimChar(result,"-");
   if (!isNum(result)) {
      alert("�����ȣ�� ���ڸ� �Է��ϼž� �մϴ�.");
      obj.value = "";
      obj.focus();
   }
   else if (result.length !== 6 ){
      alert("�����ȣ�� 6�ڸ��� �Է��ϼž� �մϴ�.('-'����)");
      obj.value = "";
      obj.focus();
   }
   else {
        obj.value = result;
   }
}
/*******************************************************************************************************************

 js_MandatoryCheck()        : �ʵ� �ڸ����� üũ�Ѵ�. ���� submit �ϴ� funtion ������ �̿��Ѵ�.

 ��뿹 : <input type="text" name="From_date" size="10" maxlength="8"  mandatory ="8" mandatoryName="������ȣ" >

********************************************************************************************************************/

function js_MandatoryCheck(frm)
{
    //  alert("Mandatory start");
    var i;
    var mForm =  frm;
    var iElements=frm.elements.length;
    for(i=0; i<iElements; i++)
    {   if (mForm.elements[i].type == "hidden" && mForm.elements[i].getAttribute("mandatory") != null){
        }
//          alert(mForm.elements[i].name);
        if (mForm.elements[i].type == "text" && mForm.elements[i].getAttribute("mandatory") != null)
        {
            if(eval(mForm.elements[i].getAttribute("mandatory"))=='0' && mForm.elements[i].value.length == 0)
            {
                alert(mForm.elements[i].getAttribute("mandatoryName") +"�� �ʼ��Է»��� �Դϴ�.");
                mForm.elements[i].focus();
                return 0;
            }
            else if (eval(mForm.elements[i].getAttribute("mandatory"))!='0' && eval(mForm.elements[i].getAttribute("mandatory")) != mForm.elements[i].value.length)
            {
                alert(mForm.elements[i].getAttribute("mandatoryName") +"�� �ڸ����� �����մϴ�.");
                mForm.elements[i].focus();
                return 0;
            }
        }else if(mForm.elements[i].type == "textarea" && mForm.elements[i].getAttribute("mandatory") != null){
            if(eval(mForm.elements[i].getAttribute("mandatory"))=='0' && mForm.elements[i].value.length == 0)
            {
                alert(mForm.elements[i].getAttribute("mandatoryName") +"�� �ʼ��Է»��� �Դϴ�.");
                mForm.elements[i].focus();
                return 0;
            }
        }else if(mForm.elements[i].type == "select" && mForm.elements[i].getAttribute("mandatory") != null){
            if(eval(mForm.elements[i].getAttribute("mandatory"))=='0' && mForm.elements[i].value.length == 0)
            {
                alert(mForm.elements[i].getAttribute("mandatoryName") +"�� �ʼ����û��� �Դϴ�.");
                mForm.elements[i].focus();
                return 0;
            }
        }else if(mForm.elements[i].type == "password" && mForm.elements[i].getAttribute("mandatory") != null){
            if(eval(mForm.elements[i].getAttribute("mandatory"))=='0' && mForm.elements[i].value.length == 0)
            {
                alert(mForm.elements[i].getAttribute("mandatoryName") +"�� �ʼ��Է»��� �Դϴ�.");
                mForm.elements[i].focus();
                return 0;
            }
        }
    }
}

/************************************************************************************

 js_js_DateType() : ������� ���� �ִ� Input box �󿡼� ������� üũ�ϴ� �Լ�
                    ���� ���ڰ��߿��� type���� ������� �����ڸ� ������ �� �ִ�.
                    js_js_DateType(this, "/") | 20000101-->2000/01/01

 ��뿹      : <input ... onblur = "js_js_DateType(this, "/")">

*************************************************************************************/

function js_DateType(obj, type)
{
   var sDate=obj.value.replace(/(\,|\.|\-|\/|[ ])/g,"");
//   var sFormat="YYYYMMDD";
   var aDaysInMonth=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
   if (sDate.length == 0)
        return;
   if (sDate.length != 8 )
   {
        alert("��¥�� �߸� �Է��Ͽ����ϴ�.\n��¥������ YYYYMMDD�Դϴ�.");
        obj.value ="";
        obj.focus();
        return ;
   }
   else
   {
        var iYear=eval(sDate.substr(0,4));
        var iMonth=eval(sDate.substr(4,2));
        var iDay=eval(sDate.substr(6,2));
        var iDaysInMonth=(iMonth!=2)?aDaysInMonth[iMonth-1]:((iYear%4==0 && iYear%100!=0 || iYear % 400==0)?29:28);
        if( (iDay!=null && iMonth!=null && iYear!=null  && iYear > 1900 && iYear < 2050 && iMonth<13 && iMonth>0 && iDay>0 && iDay<=iDaysInMonth) == false )
        {
            alert("������ ��¥�� ������ �ٽ� Ȯ���Ͻʽÿ�");
            obj.value ="";
            obj.focus();
            return;
        }
        else
        {
            iMonth = (iMonth >=10)? iMonth:"0"+iMonth;
            iDay = (iDay>=10 )? iDay:"0"+iDay;
            obj.value=""+iYear+type+iMonth+type+iDay;
            return true;
        }
   }
}


/*************************************************************************
  1. ���� : ����ȭ�� ������ �ɺ����� ���ְ� ������ ���븸�� �����ش�.
    2. �Է��׸�(Parameter)
            - v  : �Է��ʵ忡 �Է��� String ��.
            - sep   : �����ϰ����ϴ� �ɺ�
*************************************************************************/
function js_RemoveFormat(v, sep) {
  var unformat = "";
  var content  = v.value;
  var arr = content.split(sep);

  for(var i = 0; i < arr.length; i++) {
    unformat += arr[i];
  }

  v.value = unformat;
  return v.value;
}

/*************************************************************************
  1. ���� : �߾ӿ� ���ο� ������ ����.
    2. �Է��׸�(Parameter)
            - url : ��ũ����
            - name : ���ο� ������ name
            - width : ���������
            - height : ������ ����
            - scrollbars : ����
************************************************************************/
function js_CenterNewWin2(url, name, width, height) {
  var wi = screen.width - width;
  var hi = screen.height - height;

  if( wi < 0 ) wi = 0;
  if( hi < 0 ) hi = 0;

  var info = 'left=' + (wi/2) + ',top=' + (hi/2) + ',width='  + width + ',height=' + height + ',resizable=no, scrollbars=no,menubars=no,status=no';
  var newwin = window.open(url, name, info);
  newwin.focus();
  return newwin;
}

/************************************************************************************

 Checking()     : CheckBox�� Checking �ϴ� �Լ�.

*************************************************************************************/

function Checking(CheckData,FormName) {
    var checkVal = 0;
    var count ;
    var instance    ="";

    instance= "document."+FormName+"."+ CheckData;
	var evalInst = eval(instance)+"";

	if(evalInst == "undefined"){
            alert('����� �����ϴ�');
	}else{
		count   =  eval(instance).length;
		for( i = 0 ; i < count ; i++ ){
			if(eval(instance)[i].checked == true){ checkVal++; }
		}
		if( checkVal == 0 ){
			if(eval(instance).checked == true){
				checkVal = 1;
			}else{
				alert('üũ�ڽ��� �ϳ� �̻� �����ϼ��� !!');
			}
		}
	}
    return checkVal;
}
/*
����Ʈ���� üũ�Ǿ��ִ� �׸� üũ�� �����ϰ� ���ִ� �޼ҵ�
*/
function stayCheck(LineNum,FormName,CheckBoxName){
    if (LineNum == "" || LineNum == "0")
    {
        return;
    }

    var instance    ="";
    instance= "document."+FormName+"."+ CheckBoxName;
    var list    =   "";
    list= "document."+FormName+".next_line_num";
    //�ű��̸�... ������ �Ѵ�
    if (LineNum == eval(list).value )
    {
        return;
    }

    if (eval(list).value == 2)
    {
        eval(instance).checked = true;
    }else if (eval(list).value < 2)
    {
    }
    else{
        eval(instance)[LineNum-1].checked = true;
    }
}

/************************************************************************************

 doMutiDel()        : MutiDel �ϴ� �Լ�.

*************************************************************************************/


function doMutiDel(ServletPath,CheckData,FormName){
    var frm = 'document.'+FormName;
    var count = 0;
    frm = eval(frm);
    var url = ServletPath;
    count = Checking(CheckData,FormName);

    if( count != 0 ){
        if( !confirm( count + "�� �׸��� �����Ͻðڽ��ϱ�?") ){
            return false;
        }
        js_CenterNewWin2("", "_new", 400, 300);
        frm.target="_new";
        frm.action=url;
        frm.checkFlag.value="1";
        frm.cmd.value='delete';
        frm.submit();
        frm.target="";
    }
}

/************************************************************************************

 doCancelMuti()     : doCancelMuti �ϴ� �Լ�.

*************************************************************************************/


function doCancelMuti(ServletPath,CheckData,FormName){
    var frm = 'document.'+FormName;
    var count = 0;
    frm = eval(frm);
    var url = ServletPath;
    count = Checking(CheckData,FormName);

    if( count != 0 ){
        if( !confirm( count + "�� �׸��� ����Ͻðڽ��ϱ�?") ){
            return false;
        }
        js_CenterNewWin2("", "_new", 400, 300);
        frm.target="_new";
        frm.action=url;
        frm.checkFlag.value="1";
        frm.cmd.value='authCancel';
        frm.submit();
        frm.target="";
    }
}

/************************************************************************************

 doReasonMuti()     : doReasonMuti �ϴ� �Լ�.

*************************************************************************************/


function doReasonMuti(ServletPath,CheckData,FormName){
    var frm = 'document.'+FormName;
    var count = 0;
    frm = eval(frm);
    var url = ServletPath;
    count = Checking(CheckData,FormName);

    if( count != 0 ){
        if( !confirm( count + "�� �׸��� �����Ͻðڽ��ϱ�?") ){
            return false;
        }
        js_CenterNewWin2("", "_new", 400, 300);
        frm.target="_new";
        frm.action=url;
        frm.checkFlag.value="1";
        frm.cmd.value='authReason';
        frm.submit();
        frm.target="";
    }
}

/************************************************************************************

 doItemMutiDel()        : doItemMutiDel �ϴ� �Լ�.

*************************************************************************************/


function doItemMutiDel(ServletPath,CheckData,FormName){
    var frm = 'document.'+FormName;
    frm = eval(frm);
    var url = ServletPath;

    count = Checking(CheckData,FormName);

    if( count != 0 ){
        if( !confirm( count + "�� �׸��� �����Ͻðڽ��ϱ�?") ){
            return false;
        }
        js_CenterNewWin2("", "_new", 400, 300);
        frm.target="_new";
        frm.action=url;
        frm.checkFlag.value="1";
        frm.cmd.value='itemDelete';
        frm.submit();
        frm.target="";

          return true;
    }
}

/************************************************************************************

 doSingleDel()      : SingleDel �ϴ� �Լ�.

*************************************************************************************/
function doSingleDel(ServletPath){
    var frm = document.myform;
    var url = ServletPath;
    if( confirm( "�����Ͻðڽ��ϱ�?" )){
        js_CenterNewWin2("", "_new", 400, 300);
        frm.target="_new";
        frm.action=url;
        frm.checkFlag.value="1";
        frm.cmd.value='delete';
        frm.submit();
        frm.target="";
    }
}


/************************************************************************************

 doInsert()     : Insert �ϴ� �Լ�.

*************************************************************************************/


function doInsert(ServletPath,checkFlag,aCmdValue){
    var frm = document.myform;
    if(js_MandatoryCheck(frm) != 0){

        js_CenterNewWin2("", "_new", 300, 300);
        frm.target="_new";
        frm.action=ServletPath;
        frm.checkFlag.value=checkFlag;
        frm.cmd.value=aCmdValue;
        frm.submit();
        frm.target="";
    }
}

/************************************************************************************

 doISavet()     : Save �ϴ� �Լ�.

*************************************************************************************/

function doSave(ServletPath,checkFlag,aCmdValue){
    var frm = document.myform;

    if(js_MandatoryCheck(frm) != 0){

        js_CenterNewWin2("", "_new", 300, 300);
        frm.target="_new";
        frm.action=ServletPath;
        frm.checkFlag.value=checkFlag;
        frm.cmd.value=aCmdValue;
        frm.submit();
        frm.target="";
    }
}

/***************************************************************
  1. ���� : textarea�� ���ڼ��� üũ
    2. �Է��׸�(Parameter)
            - txtarea : Textarea Name.
            - charlength : �Է°����� ���ڼ�
*************************************************************************/
function js_Chkbyte(txtarea, charlength) {
  var ch = txtarea.value;
  var temp;
  var cnt=0;

  for( k = 0; k < ch.length; k++ )  {
    temp = ch.charAt(k);
    if( escape(temp).length > 4 )
      cnt += 2;
    else
      cnt++;
  }

    if ( cnt <= charlength ) {
        return true;
    } else {
        alert('���� '+cnt+'byte �Է��ϼ̽��ϴ�! \n\n�ִ� '+ charlength + 'byte����(�ѱ� 2byte) �Է��� �� �ֽ��ϴ�!');
        txtarea.focus();
      return false;
    }
}

/************************************************************************************
 js_CheckDigits()       : 3�ڸ����� �ĸ�(,)�� �־��ִ� �Լ�

 ��뿹                 : <input ... onkeyup = "js_CheckDigits(this)">

*************************************************************************************/

function js_CheckDigits(obj)
{
        var s=obj.value;
        for(j=0; j<s.length; j++)
            s= obj.value.replace(/,/g,"");
    var t="";
    var i;
    var j=0;
    var tLen =s.length;

    if (s.length <= 3 )
    {
        obj.value=s;
        return;
    }

    for(i=0;i<tLen;i++)
    {
       if (i!=0 && ( i % 3 == tLen % 3) )     t += ",";
       if(i < s.length ) t += s.charAt(i);
    }

    obj.value = t;
    return;
}

/************************************************************************************

js_BeforeYear(chkdate)      : ���� �⵵ ������ �⵵ ���� üũ
 ��뿹                             : <input type="text" name="year" onChange="js_BeforeYear(this);">
                                          ==>> (format: "2003-01-11")
*************************************************************************************/
function js_BeforeYear(chkdate){
    if( chkdate.length != 0 ){
        var currDate = new Date();

        var iYear=currDate.getYear();
        var iMonth=currDate.getMonth()+1;
        iMonth = (iMonth >=10)? iMonth:"0"+iMonth;
        var iDay=currDate.getDate();

        var nowDate=""+iYear+iMonth+iDay;

        if(Number(nowDate) < Number(chkdate.value)){
            alert('���� ���� ��¥�� �Է°����մϴ�.\n\n�ٽ� Ȯ���Ͻð� �Է��� �ּ���.');
            chkdate.focus();
            return false;
        }else{
            return true;
        }
    }
}

/************************************************************************************

js_AfterYear(chkdate)       : ���� �⵵ ������ �⵵ ���� üũ
 ��뿹                             : <input type="text" name="year" onChange="js_AfterYear(this);">
                                          ==>> (format: "2003-01-11")
*************************************************************************************/
function js_AfterYear(chkdate){
    if( chkdate.length != 0 ){
        var currDate = new Date();

        var iYear=currDate.getYear();
        var iMonth=currDate.getMonth()+1;
        iMonth = (iMonth >=10)? iMonth:"0"+iMonth;
        var iDay=currDate.getDate();

        var nowDate=""+iYear+iMonth+iDay;

        if(Number(nowDate) > Number(chkdate.value)){
            alert('���� ���� ��¥�� �Է°����մϴ�.\n\n�ٽ� Ȯ���Ͻð� �Է��� �ּ���.');
            chkdate.focus();
            return false;
        }else{
            return true;
        }
    }
}

/*************************************************************************
  1. ���� : �ֹι�ȣ üũ.
    2. �Է��׸�(Parameter)
            - preNoRes  : �ֹι�ȣ �� 6�ڸ� ��ü�� => form.preNoRes
            - postNoRes : �ֹι�ȣ �� 7�ڸ� ��ü�� => form.postNoRes
************************************************************************/
function js_CheckNoRes(preNoRes, postNoRes){

    var str_serial1 = preNoRes;
    var str_serial2 = postNoRes;

    var digit=0
    for (var i=0;i<str_serial1.length;i++){
      var str_dig=str_serial1.substring(i,i+1);
      if (str_dig<'0' || str_dig>'9'){
          digit=digit+1
      }
    }

    if ((str_serial1 == '') || ( digit != 0 )){
      alert('�߸��� �ֹε�Ϲ�ȣ�Դϴ�.\n\n�ٽ� Ȯ���Ͻð� �Է��� �ּ���.');
      //preNoRes.focus();
      return false;
    }

    var digit1=0
    for (var i=0;i<str_serial2.length;i++){
      var str_dig1=str_serial2.substring(i,i+1);
      if (str_dig1<'0' || str_dig1>'9'){
          digit1=digit1+1
      }
    }

    if ((str_serial2 == '') || ( digit1 != 0 )){
      alert('�߸��� �ֹε�Ϲ�ȣ�Դϴ�.\n\n�ٽ� Ȯ���Ͻð� �Է��� �ּ���.');
      //postNoRes.focus();
      return false;
    }

    if (str_serial1.substring(2,3) > 1){
      alert('�߸��� �ֹε�Ϲ�ȣ�Դϴ�.\n\n�ٽ� Ȯ���Ͻð� �Է��� �ּ���.');
      //preNoRes.focus();
      return false;
    }

    if (str_serial1.substring(4,5) > 3){
      alert('�߸��� �ֹε�Ϲ�ȣ�Դϴ�.\n\n�ٽ� Ȯ���Ͻð� �Է��� �ּ���.');
      //preNoRes.focus();
      return false;
    }

    if ((str_serial2.substring(0,1) > 4) || (str_serial2.substring(0,1) == 0)){
      alert('�߸��� �ֹε�Ϲ�ȣ�Դϴ�.\n\n�ٽ� Ȯ���Ͻð� �Է��� �ּ���.');
      //postNoRes.focus();
      return false;
    }

// 2004.3.8
// �����
// �ֹι�ȣ�� üũ�ϴ� ���� ����
    return true;

    var a1=str_serial1.substring(0,1)
    var a2=str_serial1.substring(1,2)
    var a3=str_serial1.substring(2,3)
    var a4=str_serial1.substring(3,4)
    var a5=str_serial1.substring(4,5)
    var a6=str_serial1.substring(5,6)

    var check_digit=a1*2+a2*3+a3*4+a4*5+a5*6+a6*7

    var b1=str_serial2.substring(0,1)
    var b2=str_serial2.substring(1,2)
    var b3=str_serial2.substring(2,3)
    var b4=str_serial2.substring(3,4)
    var b5=str_serial2.substring(4,5)
    var b6=str_serial2.substring(5,6)
    var b7=str_serial2.substring(6,7)

    var check_digit=check_digit+b1*8+b2*9+b3*2+b4*3+b5*4+b6*5

    check_digit = check_digit%11
    check_digit = 11 - check_digit
    check_digit = check_digit%10

    if (check_digit != b7){
      alert('�߸��� �ֹε�Ϲ�ȣ�Դϴ�.\n\n�ٽ� Ȯ���Ͻð� �Է��� �ּ���.');
      return false;
    }

  return true;
}

/************************************************************************************
  js_isBusinessNo(regst_no)     : ����� ��Ϲ�ȣ üũ����
  ��뿹                            :<input type="text" name="regst_no" size="20"
                                      value="<%=StringUtil.toNNull(VendInfoTt.xcovendemdl.regst_no,"")%>"
                                     mandatory ="0" mandatoryName="����ڵ�Ϲ�ȣ"
                                     onblur="javaScript:js_isBusinessNo(this)">

 *************************************************************************************/
 function js_isBusinessNo(regst_no) {
    Regst_no =regst_no;

    if(Regst_no.length ==10){

      strCk1 = Regst_no.substring(0,3);
      strCk2 = Regst_no.substring(3,5);
      strCk3 = Regst_no.substring(5,10);

        arrCkValue = new Array(10);
        if ( (Number(strCk1)) && (Number(strCk2)) && (Number(strCk3)) ) {
                arrCkValue[0] = ( parseFloat(strCk1.substring(0 ,1))  * 1 ) % 10;
                arrCkValue[1] = ( parseFloat(strCk1.substring(1 ,2))  * 3 ) % 10;
                arrCkValue[2] = ( parseFloat(strCk1.substring(2 ,3))  * 7 ) % 10;
                arrCkValue[3] = ( parseFloat(strCk2.substring(0 ,1))  * 1 ) % 10;
                arrCkValue[4] = ( parseFloat(strCk2.substring(1 ,2))  * 3 ) % 10;
                arrCkValue[5] = ( parseFloat(strCk3.substring(0 ,1))  * 7 ) % 10;
                arrCkValue[6] = ( parseFloat(strCk3.substring(1 ,2))  * 1 ) % 10;
                arrCkValue[7] = ( parseFloat(strCk3.substring(2 ,3))  * 3 ) % 10;
                intCkTemp     = parseFloat(strCk3.substring(3 ,4))  * 5  + "0";
                arrCkValue[8] = parseFloat(intCkTemp.substring(0,1)) + parseFloat(intCkTemp.substring(1,2));
                arrCkValue[9] = parseFloat(strCk3.substring(4,5));
                intCkLastid = ( 10 - ( ( arrCkValue[0]+arrCkValue[1]+arrCkValue[2]+arrCkValue[3]+arrCkValue[4]+arrCkValue[5]+arrCkValue[6]+arrCkValue[7]+arrCkValue[8] ) % 10 ) ) % 10;
                if (arrCkValue[9] != intCkLastid) {
                    alert ("�߸��� ����ڵ�Ϲ�ȣ�Դϴ�. �ٽ� Ȯ���� �ֽʽÿ�");
                    return false;
                } else {
                    return true;
                }
            }
    }
}

/*************************************************************************
  1. ���� : �ֹι�ȣ,����ڹ�ȣ üũ.
    2. �Է��׸�(Parameter)
            - obj  : �ڸ����� ���� �ֹι�ȣ,����� ��ȣ�� üũ�Ѵ�.
************************************************************************/

function Check_Digit(obj)
{
    var result  = obj.value;
    var preNoRes;
    var postNoRes;
    result = trimChar(result, '-');

    if( result.length != 0 ){
        if( result.length == 13 ){

            preNoRes=result.substring(0,6)
            postNoRes=result.substring(6,13)

            if( ! js_CheckNoRes(preNoRes, postNoRes)){
                obj.focus();
                return false;
            }else{
                obj.value=preNoRes+"-"+postNoRes;
            }

        }else if(result.length == 10){

            if( ! js_isBusinessNo(result) ){
                obj.focus();
                return false;
            }else{
                strCk1 = result.substring(0,3);
                strCk2 = result.substring(3,5);
                strCk3 = result.substring(5,10);
                obj.value=strCk1+"-"+strCk2+"-"+strCk3;
            }

        }else{
            alert('�߸��� ������ ��ȣ�� �Է��Ͽ����ϴ�.\n�ֹι�ȣ 13�ڸ�\n����ڹ�ȣ 10�ڸ�');
            return false;
        }
    }
}

/*************************************************************************
  1. ���� : �ֹι�ȣ,����ڹ�ȣ üũ. ���� �����ȣ���п� ���� üũ
    2. �Է��׸�(Parameter)
            - obj  : �ڸ����� ���� �ֹι�ȣ,����� ��ȣ�� üũ�Ѵ�.
            - chkval : �����ȣ����
            - fun_gu : ����ڹ�ȣ ��� ����
************************************************************************/

function Check_Digit2(obj,chkfun,fun_gu)
{
    var result  = obj.value;
    var chk_fun = chkfun.value;
    var preNoRes;
    var postNoRes;
    var strCheckFun =   "";
    result = trimChar(result, '-');

    if( result.length != 0 ){
        if( result.length == 13 ){

            preNoRes=result.substring(0,6)
            postNoRes=result.substring(6,13)

            if( ! js_CheckNoRes(preNoRes, postNoRes)){
                alert('�߸��� ������ ��ȣ�� �Է��Ͽ����ϴ�.');
                obj.value="";
                obj.focus();
                return false;
            }else{
                obj.value=preNoRes+"-"+postNoRes;
                if (fun_gu =="2"){
                    strCheckFun =   "174";
                }else{
                    strCheckFun =   "5AB";
                }
            }
        }else if(result.length == 10){
                if( ! js_isBusinessNo(result) ){
                    alert('�߸��� ������ ��ȣ�� �Է��Ͽ����ϴ�.');
                    obj.value="";
                    obj.focus();
                    return false;
                }else{
                    strCk1 = result.substring(0,3);
                    strCk2 = result.substring(3,5);
                    strCk3 = result.substring(5,10);
                    obj.value=strCk1+"-"+strCk2+"-"+strCk3;
                    if (fun_gu =="2"){
                        strCheckFun ="58";
                    }else{
                        strCheckFun ="AHP";
                    }
                }
        }else{
            alert('�߸��� ������ ��ȣ�� �Է��Ͽ����ϴ�.');
            obj.value="";
            obj.focus();
            return false;
        }
    }

    if (strCheckFun != ""){
        onComboChange(chkfun,strCheckFun);
    } else {
        strCheckFun = "";
        onComboChange(chkfun,strCheckFun);
    }

}

/*************************************************************************
  1. ���� : �ֹι�ȣ,����ڹ�ȣ üũ. ���� �����ȣ���п� ���� üũ
    2. �Է��׸�(Parameter)
            - obj  : �ڸ����� ���� �ֹι�ȣ,����� ��ȣ�� üũ�Ѵ�.
            - chkval : �����ȣ����
            - fun_gu : ����ڹ�ȣ ��� ����
    3.������
************************************************************************/

function Check_Digit4(obj,chkfun,fun_gu)
{
    var result  = obj.value;
    var chk_fun = chkfun.value;
    var preNoRes;
    var postNoRes;
    var strCheckFun =   "";
    result = trimChar(result, '-');

    if( result.length != 0 ){
        if( result.length == 13 ){

            preNoRes=result.substring(0,6)
            postNoRes=result.substring(6,13)

            if( ! js_CheckNoRes(preNoRes, postNoRes)){
                alert('�߸��� ������ ��ȣ�� �Է��Ͽ����ϴ�.');
                obj.value="";
                obj.focus();
                return false;
            }else{
                obj.value=preNoRes+"-"+postNoRes;
                if (fun_gu =="2"){
                    strCheckFun =   "174";
                }else{
                    strCheckFun =   "5AB";
                }
            }
        }else if(result.length == 10){
                if( ! js_isBusinessNo(result) ){
                    alert('�߸��� ������ ��ȣ�� �Է��Ͽ����ϴ�.');
                    obj.value="";
                    obj.focus();
                    return false;
                }else{
                    strCk1 = result.substring(0,3);
                    strCk2 = result.substring(3,5);
                    strCk3 = result.substring(5,10);
                    obj.value=strCk1+"-"+strCk2+"-"+strCk3;
                    if (fun_gu =="2"){
                        strCheckFun ="58";
                    }else{
                        strCheckFun ="AHP";
                    }
                }
        }else{
            alert('�߸��� ������ ��ȣ�� �Է��Ͽ����ϴ�.');
            obj.value="";
            obj.focus();
            return false;
        }
    }
    if (strCheckFun != ""){
        chkfun.value = strCheckFun
    } else {
        strCheckFun = "";
        chkfun.value = "";
    }

}

/*************************************************************************
  1. ���� : ����ڹ�ȣ üũ.
    2. �Է��׸�(Parameter)
            - obj  : ����ڸ��� ��ȣ�� üũ�Ѵ�.
************************************************************************/

function Check_Digit3(obj)
{
    var result  = obj.value;
    var preNoRes;
    var postNoRes;
    result = trimChar(result, '-');
    if( result.length == 0 ){return false;};
    if( result.length == 10 ){
        if( ! js_isBusinessNo(result) ){
            obj.value='';
            obj.focus();
            return false;
        }else{
            strCk1 = result.substring(0,3);
            strCk2 = result.substring(3,5);
            strCk3 = result.substring(5,10);
            obj.value=strCk1+"-"+strCk2+"-"+strCk3;
        }
    }else{
        alert('�߸��� ������ ��ȣ�� �Է��Ͽ����ϴ�.\n����ڹ�ȣ 10�ڸ�');
        obj.value='';
        obj.focus();
        return false;
    }
}






//ajax
//���� üũ
function startRequestInArgument(ServletPath, documentNo, companyId )
{

	if(ServletPath!=null ) {
	    				//alert(documentNo);
	    				//alert(companyId);
	    				//alert(ServletPath);
	 	createXMLHttpRequest();
	    xmlHttp.onreadystatechange = handleStateChange;
	    xmlHttp.open("post", ServletPath, false);
	    xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	    xmlHttp.send("cmd=getLicInfStatus&COND_LIC_NO="+documentNo+"&COMPANY_ID="+companyId);
    }
}


/************************************************************************************

 doCopy(ServletPath,CheckData,FormName)       : ����Ʈ���� ������ �������ִ� �Լ�.

*************************************************************************************/
function doCopyList(ServletPath,CheckData,FormName){
    var frm = 'document.'+FormName;
    var count = 0;
    frm = eval(frm);
    var url = ServletPath;
    count = Checking(CheckData,FormName);
    if( count != 0 ){
        if( count != 1 ){
			alert("üũ�ڽ��� �ϳ��� �������ֽʽÿ�.");
            return false;
        }
		doCopy(ServletPath);
    }
}


/************************************************************************************

 doAccount()        : ������ �ܰ��� �ݾ��� ���ϴ� �Լ�.

*************************************************************************************/

function doAccount(){
    var amt = document.myform.AMT;
    var count = document.myform.QTY.value;
    var price = document.myform.UNITPRICE.value;

    amt.value = count * price;
    if( amt.value == 0 )
        amt.value = '';
}



/************************************************************************************

 getMean()      : selectbox���� �ڵ���� ���������Լ�.

*************************************************************************************/

function getMean( selectbox, changeVal ){
    var changeText;
    var selecttxt;
    var seperator = ":";
    var selectval;
    //?b��â������ �����ְ� ����    2004.10.15  ���α�
    if (document.myform == undefined)
    {
        changeText = eval( "document.frm."+ changeVal );
    }
    else
    {
        changeText = eval( "document.myform."+ changeVal );
    }

    selecttxt=selectbox[selectbox.selectedIndex].text;
    val = selecttxt.split(seperator);

    if (val.length == 1)
    {
        // --�����ϼ��� �ϰ�� �׳� ����    2004.11.19
        return;
    }

    selectval = trim(val[1]," ");
    changeText.value =  selectval;

    return  selectval;
}

/************************************************************************************

 getMean2()     : selectbox���� �ڵ���� ���������Լ�.������

*************************************************************************************/

function getMean2( selectbox, changeVal ){
    var changeText = eval( "document.myform."+ changeVal );
    var selecttxt;


    selecttxt=selectbox[selectbox.selectedIndex].text;
    changeText.value = selecttxt;
    return selecttxt;
}


/************************************************************************************

 getMean()      : checkbox���� ���� ��Ʈ���ϴ��Լ�.

*************************************************************************************/

function checkChange( obj, str ){
    var checkbox;
    str = "document.myform."+ str;
    checkbox = eval( str );

    if( obj.checked )
        checkbox.value = 'Y';
    else
        checkbox.value = 'N';
}

function getDateTime(fld)
{
    var runTime = new Date();
    timePortion = new Array;
    timePortion[0] = runTime.getFullYear();
    timePortion[1] = runTime.getMonth()+1;
    if (timePortion[1]<10){
        timePortion[1] = "0"+timePortion[1];
    }
    timePortion[2] = runTime.getDate();
    if (timePortion[2]<10){
        timePortion[2] = "0"+timePortion[2];
    }
    timePortion[3] = runTime.getHours();
    if (timePortion[3]<10){
        timePortion[3] = "0"+timePortion[3];
    }
    timePortion[4] = runTime.getMinutes();
    if (timePortion[4]<10){
        timePortion[4] = "0"+timePortion[4];
    }
    timePortion[5] = runTime.getSeconds();
    if (timePortion[5]<10){
        timePortion[5] = "0"+timePortion[5];
    }
    fld.value = timePortion[0] + "-" +  timePortion[1] +"-" + timePortion[2]+" "+ timePortion[3]+":"+ timePortion[4]+":"+ timePortion[5];
}
function getRtnDateTime()
{
    var runTime = new Date();
    timePortion = new Array;
    timePortion[0] = runTime.getFullYear();
    timePortion[1] = runTime.getMonth()+1;
    if (timePortion[1]<10){
        timePortion[1] = "0"+timePortion[1];
    }
    timePortion[2] = runTime.getDate();
    if (timePortion[2]<10){
        timePortion[2] = "0"+timePortion[2];
    }
    timePortion[3] = runTime.getHours();
    if (timePortion[3]<10){
        timePortion[3] = "0"+timePortion[3];
    }
    timePortion[4] = runTime.getMinutes();
    if (timePortion[4]<10){
        timePortion[4] = "0"+timePortion[4];
    }
    timePortion[5] = runTime.getSeconds();
    if (timePortion[5]<10){
        timePortion[5] = "0"+timePortion[5];
    }
    return timePortion[0] + "-" +  timePortion[1] +"-" + timePortion[2]+" "+ timePortion[3]+":"+ timePortion[4]+":"+ timePortion[5];
}


/*--------------------------------------------------
����üũ��� �Լ�
��)if(document.frmlc.oGanrino.value == "") ���
   if(isEmpty(document.frmlc.oGanrino.value)) ��� ���� "  "���� ������ üũ�� �� ����.
--------------------------------------------------*/
function isEmpty(str){
    if(str == "" || str == null || trim(str).length == 0){
        return true;
    }else{
        return false;
    }
}
function checkNum(fld,plusCheck,minorCheck){
    var dst = trimChar(fld.value, ","); //���� ,�� ��� ���ش�
    var intPlus     =   0;
    var intMinor    =   0;
    var isNagative  =   false;
    var alertMessage    =   "";
    for(i=0; i<dst.length; i++)
    {
            if (dst.charAt(i) == '.') {
                isNagative = true;
                continue;
            }
            if (!isNagative){           //��� ����̸�
                intPlus = intPlus + 1;
            }
            else{                                   //��������̸�
                intMinor    =   intMinor + 1;
            }
    }
    if (intPlus>plusCheck){
        alertMessage = "�Է°����� �ڸ����� �ʰ��Ǿ����ϴ�";
    }
    if (intMinor>minorCheck){
        alertMessage = alertMessage + "\n" + "�Է°����� �ڸ����� �ʰ��Ǿ����ϴ�";
    }

    if (alertMessage != ""){
        alert(alertMessage);
        fld.value="";
        fld.focus();
        return false;
    }
    return true;
}
//���ڸ� �Է°����ϰ�
function checkNumber(obj, value) {

    var regExp = /[^0-9]+/g;

    if(regExp.test(value)) {

//        alert("'����' �� �Է� �����մϴ�.");

        var returnStr = "";

        for(i = 0; i < value.length; i++) {
            if(value.charAt(i) >= '0' && value.charAt(i) <= '9') {
                returnStr += value.charAt(i);
            }
        }

        obj.value = returnStr;
        obj.focus();
    }
}
// �־��� ���ڿ��� ��ġdata���� �˻�
function isNum(src)
{
  var dst = trimChar(src, ",");
  dst = trim(dst, ' ');

  return !isNaN(Number(dst));
}

/******************************************************************************
    Description     : ������ ���̸� ����Ͽ���. �ѱ��� 2�� ����,���ڴ� 1��
    Parameter       :
    return value    :
    Modification Date    : 2002/12/16
*******************************************************************************/
function textFieldCheckLen(fld)
{
    var temp;
    var num;
    var len;
    num = 0;
    len = fld.value.length;

    for(k=0;k<len;k++) {
        temp = fld.value.charAt(k);

        //�����Լ� escape�� ���� �� ������ ���̰� 4���� ũ�� �ѱ��̹Ƿ� 2�� ���Ѵ�.
        if(escape(temp).length > 4)
        num += 2;
        else
        num++;

    }
    return num;
}

/******************************************************************************
    Description     : �ش� ���� �̻��� ���ڴ� textfield�� ���� ����
    Parameter       :
    return value    :
    Modification Date    : 2002/12/16
*******************************************************************************/
function textFieldChk(fld,LimitCnt)
{
    var intCnt = 0 ;
    var textValue = "";
    var isSpecheck = false;


    intCnt = textFieldCheckLen(fld) ;
    //document.frmlc.oNum.value = intCnt;

    isSpecheck = specialchr(fld.value);
    if (isSpecheck){
        alert("_~!@#$^{}[]?|\` ���ڴ� �Է��Ҽ� �����ϴ�.");
        fld.value='';
        fld.focus();
        return false;
    }

    if (intCnt > LimitCnt)
    {
        for (t=0;t< LimitCnt; t++)
        {
            if (escape((fld.value).substr(t,1)).length > 4)
            {
                LimitCnt = LimitCnt -1;
            }
        }
        alert("���� �Է��Ͻ� �ʵ�� " + LimitCnt + " �̻� �ԷºҰ� �մϴ�.\n�Է��� ���ڼ��� :"+intCnt+"\n���ѵ� ���ڼ� �̻��� ���ڴ� �ڵ����� �����մϴ�.\n[**�ѱ��ѱ��ڴ� 2���ڷ� ����**]");
        fld.value = (fld.value).substr(0,LimitCnt);
        fld.focus();
        return false;
    }
    return true;
}

/*
Ư�����ڰ� ������ �����ִ� �޼ҵ�
Ư�����ڰ� ������ ���ϰ��� true�� ������ �ȴ�....
*/
function specialchr(str) {
    var isChecked   =   false;
    var specialchr = "_~!@#$^{}[]?|\\`";

    for(i = 0; i < str.length; i++) {

        if(-1 == specialchr.indexOf(str.charAt(i) )) {
            isChecked = false;
        }else{
            return true;
        }
    }
    return isChecked;

}



/******************************************************************************
    Description     : �ѱ� �Է��� ���� �޼ҵ�
    Parameter       :
    return value    :
    Modification Date    : 2002/12/16
*******************************************************************************/
function codeChk(fld,LimitCnt)
{
    len = fld.value.length
    if (len > LimitCnt)
    {
        alert("�ڵ�κп��� " + LimitCnt + "�̻��� ���ڸ� �Է��Ҽ� �����ϴ�");
        fld.value = "";
        fld.focus();
        return;
    }
    for (t=0;t< len; t++)
    {
        if (escape((fld.value).substr(t,1)).length > 4)
        {
            alert("�ڵ�κп� �ѱ��� �Է��ϽǼ������ϴ�.");
            fld.value = "";
            fld.focus();
            return;
        }
    }
    fld.value = fld.value.toUpperCase()
}
/******************************************************************************
    Description     : �ѱ� �Է��� ���� �޼ҵ�
    Parameter       :
    return value    :
    Modification Date    : 2002/12/16
*******************************************************************************/
function engChk(fld)
{
    len = fld.value.length
    for (t=0;t< len; t++)
    {
        if (escape((fld.value).substr(t,1)).length > 4)
        {
            alert("�ѱ��� �Է��Ͻ� �� �����ϴ�.");
            fld.value = "";
            fld.focus();
            return;
        }
    }
    fld.value = fld.value.toUpperCase()
}

function idCheck(fld,LimitCnt, name )
{
    len = fld.value.length
    if (len > LimitCnt)
    {
        alert( name + " �κп��� " + LimitCnt + "�̻��� ���ڸ� �Է��Ҽ� �����ϴ�");
        fld.value = "";
        fld.focus();
        return;
    }
    for (t=0;t< len; t++)
    {
        if (escape((fld.value).substr(t,1)).length > 4)
        {
            alert(name + " �κп� �ѱ��� �Է��ϽǼ������ϴ�.");
            fld.value = "";
            fld.focus();
            return;
        }
    }
}


function formatChk(fld,LimitCnt,name)
{
    len = fld.value.length
    if (len > LimitCnt)
    {
        alert(name + "�� " + LimitCnt + "�ڸ� �Է� �����մϴ�.");
        fld.value = "";
//      fld.focus();
        return;
    }
    for (t=0;t< len; t++)
    {
        if (escape((fld.value).substr(t,1)).length > 4)
        {
            alert( name + "�κп��� �ѱ��� �Է��ϽǼ������ϴ�.");
            fld.value = "";
//          fld.focus();
            return;
        }
    }
}

function formatChk2(fld,LimitCnt,name)
{
    len = fld.value.length
    if (len != LimitCnt)
    {
        alert(name + "�� " + LimitCnt + "�ڸ� �Է� �����մϴ�.");
        fld.value = "";
//      fld.focus();
        return;
    }
    for (t=0;t< len; t++)
    {
        if (escape((fld.value).substr(t,1)).length > 4)
        {
            alert( name + "�κп��� �ѱ��� �Է��ϽǼ������ϴ�.");
            fld.value = "";
//          fld.focus();
            return;
        }
    }
}


/******************************************************************************
    Description     : ��ü�ڵ� ������ ����� ��ȣ ���� �ڵ����� �־��ִ� �Լ�
    Parameter       : �����(�ֹε�Ϲ�ȣ),����ڹ�ȣ���� �ʵ��,��ȣ ����(���� ��Ź���� ��� �ڵ尡 �ٸ�)
    return value    :
    Modification Date    : 2003/01/06
******************************************************************************/
function AddFunCode(fld,funcode,fungu) {
    var chrspno
    var fun_gu
    var fun_code

    chrspno = trimChar(fld.value,'-');
    if (chrspno.length != 0) {
        if (chrspno.length ==10) {
            if (fungu == "1"){
                fun_code = "AHP";
            }else {
                fun_code = "58";
            }
            fld.value = chrspno.substring(0,3)+"-"+chrspno.substring(3,5)+"-"+chrspno.substring(5,10);
        }else if(chrspno.length == 13){
            if (fungu == "1"){
                fun_code = "5AB";
            }else {
                fun_code = "174";
            }
            fld.value = chrspno.substring(0,6)+"-"+chrspno.substring(6,13);
        }else{
            fun_code ="";
            fld.value="";
        }
        funcode.value = fun_code ;
        if (fun_code.length != 0){
            onComboChange(funcode,fun_code);
        }
    }
}


function onComboChange(fld_name,aStr)
{
    for (i = 0 ; i < fld_name.length ; i ++ )
    {

        if (fld_name.options[i].value == aStr)
        {
            fld_name.options[i].selected = true;
        }
    }

}

/************************************************************************************

js_BeforeYear(chkdate)      : ������ ��¥ �ԷºҰ�
 ��뿹                             : <input type="text" name="year" onChange="js_BeforeYear(this);">
                                          ==>> (format: "2003-01-11")
*************************************************************************************/
function js_BeforeDate(chkdate,comdate,mes){
    if( chkdate.value.length != 0 && comdate.value.length != 0){

        if(chkdate.value < comdate.value){
            alert(mes+' �׸� ���� ��¥�� �Է°����մϴ�.\n\n�ٽ� Ȯ���Ͻð� �Է��� �ּ���.');
            chkdate.value="";
            chkdate.focus();
            return false;
        }else{
            return true;
        }
    }
}

/************************************************************************************

js_AfterYear(chkdate)       : ���� ���� �Է� �Ұ�
 ��뿹                             : <input type="text" name="year" onChange="js_AfterYear(this);">
                                          ==>> (format: "2003-01-11")
*************************************************************************************/
function js_AfterDate(chkdate,comdate,mes){
    if( chkdate.value.length != 0 && comdate.value.length != 0 ){

        if(chkdate.value > comdate.value){
            alert(mes+' �׸� ���� ��¥�� �Է°����մϴ�.\n\n�ٽ� Ȯ���Ͻð� �Է��� �ּ���.');
            chkdate.value="";
            chkdate.focus();
            return false;
        }else{
            return true;
        }
    }
}

/************************************************************************************

js_AfterYear(chkdate)       : ���� ���� ���� �Է� �Ұ�
 ��뿹                             : <input type="text" name="year" onChange="js_AfterYear(this);">
                                          ==>> (format: "2003-01-11")
*************************************************************************************/
function js_toDate(chkdate){
    var js_toDate   =   new Date();
    var temp,allTemp;
    var year,month,day;
    var dateDiv;
    dateDiv = 0;
    var isDayDiffer;
    allTemp = "";


    for (i=0;i< chkdate.value.length ;i++ ){
        temp = chkdate.value.charAt(i);
        if (temp=='-'){
            dateDiv = dateDiv +1;
            if (dateDiv ==1){
                year = allTemp;
                allTemp = "";
            }else if (dateDiv ==2){
                month = allTemp ;
                allTemp = "";
            }else if (dateDiv ==3){
                day = allTemp;
                allTemp = "";
            }else{
                allTemp = "";
            }
        }else{
            allTemp = allTemp +temp;
        }
    }
    day = allTemp;
    var isDay   =   new Date(year,month-1,day);
    isDayDiffer = isDay - js_toDate;
    isDayDiffer = Math.floor(isDayDiffer/(24*3600*1000));
    if( isDayDiffer < -1 ){
        alert('���� �������ڴ� �Է��ϽǼ� �����ϴ�.\n\n�ٽ� Ȯ���Ͻð� �Է��� �ּ���.');
        chkdate.value="";
        chkdate.focus();
        return false;
    }
}

/************************************************************************************

js_AfterYear(chkdate)       : ��ȿ�Ⱓ 1���ķ� ��� �� ������ �ٲ��� 12��31�̷� �Է�
 ��뿹                             : <input type="text" name="year" onChange="js_AfterYear(this);">
                                          ==>> (format: "2003-01-11")
*************************************************************************************/
function js_ExpDate(chkdate,js_ExpDate){



    var isDay   =   new Date(year,month-1,day);
    isDayDiffer = isDay - js_toDate;
    isDayDiffer = Math.floor(isDayDiffer/(24*3600*1000));
    if( isDayDiffer < 0 ){
        alert('���� �������ڴ� �Է��ϽǼ� �����ϴ�.\n\n�ٽ� Ȯ���Ͻð� �Է��� �ּ���.');
        chkdate.value="";
        chkdate.focus();
        return false;
    }
}


/************************************************************************************

js_OnlyChar()       : �����Է¸� ��ȿ�ϰ� �ϴ� �Լ�
 ��뿹                             : <input type="text" name="year" onKeypress()="js_ExpDate();">

*************************************************************************************/
function js_OnlyChar(){
    sFilter="[0-9]";
    if(sFilter)
    {
      var sKey=String.fromCharCode(event.keyCode);
      var re=new RegExp(sFilter);
      // Enter�� Ű�˻縦 ���� �ʴ´�.
      if(re.test(sKey)) event.returnValue=false;
    }
}

/************************************************************************************

js_EmailCheck()     : �̸����ּ� üũ
 ��뿹                             : <input type="text" name="year" onBlur()="js_EmailCheck(this);">

*************************************************************************************/
function js_EmailCheck( obj){
    var len = obj.value.length;
    var charater;
    var temp = false;
    var temp1= false;
    if( len == 0 ){ return false; }
    for (t=0;t< len; t++)
    {
        character = escape((obj.value).substr(t,1));
        if (character == "\@")  {temp = true;}
        if (character == "\.")  {temp1 = true;}
    }
    if( !(temp && temp1) ){
        alert("�̸��� ������ �ƴմϴ�.");
        obj.focus();
        return false;
    }
    return textFieldChk(obj,35);
}



/************************************************************************************
  js_listSearch()       : ����Ʈ���� Enter�� ġ�� �˻��� �Ѵ�.

 *************************************************************************************/
function js_listSearch(){
    if( event.keyCode == 13 ){
        Search();
    }
}

/************************************************************************************
  passChk()     :�н����� üũ

 *************************************************************************************/
function passChk( obj ){
    var i,temp;
    var arr = new Array(0,0,0);
    if( obj.value != '' ){
        for( i = 0; i < obj.value.length ; i++ ){
            temp = obj.value.charCodeAt(i);
            if( i == 0 ){
                if( temp<65 || (temp>90&&temp<97) || temp>122 ){
                    alert( "�н������� ù�ڴ� �������̿��� �մϴ�.");
                    obj.value = '';
                    obj.focus();
                    return false;
                }
            }
            arr[2] = arr[1];
            arr[1] = arr[0];
            arr[0] = temp;
            if( arr[0] == arr[1] && arr[1] == arr[2] && arr[0] == arr[2] ){
                alert( "�н������ ���� ���ڰ� ���� ���ӵɼ� �����ϴ�");
                obj.value = '';
                obj.focus();
                return false;
            }
        }
    }
}
/************************************************************************************
  js_getSubCompany_id()     :ȸ����ID �޺κ��� ��� �޼ҵ�
                                isorg = 'N'�̸� 'B'�� 'Y'�̸� 'A'�� ���ó�¥�ڿ� ���δ�.
 *************************************************************************************/
function js_getSubCompany_id( isorg ){
    var current = new Date();
    var year = current.getYear();
    var mon  = current.getMonth()+1;
    var day  = current.getDate();
    var str;
    if( isorg == 'N' ){
        str = 'B';
    }else{
        str = 'A';
    }

        if(mon<10)
             mon = "0" + mon;
        if(day<10)
             day = "0" +day;

    return (year+'').substring(2,4) + mon + day + str;
}

/***********************************************************************
*  �� ��  : Left �޴� �̹��� ����
*  ��뿹 :
************************************************************************/
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

/***********************************************************************
*  �� ��  : Left �޴� �̹��� ����
*  ��뿹 :
************************************************************************/
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

/***********************************************************************
*  �� ��  : Left �޴� �̹��� ����
*  ��뿹 :
************************************************************************/
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

/***********************************************************************
*  �� ��  : Left �޴� �̹��� ����
*  ��뿹 :
************************************************************************/
function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

/***********************************************************************
*  �� ��  : Left �޴� �� 3 depth �޴� ����
*  ��뿹 :
************************************************************************/
function showhide(num)    {  // 2depth �޴��� Ŭ���� Ŭ������ ���� 2depth �޴��� ���� 3depth�� �޴��� ����
  for (i=1; i<=main_cnt; i++)   {
      menu=eval("document.all.block"+i+".style");
      if (num==i) {
          if (menu.display=="block")  {
            menu.display="none";
          } else {
            menu.display="block";
          }
      }
  }
}

/***********************************************************************
*  �� ��  : Left �޴� �� 3 depth �޴� ����
*  ��뿹 :
************************************************************************/
function show(num)    {  // 2depth �޴��� Ŭ���� Ŭ���� 2depth �޴��� ���� 3depth �޴��� ������
  for (i=1; i<=main_cnt; i++)   {
      menu=eval("document.all.block"+i+".style");
        if (num==i) {
          menu.display="block";
        } else {
          menu.display="none";
        }
  }

  var frm   = document.forms[0];
  frm.clickedMenu.value = num;
}

/***********************************************************************
*  �� ��  : Left �޴� �� 3 depth �޴� ����
*  ��뿹 :
************************************************************************/
function change_on(num,onsrc)   {  // on �Ǿ����� on �̹����� �ٲ�
  if(onimage == num){
    document["ChangingPix"+num].src = Pix[num-1];
    showhide(num);
    onimage=0;
  }else{
    document["ChangingPix"+num].src = onsrc;
    onimage=num;
  }
}

/***********************************************************************
*  �� ��  : Left �޴� �� 3 depth �޴� ����
*  ��뿹 :
************************************************************************/
function change_off(num)    {  // on ���� ���� �̹������� off �̹����� �ٲ�
  for (i=1; i<=main_cnt; i++)   {
    if(i != num){
        document["ChangingPix"+i].src = Pix[i-1];
    }
  }
}

/***********************************************************************
*  �� ��  : ���ʸ޴��� Ŭ���Ͽ� �̵��� url
*  ��뿹 :
************************************************************************/
function goLink(vLink, showNum) {
  window.location = vLink + "&clickedMenu=" + showNum;
}

/***********************************************************************
*  �� ��  : ���ʸ޴��� Ŭ���Ͽ� �Ϻ� �޴��� �������� �Ѵ�.
*  ��뿹 :
************************************************************************/
function fOnLoad() {
    show(document.myform.clickedMenu.value);
}


/**
 * ������ü�� �Ѵ�.
 *
 * @param vP_NOTI_GOV_CODE ����ڵ�
 * @param vP_NOTI_COM_CODE ��ü�ڵ�
 * @param vP_NOTI_DOCUMENT_FUN �����ڵ�
 * @param vDOCUMENT_NO ������ȣ
 * @param vP_GOODS ���� ��ǰ��
 * @param vP_AMT �ŷ��ݾ�(�ݾ׸� �־��ּ���, ex) 1,000 -> 1000 )
 * @param vP_MID �������̵� (= ����� PG_ID)
 * @param vP_MNAME ���� �ѱ۸� (= �����)
 * @param vP_UNAME ���� ������
 * @param vP_EMAIL ����� e-mail ����
 */
function on_bank(vP_NOTI_GOV_CODE, vP_NOTI_COM_CODE, vP_NOTI_DOCUMENT_FUN, vDOCUMENT_NO, vP_GOODS, vP_AMT, vP_MID, vP_MNAME, vP_UNAME, vP_EMAIL, vP_NEXT_URL) {
    var fm = document.btpg_form;
    window.name = "BTPG_CLIENT";
    BTPG_WALLET = window.open("", "BTPG_WALLET", "width=380,height=420");
    if ( BTPG_WALLET != null) {
        BTPG_WALLET.focus;
        fm.target = "BTPG_WALLET";
        fm.action = "https://pg.banktown.com/wallet/bank/";

    fm.P_OID.value = vP_NOTI_DOCUMENT_FUN + "-" + vP_NOTI_COM_CODE + "-" + vDOCUMENT_NO;

    fm.P_NOTI.value = "GOV_CODE=" + vP_NOTI_GOV_CODE + ",COM_CODE=" + vP_NOTI_COM_CODE + ",DOCUMENT_NO=" + vDOCUMENT_NO + ",DOCUMENT_FUN=" + vP_NOTI_DOCUMENT_FUN;
    fm.P_GOODS.value = vP_GOODS;

    fm.P_AMT.value = vP_AMT;
    fm.P_MID.value = vP_MID;

    fm.P_MNAME.value = vP_MNAME;
    fm.P_UNAME.value = vP_UNAME;
    fm.P_EMAIL.value = vP_EMAIL;
    fm.P_NEXT_URL.value = vP_NEXT_URL;

        //fm.btn_card_pay.disabled = true;
        //fm.btn_bank_pay.disabled = true;
        //fm.btn_ktcard_pay.disabled = true;
        //fm.btn_mobile_pay.disabled = true;
        //fm.btn_vtrans_pay.disabled = true;

        fm.submit();

    } else {
        webblasare = navigator.appVersion;
        if ( (webblasare.indexOf("Windows NT 5.1") != -1 )&& (webblasare.indexOf("SV1")!=-1) ){
            alert("��ũŸ�� ���� �˾�â�� ������ �� �����ϴ�. \n�������� ��� ����� [�˸� ǥ����]�� Ŭ���Ͻ� �� \n[���� ����Ʈ�� �˾��� �׻� ���]���� �����Ͽ� �ּ���.");
        } else {
            alert("��ũŸ�� ���� �˾�â�� ������ �� �����ϴ�.");
        }
    }
}

/******************************************************************************
*  �� ��  : ������� ���������� �̵�
*  ��뿹 :
//   ParambyName     : 1. orgType   - ����� Ÿ��
//
*******************************************************************************/
function goOrgPage(orgType){
    var goUrl;
    if(orgType == '02'){
        goUrl = "/JSP/main/agency/agency02.jsp";
    }else if(orgType == '03'){
        goUrl = "/JSP/main/agency/agency03.jsp";
        }else if(orgType == '04'){
        goUrl = "/JSP/main/agency/agency04.jsp";
        }else if(orgType == '05'){
        goUrl = "/JSP/main/agency/agency05.jsp";
        }else if(orgType == '06'){
        goUrl = "/JSP/main/agency/agency06.jsp";
        }else if(orgType == '07'){
        goUrl = "/JSP/main/agency/agency07.jsp";
        }else if(orgType == '08'){
        goUrl = "/JSP/main/agency/agency08.jsp";
        }else if(orgType == '09'){
        goUrl = "/JSP/main/agency/agency09.jsp";
        }else if(orgType == '10'){
        goUrl = "/JSP/main/agency/agency10.jsp";
        }else if(orgType == '11'){
        goUrl = "/JSP/main/agency/agency10.jsp";
        }else if(orgType == '12'){
        goUrl = "/JSP/main/agency/agency12.jsp";
        }else if(orgType == '13'){
        goUrl = "/JSP/main/agency/agency13.jsp";
        }else if(orgType == '14'){
        goUrl = "/JSP/main/agency/agency14.jsp";
        }else{
        goUrl = "/JSP/index.jsp";
        }
        location.href(goUrl);
}

/***********************************************************************
*  �� ��  : ������ �����Ѵ�.
*  ��뿹 :
************************************************************************/
function js_commonSaveExcel(vExcelSize) {

  // ��ȸ �����Ͱ� 10000(����)�̻��� ���
  // ������ ������ �� ����.
  if (vExcelSize > 10000) {
        alert("��ȸ�� �����Ͱ� " + vExcelSize + " �� �Դϴ�. \n\n"
        + "�����δ� 10000 �Ǳ����� ����˴ϴ�.\n\n"
        + "��ȸ������ �����Ͽ� �ٽ� ��ȸ�� �ּ���.");

    return;
  }

  var frm = document.forms[0];

  frm.cmd.value = "excel";
  frm.submit();
}

/******************************************************************************
    Description     : �Ķ���ͷ� �Ѱ��� �ּ��� �˾�(popup)
    Parameter       :
    return value    :
*******************************************************************************/
function makePopup(goUrl,companyid)
{
        var popOption
        var url
        url = "/JSP/popup/modalReport.jsp?URL="+goUrl+"&company_id="+companyid;
        popOption = "dialogWidth: 850px; dialogHeight: 740px; dialogTop: 0px;, dialogLeft: 0px; edge: Raised; center: Yes; help: No; resizable: No; status: No;";
        win = window.showDialog(url,window,popOption);
}


/******************************************************************************
    Description     : �йи�����Ʈ ��ũ
    Parameter       :
    return value    :
*******************************************************************************/
function change1(form)
{
  if(form.url.options[form.url.selectedIndex].value != ""){
        window.open(form.url.options[form.url.selectedIndex].value);
    }
}

/******************************************************************************
    Description     : �Ķ���ͷ� �Ѱ��� �ּ��� �˾�(popup)
    Parameter       :
    return value    :
*******************************************************************************/
function makeAdminPopup(goUrl)
{
        var popOption
        var url
        url = goUrl;
        popOption = "dialogWidth: 730px; dialogHeight: 740px; dialogTop: 0px;, dialogLeft: 0px; edge: Raised; center: Yes; help: No; resizable: No; status: No;";
        win = window.showModalDialog(url,window,popOption);
}


/******************************************************************************
    Description     : �Է��� ������ ��ŭ ���� ���� - $ADD 200509
    Parameter       : ��õ����, ��ȿ�Ⱓ
    return value    : ��ȿ����
                      - �������� �ڵ� 3�ڸ�(�� => 1��:'001' ~ 12��:'012', �⸻:'999')
*******************************************************************************/
function js_DateForMonth(rec_date, exp_day) {
  var frmMain   = document.forms[0];
  var txtDate   = "";  //��õ����
  var txtField  = "";  //�ʵ��̸�
  var strExpDay = "";  //��ȿ�Ⱓ�ڵ�
  var txtMonth  = 0;   //��ȿ�Ⱓ������
  var _year     = "";
  var _month    = "";
  var _day      = "";
  var rValue    = "";
  var returnDate  = "";

    txtDate = rec_date;
    strExpDay = exp_day;
    txtMonth = parseInt(strExpDay.substring(1,3));

    _year = txtDate.substring(0,4);
    _month = txtDate.substring(5,7);
    _day = txtDate.substring(8,10);

    rValue = js_chkValidDate(_year, _month, _day);

  if (rValue == 1) {
    alert('���� �߸� �Ǿ����ϴ�');
    return;
  } else if (rValue == 2) {
    alert('���� �߸� �Ǿ����ϴ�');
    return;
  } else if (rValue == 3) {
    alert('���� �߸� �Ǿ����ϴ�');
    return;
  }

  s_year = parseInt(txtDate.substring(0,4),10);
  s_month = parseInt(txtDate.substring(5,7),10)+parseInt(txtMonth,10);
  s_day = parseInt(txtDate.substring(8,10),10);

  if (s_month>12) {
    mod = s_month % 12;
    if ( (mod % 12) > 0 ) {
      s_year = s_year + 1;
      s_month = mod ;
    }
  }

  //����üũ
  if (s_month==4 || s_month==6 || s_month==9 || s_month==11) {
    s_lastday=30 ;
  } else if ( s_month==2 && (s_year % 4) != 0 ) {
    s_lastday=28 ;
  } else if ( s_month==2 && (s_year % 4) == 0 ) {
    if ( (s_year % 100) == 0 ) {
      if ( (s_year % 400) == 0 ) {
        s_lastday=29 ;
      } else {
        s_lastday=28 ;
      }
    } else {
      s_lastday=29 ;
    }
  } else {
    s_lastday=31 ;
  }

  s_day = s_day -1;
  s_day = (s_day-1<1) ? 1 : s_day;
  s_day = (s_day>s_lastday) ? s_lastday : s_day;
        s_month = (s_month<10) ? '0'+s_month : s_month;
        s_day = (s_day<10) ? '0'+s_day : s_day;

  //��ȿ���ڰ� ���س⵵���� ���� üũ
  if ( parseInt(_year) < parseInt(s_year) || strExpDay == "999" ) {
    returnDate = '' +_year+ '-12-31';
  }else{
    returnDate = '' +s_year+ '-' +s_month+ '-' +s_day;
  }

  return returnDate
}

// ��¥�� ��ȿ�� üũ
function js_chkValidDate(year, month, day) {
  var dat_option = year % 4;
  year = parseInt(year, 10);
  month = parseInt(month, 10);
  day = parseInt(day, 10);

  if (isNaN(year) == true) { return 1; }
  if (year < 1970) { return 1; }

  if (isNaN(month) == true) { return 2; }
  if (isNaN(day) == true) { return 3; }
  if (day < 1 || day > 31) { return 3; }

  if (month == 2) {
    if (((dat_option == 0) && (day > 29)) || ((dat_option != 0) && (day > 28)) ) { return 3; }
  } else if ((month == 4) || (month == 6) || (month == 9) || (month == 11)) {
    if (day > 30) { return 3; }
  } else if ((month == 1) || (month == 3) || (month == 5) || (month == 7) || (month == 8) || (month == 10) || (month == 12)) {
    if (day > 31) { return 3; }
  } else {
    return 2;
  }

  return 0;
}

/******************************************************************************
    Description     : ���İ�꿡 �ʿ��� �Լ� - $ADD 200509
    Parameter       :
    return value    :
*******************************************************************************/

//������ üũ
function chkSign(obj){
  if(Number(obj.value) < 0){
     obj.value = "";
     obj.focus();
     return false;
  }
  return true;
}

// null���� space�� ����
function makeSpace(value){
       if((value == "") ||(value == null) ){
           return "";
       } else {
           return parseInt(value);
       }
}

// space �Ǵ� null���� 0�� ����
function makeZero(value){
       if((value == "") ||(value == null) ){
           return 0;
       } else {
           return parseInt(value);
       }
}

//��    �� : �ؽ�Ʈ �ʵ��� �и��ڸ� �����ϴ� �Լ�
//�Ű����� : �ؽ�Ʈ �ʵ�
//�� �� �� : onFocus="removeDel(obj.value)"
  function removeDel( value )
  {
     var rxSplit = new RegExp('([\(\),/:-])');
     var sign = '';

    if ( value.charAt(0) == '-') sign = '-';
    do{
        value = value.replace(rxSplit,'');
    }while( rxSplit.test( value ) )

    value = sign + value ;
    //obj.select();
    return;
  }

//���Ŀ� �޸� ����
function removeComma(origin){
  var tempStr = "";
  for(i = 0;i<origin.length;i++){
    if (origin.charAt(i) == ','){
    }else{
      tempStr = tempStr + origin.charAt(i);
    }
  }
  if (trim(tempStr) ==""){
    tempStr = 0;
  }
  return tempStr;
}

/******************************************************************************
    Description     : �Ķ���ͷ� �Ѱ��� �ּ��� ���� �˾�(popup)
    Parameter       :
    return value    :
*******************************************************************************/
function fHelp(goUrl)
{
        var popOption
        var url
        url = "/eappeal_help/"+goUrl;
		window.open(url,"_new","width=680,height=575,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no");

//        popOption = "dialogWidth: 730px; dialogHeight: 740px; dialogTop: 0px;, dialogLeft: 0px; toolbar:no;edge: Raised; center: Yes; help: No; resizable: No; status: No;";
//		win = window.open(popOption);
		//,location=no,directories=no,status=no,menubar=no,scrollbars=no
}
/******************************************************************************
 20060522 : Ȯ���ڸ� üũ�ؼ� ��뿩�� ����
*******************************************************************************/
function js_checkFileType(filename){
  var al=new Array('bmp','gif','jpg','jpeg','png','doc','hwp','txt','ppt','xls','pdf','gul','zip','alz'); //����� Ȯ����
//  	alert('filename :'+filename);
  //var tmp=filename.split(".")[1].toLowerCase(); //���ϸ��� . �� ������ �ҹ���ȭ
    var stmp = filename.split(".");
    var tmp ='';
    if (stmp.length > 1) {
       tmp = stmp[stmp.length-1].toLowerCase();
    } else {
      return false;
    }

 //Ȯ���ں�
  for (i=1; i<=al.length; i++)   {
    if (tmp==al[i]) {
       return true;
    }
  }
  return false;
}

/* add_byken */
function naviPath(loc)
{
var locStr = loc;
var loc = parent.document.getElementById('LOCATION');
if(loc!="" && loc!=null)
{
    if(location!="" && locStr!="null")
        loc.innerHTML = locStr;
    else
        loc.innerHTML = "<span class='text_location'>GA7N1W7% LOCATION A$:88& 5n7OGX GO<<?d</span>";
}
}

// 20070221 17:26 ������ �߰� ����

/*****
  * str�� ����Ʈ�� ����
  *****/
function getBytes(str) {
	var reg=/[^0-9A-Za-z\s\/\-\^\[\]?|}~_`:;<=>?@\.!"#$%&'()*+,]/g;
	var arr=str.match(reg);
	var twoByteSize=0;
	var byteSize=str.length;
	if(arr!=null) twoByteSize =  arr.length;
	//20070928 ����
	//reg=/[0-9A-Za-z\s\/\-\^\[\]?|}~_`:;<=>?@\.!"#$%&'()*+,]/g;
	//arr=str.match(reg);
	//if(arr!=null)	byteSize = arr.length;
	return twoByteSize+byteSize;
}


/*****
  * �ֹε�Ϲ�ȣ üũ
  * return : boolean
  * ex) check_ResidentNO('123456','1234567')
  *****/
function check_ResidentNO(str_f_num,str_l_num){

    var i3=0

    for (var i=0;i<str_f_num.length;i++){

     var ch1 = str_f_num.substring(i,i+1);

        if (ch1<'0' || ch1>'9') i3=i3+1;

    }

    if ((str_f_num == '') || ( i3 != 0 )) return false;

    var i4=0;

    for (var i=0;i<str_l_num.length;i++){

        var ch1 = str_l_num.substring(i,i+1);

        if (ch1<'0' || ch1>'9') i4=i4+1;

    }

    if ((str_l_num == '') || ( i4 != 0 )) return false;

    if(str_f_num.substring(0,1) < 4) return false;

    if(str_l_num.substring(0,1) > 2) return false;

    if((str_f_num.length > 7) || (str_l_num.length > 8)) return false;

    if ((str_f_num == '72') || ( str_l_num == '18'))  return false;



    var f1=str_f_num.substring(0,1)

    var f2=str_f_num.substring(1,2)

    var f3=str_f_num.substring(2,3)

    var f4=str_f_num.substring(3,4)

    var f5=str_f_num.substring(4,5)

    var f6=str_f_num.substring(5,6)

    var hap=f1*2+f2*3+f3*4+f4*5+f5*6+f6*7

    var l1=str_l_num.substring(0,1)

    var l2=str_l_num.substring(1,2)

    var l3=str_l_num.substring(2,3)

    var l4=str_l_num.substring(3,4)

    var l5=str_l_num.substring(4,5)

    var l6=str_l_num.substring(5,6)

    var l7=str_l_num.substring(6,7)

    hap=hap+l1*8+l2*9+l3*2+l4*3+l5*4+l6*5

    hap=hap%11

    hap=11-hap

    hap=hap%10

    if (hap != l7) return false;

    return true;

}

/*****
  * ����ڵ�Ϲ�ȣ üũ
  * return : boolean
  * ex) 111-11-11111
  *****/
function check_worknum(strNum) {
    var strNumb = strNum.replace(/-/g,"");
    sumMod = 0;
    sumMod += parseInt(strNumb.substring(0,1));
    sumMod += parseInt(strNumb.substring(1,2)) * 3 % 10;
    sumMod += parseInt(strNumb.substring(2,3)) * 7 % 10;
    sumMod += parseInt(strNumb.substring(3,4)) * 1 % 10;
    sumMod += parseInt(strNumb.substring(4,5)) * 3 % 10;
    sumMod += parseInt(strNumb.substring(5,6)) * 7 % 10;
    sumMod += parseInt(strNumb.substring(6,7)) * 1 % 10;
    sumMod += parseInt(strNumb.substring(7,8)) * 3 % 10;
    sumMod += Math.floor(parseInt(strNumb.substring(8,9)) * 5 / 10);
    sumMod += parseInt(strNumb.substring(8,9)) * 5 % 10;
    sumMod += parseInt(strNumb.substring(9,10));
    if (sumMod % 10 != 0) {
        return false;
    }
    return true;
}

/*****
  * �̸��� ���� üũ
  * return : boolean
  * ex) hong@mail.com
  *****/
function check_email(strValue) {
    if (strValue.indexOf("/")!=-1 || strValue.indexOf(";") !=-1) {
        return false;
    }
    else if ((strValue.length != 0) && (strValue.search(/(\S+)@(\S+)\.(\S+)/) == -1)) {
        return false;
    }
    else
        return true;
}

//====================================================
// ��� ��ﶧ �ʿ��� �޼ҵ� ����
//====================================================
/*****
  * ��� �Ӽ� ����
  *****/
function fnSetValues(property){
   var  iHeight=document.body.clientHeight;
   var  iWidth=document.body.clientWidth;
   if(property.dialogWidt==null)
        property.dialogWidt=iWidth;
   if(property.dialogHeight==null)
       property.dialogHeight=iHeight;
    var sFeatures="dialogHeight: " + property.dialogHeight + "px;dialogWidth: " + property.dialogWidth + "px;";
    if(property.center!=null) {
        sFeatures+="center:"+property.center+";";
    } else {
        if(property.dialogLeft!=null)
            sFeatures+="dialogLeft:"+property.dialogLeft+";";
        if(property.dialogTop!=null)
            sFeatures+="dialogTop:"+property.dialogTop+";";
    }
    if(property.resizable!=null) {
        sFeatures+="resizable:"+property.resizable+";";
    }
    if(property.scroll!=null) {
        sFeatures+="scroll:"+property.scroll+";";
    }
    if(property.status!=null) {
        sFeatures+="status:"+property.status+";";
    }
    if(property.edge!=null) {
        sFeatures+="status:"+property.edge+";";
    }
    if(property.help!=null) {
        sFeatures+="status:"+property.help+";";
    }
//    alert('sFeatures :'+sFeatures);
    return sFeatures;
}

 //modal ȣ���ϴ�
function recommendItem(formName, goUrl, width, height,fieldData ) {
  var frmObject=formName;
	//alert('goUrl :'+goUrl);
	//frmObject.reqMasterId.value = reqMasterId;
    //if(!js_validateForm(frmObject))
    //    return false;
  	/*���ʵ� ����
	var fieldData=new Array({fieldName:"userVal",fieldValue:userVal}
						,	{fieldName:"reqTeamId",fieldValue:reqTeamId}
						,	{fieldName:"actionMode",fieldValue:"USER"}
						,	{fieldName:"userGbn",fieldValue:userGbn}
						,	{fieldName:"flag",fieldValue:flag}
						,	{fieldName:"index",fieldValue:index}
							);
	*/
	var property = {
	                         urlPath:goUrl
							 ,frmObject:frmObject //required
							 ,modalName:"newModal" //required
	                         ,dialogWidth:width
	                         ,dialogHeight:height
	                         //,dialogLeft:"0"
	                         //,dialogTop:"0"
	                         //,center:"yes" //yes | no | 1 | 0 | on | off
	                         //,resizable:"no" //yes | no | 1 | 0 | on | off
	                         //,scroll:"yes" //yes | no | 1 | 0 | on | off
	                         ,status:"yes" //yes | no | 1 | 0 | on | off
                             ,fieldData:fieldData
	                      };
	addDataToProperty(property); //���� �ִ� �ʵ� ����
	var result=modalOpen(property);
	if(result != null){
		if(result.SUCCESS) {
			setValue(result);
		}
		else{
			alert("����");
		}
	}
}

/**************************************************
 *
 * ��� �˾��� ���� ����� callback �Լ��� �޴� �Լ�
 * callback�� �������� ������ setValue(result)�� �⺻ ȣ�� �ȴ�.
 *
 * @param form ����Ÿ�� �ѱ� form
 * @param url �˾��� �� url
 * @param width �˾��� ��
 * @param height �˾��� ����
 * @param callback �˾��� ���� �� ����� �������� callback �Լ�
 *
 **************************************************/
function openCallbackPopup(form, url, width, height, callback) {

	/*
	//���ʵ� ����
	var fieldData = new Array(
			{fieldName:"key1",	fieldValue:value1}
		,	{fieldName:"key2",	fieldValue:value2}
		...
		,	{fieldName:"keyN",	fieldValue:valueN}
	);
	*/

	var property = {
		urlPath:		url
		,frmObject:		form		//required
		,modalName:		"newModal"	//required
		,dialogWidth:	width
		,dialogHeight:	height
		//,dialogLeft:	"0"
		//,dialogTop:	"0"
		,center:		"yes"		//yes | no | 1 | 0 | on | off
		,resizable:		"no"		//yes | no | 1 | 0 | on | off
		,scroll:		"yes"		//yes | no | 1 | 0 | on | off
		,status:		"yes"		//yes | no | 1 | 0 | on | off
		//,fieldData:	fieldData
	};

	if( window.name != null){
		property.targetName = window.name;
	}

	addDataToProperty(property); //���� �ִ� �ʵ� ����

	var result = modalOpen(property);

	if(result != null){
		if(result.SUCCESS) {
			if(callback) {
				callback(result);
			} else {
				setValue(result);
			}
		} else {
			//alert("����");
		}
	}

	if(window.event) {
		window.event.returnValue = false;
	}
}



/*****
  *����� ��ﶧ ���� Function
  *****/
function modalOpen(property){
	if(property.urlPath==null) {
		alert("urlPath is required");
		return;
	}

	//{{-------------------------------------------------------
	// ie6 ���� ������ ����
	if(property.dialogWidth && property.dialogHeight) {
		var ver = navigator.userAgent.match(/MSIE (\d[.0-9]*)[;]/);
		if(ver && ver[1] < 7.0) {

			var DELTA_WIDTH = 6;
			//var DELTA_HEIGHT = (property.status && (property.status == "yes" || property.status == "1" || property.status == "on")) ? 51 : 29;
			var DELTA_HEIGHT = 49;
			property.dialogWidth += DELTA_WIDTH;
			property.dialogHeight += DELTA_HEIGHT;
		}
	}
	//-------------------------------------------------------}}

	var sFeatures=fnSetValues(property);
	var result=window.showModalDialog("publicModal.html",property,sFeatures);

	return result;
}

/*****
  * Form�� �ִ� ���� Object�� property ������ ��Ƽ� ��ȯ��
  *****/
function addDataToProperty(property){
    var fieldData;
    if(property.fieldData==null )
    	fieldData =new Array();
    else
    	fieldData = property.fieldData;
    //var fieldName=new Array();
    //var fieldValue=new Array();
    var iter=0;
    var frmObject = property.frmObject;
    _Input = frmObject.getElementsByTagName("INPUT");
    _Select = frmObject.getElementsByTagName("SELECT");
	_TextArea = frmObject.getElementsByTagName("TEXTAREA");
	var initLength = fieldData.length;
    for (var i= 0; i < _Input.length;i++ )
    {
    	//fieldName[i]=_Input[i].name;
    	//fieldValue[i]=_Input[i].value;

        if(!_Input[i].disabled  ) {
            if(_Input[i].type=="radio" && _Input[i].checked ) { //���õȰͿ� ���ؼ��� add
                //alert(iter+'---->'+_Input[i].type+':'+_Input[i].name+':'+_Input[i].value+' radio checked');
                fieldData[initLength+iter]={fieldName:_Input[i].name,fieldValue:_Input[i].value};
                iter++;
            } else if(_Input[i].type=="checkbox" && _Input[i].checked ) { //���õȰͿ� ���ؼ��� add
                //alert(iter+'---->'+_Input[i].type+':'+_Input[i].name+':'+_Input[i].value+' checkbox checked');
                fieldData[initLength+iter]={fieldName:_Input[i].name,fieldValue:_Input[i].value};
                iter++;
            } else if(_Input[i].type!="radio" && _Input[i].type!="checkbox" ) {
                //alert(iter+'---->'+_Input[i].type+':'+_Input[i].name+':'+_Input[i].value+' else');
                fieldData[initLength+iter]={fieldName:_Input[i].name,fieldValue:_Input[i].value};
                iter++;
            }
            //alert(iter);

        }
    }
    for (var i= 0; i < _Select.length;i++ )
    {
    	//fieldName[iter]=_Select[i].name;
    	//fieldValue[iter]=_Select[i].value;
        //alert(iter+'---->'+_Select[i].type+':'+_Select[i].name+':'+_Select[i].value);
        if(!_Select[i].disabled) {
            //alert(_Select[i].name+'===>'+_Select[i].multiple);
            if(_Select[i].multiple) {
                //alert(_Select[i].options.length);
                for(var j=0;j<_Select[i].options.length;j++) {
                    //alert(i+'-'+j+':'+_Select[i].options[j].text+'-'+_Select[i].options[j].value);
                    if(_Select[i].options[j].selected) {
                        //alert(i+'-'+j+':'+'::'+iter+'::'+_Select[i].options[j].text+'-'+_Select[i].options[j].value);
                        fieldData[initLength+iter]={fieldName:_Select[i].name,fieldValue:_Select[i].options[j].value};
                        iter++;
                    }
                }
            } else {
                fieldData[initLength+iter]={fieldName:_Select[i].name,fieldValue:_Select[i].value};
                //alert(iter);
                iter++;
            }
        }
    }

    for (var i= 0; i < _TextArea.length;i++ )
    {
    	//fieldName[iter]=_TextArea[i].name;
    	//fieldValue[iter]=_TextArea[i].value;
        //alert(iter+'---->'+_TextArea[i].type+':'+_TextArea[i].name+':'+_TextArea[i].value);
        if(!_TextArea[i].disabled) {

            fieldData[initLength+iter]={fieldName:_TextArea[i].name,fieldValue:_TextArea[i].value};
            //alert(iter);
            iter++;
        }
    }

    fieldData[fieldData.length]={fieldName:"popupFlag",fieldValue:"true"};
    property.fieldData = fieldData;
    //alert(property.fieldData);
    return property;

}


/*****
  * Form�� �ִ� ���� �ʱ�ȭ�մϴ�.
  *****/
function initializeForm(frmObject){

    var iter=0;
    _Input = frmObject.getElementsByTagName("INPUT");
    _Select = frmObject.getElementsByTagName("SELECT");
	 _TextArea = frmObject.getElementsByTagName("TEXTAREA");
    //alert('_Input.length :'+_Input.length);
    //alert('_Select.length :'+_Select.length);

    for (var i= 0; i < _Input.length;i++ )
    {
     // alert(iter+'---->'+_Input[i].type+':'+_Input[i].name+':'+_Input[i].value+' else');
        if(!_Input[i].disabled  ) {
            if(_Input[i].type=="radio" && _Input[i].checked ) { //���õȰͿ� ���ؼ��� add
                //alert(iter+'---->'+_Input[i].type+':'+_Input[i].name+':'+_Input[i].value+' radio checked');

                if(_Input[i].rejectFlag!=null && _Input[i].rejectFlag)
                   ;
                else
                	_Input[i].checked=false;
            } else if(_Input[i].type=="checkbox" && _Input[i].checked ) { //���õȰͿ� ���ؼ��� add
                //alert(iter+'---->'+_Input[i].type+':'+_Input[i].name+':'+_Input[i].value+' checkbox checked');
                if(_Input[i].rejectFlag!=null && _Input[i].rejectFlag)
			;
		else
                	_Input[i].checked=false;
            } else if(_Input[i].type!="radio" && _Input[i].type!="checkbox" && _Input[i].type!='hidden' ) {
                if(_Input[i].rejectFlag!=null && _Input[i].rejectFlag)
			;
		else
                	_Input[i].value='';
            }
            //alert(iter);

        }
    }
    for (var i= 0; i < _Select.length;i++ )
    {
    	//fieldName[iter]=_Select[i].name;
    	//fieldValue[iter]=_Select[i].value;
      //alert(iter+'---->'+_Select[i].type+':'+_Select[i].name+':'+_Select[i].value);
        if(!_Select[i].disabled) {
            //alert(_Select[i].name+'===>'+_Select[i].multiple);
            if(_Select[i].multiple) {
                //alert(_Select[i].options.length);
                for(var j=0;j<_Select[i].options.length;j++) {
                    //alert(i+'-'+j+':'+_Select[i].options[j].text+'-'+_Select[i].options[j].value);
                    if(_Select[i].options[j].selected) {
                        //alert(i+'-'+j+':'+'::'+iter+'::'+_Select[i].options[j].text+'-'+_Select[i].options[j].value);

			              if(_Select[i].rejectFlag!=null && _Select[i].rejectFlag)
					;
				      else
			              	_Select[i].options[j].selected=false;
                    }
                }
            } else if(_Select[i].options.length >0 ){

              if(_Select[i].rejectFlag!=null && _Select[i].rejectFlag)
		;
	      else
              	 _Select[i].options[0].selected=true;
            }
        }
    }

    for (var i= 0; i < _TextArea.length;i++ )
    {
    	//fieldName[iter]=_TextArea[i].name;
    	//fieldValue[iter]=_TextArea[i].value;
        //alert(iter+'---->'+_TextArea[i].type+':'+_TextArea[i].name+':'+_TextArea[i].value);
        if(!_TextArea[i].disabled) {
              if(_TextArea[i].rejectFlag!=null && _TextArea[i].rejectFlag)
		;
	      else
              	_TextArea[i].value='';

        }
    }
}


//====================================================
// ��� ��ﶧ �ʿ��� �޼ҵ� ��
//====================================================

//����ڰ� �Է��� ����� �����ְ� �ִ� �ּҰ��� �����ش�.
function checkSize( obj ){
 //Enter �̺�Ʈ
 	//alert(String.fromCharCode(event.keyCode));
 	//alert('event.keyCode :'+event.keyCode);
 	if(event.keyCode!=8 ) var character = String.fromCharCode(event.keyCode);
 	var reg = /[\w\W\s]/;
 	if (reg.test(character) || event.keyCode==8 ) {
		if( escape(event.keyCode) != "13") {
			//alert("�Է��ѹ��ڿ� ũ��:"+getBytes(obj.value));
			var oPopup = window.createPopup();
		    var oPopBody = oPopup.document.body;
		    oPopBody.style.backgroundColor = "lightyellow";
		    oPopBody.style.border = "solid black 1px";
		    oPopBody.style.fontFamily = "����,verdana";
		    oPopBody.style.fontSize = "11px";
		    oPopBody.style.color = "#000000";
		    //alert('checkSize obj.value :'+obj.value);
		    var inputSize = getBytes(obj.value);
		    var hgt = 13;
		    var realHeight = hgt + 2;
		    var mess =obj.description+" : <font color='red'>"+inputSize+"</font> (<font color='blue'> "+Math.floor((parseInt(inputSize)/parseInt(obj.maxbyte))*10000)/100+"% </font>)"
		    if(obj.minbyte!=null) { mess+="<br>&nbsp;&nbsp;&nbsp;�ּ� : "+obj.minbyte; realHeight+=hgt; }
		    if(obj.maxbyte!=null) { mess+="<br>&nbsp;&nbsp;&nbsp;�ִ� : "+obj.maxbyte; realHeight+=hgt; }
		    oPopBody.innerHTML = mess;
		    //oPopup.show(event.srcElement.offsetTop, event.srcElement.offsetLeft, 120, 20, document.body);
		    //alert(event.srcElement.name);
		    //alert('event.offsetX :'+event.offsetX);
		    //alert('event.offsetY :'+event.offsetY);
		    /*
		    alert('obj.clientLeft:'+obj.clientLeft);
		    alert('obj.clientTop:'+obj.clientTop);
		    alert('obj.clientHeight:'+obj.clientHeight); //��ü ����
		    alert('obj.clientWidth:'+obj.clientWidth); //��ü ��
		    */
		    /*
		    alert('event.clientX:'+event.clientX);
		    alert('event.clientY:'+event.clientY);
		    alert('obj.scrollTop:'+obj.scrollTop);
		    alert('obj.scrollLeft:'+obj.scrollLeft);
		    alert('obj.offsetTop:'+obj.offsetTop);
		    alert('obj.offsetLeft:'+obj.offsetLeft);
		    */
		    //oPopup.show(event.clientX +obj.offsetLeft/2 - event.offsetX ,event.clientY + obj.offsetTop - event.offsetY + obj.offsetHeight, 150, realHeight, document.body);
		    oPopup.show(event.clientX +obj.offsetLeft/2 - event.offsetX + obj.offsetWidth ,event.clientY  - event.offsetY + obj.offsetHeight, 150, realHeight, document.body);

		}
	}
}



function alertInfo( obj ){
 //Enter �̺�Ʈ
 	//alert(String.fromCharCode(event.keyCode));
 	//alert('event.keyCode :'+event.keyCode);
 	if(event.keyCode!=8 ) var character = String.fromCharCode(event.keyCode);
 	var reg = /[\w\W\s]/;
 	if (reg.test(character) || event.keyCode==8 ) {
		if( escape(event.keyCode) != "13") {
			//alert("�Է��ѹ��ڿ� ũ��:"+getBytes(obj.value));
			var oPopup = window.createPopup();
		    var oPopBody = oPopup.document.body;
		    oPopBody.style.backgroundColor = "lightyellow";
		    oPopBody.style.border = "solid black 1px";
		    oPopBody.style.fontFamily = "����,verdana";
		    oPopBody.style.fontSize = "11px";
		    oPopBody.style.color = "#000000";
		    //alert('checkSize obj.value :'+obj.value);
		    var inputSize = getBytes(obj.value);
		    var hgt = 13;
		    var realHeight = hgt + 2;
		    //var mess =obj.description+" : <font color='red'>"+inputSize+"</font> (<font color='blue'> "+Math.floor((parseInt(inputSize)/parseInt(obj.maxbyte))*10000)/100+"% </font>)"
		    var mess =obj.description+" : "+obj.message;
		    if(obj.minbyte!=null) { mess+="<br>&nbsp;&nbsp;&nbsp;�ּ� : "+obj.minbyte; realHeight+=hgt; }
		    if(obj.maxbyte!=null) { mess+="<br>&nbsp;&nbsp;&nbsp;�ִ� : "+obj.maxbyte; realHeight+=hgt; }
		    oPopBody.innerHTML = mess;
		    //oPopup.show(event.srcElement.offsetTop, event.srcElement.offsetLeft, 120, 20, document.body);
		    //alert(event.srcElement.name);

		    /*
		    alert('obj.clientLeft:'+obj.clientLeft);
		    alert('obj.clientTop:'+obj.clientTop);
		    alert('obj.clientHeight:'+obj.clientHeight); //��ü ����
		    alert('obj.clientWidth:'+obj.clientWidth); //��ü ��
		    */
		    /*
		    alert('event.clientX:'+event.clientX);
		    alert('event.clientY:'+event.clientY);
		    alert('obj.offsetTop:'+obj.offsetTop);
		    alert('obj.offsetLeft:'+obj.offsetLeft);
		    alert('event.offsetX :'+event.offsetX);
		    alert('event.offsetY :'+event.offsetY);
		    */
		    /*
		    alert('obj.scrollTop:'+obj.scrollTop);
		    alert('obj.scrollLeft:'+obj.scrollLeft);
		    alert('obj.offsetTop:'+obj.offsetTop);
		    alert('obj.offsetLeft:'+obj.offsetLeft);
		    */
		    //oPopup.show(event.clientX +obj.offsetLeft/2 - event.offsetX ,event.clientY + obj.offsetTop - event.offsetY + obj.offsetHeight, 150, realHeight, document.body);
		    //oPopup.show(event.clientX +obj.offsetLeft/2 - event.offsetX + obj.offsetWidth ,event.clientY  - event.offsetY + obj.offsetHeight, 150, realHeight, document.body);
		    oPopup.show(event.clientX +obj.offsetLeft/2 - event.offsetX + obj.offsetWidth ,event.clientY  - event.offsetY + obj.offsetHeight, 150, realHeight, document.body);

		}
	}
}



//����ڰ� �Է��� ����� �����ְ� �ִ� �ּҰ��� �����ش�.
function checkSizeTextArea( obj ){
 //Enter �̺�Ʈ
 	//alert(String.fromCharCode(event.keyCode));
 	//alert('event.keyCode :'+event.keyCode);
 	if(event.keyCode!=8 ) var character = String.fromCharCode(event.keyCode);
 	var reg = /[\w\W\s]/;
 	if (reg.test(character) || event.keyCode==8 ) {
		if( escape(event.keyCode) != "13") {
			//alert("�Է��ѹ��ڿ� ũ��:"+getBytes(obj.value));
			var oPopup = window.createPopup();
		    var oPopBody = oPopup.document.body;
		    oPopBody.style.backgroundColor = "lightyellow";
		    oPopBody.style.border = "solid black 1px";
		    oPopBody.style.fontFamily = "����,verdana";
		    oPopBody.style.fontSize = "11px";
		    oPopBody.style.color = "#000000";
		    //alert('checkSize obj.value :'+obj.value);
		    var inputSize = getBytes(obj.value);
		    var hgt = 13;
		    var realHeight = hgt + 2;
		    var mess ="<font color='red'>"+inputSize+"</font> (<font color='blue'> "+Math.floor((parseInt(inputSize)/parseInt(obj.maxbyte))*10000)/100+"% </font>)"
		    if(obj.minbyte!=null) { mess+="<br>&nbsp;&nbsp;&nbsp;�ּ� : "+obj.minbyte; realHeight+=hgt; }
		    if(obj.maxbyte!=null) { mess+="<br>&nbsp;&nbsp;&nbsp;�ִ� : "+obj.maxbyte; realHeight+=hgt; }
		    oPopBody.innerHTML = mess;
		    //oPopup.show(event.srcElement.offsetTop, event.srcElement.offsetLeft, 120, 20, document.body);
		    //alert(event.srcElement.name);
		    //alert('event.offsetX :'+event.offsetX);
		    //alert('event.offsetY :'+event.offsetY);
		    /*
		    alert('obj.clientLeft:'+obj.clientLeft);
		    alert('obj.clientTop:'+obj.clientTop);
		    alert('obj.clientHeight:'+obj.clientHeight); //��ü ����
		    alert('obj.clientWidth:'+obj.clientWidth); //��ü ��
		    */
		    /*
		    alert('event.clientX:'+event.clientX);
		    alert('event.clientY:'+event.clientY);
		    alert('obj.scrollTop:'+obj.scrollTop);
		    alert('obj.scrollLeft:'+obj.scrollLeft);
		    alert('obj.offsetTop:'+obj.offsetTop);
		    alert('obj.offsetLeft:'+obj.offsetLeft);
		    */
		    //oPopup.show(event.clientX +obj.offsetLeft/2 - event.offsetX ,event.clientY + obj.offsetTop - event.offsetY + obj.offsetHeight, 150, realHeight, document.body);
		    oPopup.show(obj.offsetLeft+obj.offsetWidth+ 20 ,obj.offsetHeight, 150, realHeight, document.body);

		}
	}
}
//�빮�ڷ� �ٲپ���
function capitalize(obj) {
		obj.value = trim(obj.value.toUpperCase());
}
// 20070221 17:26 ������ �߰� ��

 /**
 * clipboard���� copy������ ���ڼ� üũ.
 */
  function fnPaste(vEl)
  {
   //alert('fnPaste');
   var intMaxLength, intCurrLength, strClip ;
   var intClipLength, intAvailLength ;
   var blnReturn ;
   var pasteSize=getBytes(vEl.value+window.clipboardData.getData("Text"));
   if(getBytes(vEl.value+window.clipboardData.getData("Text")) > parseInt(vEl.maxbye) ) {
   	alert('����� 483�� �ʰ��ؼ� ���̻� �ٿ��ֱ⸦ �� �� �����ϴ�.:');
   	return false;
   }

   blnReturn = true ;
   intMaxLength = vEl.getAttribute("maxlength") ;
   intCurrLength = vEl.value.length ;
   strClip = window.clipboardData.getData("Text") ;
   intClipLength = strClip.length ;
   intAvailLength = intMaxLength - intCurrLength ;

   if (intAvailLength > 0)
   {
    if (intAvailLength < intClipLength)
    {
     strClip = strClip.substr(0, intAvailLength) ;
     window.clipboardData.setData("Text",strClip) ;
    }
   }
   else
   {
    blnReturn = false ;
   }
   return blnReturn ;
  }


function fnKeydown(obj) {
   if(event.keyCode!=8 && getBytes(obj.value) > obj.maxbyte) {
	 obj.value = obj.value.substring(0,obj.value.length - 1);
   	 event.returnValue=false;
   }

}


//====================================================
// detail �κк���
// @param tbID : copy�� ���̺� ���̵�
// @param targetTbID : copy�� ����� �Ǵ� ���̺� ���̵�
// @param tbIDOrg �⺻���� �ѷ����� ���̺� ���̵� ( ������ư�� �߰��Ǿ� ���� ����)
//====================================================
function detailCopy(tbID,tbIDOrg,targetTbID) {
	var copyTR;
	var orgTR;
	var currentTR =tbID.childNodes(0);
	if(targetTbID.rows.length==0)
		orgTR = tbIDOrg.childNodes(0);
	else
		orgTR =targetTbID.childNodes(0);

	var newTR=currentTR.cloneNode(true);
	targetTbID.appendChild(newTR);
	var orgInputTag=orgTR.getElementsByTagName("INPUT");
	var inputTag=newTR.getElementsByTagName("INPUT");

	for(var i=0;i<orgInputTag.length;i++)
	{
		if(orgInputTag[i].type=="text" || orgInputTag[i].type=="hidden")
		{
			for(var j=0;j<inputTag.length;j++)
			{
				if( orgInputTag[i].name==inputTag[j].name )
				{
					inputTag[j].value=orgInputTag[i].value;
				}
			}
		}
	}

	var orgSelectTag=orgTR.getElementsByTagName("SELECT");
	var selectTag=newTR.getElementsByTagName("SELECT");

	for(var i=0;i<orgSelectTag.length;i++)
	{
			for(var j=0;j<selectTag.length;j++)
			{
				if( orgSelectTag[i].name==selectTag[j].name )
				{
					selectTag[j].value=orgSelectTag[i].value;
				}
			}
	}

	var orgTextareaTag=orgTR.getElementsByTagName("TEXTAREA");
	var textareaTag=newTR.getElementsByTagName("TEXTAREA");

	for(var i=0;i<orgTextareaTag.length;i++)
	{
			for(var j=0;j<textareaTag.length;j++)
			{
				if( orgTextareaTag[i].name==textareaTag[j].name )
				{
					textareaTag[j].value=orgTextareaTag[i].value;
				}
			}
	}

	//var oTR = targetTbID.childNodes(0);
	//targetTbID.insertBefore(newTR ,oTR);
}

//====================================================
// detail �κ��߰�
// @param tbID : copy�� ���̺� ���̵�
// @param targetTbID : copy�� ����� �Ǵ� ���̺� ���̵�
//
//====================================================
function detailAdd(tbID,targetTbID) {
	var currentTR =tbID.childNodes(0);
	var newTR=currentTR.cloneNode(true);
	var oTR = targetTbID.childNodes(0);
	targetTbID.insertBefore(newTR ,oTR);
	var inputTag=newTR.getElementsByTagName("INPUT");
	for(var g=0;g<inputTag.length;g++) {
		if(inputTag[g].type=="text") {
			inputTag[g].value="";
		}
	}
}


//====================================================
// detail �κл���
// @param targetTbID : copy�� ����� �Ǵ� ���̺� ���̵�
//====================================================
function deleteTR(targetTbID,idx) {
	//targetTbID.deleteRow(parseInt(idx));
    targetTbID.removeChild(targetTbID.childNodes(parseInt(idx)));
}


//====================================================
//���̺� ��� �޼��� ����
//====================================================
function showMessage(oTB,msg)
{
    var myNewRow = oTB.insertRow();
    //myNewRow.className="board_line_bottom_c";

    var oTD = myNewRow.insertCell();
    var curTBD=oTB.childNodes(0);
    oTD.colSpan=curTBD.childNodes(0).cells.length;
    //oTD.className="board_line_bottom_l";
    oTD.innerHTML=msg;
    oTD.align="center";
    //alert('align :'+oTD.align);
}


//���ڿ��� �¿� ��������
function trim ( str )
{
	var temp= rtrim(ltrim(str))
	return  temp;
}

//���ڿ����� ���ʰ�������
function ltrim ( str )
{
	//left trim
	var temp=str.replace(/^\s*/,"");
	//alert('left temp :'+temp.length);
	return  temp;
}

//���ڿ��� �¿� ��������
function rtrim ( str )
{
	//right trim
	var temp=str.replace(/\s*$/,"");
	//alert('rigth temp :'+temp.length);
	return  temp;
}


//Kong, Jongpil add
//ajax part start
var xmlHttp;
var licInfStatus=0;
//XMLHttpRequest ����
function createXMLHttpRequest()
{
	try {
	    if (window.ActiveXObject)
	 	{
	        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	    }
	    else if (window.XMLHttpRequest)
	 	{
	        xmlHttp = new XMLHttpRequest();
	    }
    }catch(e){
    	alert(e.message);
        throw Error(e.message);
    }
}


/*  �̺κ��� �� ���������� ����
function startRequest()
{
 	createXMLHttpRequest();
    xmlHttp.onreadystatechange = handleStateChange;
    //xmlHttp.open("get", "/servlets/documentServlet/CCRLIC1L?cmd=getCCRStatus&DOCUMENT_NO="+document.myform.DOCUMENT_NO.value+"&COMPANY_ID="+document.myform.COMPANY_ID.value+"&APPL_NO="+document.myform.APPL_NO.value+"&SENREV_CODE="+document.myform.SENREV_CODE.value, false);
    xmlHttp.open("post", "/servlets/documentServlet/CCRLIC1L", false);
    xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlHttp.send("cmd=getLicInfStatus&INST_REC_NO=<%=getData("INST_REC_NO",dataRs)%>&COMPANY_ID=<%=getData("COMPANY_ID",dataRs)%>");

}
*/

//xmlhttp�κ��� �����Ͱ� �Ѿ�ð��
function handleStateChange()
{
 var arrResult = new Array();
 if(xmlHttp.readyState == 4)
 {
	  if(xmlHttp.status == 200)
	  {
	   	//alert(xmlHttp.responseText);
	   	//eval(xmlHttp.responseText);
	   	licInfStatus=parseInt(xmlHttp.responseText);
	   	//alert('licInfStatus :'+licInfStatus);
	   	//makeDiaplay(arrResult);
	   }
	}
}

//ajax part end


//�ڵ� ã�� �̹��� ��ư �� ���̰��ϱ�
//readonlyToggleExcept ����� argument ���� readonly
//�̹��� �Ⱥ��̰��ϰ�
function readonlyField(frm) {
	if(document.all.btnSrchImg!=null) {
		if(document.all.btnSrchImg.length==null) {
			document.all.btnSrchImg.style.display = "none";
		} else {
			for(var i=0;i<document.all.btnSrchImg.length;i++) {
				document.all.btnSrchImg[i].style.display = "none";
			}
		}
	}

	//textarea �Է� ��  ���̰��ϱ�
	if(document.all.btnInputImg!=null) {
		if(document.all.btnInputImg.length==null) {
			document.all.btnInputImg.style.display = "none";
		} else {
			for(var i=0;i<document.all.btnInputImg.length;i++) {
				document.all.btnInputImg[i].style.display = "none";
			}
		}
	}

	for(var i=0;i<frm.elements.length;i++) {
		//alert(frm.elements[i].name+':'+frm.elements[i].type);

		if(frm.elements[i].type=="text") {
			//alert(frm.elements[i].name+':'+frm.elements[i].readOnly);
			if(!frm.elements[i].readOnly){
				//alert(frm.elements[i].name+":"+frm.elements[i].orignalValue);
				var orgVal= frm.elements[i].orignalValue;
				if(orgVal!=null && orgVal!="0") {
					frm.elements[i].value=orgVal;
				}
				if(frm.elements[i].readonlyToggleExcept==null) {
					frm.elements[i].readOnly=true;
					frm.elements[i].style.backgroundColor="#E6E7E8";
				}

			}
		}

		//selectbox
		if(frm.elements[i].type=="select-one") {
			try{
				//alert(frm.elements[i].type);
				if(frm.elements[i].disabledToggleExcept==null) {
					frm.elements[i].selectedIndex= parseInt(frm.elements[i].originalIndex);
					frm.elements[i].disabled=true;
				}
		    }catch(e){
		        //throw Error(e.message);
		    }
		}
	    //checkbox	d
		if(frm.elements[i].type=="checkbox") {
			frm.elements[i].disabled=true;
		}

	}

}

//�̹��� ���̰��ϰ�
//readOnly �Ѱ� Ǯ��
function unReadonlyField(frm) {
	//�ڵ� ã�� �̹��� ��ư  ���̰��ϱ�
	if(document.all.btnSrchImg!=null) {
		if(document.all.btnSrchImg.length==null) {
			document.all.btnSrchImg.style.display = "";
		} else {
			for(var i=0;i<document.all.btnSrchImg.length;i++) {
				document.all.btnSrchImg[i].style.display = "";
			}
		}
	}

	//textarea �Է� ���̰��ϱ�
	if(document.all.btnInputImg!=null) {
		if(document.all.btnInputImg.length==null) {
			document.all.btnInputImg.style.display = "";
		} else {
			for(var i=0;i<document.all.btnInputImg.length;i++) {
				document.all.btnInputImg[i].style.display = "";
			}
		}
	}

	for(var i=0;i<frm.elements.length;i++) {
		//alert(frm.elements[i].name+':'+frm.elements[i].type);
		if(frm.elements[i].type=="text") {
			//alert(frm.elements[i].name+':'+frm.elements[i].readOnly);
			if(frm.elements[i].readOnly) {
				//alert(frm.elements[i].name+'readOnly true :'+frm.elements[i].className);
				if(frm.elements[i].className!="READONLY" && frm.elements[i].className!="TEXT_NUM_READONLY") {
					frm.elements[i].readOnly=false;
					frm.elements[i].style.backgroundColor="white";
				}
			}
		}

		if(frm.elements[i].type=="checkbox") {
			frm.elements[i].disabled=false;
		}
	}

}

/*********************************************************
@author	ryan
sendData()		select box���� �����͸� ������ ������ �Լ�

@param source this
@param target �����͸� ����� select box ID
@param action controller�� mapping�Ǵ� url

*********************************************************/
function sendDataJQ(source, target, action)
{
	var value = source.value;
	var pars = "value="+value;
	var myAjax = $.ajax({
					type : 'POST',
				  	url: action,
				  	global: false,
				  	async: true,
				  	data : pars,
				  	success: function(data){
				  		var body = document.getElementById(target);
				    	while(body.hasChildNodes()){
				    		body.removeChild(body.childNodes[0]);
				    	}
				    	var opt = document.createElement('OPTION');
				    	var text = document.createTextNode('�����ϼ���');
				    	opt.appendChild(text);
				  		opt.setAttribute('value', '');
				    	body.appendChild(opt);
				    	if(trim(data) != '') {
				    		var options = eval(data);
				    		for(var i=0;i<options.length;i++) {
								var option = document.createElement('OPTION');
								var optionText = document.createTextNode(options[i].item.text);
								option.appendChild(optionText);
								option.setAttribute('value', options[i].item.value);
								body.appendChild(option);
							} /*for end*/
				    	}
				  }
				});

} /* sendData() end */

/*********************************************************
 @author	ryan
 sendData()		select box���� �����͸� ������ ������ �Լ�

 @param source this
 @param target �����͸� ����� select box ID
 @param action controller�� mapping�Ǵ� url

 *********************************************************/
function sendData(source, target, action)
{
	var value = source.value;
	var pars = "value="+value;
	var myAjax = new Ajax.Request(
		action,
		{
			method: 'post',
			parameters: pars,
			onComplete: function showResponse(originalRequest)
						{
							var body = $(target);
					    	while(body.hasChildNodes()){
					    		body.removeChild(body.childNodes[0]);
					    	}
					    	var opt = document.createElement('OPTION');
					    	var text = document.createTextNode('�����ϼ���');
					    	opt.appendChild(text);
					  		opt.setAttribute('value', '');
					    	body.appendChild(opt);
					    	var options = eval(originalRequest.responseText);
					    		for(var i=0;i<options.length;i++) {
										var option = document.createElement('OPTION');
										var optionText = document.createTextNode(options[i].item.text);
										option.appendChild(optionText);
										option.setAttribute('value', options[i].item.value);
										body.appendChild(option);
									} /*for end*/
						} /* showResponse() end */
		});
} /* sendData() end */


/*********************************************************
 masterForm �� otherForm�� �����͸� append�ؼ�
 submit()��
 *********************************************************/
function submitWithOtherForm( masterForm, otherForm) {
	/*
	if(pagingFieldData==null) {
		pagingFieldData = new Array();
	}
    var size=pagingFieldData.length;
	*/
	//pagingFieldData�� form�� �ִ� ������Ʈ ����
	//for(var k=0;k<n;k++) {
		//alert('masterForm.elements[k]:'+masterForm.elements[k]);
		//alert('masterForm.elements[k].type:'+masterForm.elements[k].type);
		//alert('masterForm.elements[k].name:'+masterForm.elements[k].name);
		//alert('masterForm.elements[k].value:'+masterForm.elements[k].value);
	  //document.oForm.childNodes(0).insertAdjacentElement("BeforeBegin",masterForm.elements[k]);
	  //pagingFieldData[size+k].fieldName=masterForm.elements[k].name;
	  //pagingFieldData[size+k].fieldValue=masterForm.elements[k].value;
	  //pagingFieldData[size+k]={fieldName:masterForm.elements[k].name,fieldValue:masterForm.elements[k].value};
	  //alert('k :'+k);
	//}
	//alert(masterForm.elements.length);
	//for(var n=0;n<masterForm.elements.length;n++) {
	//	alert(masterForm.elements[n].type+':'+masterForm.elements[n].name+':'+masterForm.elements[n].value);
	//}
	/*
	for(var k=0;k<otherForm.elements.length;k++) {
	    if(masterForm.contains(otherForm.elements[k])) {
	    	masterForm.removeChild(otherForm.elements[k]);
	    }
	}
	*/
	//alert(masterForm.elements.length);
	if(otherForm.name=="pageNaviForm") {
		otherForm.currentPage.value = "1";
		masterForm.appendChild(otherForm.currentPage);
		masterForm.appendChild(otherForm.rowsPerPage);
	} else {
		masterForm.appendChild(otherForm.elements);
	}

	//alert(masterForm.elements.length);
	//for(var n=0;n<masterForm.elements.length;n++) {
	//	alert(masterForm.elements[n].type+':'+masterForm.elements[n].name+':'+masterForm.elements[n].value);
	//}

	masterForm.submit();
}

/**************************************************
 *
 * �������� form�� merge�Ͽ� submit�ϴ� �Լ�
 *
 * [��뿹]
 *  1) �ٷ� submit�ϱ�
 *     <a href="#" onclick="submitMultipleForm([document.getElementById('form1'), ..., document.getElementById('formN')])">����</a>
 *  2) �׽�Ʈ������ ���� ����Ÿ Ȯ���ϰ� submit�ϱ�
 *     <a href="#" onclick="submitMultipleForm([document.getElementById('form1'), ..., document.getElementById('formN')], true)">����</a>
 *  3) Validation üũ�� ������
 *    function sumitForm() {
 *      var form1 = document.getElementById("formId1");
 *      var form2 = document.getElementById("formId2");
 *      ...
 *      var formN = document.getelementById("formIdN");
 *
 *      // validate form1
 *      // validate form2
 *      // ...
 *      // validate formN
 *
 *      submitMultipleForm([form1, form2, ..., formN]);
 *    }
 *
 *    <a href="#" onclick="submitForm()">����</a>
 *
 * [���ǻ���]
 *  1) ������ ���� form ���� ���� name�� ���� <input>�̳� <select>, <textarea>�� ���� ��� ������ ����Ƿ� name�� �ߺ����� �ʰ� �����ؾ��Ѵ�
 *
 * @param forms [�ʼ�], ����ü�� �迭, ù��° form�� action�� method�� submit�ȴ�. [form1, form2, ..., formN] ���·� �����Ѵ�.
 * @param debugEnabled [����], debugEnabled = true�̸� ������ �ϴܿ� merge�� form�� ����Ÿ�� submit��ư�� �� �� �ִ�
 *
 **************************************************/
function isSubmitable(element) {
	if(!element || !element.name) {
		return false;
	}

	if(element.tagName == "INPUT") {
		if(element.type == "checkbox" || element.type == "radio") {
			return element.checked;
		} else {
			return true;
		}
	}

	return (element.tagName == "SELECT" || element.tagName == "TEXTAREA");
}

function submitMultipleForm(forms /* required */, debugEnabled /* optional */) {

	var isDebugEnabled = false;

	if(debugEnabled) {
		isDebugEnabled = debugEnabled;
	}

	if(!forms || forms.length == 0) {
		return;
	}

	var mergedForm = document.createElement("FORM");

	if(isDebugEnabled) {
		var formHead = document.createElement("B");
		formHead.innerHTML = "Merged Form";
		mergedForm.appendChild(formHead);
	}

	mergedForm.appendChild(document.createElement("BR"));

	for(var i = 0; i < forms.length; ++i) {
		if(forms[i].name=="pageNaviForm") {
			forms[i].currentPage.value = "1";
			mergedForm.appendChild(forms[i].currentPage);
			mergedForm.appendChild(forms[i].rowsPerPage);
		} else {
			for(var j = 0; j < forms[i].elements.length; ++j) {
				if(isSubmitable(forms[i].elements[j])) {
					var field = document.createElement("INPUT");
					field.type = "text";
					field.name = forms[i].elements[j].name;
					field.value = forms[i].elements[j].value;

					if(isDebugEnabled) {
						var fieldName = document.createElement("B");
						fieldName.innerHTML = field.name + " : " + field.value + " -> ";
						mergedForm.appendChild(fieldName);
					}

					mergedForm.appendChild(field);

					if(isDebugEnabled) {
						mergedForm.appendChild(document.createElement("BR"));
					}
				}
			}
		}
	}

	if(isDebugEnabled) {
		var submitButton = document.createElement("INPUT");
		submitButton.type = "submit";
		submitButton.value = "Submit";

		mergedForm.appendChild(submitButton);
	} else {
		mergedForm.style.display = "none";
	}

	mergedForm.target = forms[0].target;
	mergedForm.action = forms[0].action;
	mergedForm.method = forms[0].method;

	document.body.appendChild(mergedForm);

	if(!isDebugEnabled) {
		mergedForm.submit();
	}
}

//üũ�ڽ� ��ü����
function gridCheckAll(chkObj) {

	var eleObj;
	var frm = chkObj.form;

	for (var i = 0; i < frm.elements.length; i++) {
		eleObj = frm.elements[i];
		eleObj.checked = chkObj.checked;
	}
}
/**************************************************
 *
 * ù��° depth���ý� ���� depth�� �ʱ�ȭ �Ѵ�.
 *
 * targets�� ['threeCtg.stdCtgNo','fourCtg.stdCtgNo']���·� �����Ѵ�.
 *
***************************************************/
function initCtg(targets){
	for(var i=0; i<targets.length; i++){
		var target = targets[i];
		var body = document.getElementById(target);
	   	while(body.hasChildNodes()){
	   		body.removeChild(body.childNodes[0]);
	   	}
	   	var opt = document.createElement('OPTION');
	   	var text = document.createTextNode('�����ϼ���');
	   	opt.appendChild(text);
	 	opt.setAttribute('value', '');
	   	body.appendChild(opt);
   	}
}


/**********************************************************************
 * @author : Sam - 2008.06.24.
 * @���� : ���س�� �޺� ����(�޺��� Ȱ���� ��,�� ǥ���ϱ�)
 *        ���� �ε��ÿ� ���� ��¥�� �������� �ؼ� ��� ���� �����ϰ�, ����� ������ ��
 *        �˻���ư�� ������ ���� ���õ� ������ �����ȴ�.
 * @param : yName - �⵵ select��ü name
 *          mName - �� select��ü name
 *          yr    - �Ķ���ͷ� �Ѿ�� �⵵ select��ü�� ���ð�
 *          mon   - �Ķ���ͷ� �Ѿ�� �� select��ü�� ���ð�
 **********************************************************************/
function setBasicYM(yName, mName, yr, mon){
    //alert('yr :'+yr);
    //alert('mon :'+mon);
    //������ �������� ����� �����´�.
    var today = new Date();
    var year = today.getYear();
    var month = today.getMonth()+1;
    //alert(today + " : " + year + '�� ' + month + '��');

    //�⵵ �޺� ����(5�� ������ ����⵵���� ǥ��)
    var bscY = document.getElementById(yName);
    var y=year-4;
    for(n=0; n<5; n++){
        strY=y.toString();

        newOpt=document.createElement('OPTION');
        newOpt.text=strY;
        newOpt.value=strY;
        bscY.add(newOpt);

        y++;
    }

    //01~12�� �޺� ����
    var bscM = document.getElementById(mName);
    for(m=1; m<=12; m++)
    {
        if(m<10) strM = '0' + m.toString();
        else strM = m.toString();

        newOpt2=document.createElement('OPTION');
        newOpt2.text=strM;
        newOpt2.value=strM;

        bscM.add(newOpt2);
    }

    //�⵵ ����
    strY=year.toString();
    if(yr!=null && yr.length > 0)
    	bscY.value=yr;
    else
    	bscY.value = strY;

    //�� ����
    if(month == 1) {
    	strM = '12';
    	bscY.value = strY - 1;
    }
    else if(month<11 && month != 1) strM = '0' + (month-1).toString();
    else strM = (month-1).toString();
    if(mon!=null && mon.length > 0)
        bscM.value = mon;
    else
        bscM.value = strM;

}

/****************************************
 *	@author ryan
 *	�̹��� ���ε� �� �̹����� Ȯ���ڸ� üũ�Ѵ�.
 *	jpg(jpeg), gif, png
 *****************************************/
 function checkImgFormat(file){
	var lastIndex = file.value.lastIndexOf(".");
	var fileFormat = trim(file.value).substring(lastIndex+1, file.value.len).toLowerCase();
	if(fileFormat =="") return;
	if(!(fileFormat == "jpg" || fileFormat == "gif" || fileFormat == "png" || fileFormat == "jpeg"))
	{
		 alert("jpg, gif, png ���ϸ� ���� �˴ϴ�.");
		 file.outerHTML = file.outerHTML;
		 return;
	}
}

/*****************************************************
 *	@author ryan
 *	���� ���ε� �� Ȯ���ڸ� üũ, ���డ���� ������ ���ε带 ���´�.
 *	asp, jsp, html, php, exe, com, sh
 *******************************************************/
 function checkFileFormat(file){
	var lastIndex = file.value.lastIndexOf(".");
	var fileFormat = trim(file.value).substring(lastIndex+1, file.value.len).toLowerCase();
	if(fileFormat == "") return;
	if((fileFormat == "asp" || fileFormat == "jsp" || fileFormat == "html" || fileFormat == "php"
		|| fileFormat == "exe" || fileFormat == "com" || fileFormat == "sh" || fileFormat == "htm" ))
	{
		 alert("���ε尡 ���ѵ� ���� �Դϴ�.");
		 file.outerHTML = file.outerHTML;
		 return;
	}
}


var fileSize = 0;	// �� �뷮

/*****************************************************
 *	@author peter
 *	���� ���ε� �� �뷮 üũ - xml ���� �Ұ�
 *	��뿹-> onChange='checkFileSize(this)'
 *******************************************************/
function checkFileSize(obj, maxSize) {
	if (typeof document.body.style.maxHeight != 'undefined') {
		// IE7
		fso       = new ActiveXObject("Scripting.FileSystemObject");
		f         = fso.GetFile(obj.value);
		fileSize += parseInt(f.size);

		f   = null;
		fso = null;
	}
	else {
		// IE6
		img         = new Image();
		img.dynsrc  = obj.value;
		fileSize   += parseInt(img.fileSize);
	}

	if (fileSize > maxSize) {
		alert("���Ͼ��ε� ��� �뷮 10Mbyte�� �ʰ��Ͽ����ϴ�.");
		fileValueReset(obj.name + '1', obj.name, maxSize);

		return;
	}
}

// ÷������ ����
function fileValueReset(id, name, maxSize) {
	var fileDiv = document.getElementById(id);

	fileDiv.innerHTML = "<input type='file' name='" + name + "' class='inputTxtType3' style='width:320px' onChange='checkFileSize(this, " + maxSize + ")'>";
}

/*****************************************************
 *	@author victor
 *	�ڹ� ��ũ��Ʈ���� replaceAll�� �����ϰ� ���ִ� function.(3���� �ƹ��ų� ���.)
 *	��뿹-> replace( something.value , "\n", "<br>")
 *******************************************************/

function replaceAll( originChar, searchChar, replaceChar ){
	return originChar.replace(eval("/"+searchChar+"/g"),replaceChar);
}



function check_only(chk){
	var brandNo = document.getElementsByName("id");
    for(var i=0; i<brandNo.length; i++){
    	if(brandNo[i] != chk){
        	brandNo[i].checked = false;
        }
    }
}

/*****************************************************
 *	@author eco
 *  ������ �޸�(comma) ó��.
 *
 *******************************************************/
function commify(n) {
    var reg = /(^[+-]?\d+)(\d{3})/;   // ���Խ�
    n += '';                          // ���ڸ� ���ڿ��� ��ȯ

    while (reg.test(n))
        n = n.replace(reg, '$1' + ',' + '$2');

    return n;
}

// ********************************** luffy start
function getCookie (sCookieName) {
    var sName = sCookieName + "=", ichSt, ichEnd;
    var sCookie = document.cookie;

    if ( sCookie.length && ( -1 != (ichSt = sCookie.indexOf(sName)) ) ) {
        if (-1 == ( ichEnd = sCookie.indexOf(";",ichSt+sName.length) ) ) {
            ichEnd = sCookie.length;
        }

        var cookieValue = sCookie.substring(ichSt+sName.length,ichEnd);

        if(cookieValue == "\"\"") cookieValue = "";
        return unescape(cookieValue);
    }

    return null;
}

function deleteCookie (sName) {
    document.cookie = sName + "=" + getCookie(sName) + "; expires=" + (new Date()).toGMTString() + ";";
}

function win_open(url, winName, winOptions) {
    window.open(url, winName, winOptions);
}
// ********************************** luffy end


/**
* ����� : ���� => [ div �� HEIGHT[286px] >= {��ũ�ε� ��ǰ�̹��� HTML ������ ����:scroll_area_height} ]�� ��쿡 ���������� ǥ�õ�.
* <div style="TOP:30px;LEFT:26px;POSITION:absolute;OVERFLOW:hidden;WIDTH:540px;HEIGHT:286px" onMouseOver="scroll_goods_act=false;" onMouseOut="scroll_goods_act=true;">
*   <script language="javascript">
*       var scroll_snc = new Array();
*       scroll_snc[0] = '..��ũ�ε� ��ǰ�̹��� HTML ����..';
*       ...
*       scroll_snc[n] = '..��ũ�ε� ��ǰ�̹��� HTML ����..';
*
*       var paramsObject =  {
*                              scroll_snc : scroll_snc,
*                              scrollwidth_goods: 140,      // scroll �̵��ʺ� ����
*                              scrollspeed_goods: 5,        // scroll speed ���� (scrollwidth_goods �� scrollspeed_goods ���� ���� �������� 0 �̾����.)
*                              waitingtime_goods: 5000,     // scroll waiting time
*                              scroll_direction: 'right'    // right : left scroll,  left : left scroll
*                              scroll_area_height: 286      // scroll area height
*                            };
*
*       scrollHGoodImages.init(paramsObject);// ��ũ�� �� ����
*       scrollHGoodImages.startscroll_goods();// ��ũ�� ����
*   </script>
* </div>
**/
function ScrollHGoodImages() {

       this.scroll_snc = new Array();     // scroll ��ǰArea HTML
       this.scrollwidth_goods = 0;        // scroll �̵��ʺ� ����
       this.total_area_b_goods = 0;       // �׸��
       this.scroll_interval_goods = null; // setInterval Object
       this.scrollspeed_goods = 5;        // scroll speed ���� (scrollwidth_goods �� scrollspeed_goods ���� ���� �������� 0 �̾����.)
       this.waitingtime_goods = 5000;     // scroll waiting time
       this.s_tmp_goods = 0;
       this.tmp_goods = 0;
       this.scroll_goods_act = true;      // true : scroll action stop,  false : scroll action start
       this.scroll_direction = 'right';   // right : left scroll,  left : left scroll
       this.scrollauto = 'Y';		      //scrollauto : �ð����� �ڵ���ũ�� ��뿩�� ó��
       this.scroll_area_height = 0;      // scroll area height [pixel]

       this.objname = null;

       this.columnClassName = null;

       this.init = function(params) {

	       this.scroll_snc = params.scroll_snc;
	       this.scrollwidth_goods = params.scrollwidth_goods;
	       this.scrollspeed_goods = params.scrollspeed_goods;
	       this.waitingtime_goods = params.waitingtime_goods;
	       this.scroll_direction = params.scroll_direction;
	       this.scroll_area_height = params.scroll_area_height;
	       this.objname = params.objname;
	       if(params.scrollauto == 'N' ){ //N�϶��� ����
		       this.scrollauto = params.scrollauto;
	       }
	       try{
	           this.columnClassName = params.columnClassName;
	       }catch(e){

	       }
       }

       this.startscroll_goods = function()
       {
           if(this.scroll_direction == 'left'){
               this.startscroll_left_goods();
           }else if(this.scroll_direction == 'right'){
               this.startscroll_right_goods();
           }
       }

       this.startscroll_left_goods = function()
       {
           for(var i=0; i<this.scroll_snc.length; i++) {
               this.insert_area_b(this.total_area_b_goods++, i);
           }

           if ( this.scrollauto == 'Y' && this.total_area_b_goods > 1) {
               this.scroll_interval_goods = setInterval(this.objname + ".scroll_left_goods()", this.waitingtime_goods);
           }
           this.total_area_b_goods = this.scroll_snc.length;
       }

       this.startscroll_right_goods = function()
       {
           for(var i=0; i<this.scroll_snc.length; i++) {
               this.insert_area_b(this.total_area_b_goods++, i);
           }

           if ( this.scrollauto == 'Y' && this.total_area_b_goods > 1) {
               this.scroll_interval_goods = setInterval(this.objname + ".scroll_right_goods()", this.waitingtime_goods);
           }
           this.total_area_b_goods = this.scroll_snc.length;
       }

       this.startscroll_goods_by2Floor = function()
       {
           if(this.scroll_direction == 'left'){
               this.startscroll_left_goods_by2Floor();
           }else if(this.scroll_direction == 'right'){
               this.startscroll_right_goods_by2Floor();
           }
       }

       this.startscroll_left_goods_by2Floor = function()
       {
           for(var i=0; i<this.scroll_snc.length; i=i*2) {
               this.insert_area_b_by2Floor(this.total_area_b_goods++, i);
               i++;
           }
           if ( this.total_area_b_goods > 1) {
               this.scroll_interval_goods = setInterval(this.objname + ".scroll_left_goods()", this.waitingtime_goods);
           }

           //this.total_area_b_goods = this.scroll_snc.length;
       }

       this.startscroll_right_goods_by2Floor = function()
       {
           for(var i=0; i<this.scroll_snc.length; i=i+2) {
               this.insert_area_b_by2Floor(this.total_area_b_goods++, i);
           }
           if ( this.total_area_b_goods > 1) {
               this.scroll_interval_goods = setInterval(this.objname + ".scroll_right_goods()", this.waitingtime_goods);
           }
           //this.total_area_b_goods = this.scroll_snc.length;
       }

       this.scroll_left_goods = function()
       {
           if (this.total_area_b_goods > 1) {
               if (this.scroll_goods_act) {
                   if (this.scroll_direction != 'left') {
                       this.arrange_area('left');
                   }
                   for (var i = 0; i < this.total_area_b_goods; i++) {
                       tmp_goods = document.getElementById(this.objname + '_scroll_area'+i).style;

                       tmp_goods.left = parseInt(tmp_goods.left) - this.scrollspeed_goods;

                       if (parseInt(tmp_goods.left) <= -this.scrollwidth_goods) {
                           tmp_goods.left = this.scrollwidth_goods * (this.total_area_b_goods - 1);
                       }
                   }
                   if ((this.s_tmp_goods += this.scrollspeed_goods) >= this.scrollwidth_goods) {
                       clearInterval(this.scroll_interval_goods);
                       this.s_tmp_goods = 0;
                       if ( this.scrollauto == 'Y' ){
                    	   this.scroll_interval_goods = setInterval(this.objname + ".scroll_left_goods()", this.waitingtime_goods);
                       }
                       return;
                   }
               }
               clearInterval(this.scroll_interval_goods);
               this.scroll_interval_goods = setInterval(this.objname + ".scroll_left_goods()", 1);
           } else {
               clearInterval(this.scroll_interval_goods);
           }
       }

       this.scroll_right_goods = function()
       {
           if (this.total_area_b_goods > 1) {
               if (this.scroll_goods_act) {
                   if (this.scroll_direction != 'right') {
                       this.arrange_area('right');
                   }
                   for (var i = 0; i < this.total_area_b_goods; i++) {

                       tmp_goods = document.getElementById(this.objname + '_scroll_area'+i).style;

                       if (parseInt(tmp_goods.left) >= (this.scrollwidth_goods*(this.total_area_b_goods-1))) {
                           tmp_goods.left = -this.scrollwidth_goods + this.scrollspeed_goods;
                       }else{
                           tmp_goods.left = parseInt(tmp_goods.left) + this.scrollspeed_goods;
                       }

                   }
                   if ((this.s_tmp_goods -= this.scrollspeed_goods) <= -this.scrollwidth_goods) {
                       clearInterval(this.scroll_interval_goods);
                       this.s_tmp_goods = 0;
                       if ( this.scrollauto == 'Y' ){
                    	   this.scroll_interval_goods = setInterval(this.objname + ".scroll_right_goods()", this.waitingtime_goods);
                       }
                       return;
                   }
               }
               clearInterval(this.scroll_interval_goods);
               this.scroll_interval_goods = setInterval(this.objname + ".scroll_right_goods()", 1);
           } else {
               clearInterval(this.scroll_interval_goods);
           }
       }

       this.insert_area_b = function(idx, n)
       {
           document.writeln('<div style="POSITION:absolute;OVERFLOW:HIDDEN;LEFT:' + (this.scrollwidth_goods * n) + 'px;WIDTH:' + this.scrollwidth_goods + 'px" id=' + this.objname + '_scroll_area' + n + ' >');
           document.writeln(this.scroll_snc[idx]);
           document.writeln('</div>');
       }


       this.insert_area_b_by2Floor = function(idx, n)
       {
           document.writeln('<div style="POSITION:absolute;OVERFLOW:HIDDEN;LEFT:' + (this.scrollwidth_goods * idx) + 'px;WIDTH:' + this.scrollwidth_goods + 'px" id=' + this.objname + '_scroll_area' + idx + ' >');
           document.writeln('<ul class="' + this.columnClassName + '">');

           if(this.scroll_snc[n] != undefined && this.scroll_snc[n] != null){
	           document.writeln(this.scroll_snc[n]);
	       }

           if(this.scroll_snc[n+1] != undefined && this.scroll_snc[n+1] != null){
               document.writeln(this.scroll_snc[n+1]);
           }

           document.writeln('</ul>');
           document.writeln('</div>');
       }

       this.arrange_area = function(dir)
       {
           if (dir == 'right') {
               for (var i = 0; i < this.total_area_b_goods; i++) {
                   tmp_goods = document.getElementById(this.objname + '_scroll_area' + i).style;
                   if (parseInt(tmp_goods.left) >= (this.scrollwidth_goods*(this.total_area_b_goods-1))) {
                       tmp_goods.left = parseInt(tmp_goods.left) - (this.scrollwidth_goods * this.total_area_b_goods);
                   }
               }
           } else if (dir == 'left') {
               for (var i = 0; i < this.total_area_b_goods; i++) {
                   tmp_goods = document.getElementById(this.objname + '_scroll_area' + i).style;
                   if (parseInt(tmp_goods.left) <= -this.scrollwidth_goods) {
                       tmp_goods.left = parseInt(tmp_goods.left) + (this.scrollwidth_goods * this.total_area_b_goods);
                   }
               }
           }
           this.scroll_direction = dir;
       }
}

/*****************************************
* @author ryan 2008.07.25
* ������ �Ҽ��� ǥ�� / ����ǥ��
******************************************/
function js_DecimalNumber(obj)
{
    var sFilter = "([-+]|[0-9]|[.])";
    var vFilter = "^[-+]?[0-9]*[.]?[0-9]*$";
    var sKey=String.fromCharCode(event.keyCode);

    if(sFilter)
    {
      var re=new RegExp(sFilter);
      // Enter�� Ű�˻縦 ���� �ʴ´�.
      if(sKey != "\r" && !re.test(sKey)) {event.returnValue=false;}

      // Enter Ű�� ���� �ʰ� �Ѵ�.
      if (event.keyCode == 13){
      	event.returnValue =false;
      // BackSpace, DeleteŰ �˻����� �ʴ´�.
      }else if (event.keyCode == 22 || event.keyCode == 83) {
      	event.returnValue = true;
      }
    }

    var reg = new RegExp(vFilter);
    if( !reg.test(obj.value+sKey)) {
    	event.returnValue=false;
    }
}

/**********************************************
* @author ryan 2008.08.04
* Enter key �Է½� �α��� ���� ���� �Ѵ�.
************************************************/
function checkEnterSubmit(formObj){
	var sKey=String.fromCharCode(event.keyCode);
	if(sKey == "\r" || event.keyCode == 13)
	{
		formObj.submit();
	}
}




/***************************************
* @author ryan 2008.9.3 ����
* sendNotice()���� �˾� �޼��� â
****************************************/
function showPopupMessageBO() {
	var ver = navigator.userAgent.match(/MSIE (\d[.0-9]*)[;]/);
	var options = "dialogWidth:300px; dialogHeight:160px; center:yes; scroll:yes;";
	if(ver && ver[1] < 7.0) {
		options = "dialogWidth:300px; dialogHeight:210px; center:yes; scroll:yes;";
	}
	window.showModalDialog("/html/common/MessagePopupBO.html", document.getElementById("msg").value, options);
}
function showPopupMessagePT() {
	var ver = navigator.userAgent.match(/MSIE (\d[.0-9]*)[;]/);
	var options = "dialogWidth:300px; dialogHeight:160px; center:yes; scroll:yes;";
	if(ver && ver[1] < 7.0) {
		options = "dialogWidth:300px; dialogHeight:210px; center:yes; scroll:yes;";
	}
	window.showModalDialog("/html/common/MessagePopupPT.html", document.getElementById("msg").value, options);
}
function showPopupMessageCC() {
	var ver = navigator.userAgent.match(/MSIE (\d[.0-9]*)[;]/);
	var options = "dialogWidth:300px; dialogHeight:160px; center:yes; scroll:yes;";
	if(ver && ver[1] < 7.0) {
		options = "dialogWidth:300px; dialogHeight:210px; center:yes; scroll:yes;";
	}
	window.showModalDialog("/html/common/MessagePopupCC.html", document.getElementById("msg").value, options);
}


    /**
    * ������ Player(Media Player)
    *
    **/
	function vod_play(play_url, width, height) {

	    var width_val = 320;
	    var height_val = 310;
	    if(width) width_val = width;
	    if(height) height_val = height;
	    str = "<object id=\"NSPlay\" width="+width_val+" height="+height_val+" viewastext style=\"z-index:1\" classid=\"CLSID:22D6f312-B0F6-11D0-94AB-0080C74C7E95\" codebase=\"http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701\" standby=\"Loading Microsoft Windows Media Player components...\" type=\"application/x-oleobject\">"
	        + "<param name=\"FileName\" value=\""+play_url+"\">"
	        + "<param name=\"ANIMATIONATSTART\" value=\"1\">"
	        + "<param name=\"AUTOSTART\" value=\"1\">"
	        + "<param name=\"BALANCE\" value=\"0\">"
	        + "<param name=\"CURRENTMARKER\" value=\"0\">"
	        + "<param name=\"CURRENTPOSITION\" value=\"0\">"
	        + "<param name=\"DISPLAYMODE\" value=\"4\">"
	        + "<param name=\"ENABLECONTEXTMENU\" value=\"0\">"
	        + "<param name=\"ENABLED\" value=\"1\">"
	        + "<param name=\"FULLSCREEN\" value=\"0\">"
	        + "<param name=\"INVOKEURLS\" value=\"1\">"
	        + "<param name=\"PLAYCOUNT\" value=\"1\">"
	        + "<param name=\"RATE\" value=\"1\">"
	        + "<param name=\"SHOWCONTROLS\" value=\"1\">"
	        + "<param name=\"SHOWSTATUSBAR\" value=\"-1\">"
	        + "<param name=\"STRETCHTOFIT\" value=\"0\">"
	        + "<param name=\"TRANSPARENTATSTART\" value=\"1\">"
	        + "<param name=\"UIMODE\" value=\"FULL\">"
	        + "<param name=\"displaybackcolor\" value=\"0\">"
	        + "</object>"

	    document.write(str);
	}



var radioUtils = {

    /**
     * Radio Button�� ���õ� ���� �����´�
     */
    checkedVal : function (obj) {

        if(obj.length == undefined) {

            if(obj.checked == true)
                return obj.value;
            else
                return null;
        }

        for(var i = 0; i < obj.length; i++) {
            if(obj[i].checked == true)
                return obj[i].value;
        }
        return null;
    },

    /**
     * Radio Button�� ���õ� ���� �����´�
     */
    checkedObj : function (obj) {

        if(obj.length == undefined) {

            if(obj.checked == true)
                return obj;
            else
                return null;
        }

        for(var i = 0; i < obj.length; i++) {
            if(obj[i].checked == true)
                return obj[i];
        }
        return null;
    },

    disabledRadio : function (obj, isDisabled) {

        if(obj.length == undefined) {

            obj.disabled = isDisabled;
        }

        for(var i = 0; i < obj.length; i++) {
            obj[i].disabled = isDisabled;
        }
    }

}

var checkBoxUtil = {

    /*
    * ����� �Ǵ� üũ�ڽ��� ��ü����
    */
    selectAll : function (objForm, strTargetCheckBoxName) {
        try{
            var obj = objForm[strTargetCheckBoxName];

            if(obj == null || obj == undefined){
                return;
            }

            if (obj.length > 0)  {
                for (var i = 0; i < obj.length; i++) {
                        obj[i].checked = true;
                }
            }
            else {
                obj.checked = true;
            }
        }
        catch(x) {
        }
    },

    /*
    * ����� �Ǵ� üũ�ڽ��� ��ü����
    */
    selectNone : function (objForm, strTargetCheckBoxName)   {
        try{
            var obj = objForm[strTargetCheckBoxName];

            if(obj == null || obj == undefined){
                return;
            }

            if (obj.length > 0) {
                for (i = 0; i < obj.length; i++) {
                    obj[i].checked = false;
                }
            }
            else {
                obj.checked = false;
            }
        }
        catch(x) {
        }
    },

    /*
    * ��ü����/���� �� ���ÿ� ����ϴ� üũ�ڽ��� ��쿡 ��ü����/��ü���� �� �� ��� ����.[��ܿ� �ϳ� , �ϴܿ� �ϳ� �ִ� ��쿡 ���ؼ�
    */
    changeChecked : function(obj, objFormName, strTargetCheckBoxName){

        var objForm = eval("document." + objFormName);

        if(obj == null || obj == undefined){
            return;
        }

        if(obj.checked == true){
            checkBoxUtil.selectAll(objForm, strTargetCheckBoxName);
        }else{
            checkBoxUtil.selectNone(objForm, strTargetCheckBoxName);
        }

        var chkObj = objForm[obj.name];
        var chkObjLength  = chkObj.length;
        if(obj.checked == true){
        	for(var i = 0; i<chkObjLength; i++){
		        chkObj[i].checked = true;
		     }
        }else{
        	for(var i = 0; i<chkObjLength; i++){
		        chkObj[i].checked = false;
		     }
        }
    },

    /*
    * üũ�� üũ�ڽ��� �����ϴ��� ���θ� �����Ѵ�.
    *
    * ���ϰ� : true => ���õ� üũ�ڽ��� ����.
    *        false => ���µ� üũ�ڽ��� ����.
    */
    isExistCheckedBox : function (objForm, strTargetCheckBoxName)   {
        try{
            var obj = objForm[strTargetCheckBoxName];

            if(obj == null || obj == undefined){
                return false;
            }

            if (obj.length > 0) {
                for (i = 0; i < obj.length; i++) {
                    if(obj[i].checked == true) return true;
                }

                return false;
            }
            else {
                return obj.checked;
            }
        }
        catch(x) {
            return false;
        }
    }
}




var checkValidator = {

    zero : function (val) {
        var iVal = Number(val);

        if(isNaN(iVal)) return false;

        if(iVal != 0) return false;

        return true;
    },

    minus : function (val) {
        var iVal = Number(val);

        if(isNaN(iVal)) return false;

        if(iVal >= 0) return false;

        return true;
    },

    zeroPlus : function (val) {

        if(val == "") return false;

        var iVal = Number(val);

        if(isNaN(iVal)) return false;

        if(iVal < 0) return false;

        return true;
    },

    plus : function (val) {
        var iVal = Number(val);

        if(isNaN(iVal)) return false;

        if(iVal <= 0) return false;

        return true;
    },

    number : function (val) {
        var iVal = Number(val);

        if(isNaN(iVal)) return false;

        return true;
    },

    numberRange : function (val, min, max) {

        if(this.zeroPlus(val) == false) return false;

        if(this.zeroPlus(min) == false) return false;

        if(this.zeroPlus(max) == false) return false;

        var iVal = Number(val);
        var iMin = Number(min);
        var iMax = Number(max);

        if(iMin <= iVal && iVal <= iMax){
            return true;
        }else{
            return false;
        }
    },

    find : function (val, filter) {

        var re = new RegExp(filter);

        if(re.test(val) == true)  return false;

        return true;
    },

    illegal : function (val, filter) {

        if(this.find(val, filter) == false) return false;

        return true;
    },

    limit : function (val, limitCnt) {

        if(StringUtils.getByteLength(val) > limitCnt) return false;

        return true;
    }
}


/**
 * ���� Util JavaScript
 * @author mac 2008.08.05
 **/
var CommonUtil = {

     /**
     * element ��  Top ��ġ ���
     * @author mac 2008.08.05
     **/
    getTopPosition : function (obj){
      var parent = obj.offsetParent;
      var resultTop = obj.offsetTop;

      while(parent){
          resultTop += parent.offsetTop;
          parent = parent.offsetParent;
      }

      return resultTop;
    }
}

/**
 * ���� Util JavaScript
 * @author themall 2008.10.08
 **/
function searchFormSubmit(frmObject) {
	frmObject.rowsPerPage.value = document.all.pagingUnit.value;
	frmObject.submit();
}

function searchFormSubmitByEnter(frmObject) {
    if(event.keyCode==13)
        searchList(frmObject);
}

function excelFormSubmit(frmObjectId, url, fileNm) {
    //document.pageNaviForm.rowsPerPage.value = document.all.pagingUnit.value;
    var frmObject = document.getElementById(frmObjectId);
	var initAction = frmObject.action;
	frmObject.action = url + "&file=" + fileNm;
	frmObject.submit();
	frmObject.action = initAction;
}

function pageFormSubmit(rowsPerPage) {
	if(event.keyCode==13)
	    goMoveList(1, rowsPerPage)
}

function submitModalForm(frmObject, reloadFlag, passVal) {

    var oMyObject = window.dialogArguments;
    // window.name ������ publicModal.html ���� �̹� �����Ƿ� �� �ʿ����
    frmObject.target = window.name;

    if( typeof(frmObject.rowsPerPage) != 'undefined' ) {
        frmObject.rowsPerPage.value=document.all.pagingUnit.value;
        //alert("rowsPerPage="+frmObject.rowsPerPage);
    }
    if( typeof(frmObject.reloadFlag) != 'undefined' ) {
        frmObject.reloadFlag.value=reloadFlag;
        //alert("reloadFlag="+frmObject.reloadFlag);
    }
//alert("before " + passVal);
    // Validation Pass
    if(passVal) {
        //alert("ture");
        frmObject.submit();
        return;
    } else {
        //alert("false");
    }
//alert("after " + passVal);
    // ��ȿ��üũ
    if(validateForm(frmObject)) {
        //alert(frmObject.id.value);
        //alert("before submitModalForm");
        frmObject.submit();
    }
}

function showModalForm(frmObject, goUrl, width, height, callback, fieldData) {
    // ToDo:showDetail �Լ� �����
    // addDataToProperty(property); var result = modalOpen(property); �Ŀ� callback Function ó���ϱ�

    /*���ʵ� ����
    //var fieldData = new Array({fieldName:"currentPage",fieldValue:document.pageNaviForm.currentPage.value}
    var fieldData=new Array({fieldName:"userVal",fieldValue:userVal}
                        ,   {fieldName:"reqTeamId",fieldValue:reqTeamId}
                        ,   {fieldName:"actionMode",fieldValue:"USER"}
                        ,   {fieldName:"userGbn",fieldValue:userGbn}
                        ,   {fieldName:"flag",fieldValue:flag}
                        ,   {fieldName:"index",fieldValue:index}
                            );
    */
    var property = {
                             urlPath:goUrl
                             ,frmObject:frmObject //required
                             ,modalName:"newModal" //required
                             ,dialogWidth:width
                             ,dialogHeight:height
                             //,dialogLeft:"0"
                             //,dialogTop:"0"
                             //,center:"yes" //yes | no | 1 | 0 | on | off
                             //,resizable:"yes" //yes | no | 1 | 0 | on | off
                             ,scroll:"yes" //yes | no | 1 | 0 | on | off
                             ,status:"no" //yes | no | 1 | 0 | on | off
                             ,fieldData:fieldData
                          };
    addDataToProperty(property); //���� �ִ� �ʵ� ����
    var result = modalOpen(property);
    if(result != null){
        if(result.SUCCESS) {
            //setValueSupMenu(result);
            //alert("callback");
            callback(result);
        } else{
            alert('<fmt:message key="errors.common.fail">����</fmt:message>');
        }
    }
}

function popupBookPreview(linkUrl){
    window.open(linkUrl, "_swf", "left=0, top=0, width=900, height=675, scrollbars=1, resizable=yes");
}

//--------------------------------------------------
// IFRAME submit ��, ��� ó���� ���� ���
//  - 2008/10/18
//  - zag@uzen.net
//--------------------------------------------------

var SUBMIT_CALLBACK = null;
var SUBMIT_RESULT = null;

function setSubmitCallback(callback, result)
{
	SUBMIT_CALLBACK = callback;
	SUBMIT_RESULT = result;

	setTimeout(execSubmitCallback, 200);
}

function execSubmitCallback()
{
	if(SUBMIT_CALLBACK && SUBMIT_RESULT)
	{
		SUBMIT_CALLBACK(SUBMIT_RESULT);
	}
}

//����Ʈ�� ���
function calBytes(str)
{
  	var tcount = 0;

  	var tmpStr = new String(str);
  	var temp = tmpStr.length;

  	var onechar;
  	for ( k=0; k<temp; k++ )
  	{
    	onechar = tmpStr.charAt(k);
    	if (escape(onechar).length > 4)
    	{
      		tcount += 2;
    	}
    	else
    	{
      		tcount += 1;
    	}
  	}

  	return tcount;
}

// �Ҽ������� Ư�� �ڸ����� ���ڿ� ���ϱ�
function getFloatString(num, pos) {
    var str = String(num);
    var dotPos = str.indexOf(".") + 1;
    if (dotPos <= 0) {
        dotPos = str.length;
        pos = 0;
    }

    return str.substring(0, dotPos + pos);
}

function layerView(idName) {
 Obj = document.getElementById(idName);
 Obj.style.display="block";
}

function layerHidden(idName) {
 Obj = document.getElementById(idName);
 Obj.style.display="none";
}


function selTopHidden(idName)    {
  obj_ID=document.getElementById("" + idName + "");
        setTimeout("obj_ID.style.display='none'",3000);
}

function headSel(no,optionV) {
 obj_sel=document.getElementById("headSel_" + no);
 obj_opt=document.getElementById("headSelO_" + no)
 obj_sel.value=optionV;
 //obj_sel.innerHTML=optionV;
 obj_opt.style.display="none";
}

//���� �÷���
function Popup()
{
	_width = "300";
    var pos_x = parseInt( (screen.width-_width) );
    windowprops = "width=300,height=176,scrollbars=no, dependent=yes,left=" + pos_x + ",top=0";
    //preview = window.open("http://www.11st.co.kr/jsp/common/musicPopup.jsp", "player", windowprops);
    preview = window.open("http://bgm.11st.co.kr/tmall/player/tmall_player.php", "player", windowprops);
}

//����ȭ�� �ٷΰ��� ��ġ
function shortcutPopup() {
	goStatUrlCode('BMB0501');
	window.open('http://www.11st.co.kr/browsing/GNBShortcut.tmall','shortcutPopup','width=346,height=170,left=250,top=140,resizable=no,scrollbars=no');
}


/*
 * ���ڿ��� �˻��Ͽ� ���������� üũ�Ѵ�.
 *
 */
function IsNumeric(checkStr)
{
	for (i = 0;  i < checkStr.length;  i++)
	{
		ch = checkStr.charAt(i);

		if (ch < "0" || ch > "9")
			return false;
	}

	return true;
}

function IsFloat(checkStr) {
	var numstr    = "0123456789.-";
	var dotstr    = ".";
	var thischar;
	var count     = 0;
	var countdot  = 0;
	var violation = 0;
	var val		  = checkStr.replace(/,/g, "");

	for (var i = 0; i < val.length; i++) {
		thischar = val.substring(i, i + 1);

		if (numstr.indexOf(thischar) != -1)
			count++;

		if (dotstr.indexOf(thischar) != -1)
			countdot++;

		if (i == 0 && thischar == '.') {
			violation++;
		}

		if (i != 0 && thischar == '-') {
			violation++;
		}
	}

	if (count == val.length && countdot <= 1 && violation == 0)
		return true;
	else
		return false;
}


//���ǰ˻��� ���� �߰� ���� ---------------------------------------------------//
	function funcGetDateTime() {
	  var dt_datetime = new Date()
	  var year  = dt_datetime.getFullYear();
	  var month = (dt_datetime.getMonth()+1);
	  var day   = dt_datetime.getDate();
      var hours = dt_datetime.getHours();
      var min   = dt_datetime.getMinutes();
      if(hours <10) hours = "0"+hours;
      if(min <10) min = "0"+min;

	  if( parseInt(month) < 10 )
	  {
	    month = "0" + month;
	  }

	  if( parseInt(day) < 10 )
	  {
	    day = "0" + day;
	  }

	  return ( new String( year + "/" + month + "/" + day + " " +hours+ ":"+ min));
	}


    function funcSetCookieSearchKey( name, value, expiredays )
    {
        var todayDate = new Date();
        todayDate.setDate( todayDate.getDate() + expiredays );
        document.cookie = name + '=' + escape( value ) + '; path=/; domain=11st.co.kr;  expires=' + todayDate.toGMTString() + ';';
    }

    function getCookieSearchKeyList(str){
        var cookieData = "";
        var data = getCookie(str);
        data = unescape(data);
        cookieData = data;

        return cookieData;
    }
    function fucnSetSearchKey(kwd)
    {
        var cookieData = "";
        var cookieDataList = "";

    	if(kwd.length > 0){
            cookieData =    getCookieSearchKeyList('TMALL_SEARCHLIST');

        	var dateTime = funcGetDateTime();
        	var searchKeyValue = kwd+"��"+dateTime;
        	cookieData = searchKeyValue + "��" + cookieData  ;

            var token1   = cookieData.split(/��/g);
            var sizeLimit = 10;
            for(i=0; i<token1.length &&  i<sizeLimit ; i++)
            {
                if(i == (sizeLimit-1)){
                    cookieDataList += token1[i];
                }else{
                    cookieDataList += token1[i]+"��";
                }
            }
            funcSetCookieSearchKey("TMALL_SEARCHLIST", cookieDataList,1);
        }

    }
//���ǰ˻��� ���� �߰� ��---------------------------------------------------//

/**
* ��ƼG����/��� LNB Category Ŭ�� �� display ����
* categoriLeft() �� ���� ȣ��ȴ�.
*/
function categoriLeft() {
	if (document.getElementById("categoryL").style.display=="none")
	{
		document.getElementById("categoryL").style.display="";
		document.getElementById("cateImg").style.display="none";
	}else{
		document.getElementById("categoryL").style.display="none"
		document.getElementById("cateImg").style.display="";
	}
}

// �ѱ� Ű���� encoding 2011.05.19 by inshallah
function goStatUrl(url, code ,target) {
 // Ŭ����
 doCommonStat(code);
 // �ش� �������� �̵�

 var mv_url;
 //retUrl�� �����Ѵٸ�
 if (code=="BMA0201" && url.indexOf("retUrl=")>-1) {
	 var encUrl = url.substring(0,url.indexOf("?")+1);
	 var encParams = url.substring(url.indexOf("?")+1);
	 var fixedParams = encParams.substring(0,encParams.indexOf("retUrl=")+7);
	 var rtnParams = encParams.substring(encParams.indexOf("retUrl=")+7);

	 // KeyWord encoding�� ���� parameters ������
	 if(rtnParams.indexOf("kwd") > -1 ) {
		 var args = rtnParams.split("&");
		 var arg = "";
		 for(var i=0;i < args.length;i++) {
			 var encVal = args[i];
			 var par = encVal.split("=");
			 if(par[0] == "kwd") {
				 if(par.length > 1) {
					 encVal = "kwd="+escape(par[1]);
				 }
			 }
			 arg = arg + (i > 0 ? "&":"") + encVal;
		 }
		 rtnParams = arg
	 }

	 mv_url = encUrl + fixedParams + encodeURL(rtnParams);
	//mv_url = url.substring(0,loc_retUrl)+"retUrl="+encodeURL(url.substring(loc_retUrl+7));
 } else {
 	  mv_url = url;
 }

 goCommonUrl(mv_url,target);

}

function encodeURL(str){
    var s0, i, s, u;
    s0 = "";                // encoded str
    for (i = 0; i < str.length; i++){   // scan the source
        s = str.charAt(i);
        u = str.charCodeAt(i);          // get unicode of the char
        if (s == " "){s0 += "+";}       // SP should be converted to "+"

        else {
            if ( u == 0x2a || u == 0x2d || u == 0x2e || u == 0x5f || ((u >= 0x30) && (u <= 0x39)) || ((u >= 0x41) && (u <= 0x5a)) || ((u >= 0x61) && (u <= 0x7a))){       // check for escape
                s0 = s0 + s;            // don't escape
            }
            else {                  // escape
                if ((u >= 0x0) && (u <= 0x7f)){     // single byte format
                    s = "0"+u.toString(16);
                    s0 += "%"+ s.substr(s.length-2);
                }
                else if (u > 0x1fffff){     // quaternary byte format (extended)
                    s0 += "%" + (oxf0 + ((u & 0x1c0000) >> 18)).toString(16);
                    s0 += "%" + (0x80 + ((u & 0x3f000) >> 12)).toString(16);
                    s0 += "%" + (0x80 + ((u & 0xfc0) >> 6)).toString(16);
                    s0 += "%" + (0x80 + (u & 0x3f)).toString(16);
                }
                else if (u > 0x7ff){        // triple byte format
                    s0 += "%" + (0xe0 + ((u & 0xf000) >> 12)).toString(16);
                    s0 += "%" + (0x80 + ((u & 0xfc0) >> 6)).toString(16);
                    s0 += "%" + (0x80 + (u & 0x3f)).toString(16);
                }
                else {                      // double byte format
                    s0 += "%" + (0xc0 + ((u & 0x7c0) >> 6)).toString(16);
                    s0 += "%" + (0x80 + (u & 0x3f)).toString(16);
                }
            }
        }
    }
    return s0;
}


function goStatUrlCode(code) {
 // Ŭ����
 doCommonStat(code);
}


// ������
function doCommonStat(code)	{
	try	{
		if ( code != null && code != "" )	{
			var	i =	new	Image();
			var protocol = window.document.location.protocol;
			var statDomain = "http://book.11st.co.kr";

			if ( protocol == "https:" )	{
				statDomain =  statDomain.replace("http:", protocol);
			}
			i.src =	statDomain + "/a.st?url=" + code;
		}
	} catch (ex)	{}
}


function goCommonUrl(url, target)	{
	try	{
		if (target == null || target == "")	{
			target = top;
		}
		if (url != null && url != "")	{
			if (target == '_blank')
				window.open(url,target);
			else
				target.location.href = url;
		}
	} catch (ex)	{}
}

// way : left or right
// obj : ��ǰ�� �����ϰ� �ִ� Element ��
// currRowObj : ���� �� ��° row���� �����ϴ� Element ��
// row : �� row�� ����
// currRow : ���� ��ġ�ϰ� �ִ� row
function fnListWay(way, obj, currRowObj, row){
	var currRow = document.getElementById(currRowObj).value; //���� ��ġ�ϰ� �ִ� row
	var viewRow = 1; //������� �� row

	if(row > 0){
		if(way == "left"){
			if(currRow == "1"){
				viewRow = row;
			} else {
				viewRow = eval(currRow) - 1;
			}
		}else if(way == "right"){
			if(currRow == row){
				viewRow = 1;
			} else {
				viewRow = eval(currRow) + 1;
			}
		}
		for(i=1;i<=row;i++){
			if(i == viewRow){
				document.getElementById(obj+i).style.display='block';
				document.getElementById(currRowObj).value = i;
			}else{
				document.getElementById(obj+i).style.display='none';
			}
		}
	}
}

// ī�װ�(�÷���)���� ���� �� Ŭ��
function flSetBookTab(){
	//if(document.getElementById("isBook")){
	//	document.getElementById("isBook").value='Y';
	//}
}
// ī�װ�(�÷���)���� ���� �� Ŭ��
function flSetDiskTab(){
	//if(document.getElementById("isBook")){
	//	document.getElementById("isBook").value='N';
	//}
}

function goClickCodeUrl(url,menu,target){
	var clickCode = fnClickCodeSearch(menu);
	goStatUrl(url,clickCode,target);
}

function goClickCodeUrlCode(menu){
	var clickCode = fnClickCodeSearch(menu);
	goStatUrlCode(clickCode);
}

function fnClickCodeSearch(menu){
	var isBookElement = document.getElementById("isBook");
	var isBook = "Y";
	if(isBookElement){
		if(isBookElement.value == "N") isBook = "N";
	}

	var clickCode = "";

	//����G���� �ΰ�
	if(menu == "gnbMainLogo"){
		if(isBook == "N") 	clickCode = "DMA0100";
		else 				clickCode = "BMA0100";
	}
	//quick_G����
	if(menu == "gnbQuick11st"){
		if(isBook == "N") 	clickCode = "DMA0101";
		else 				clickCode = "BMA0101";
	}
	//quick_����G����
	if(menu == "gnbQuickBook"){
		if(isBook == "N") 	clickCode = "DMA0102";
		else 				clickCode = "BMA0102";
	}
	//quick_����G����
	if(menu == "gnbQuickTour"){
		if(isBook == "N") 	clickCode = "DMA0103";
		else 				clickCode = "BMA0103";
	}
	//quick_��ƼG����
	if(menu == "gnbQuickBeauty"){
		if(isBook == "N") 	clickCode = "DMA0104";
		else 				clickCode = "BMA0104";
	}
	//quick_Ƽ��G����
	if(menu == "gnbQuickTicket"){
		if(isBook == "N") 	clickCode = "DMA0105";
		else 				clickCode = "BMA0105";
	}
	//�α���
	if(menu == "gnbLogin"){
		if(isBook == "N") 	clickCode = "DMA0201";
		else 				clickCode = "BMA0201";
	}
	//�α׾ƿ�
	if(menu == "gnbLogout"){
		if(isBook == "N") 	clickCode = "DMA0202";
		else 				clickCode = "BMA0202";
	}
	//ȸ������
	if(menu == "gnbJoin"){
		if(isBook == "N") 	clickCode = "DMA0203";
		else 				clickCode = "BMA0203";
	}
	//ȸ������
	if(menu == "gnbMyInfo"){
		if(isBook == "N") 	clickCode = "DMA0204";
		else 				clickCode = "BMA0204";
	}
	//��ٱ���
	if(menu == "gnbCart"){
		if(isBook == "N") 	clickCode = "DMA0205";
		else 				clickCode = "BMA0205";
	}
	//����G����
	if(menu == "gnbMyBook"){
		if(isBook == "N") 	clickCode = "DMA0206";
		else 				clickCode = "BMA0206";
	}
	//������
	if(menu == "gnbCon"){
		if(isBook == "N") 	clickCode = "DMA0207";
		else 				clickCode = "BMA0207";
	}
	//���ѹα�����Ʈ����
	if(menu == "gnbBestseller"){
		if(isBook == "N") 	clickCode = "DMA0301";
		else 				clickCode = "BMA0301";
	}
	//���γ���å
	if(menu == "gnbNewBook"){
		if(isBook == "N") 	clickCode = "DMA0302";
		else 				clickCode = "BMA0302";
	}
	//��õ����
	if(menu == "gnbRecomm"){
		if(isBook == "N") 	clickCode = "DMA0303";
		else 				clickCode = "BMA0303";
	}
	//�̺�Ʈ
	if(menu == "gnbEvent"){
		if(isBook == "N") 	clickCode = "DMA0304";
		else 				clickCode = "BMA0304";
	}
	//��Ư����Ű��
	if(menu == "gnbLowPrice"){
		if(isBook == "N") 	clickCode = "DMA0401";
		else 				clickCode = "BMA0401";
	}
	//����������
	if(menu == "gnbCheapest"){
		if(isBook == "N") 	clickCode = "DMA0402";
		else 				clickCode = "BMA0402";
	}
	//Ű��ƿ﷿
	if(menu == "gnbKids"){
		if(isBook == "N") 	clickCode = "DMA0403";
		else 				clickCode = "BMA0403";
	}
	//����/DVD
	if(menu == "gnbMusicDvd"){
		if(isBook == "N") 	clickCode = "DMA0404";
		else 				clickCode = "BMA0404";
	}
	//GNB���_��
	if(menu == "gnbBannerLeft"){
		if(isBook == "N") 	clickCode = "DMA0501";
		else 				clickCode = "BMA0501";
	}
	//GNB���_��
	if(menu == "gnbBannerRight"){
		if(isBook == "N") 	clickCode = "DMA0502";
		else 				clickCode = "BMA0502";
	}
	//GNB�˻���ư
	if(menu == "gnbSearchBtn"){
		if(isBook == "N") 	clickCode = "DMA0600";
		else 				clickCode = "BMA0600";
	}
	//���ú���ǰ
	if(menu == "gnbTodayView"){
		if(isBook == "N") 	clickCode = "DMA0700";
		else 				clickCode = "BMA0700";
	}
	//���ø���Ʈ��ǰ
	if(menu == "gnbWishList"){
		if(isBook == "N") 	clickCode = "DMA0800";
		else 				clickCode = "BMA0800";
	}
	//���ø���Ʈ��ü����
	if(menu == "gnbWishListAll"){
		if(isBook == "N") 	clickCode = "DMA0801";
		else 				clickCode = "BMA0801";
	}
	//LNB��_����
	if(menu == "gnbTabBook"){
		if(isBook == "N") 	clickCode = "DMB0001";
		else 				clickCode = "BMB0001";
	}
	//LNB��_����/DVD
	if(menu == "gnbTabMusic"){
		if(isBook == "N") 	clickCode = "DMB0002";
		else 				clickCode = "BMB0002";
	}
	return clickCode;
}

//10���� ������ �տ� 0�� ����
function addzero(n) {
	return n < 10 ? "0" + n : n;
}

/**
 * <pre>
 * ��¥ �˻� (yyyy/MM/dd)�˻�
 * </pre>
 * @param field form.element
 * @param error_msg ���� message
 * @return boolean
 */
isDate = function (val) {

	var matches;

	/**
	 * 9999-12-31 ��¥������ ���� �ʴٴ� ������ �߻��Ͽ� ó��
	 */
	if ( matches = val.match(/^(\d{4})[/](\d{2})[/](\d{2})$/) ) {
		if ( !checkDate(matches[1], matches[2], matches[3]) ) {
			return false;
		}
		return true;
	}
	else {
		alert("��¥ ������ �ùٸ��� �ʽ��ϴ�.\n\nyyyy/MM/dd �������� �Է��� �ֽʽÿ�.");
		return false;
	}
}


/**
 * ��¥ ���� �˻�
 */
checkDate = function(yyyy, mm, dd) {
	if (typeof(yyyy) == "undefined" || yyyy == null || yyyy == "" || yyyy.length != 4) {
		alert("��¥ ������ �ùٸ��� �ʽ��ϴ�.");
		return false;
	}
	if (typeof(mm) == "undefined" || mm == null || mm == "" || mm.length > 2) {
		alert("��¥ ������ �ùٸ��� �ʽ��ϴ�.");
		return false;
	}
	if (typeof(dd) == "undefined" || dd == null || dd == "" || dd.length > 2) {
		alert("��¥ ������ �ùٸ��� �ʽ��ϴ�.");
		return false;
	}
	mm =  mm.length == 1 ? "0" + mm : mm;
	dd =  dd.length == 1 ? "0" + dd : dd;

	var date = new Date(yyyy +"/"+ mm +"/"+ dd);

	if (yyyy - date.getFullYear() != 0) {
		alert("��¥ ������ �ùٸ��� �ʽ��ϴ�.");
		return false;
	}

	if (mm - date.getMonth() - 1 != 0) {
		alert("��¥ ������ �ùٸ��� �ʽ��ϴ�.");
		return false;
	}

	if (dd - date.getDate() != 0) {
		alert("��¥ ������ �ùٸ��� �ʽ��ϴ�.");
		return false;
	}
	return true;
}


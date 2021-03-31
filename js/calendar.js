
    var year=parity=pa_od=weekArr=month_arr=month_parity=month_OddDay=week=second_limt=leapYear=nonOddDay=oddDay=month=weekValue=count=count1=count2=count3=date=0;

function removeTable(parentDiv,childDiv){
    var parent = document.getElementById(parentDiv);
    var child  = document.getElementById(childDiv);
      parent.removeChild(child);  
    
}


   function currDateFunction(){
        var d = new Date();
        var cd= d.getDate();
        var cm = d.getMonth() + 1;
        var cy= d.getFullYear();
        var full = [cd,cm,cy];
        return full;

   }

    var arr = currDateFunction();
    var curr_date = arr[0];
    var curr_month = arr[1]
    year = arr[2];




CalendarFunc(year);

function PreYearFunc(){
    var r ;
    for(r=1; r<=12; r++){
        removeTable("calendar",year);
    }
    
    CalendarFunc(--year);
}


function NextYearFunc(){
    var r ;
    for(r=1; r<=12; r++){
        removeTable("calendar",year);
    }
    
    CalendarFunc(++year);
}

 
function   CalendarFunc(year){

     document.getElementById('yearShow').innerHTML=year;

    if (year%4==0) {
        parity=29;  
        pa_od=1;  
    }else{
        parity=28; 
        pa_od=0; 
    }


    weekArr=["Sun","Mon","Tue","wed","Thu","Fri ","Sat"];
    month_arr = ["January","February","March","Appril","May","June","July","August","September","October","November","December"];
    month_parity = [31,parity,31,30,31,30,31,31,30,31,30,31];
    month_OddDay = [3,pa_od,3,2,3,2,3,3,2,3,2,3];

    
    
    for (month=0; month < 12; month++) {
        weekValue=oddDay=leapYear=nonOddDay=0;
        week=7;
        

        second_limt=year-2001;
        leapYear=Math.floor(second_limt/4);
        nonOddDay=second_limt-leapYear;
        oddDay = leapYear*2+nonOddDay+1;
        weekValue=oddDay%7;
        if(month>0){
            
            for (var io=0; io<month; io++) { 
                 oddDay = month_OddDay[io]+oddDay;
            }
            io=0;
            weekValue=oddDay%week;
        }


       
        var parent = document.getElementById('calendar');
        var table  = document.createElement('table');
        table.setAttribute("id",year);
        var tr     = document.createElement('tr');   
        var th     = document.createElement('th');
        th.setAttribute("colspan","7");   
        th.setAttribute("class","monthName");
        th.innerHTML =  month_arr[month];  
        tr.appendChild(th);
        table.appendChild(tr);
        parent.appendChild(table);
               
        var weekcol,weekrow;
        weekrow = document.createElement('tr');
        for(var w=0; w<weekArr.length; w++){         
            weekcol = document.createElement('th');
            weekcol.innerHTML = weekArr[w];
            weekrow.appendChild(weekcol);
        }



        table.appendChild(weekrow);

        date=1;
        count=count1=count2=count3=0;
        if(weekValue==0){count3=1;}
            
        if(weekValue!=0){
          if(month_parity[month]==31){
              date=(31-weekValue);
             }else{date=(32-weekValue);}
          }

          
        var dayrow = document.createElement('tr');
                for(; date<43; date++){
                   
                    if(count3>0 && count3<=month_parity[month]){
                        if(date== curr_date &&( month+1)==curr_month){
                            
                            var daycol = document.createElement('td');
                            daycol.setAttribute("class","activeDate");
                            var text = document.createTextNode(date);
                            daycol.appendChild(text);
                            dayrow.appendChild(daycol);

                        }
                        else{
                           
                            var daycol = document.createElement('td');
                            var text = document.createTextNode(date);
                            daycol.appendChild(text);
                            dayrow.appendChild(daycol);
                        }
                    }
                    else{
                        
                        var daycol = document.createElement('td');
                            daycol.setAttribute("style","color:#DCD7E8");
                            var text = document.createTextNode(date);
                            daycol.appendChild(text);
                            dayrow.appendChild(daycol);
                    }

                    
                    count1++;
                    count2++;
                    if(count1==weekValue){
                        date=0;
                    }
                    if(count1 >= weekValue && date == month_parity[month]){
                        date=0;
                    }

                    if(count1>=weekValue && date<=month_parity[month]){count3++;}

                    count++;
                    if (count==7) {
                        table.appendChild(dayrow);
                        dayrow = document.createElement('tr');

                        count=0;
                    }
                    if(count2==42){
                        count2=0;
                        break;
                    };
                }       

        }

}

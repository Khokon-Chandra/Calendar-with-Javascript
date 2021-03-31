

// Previous year caller..........
function PreYearFunc(){
    document.getElementById("calendar").innerHTML = "";
    fullyear--;
    CalendarFunction(fullyear);
}
//Next year caller function............
function NextYearFunc(){
    document.getElementById("calendar").innerHTML = "";
    fullyear++;
    CalendarFunction(fullyear);
}



function presentYearFunction(){
    document.getElementById("calendar").innerHTML = "";
    document.getElementById("month").innerHTML = "";
    var present = new Date();
    var present_year = present.getFullYear();
    CalendarFunction(present_year);
    fullyear = present_year;
    monthFunction(present.getMonth(),fullyear);
    
}





var fullyear;
var d = new Date();
fullyear = d.getFullYear();
var curr_month = d.getMonth();
var curr_date = d.getDate();
CalendarFunction(fullyear);//default year or current year function call;


function CalendarFunction(year){
    document.getElementById('yearShow').innerHTML = year;
    var month;
    for( month=0; month<12; month++){
        var parity;
        if (year%4==0) {
                parity=29;   
            }else{
                parity=28; 
            }

        var weekArr=["Sun","Mon","Tue","wed","Thu","Fri","Sat"];
        var month_arr = ["January","February","March","Appril","May","June","July","August","September","October","November","December"];
        var month_parity = [31,parity,31,30,31,30,31,31,30,31,30,31];

        /*
        firstDay = loop a running month ar 1st date ar day name(week name);
        */
        var date = new Date(year,month,1);
        var firstDay = date.getDay();


        var container = document.getElementById('calendar');
        var table = document.createElement('table');
        var trow = document.createElement('tr');
        var thead = document.createElement('th');
        var node = document.createTextNode(month_arr[month]);
        table.setAttribute("id","id_"+year);
        thead.setAttribute("colspan","7");
        thead.setAttribute("class","monthName");
        thead.appendChild(node);
        trow.appendChild(thead);
        table.appendChild(trow);
        container.appendChild(table);


        //..........This loop work to print 7 days name..........

        trow = document.createElement('tr');
        for(var i=0; i<7; i++){
            thead = document.createElement('th');
            thead.innerHTML = weekArr[i];
            trow.appendChild(thead);
        }
        table.appendChild(trow);

        var first_table_cell;
        if(firstDay>0){
            if(month_parity[month]==31){first_table_cell =month_parity[month]-firstDay;}
            else{first_table_cell = 32-firstDay;} 
        }else{first_table_cell=1;}


        var count=0,count1=0,count2=0,count3=0, first_date_will_start = firstDay;
        /*
            count = 7 hole again new row start hobee
            count1 = table ar 1st kototi faka ghor fill korbee ta count korbee;
            count2 = 1-31 / 1-30/ 1-28/29 ti table cell fill kora porjonto count korbee. Jokhonoi 1-31 or 1-30 or 1-28/29 print hbee
            abar faka ghor fill korar jonno;
            count3 = total 42 ta cell fill howa porjonno ati count kortei thakbee....42 ta cell puron hole loop ke ati break korabee;
        */

        trow = document.createElement('tr');
        for(; first_table_cell<=42; first_table_cell++){
            count++;
            count1++;
            count2++;
            count3++;
            var tdata = document.createElement('td');
            tdata.innerHTML=first_table_cell;
            trow.appendChild(tdata);
            
            if(count1 == first_date_will_start){first_table_cell=0;}
            if((count2 - first_date_will_start) == month_parity[month]){first_table_cell = 0;}
            if((count1>=first_date_will_start+1) && ((count2 - first_date_will_start) <= month_parity[month])){
                tdata.setAttribute("class","text-dark pointer");
                if(first_table_cell === curr_date && month == curr_month){
                    tdata.setAttribute("class","bg-primary");
                    tdata.setAttribute("style","color:#fff;");
                }
            }

            
            if(count==7){
               table.appendChild(trow);
               trow = document.createElement('tr');
               count=0;
            }
            if(count3 == 42){break;}
        }// one month calendar printer end.....(inner for loop)
        table.appendChild(trow);
    }//12 month calendar printer end......(outer for loop)
}//CalendarFunction end......


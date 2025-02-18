var i = 0;
var j = 0;

const events = new Array(72).fill("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
const button = document.createElement("button");
button.setAttribute("onclick", `addEvent();`);
button.textContent = "Click to add to planner";

function addEvent()
{
    let date = Number(prompt("Enter the calender day you wish to add an event to:"));

    if (!(date >= 1 || date <= 35)) 
    {
        alert("Value entered is not a number between 1 and 31, please try again.");
        addEvent();
    }
    else
    {
        let event = prompt("Enter the event you wish to add to the calender:");

        if (event.length > 9)
        {
            var event1 = event.slice(0, 9);
            var event2 = event.slice(9, 18);

            events[(date*2)] = event1 + "&nbsp;";
            events[(date*2)+1] = event2;

            for (var i = 0; i < 10 - (event2.length); i++) 
            {
                events[(date*2)+1] += "&nbsp;";
            }
        }
        else
        {
            events[date*2] = event;
            for (var i = 0; i < 10 - (event.length); i++) 
            {
                events[date*2] += "&nbsp;";
            }
        }

        document.getElementById("calender").innerHTML = "";
        writeCalender()
    }
}

function writeCalender()
{
    const d = new Date();
    let day = d.getDate();

    let html = "<br/>";

    for (i = 1; i < 90; i++)
    {
        html += `=`
    }
    html += `<br/>`

    for (i = 0; i<5; i++)
    {
        html += `|&nbsp;&nbsp;&nbsp;`
        for (j = 1; j<=7; j++)
        {
            var is_today;
            if ((i*7)+j == day)
            {
                is_today = "Today";
            }
            else
            {
                is_today = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
            }
            
            if ((i*7)+j < 10)
            {
                html += `|&nbsp;${(i*7)+j}&nbsp;` + is_today + `&nbsp;&nbsp;&nbsp;`
            }
            else
            {
                if ((i*7)+j > 31)
                {
                    html += `|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`
                }
                else
                {
                    html += `|&nbsp;${(i*7)+j}&nbsp;` + is_today + `&nbsp;&nbsp;`
                }
            }
        }
        html += `|<br/>`

        html += `|&nbsp;${i+1}&nbsp;`
        for (j = 1; j<=7; j++)
        {
            html += `|&nbsp;${events[(((i*7)+j)*2)]}`
        }
        html += `|<br/>`

        html += `|&nbsp;&nbsp;&nbsp;`
        for (j = 1; j<=7; j++)
        {
            html += `|&nbsp;${events[(((i*7)+j)*2)+1]}`
        }
        html += `|<br/>`

        if (i == 4)
        {
            for (i = 1; i < 90; i++)
                {
                    html += `=`
                }
        }
        else
        {
            for (j = 1; j < 90; j++)
            {
                html += `-`
            }
        }
        
        html += `<br/>`
    }
    document.body.prepend(button);
    document.getElementById("calender").innerHTML += html
}

writeCalender()

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    
    var calendar = new FullCalendar.Calendar(calendarEl, {
      
      initialView: 'dayGridMonth',
      initialDate: '2018-12-08 00:00',
      headerToolbar: {
        left: 'title',
        center: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
        right: 'prev,next today'
      },
      eventSources: [
        {
          url: `./data.json`, //event Data
          color: '#f7eded',    
          textColor: 'black'  
        },
        {
          url: `./data2.json`, // conference Data
          color: 'yellow',    
          textColor: 'black'  
        } 
      ],
      eventClick: function(arg) {
        arg.jsEvent.preventDefault();
        console.log(arg.event.venue);
        //alert('Event:' + arg.event.title);
        $('#event-title').html("<strong>Event Name: </strong> "+arg.event.title);
        $('#event-start-date').html("<strong>Start Time: </strong> " + arg.event.start);
        $('#event-end-date').html("<strong>End Time: </strong> " + arg.event.end);
        $('#eventUrl').attr('href',arg.event.url);
        $('#calendarModal').modal();
      },
    });
    calendar.render();
  });


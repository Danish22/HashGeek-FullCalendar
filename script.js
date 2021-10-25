
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
        console.log(arg.event);
        //alert('Event:' + arg.event.title);
        $('#event-title').html("<strong>👉 Event Name: </strong> "+arg.event.title);
        $('#event-details').html("<strong>📜 Description: </strong> " + arg.event.extendedProps.blurb);
        $('#event-start-date').html("<strong>🕘 Starts at: </strong> " + arg.event.start);
        $('#event-end-date').html("<strong>🕔 Ends at: </strong> " + arg.event.end);
        $('#event-venue').html("<strong>🏛️ Venue: </strong> " + arg.event.extendedProps.venue);
        $('#event-city').html("<strong>🗺️ City: </strong> " + arg.event.extendedProps.city);
        if(arg.event.extendedProps.google_maps_pin){
          $('#event-google').html("<strong>📍 Google: </strong> <a target='_new' href="+arg.event.extendedProps.google_maps_pin+">" + arg.event.extendedProps.google_maps_pin)+"</a>";
        }
        if(arg.event.extendedProps.funnel){
          $('#event-funnel').html("<strong>🔗 Funnel: </strong> <a target='_new' href="+arg.event.extendedProps.funnel+">" + arg.event.extendedProps.funnel)+"</a>";
        }
        $('#eventUrl').attr('href',arg.event.url);
        $('#calendarModal').modal();
      },
    });
    calendar.render();
  });


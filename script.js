
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
        $('#event-title').html("<strong>π Event Name: </strong> "+arg.event.title);
        $('#event-details').html("<strong>π Description: </strong> " + arg.event.extendedProps.blurb);
        $('#event-start-date').html("<strong>π Starts at: </strong> " + arg.event.start);
        $('#event-end-date').html("<strong>π Ends at: </strong> " + arg.event.end);
        $('#event-venue').html("<strong>ποΈ Venue: </strong> " + arg.event.extendedProps.venue);
        $('#event-city').html("<strong>πΊοΈ City: </strong> " + arg.event.extendedProps.city);
        if(arg.event.extendedProps.google_maps_pin){
          $('#event-google').html("<strong>π Google: </strong> <a target='_new' href="+arg.event.extendedProps.google_maps_pin+">" + arg.event.extendedProps.google_maps_pin)+"</a>";
        }
        if(arg.event.extendedProps.funnel){
          $('#event-funnel').html("<strong>π Funnel: </strong> <a target='_new' href="+arg.event.extendedProps.funnel+">" + arg.event.extendedProps.funnel)+"</a>";
        }
        $('#eventUrl').attr('href',arg.event.url);
        $('#calendarModal').modal();
      },
    });
    calendar.render();
  });


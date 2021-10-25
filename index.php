<!DOCTYPE html>
<html>
<?php 
    $websiteUrl = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
?>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="List of all the Hasgeeks Events and Conferences">
  <meta name="keywords" content="Hasgeeks">
  <meta name="author" content="Danish Dewani">
<meta property="og:title" content="Checkout all the hasgeeks events" />
<meta property="og:description" content="List of all hasgeeks events" />
<meta property="og:image" content="https://scontent-bom1-2.xx.fbcdn.net/v/t1.6435-9/144767890_3775183322524898_4905735798325528996_n.jpg" />
<link rel="icon" href="https://hasgeek.com/favicon.ico">
<link rel="stylesheet" href="styles.css">
<!--Sharer.php-->
<script src="https://cdn.jsdelivr.net/npm/sharer.js@latest/sharer.min.js"></script>
<!--Fullcalendar-->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fullcalendar@5.10.0/main.min.css">
<script src="https://cdn.jsdelivr.net/npm/fullcalendar@5.10.0/main.min.js"></script>
<!--Jquery-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<!--Bootstarp-->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script> 
<!--Local Script-->
<script src="script.js"></script>
<title>Hasgeek's Conference Event Calendar</title>
</head>
<body>
<header>
<h1 class="text-center main-heading">👋 Welcome to Hasgeek's Event and Conference Calendar</h1> 
</header>
    <div class="container text-center">    
        <div class="main" id="main">
            <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-12">
                   <div id='calendar'></div>
                 </div>
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <h3 class="rightSide">Details</h3>
                   <div class="box-details">
                    <small>Color Indexs</small>
                    <p><span class="event-color">&#9632;</span>Events</p>
                    <p ><span class="conference-color">&#9632;</span> Conference</p>
                    <p><span class="multiday-color">&#9632;</span> Multi Day Event</p>
                    </div>
                    <div class="share">
                <h5>📲 Share with your Friends</h5>
                <button class="button linkedin" data-sharer="linkedin" data-url="<?php echo $websiteUrl ?>">Share on Linkedin</button>
                <button class="button facebook" data-sharer="facebook" data-hashtag="hashtag" data-url="<?php echo $websiteUrl ?>">Share on Facebook</button>
             </div>  
                </div>
            </div>    
        </div>
       
        </div>
    </div>
    <footer>
        <h2 class="year main-heading">Copyright &copy; <?php echo date(Y); ?> | All Rights Reserved</h2>
    </footer>
    <!--BASIC BOOTSRTAP POPUP MODAL-->
    <div id="calendarModal" class="modal fade">
<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span> <span class="sr-only">close</span></button>
            <h4 id="modalTitle" class="modal-title">📅 Event Details</h4>
        </div>
        <div id="modalBody" class="modal-body"> 
            <h5 id="event-title"></h5>
            <p id="event-details"></p>
            <p id="event-start-date"></p>
            <p id="event-end-date"></p>
            <p id="event-venue"></p>
            <p id="event-city"></p>
            <p id="event-google"></p>
            <p id="event-funnel"></p>

        </div>
        <div class="modal-footer">
            <a id="eventUrl" class="btn btn-primary" target="_blank">Visit Website</a>
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
    </div>
</div>
</div>
</body>
</html>

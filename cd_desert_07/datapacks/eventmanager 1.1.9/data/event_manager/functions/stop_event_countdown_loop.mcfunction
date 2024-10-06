# Stop Event Countdown Loop
function event_manager:stop_event_countdown
execute if score global countdown matches 1.. run schedule function event_manager:stop_event_countdown_loop 1s

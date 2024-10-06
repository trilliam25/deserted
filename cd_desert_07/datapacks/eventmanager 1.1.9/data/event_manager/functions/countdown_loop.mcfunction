# Countdown Loop
function event_manager:countdown
execute if score global countdown matches 1.. run schedule function event_manager:countdown_loop 1s

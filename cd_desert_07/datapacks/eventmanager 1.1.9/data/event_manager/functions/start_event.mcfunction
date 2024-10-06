# Start Event Function

spreadplayers 2560 2560 10 2300 false @a[team=!admin]
effect give @a[team=!admin] minecraft:darkness infinite 255 false
effect give @a[team=!admin] minecraft:blindness infinite 255 false
effect give @a[team=!admin] minecraft:slowness infinite 255
effect give @a[team=!admin] minecraft:jump_boost infinite 128

scoreboard players set global countdown 60
function event_manager:countdown_loop

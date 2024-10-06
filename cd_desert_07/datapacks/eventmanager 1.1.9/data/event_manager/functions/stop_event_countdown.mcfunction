# Stop Event Countdown Function
title @a actionbar {"text":"ᴇᴠᴇɴᴛ ᴇɴᴅꜱ ɪɴ ","color":"red","extra":[{"score":{"name":"global","objective":"countdown"}},{"text":" ꜱᴇᴄᴏɴᴅꜱ"}]}
scoreboard players remove global countdown 1

execute if score global countdown matches 10 run effect give @a[team=!admin] minecraft:darkness infinite 255 false
execute if score global countdown matches 10 run effect give @a[team=!admin] minecraft:blindness infinite 255 false
execute if score global countdown matches 10 run effect give @a[team=!admin] minecraft:slowness infinite 255
execute if score global countdown matches 10 run effect give @a[team=!admin] minecraft:jump_boost infinite 128

# Title when countdown ends
execute if score global countdown matches 3 run title @a title {"text":"ᴇᴠᴇɴᴛ ʜᴀꜱ ᴇɴᴅᴇᴅ","bold":true,"color":"dark_red"}
execute if score global countdown matches 3 run title @a subtitle {"text":"ᴛʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ᴘʟᴀʏɪɴɢ!","color":"yellow"}
execute if score global countdown matches 0 run scoreboard players reset global countdown

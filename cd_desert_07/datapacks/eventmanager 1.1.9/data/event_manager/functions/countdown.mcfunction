# Countdown Function
title @a actionbar {"text":"ᴇᴠᴇɴᴛ ꜱᴛᴀʀᴛꜱ ɪɴ ","color":"green","extra":[{"score":{"name":"global","objective":"countdown"}},{"text": " ꜱᴇᴄᴏɴᴅꜱ"}]}
scoreboard players remove global countdown 1


execute if score global countdown matches 0 run playsound supplementaries:item.bomb player @a
execute if score global countdown matches 0 run effect clear @a[team=!admin]
execute if score global countdown matches 0 run tellraw @a [{"text":"ᴛʜᴇ ᴇᴠᴇɴᴛ ʜᴀꜱ ꜱᴛᴀʀᴛᴇᴅ.\n\nᴘʟᴇᴀꜱᴇ ʀᴇᴍᴇᴍʙᴇʀ ᴛʜᴇ ᴇᴠᴇɴᴛꜱ ʀᴜʟᴇꜱ.\nᴄʀᴇᴀᴛᴇ ᴀ ᴛɪᴄᴋᴇᴛ ᴏɴ ᴛʜᴇ ᴅɪꜱᴄᴏʀᴅ ꜱᴇʀᴠᴇʀ ɪꜰ ʏᴏᴜ ɴᴇᴇᴅ ʜᴇʟᴘ.","color":"yellow"}]
execute if score global countdown matches 0 run effect clear @a[team=!admin]
execute if score global countdown matches 0 run scoreboard players reset global countdown
execute if score global countdown matches 0 run effect clear @a[team=!admin]
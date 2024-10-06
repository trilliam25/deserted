# Reset the global alive count
scoreboard players set global alive 0

# Ban players who have died
execute as @a if entity @s[nbt={Health:0.0f}] run ban @s "You have died and are banned from the event."

# Set alive score for dead players to 0
execute as @a if entity @s[nbt={Health:0.0f}] run scoreboard players set @s alive 0

# Set alive score for living players to 1
execute as @a if entity @s[nbt={Health:!0.0f}] run scoreboard players set @s alive 1

# Increase the global alive count for each living player
execute as @a[scores={alive=1}] run scoreboard players add global alive 1

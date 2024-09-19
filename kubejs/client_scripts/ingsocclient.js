//priority: 10
//Client 1.1

ItemEvents.tooltip(event => {

    event.add("kubejs:dye_pack", [Text.gray("Eat to obtain film-related dyes"), Text.gray("for color print."), "", Text.gray("Somewhat toxic.")])
    event.add("exposure:lightroom", [Text.gray("Put developed (not raw) film in"), Text.gray("here to print your photographs."), "", Text.gray("Use a Dye Pack for easy colors.")])
    event.add("exposure:black_and_white_film", [Text.gray("Undeveloped.")])
    event.add("exposure:developed_black_and_white_film", [Text.gray("Ready for printing.")])
    event.add("exposure:color_film", [Text.gray("Undeveloped.")])
    event.add("exposure:developed_color_film", [Text.gray("Ready for printing.")])

    event.add("scorchful:cactus_juice", ["§2Maybe it won't get old?"])
    event.add("exposure:album", [Text.gray("Memories.")])
})
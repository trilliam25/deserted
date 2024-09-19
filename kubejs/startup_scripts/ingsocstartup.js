
//Startup 1.1
StartupEvents.registry('item', event => {
    //color pack for film development. craft it, then eat it to obtain raw colors that can be used along with
    //black dye to develop film. also gives food bc it's funny lol.
    event.create('kubejs:dye_pack').food(food => {
        food
        .hunger(2)
        .saturation(0.5)
        .alwaysEdible()
        .eaten(ctx => {
            ctx.player.give('4x minecraft:cyan_dye')
            ctx.player.give('4x minecraft:magenta_dye')
            ctx.player.give('4x minecraft:yellow_dye')
            ctx.server.runCommandSilent('effect give '+ctx.player.username+' minecraft:blindness 5 0 true')
            ctx.server.runCommandSilent('effect give '+ctx.player.username+' minecraft:poison 2 2 true')
        })
    })
    .displayName('Dye Pack')
    .maxStackSize(16)
    .textureJson({
        layer0: 'minecraft:item/paper',
        layer1: 'minecraft:item/magenta_dye'
    })
    .useAnimation('eat')
})
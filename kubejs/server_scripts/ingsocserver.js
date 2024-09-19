//priority: 10
//Server 1.1

//Exposure Cost Rebalance and Cactus Juice Hunger
//Exposure right here, scroll all the way down for the latter
ServerEvents.recipes(event => {
    event.remove({ mod: "exposure" }) //g

    //the one, the only
    event.shaped(Item.of('exposure:camera', 1), [
            'L B',
            'IGC',
            ' S '
        ], {
            L: 'minecraft:lever',
            B: '#minecraft:buttons',
            I: 'minecraft:stick',
            G: 'minecraft:glass_pane',
            C: 'create:cogwheel',
            S: 'create:iron_sheet'
        })

    //FILM

    //most expensive component is string; 1 for 32 shots
    event.shaped('2x exposure:black_and_white_film', [
            'RPC',
            'SI '
        ], {
            R: 'kubejs:cactus_rubber',
            P: '#create:sandpaper',
            C: '#minecraft:coals',
            S: 'minecraft:string',
            I: 'minecraft:iron_nugget'
        })

    //half-as-efficient non-string version that instead takes EITHER crushed copper
    event.shaped('exposure:black_and_white_film', [
            'RPC',
            'DI '
        ], {
            R: 'kubejs:cactus_rubber',
            P: '#create:sandpaper',
            C: '#minecraft:coals',
            D: 'create:crushed_raw_copper',
            I: 'minecraft:iron_nugget'
        })

    //OR crushed zinc
    event.shaped('exposure:black_and_white_film', [
            'RPC',
            'DI '
        ], {
            R: 'kubejs:cactus_rubber',
            P: '#create:sandpaper',
            C: '#minecraft:coals',
            D: 'create:crushed_raw_zinc',
            I: 'minecraft:iron_nugget'
        })

    event.shaped('2x exposure:color_film', [
            'RPC',
            'AG '
        ], {
            R: 'kubejs:cactus_rubber',
            P: '#create:sandpaper',
            C: '#minecraft:coals',
            A: 'create:wheat_flour',
            G: 'minecraft:gold_nugget'
        })

    //don't want anyone losing photos. doesn't make much sense, but the cost is the same in the end
    event.shapeless('exposure:color_film', [
        'exposure:black_and_white_film',
        'minecraft:amethyst_shard'
    ]).modifyResult((grid, result) => {
        let item = grid.find(Item.of("exposure:black_and_white_film"))
        return result.withNBT(item.nbt)
    })

    //DEVELOPED FILM

function filmStuff(film) {
    //are you kidding me.... is there not a string.format??
    //...or maybe i'm doing something wrong? meh, this still works lol
    let dfilm = 'exposure:developed_'+film+'_film'
    let rfilm = 'exposure:'+film+'_film'

    event.shapeless(dfilm, [
        rfilm,
        'scorchful:cactus_juice'
    ]).modifyResult((grid, result) => {
          let item = grid.find(Item.of(rfilm))
          return result.withNBT(item.nbt)
    })

    //had another thing in here but
}

    filmStuff('color')
    filmStuff('black_and_white')

    //LIGHTROOM FILM STUFF
    event.shaped('exposure:lightroom', [
            ' L ',
            'PFP',
            ' W '
        ], {
            L: 'minecraft:lantern',
            P: '#c:iron_plates',
            F: 'minecraft:furnace',
            W: 'minecraft:stone_pressure_plate'

        })

    event.shapeless('4x kubejs:dye_pack', [
        'kubejs:cactus_clump', //green?
        '#create:sandpaper',
        'create:wheat_flour', //yellow?
        '#kubejs:color_reds', //close enough to magenta lol. don't wanna make it more expensive
        'scorchful:cactus_juice'
    ])

    //MISC

    //make black dye much cheaper
    event.remove({ id: 'create:milling/coal'})
    event.remove({ id: 'create:milling/charcoal'})

    event.custom({
        type: "create:milling",
        results: [
            { item: "minecraft:black_dye", count: 4 }
        ],
        ingredients: [
            { item: "minecraft:coal" }
        ]
    });

    event.custom({
        type: "create:milling",
        results: [
            { item: "minecraft:black_dye", count: 2 }
        ],
        ingredients: [
            { item: "minecraft:charcoal" }
        ]
    });

    //album
    event.shapeless('exposure:album', ['minecraft:book', 'kubejs:cactus_rubber'])

    //aged photograph
    event.shapeless('exposure:aged_photograph', [
        'exposure:photograph',
        '#exposure:photo_agers'
    ]).modifyResult((grid, result) => {
        let item = grid.find(Item.of("exposure:photograph"))
        return result.withNBT(item.nbt)
    })

    //copying photographs
    event.shapeless('exposure:photograph', [
        'exposure:photograph',
        'minecraft:paper',
        'minecraft:amethyst_shard',
        'minecraft:torch'
    ]).modifyResult((grid, result) => {
        let item = grid.find(Item.of("exposure:photograph"))
        if (typeof item.nbt.generation == 'undefined') { //this is what controls the "Copy of Original" etc. tooltip
            item.nbt.generation = 1
        } else { //1 = Copy of Original, 2 = Copy of a Copy, 3 = Tattered
            item.nbt.generation++
        }
        return result.withNBT(item.nbt)
    }).keepIngredient('exposure:photograph')
})

ServerEvents.tags('item', event => {
    event.add('kubejs:color_reds', 'red_sand')
    event.add('kubejs:color_reds', 'redstone')
    event.add('kubejs:color_reds', 'beetroot')
    event.add('kubejs:color_reds', 'terracotta')
    event.add('kubejs:color_reds', 'red_wool')


})

//cussy makes you dizzy
ItemEvents.rightClicked('scorchful:cactus_juice', event => {
    event.player.potionEffects.add('minecraft:weakness', 600, 1, true, false)
})
ItemEvents.rightClicked('scorchful:cactus_juice', event => {
    event.player.potionEffects.add('minecraft:hunger', 20, 2, true, false)
})
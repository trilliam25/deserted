// Server Scripts

ServerEvents.recipes(event => {
    console.log('Hello! The recipe event has fired!')

    // Remove enchanting table
    event.remove({ output: 'minecraft:enchanting_table' })

    // Remove armor recipes
    const armor = ["helmet", "chestplate", "leggings", "boots"];
    const material = ["minecraft:iron", "minecraft:golden", "minecraft:netherite"];
    const platematerial = ["create:iron", "create:golden", "createdeco:netherite"];
    armor.forEach(armor => {
        material.forEach(material => {
            event.remove({ output: `${material}_${armor}` })
        })
    });

    // Water Ingot
    event.smelting('kubejs:water_ingot', 'minecraft:ice')
    
    // Black Dye
    event.shapeless(
        ("minecraft:black_dye"),
        [
            "minecraft:coal"
        ]
    )

    // Spyglass
    event.shaped('minecraft:spyglass', [
        'G',
        'C',
        'C'
    ], {
        G: 'minecraft:glass',
        C: 'minecraft:copper_ingot'
    })

    // Remove gun recipes
    event.remove({ mod: "anim_guns" })

    // Cactus Juice
    event.remove({ output: "scorchful:cactus_juice" })
    event.shapeless(
        ("scorchful:cactus_juice"),
        [
            "kubejs:cactus_clump",
            "kubejs:cactus_clump",
            "kubejs:cactus_clump",
            "minecraft:glass_bottle"
        ]
    )

    // Radio 2 speaker
    event.shapeless(
        ("simpleradio:speaker"),
        [
            "simpleradio:radio",
            "create:iron_sheet"
        ]
    )

    // Cactus Clump
    event.shapeless(
        ("kubejs:cactus_clump"),
        [
            "minecraft:cactus",
            "minecraft:cactus",
            "minecraft:cactus",
            "minecraft:cactus"
        ]
    )

    // Cactus Rubber
    event.smoking(
        "kubejs:cactus_rubber",
        "kubejs:cactus_clump"
    )
    event.campfireCooking(
        "kubejs:cactus_rubber",
        "kubejs:cactus_clump"
    )

    // Replace kelp with cactus rubber
    event.replaceInput(
        { input: 'minecraft:dried_kelp' },
        'minecraft:dried_kelp',
        'kubejs:cactus_rubber'
    )
    event.replaceOutput(
        { output: 'minecraft:dried_kelp' },
        'minecraft:dried_kelp',
        'kubejs:cactus_rubber'
    )
    // event.remove({ Input: "minecraft:kelp" })

    // Glowstone
    event.custom({
        type: "create:filling",
        results: [
            { item: "minecraft:glowstone" }
        ],
        ingredients: [
            { fluid: "minecraft:lava", amount: 8100 },
            { item: "minecraft:blackstone" }
        ]
    });

    // Blackstone
    event.custom({
        type: "create:compacting",
        results: [
            { item: "minecraft:blackstone" }
        ],
        ingredients: [
            { item: "minecraft:deepslate" }
        ],
        heatRequirement: "heated"
    });

    // Silk Touch
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "minecraft:book" },
        loops: 1,
        results: [
            {
                item: "minecraft:enchanted_book",
                nbt: {
                    StoredEnchantments: [
                        { id: "minecraft:silk_touch", lvl: 1 }
                    ]
                },
                chance: 6.0
            },
            { item: "minecraft:paper" },
            { item: "minecraft:book" },
            { item: "minecraft:writable_book" },
            { item: "farmersdelight:canvas" },
            { item: "minecraft:leather" },
            { item: "create:extendo_grip" }
        ],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "minecraft:enchanted_book" },
                    { item: "minecraft:black_dye" }
                ],
                results: [
                    { item: "minecraft:enchanted_book" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "minecraft:enchanted_book" },
                    { item: "minecraft:feather" }
                ],
                results: [
                    { item: "minecraft:enchanted_book" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "minecraft:enchanted_book" },
                    { item: "create:experience_nugget" }
                ],
                results: [
                    { item: "minecraft:enchanted_book" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "minecraft:enchanted_book" },
                    { item: "create:experience_nugget" }
                ],
                results: [
                    { item: "minecraft:enchanted_book" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "minecraft:enchanted_book" },
                    { item: "create:experience_nugget" }
                ],
                results: [
                    { item: "minecraft:enchanted_book" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "minecraft:enchanted_book" },
                    { item: "create:extendo_grip" }
                ],
                results: [
                    { item: "minecraft:enchanted_book" }
                ]
            }
        ],
        transitionalItem: { item: "minecraft:enchanted_book" }
    });

    // Saddle
    event.shaped('minecraft:saddle', [
            'LLL',
            'SIS',
            'T T'
        ], {
            L: { item: "minecraft:leather" },
            I: { item: "create:iron_sheet" },
            S: { item: "minecraft:string" },
            T: { item: "minecraft:tripwire_hook" }
    });


    // Add new armor recipes
    for (let i = 0; i < material.length; i++) {
        event.shaped(`${material[i]}_helmet`, [
            'SSS',
            'S S'
        ], {
            S: `${platematerial[i]}_sheet`,
        })
        event.shaped(`${material[i]}_chestplate`, [
            'S S',
            'SSS',
            'SSS'
        ], {
            S: `${platematerial[i]}_sheet`,
        })
        event.shaped(`${material[i]}_leggings`, [
            'SSS',
            'S S',
            'S S'
        ], {
            S: `${platematerial[i]}_sheet`,
        })
        event.shaped(`${material[i]}_boots`, [
            'S S',
            'S S'
        ], {
            S: `${platematerial[i]}_sheet`,
        })
    };

    // Quartz
    event.shaped(Item.of('minecraft:quartz', 2), [
        ' Z ',
        'ZRZ',
        ' Z '
    ], {
        Z: 'create:raw_zinc',
        R: 'minecraft:diorite'
    })

    // Gunpowder
    event.shaped(Item.of('minecraft:gunpowder', 2), [
        'CRC',
        'RSR',
        'CRC'
    ], {
        R: 'minecraft:redstone',
        S: 'minecraft:sugar',
        C: '#minecraft:coals'
    })

    // Blaze Burner
    event.shaped('create:blaze_burner', [
        ' D ',
        'LFL',
        'OEO'
    ], {
        L: 'minecraft:lava_bucket',
        D: 'minecraft:diamond',
        F: 'minecraft:blast_furnace',
        O: 'minecraft:obsidian',
        E: 'create:empty_blaze_burner'
    })

    // Empty Blaze Burner
    event.remove({ output: 'create:empty_blaze_burner' })
    event.shaped('create:empty_blaze_burner', [
        ' B ',
        'BRB',
        ' B '
    ], {
        B: 'minecraft:iron_bars',
        R: 'minecraft:redstone_block'
    })

    // Soul Sand
    event.custom({
        type: "create:mixing",
        results: [
            { item: "minecraft:soul_sand" }
        ],
        ingredients: [
            { fluid: "minecraft:water", amount: 40500 },
            { fluid: "minecraft:lava", amount: 40500 },
            { item: "minecraft:bone" },
            { item: "minecraft:sand" },
            { item: "minecraft:clay" }
        ],
        heatRequirement: "heated"
    });


    // Normal Heated Lava
    event.remove({ id: 'create:mixing/lava_from_cobble' });

    event.custom({
        type: "create:mixing",
        results: [
            { fluid: "minecraft:lava", amount: convertToUnits(100) }
        ],
        ingredients: [
            { tag: "c:cobblestone" }
        ],
        heatRequirement: "heated"
    });

    // Autocannon Cartridge Filling
    event.remove({ output: 'createbigcannons:filled_autocannon_cartridge' });

    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "createbigcannons:empty_autocannon_cartridge" },
        loops: 1,
        results: [
            { item: "createbigcannons:filled_autocannon_cartridge", count: 1 }
        ],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "createbigcannons:empty_autocannon_cartridge" },
                    { item: "minecraft:gunpowder" }
                ],
                results: [
                    { item: "createbigcannons:empty_autocannon_cartridge" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "createbigcannons:empty_autocannon_cartridge" },
                    { item: "minecraft:gunpowder" }
                ],
                results: [
                    { item: "createbigcannons:empty_autocannon_cartridge" }
                ]
            }
        ],
        transitionalItem: { item: "createbigcannons:partially_filled_autocannon_cartridge" }
    });

    // Flak Round
    event.remove({ output: 'createbigcannons:flak_autocannon_round' })
    event.shaped(Item.of('createbigcannons:flak_autocannon_round', 4), [
        'S',
        'G',
        'I'
    ], {
        S: 'createbigcannons:shot_balls',
        G: 'minecraft:gunpowder',
        I: 'create:iron_sheet'
    })

    // AP Round
    event.remove({ output: 'createbigcannons:ap_autocannon_round' })
    event.shaped(Item.of('createbigcannons:ap_autocannon_round', 8), [
        'C',
        'I'
    ], {
        C: '#createbigcannons:ingot_cast_iron',
        I: 'minecraft:iron_ingot'
    })

    // Tracer Tip
    event.remove({ output: 'createbigcannons:tracer_tip' })
    event.shapeless(
        Item.of('createbigcannons:tracer_tip', 4), [
        'minecraft:glowstone_dust',
        'minecraft:glowstone_dust'
    ]
    )

    // Fire Charge
    event.remove({ output: 'minecraft:fire_charge' })
    event.shapeless(
        Item.of('minecraft:fire_charge', 3), [
        'minecraft:gunpowder',
        'minecraft:sugar',
        '#minecraft:coals'
    ]
    )

    // Train track
    event.remove({ output: 'create:track' });

    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { tag: "create:sleepers" },
        loops: 1,
        results: [
            { item: "create:track", count: 8 }
        ],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "create:incomplete_track" },
                    { item: "create:zinc_nugget" }
                ],
                results: [
                    { item: "create:incomplete_track" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "create:incomplete_track" },
                    { item: "create:zinc_nugget" }
                ],
                results: [
                    { item: "create:incomplete_track" }
                ]
            },
            {
                type: "create:pressing",
                ingredients: [
                    { item: "create:incomplete_track" }
                ],
                results: [
                    { item: "create:incomplete_track" }
                ]
            }
        ],
        transitionalItem: { item: "create:incomplete_track" }
    });



    // Guns
    // Gun Kits
    event.shapeless(
        Item.of('kubejs:crude_gun_kit', 1),
        [
            'minecraft:trapped_chest',
            'minecraft:flint_and_steel',
            'minecraft:leather',
            'create:cogwheel'
        ]
    )
    event.shapeless(
        Item.of('kubejs:basic_gun_kit', 1),
        [
            'kubejs:crude_gun_kit',
            'minecraft:tripwire_hook',
            'create:large_cogwheel',
            'kubejs:steel_sheet'
        ]
    )
    event.shaped(
        Item.of('kubejs:advanced_gun_kit', 1),
        [
            'DSD',
            'SBS',
            'DSD'
        ],
        {
            B: 'kubejs:basic_gun_kit',
            D: 'minecraft:diamond',
            S: 'create:brass_sheet'
        }
    )

    // Gun Parts
    event.shaped(
        Item.of('kubejs:brass_barrel', 1),
        [
            'B',
            'S'
        ],
        {
            S: 'kubejs:steel_sheet',
            B: 'create:brass_sheet'
        }
    )
    event.shaped(
        Item.of('kubejs:reciever', 1),
        [
            ' S ',
            'SBS',
            ' S '
        ],
        {
            B: 'kubejs:steel_ingot',
            S: 'kubejs:steel_sheet'
        }
    )
    event.shaped(
        Item.of('kubejs:magazine', 1),
        [
            'S S',
            'SBS',
            ' S '
        ],
        {
            B: 'minecraft:redstone',
            S: 'kubejs:steel_sheet'
        }
    )

    // Pistol
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "minecraft:crossbow" },
        loops: 1,
        results: [
            { item: "anim_guns:revolver_coltarmy" }
        ],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "minecraft:crossbow" },
                    { item: "kubejs:reciever" }
                ],
                results: [
                    { item: "minecraft:crossbow" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "minecraft:crossbow" },
                    { item: "kubejs:brass_barrel" }
                ],
                results: [
                    { item: "minecraft:crossbow" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "minecraft:crossbow" },
                    { item: "kubejs:basic_gun_kit" }
                ],
                results: [
                    { item: "minecraft:crossbow" }
                ]
            }
        ],
        transitionalItem: { item: "kubejs:incomplete_pistol" }
    });

    // Rifle
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "anim_guns:revolver_coltarmy" },
        loops: 1,
        results: [
            { item: "anim_guns:sniper_cowboy" }
        ],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "anim_guns:revolver_coltarmy" },
                    { item: "kubejs:brass_barrel" }
                ],
                results: [
                    { item: "anim_guns:revolver_coltarmy" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "anim_guns:revolver_coltarmy" },
                    { item: "kubejs:brass_barrel" }
                ],
                results: [
                    { item: "anim_guns:revolver_coltarmy" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "anim_guns:revolver_coltarmy" },
                    { item: "create:precision_mechanism" }
                ],
                results: [
                    { item: "anim_guns:revolver_coltarmy" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "anim_guns:revolver_coltarmy" },
                    { item: "kubejs:basic_gun_kit" }
                ],
                results: [
                    { item: "anim_guns:revolver_coltarmy" }
                ]
            }
        ],
        transitionalItem: { item: "kubejs:incomplete_rifle" }
    });

    // Shotgun
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "anim_guns:revolver_coltarmy" },
        loops: 1,
        results: [
            { item: "anim_guns:shotgun_doublebarrel" }
        ],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "anim_guns:revolver_coltarmy" },
                    { item: "create:precision_mechanism" }
                ],
                results: [
                    { item: "anim_guns:revolver_coltarmy" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "anim_guns:revolver_coltarmy" },
                    { item: "create:precision_mechanism" }
                ],
                results: [
                    { item: "anim_guns:revolver_coltarmy" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "anim_guns:revolver_coltarmy" },
                    { item: "minecraft:diamond" }
                ],
                results: [
                    { item: "anim_guns:revolver_coltarmy" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "anim_guns:revolver_coltarmy" },
                    { item: "kubejs:brass_barrel" }
                ],
                results: [
                    { item: "anim_guns:revolver_coltarmy" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "anim_guns:revolver_coltarmy" },
                    { item: "kubejs:brass_barrel" }
                ],
                results: [
                    { item: "anim_guns:revolver_coltarmy" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "anim_guns:revolver_coltarmy" },
                    { item: "kubejs:advanced_gun_kit" }
                ],
                results: [
                    { item: "anim_guns:revolver_coltarmy" }
                ]
            }
        ],
        transitionalItem: { item: "kubejs:incomplete_shotgun" }
    });

    // Automatic Rifle
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "anim_guns:sniper_cowboy" },
        loops: 1,
        results: [
            { item: "anim_guns:assaultrifle_rus" }
        ],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "anim_guns:sniper_cowboy" },
                    { item: "kubejs:magazine" }
                ],
                results: [
                    { item: "anim_guns:sniper_cowboy" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "anim_guns:sniper_cowboy" },
                    { item: "kubejs:brass_barrel" }
                ],
                results: [
                    { item: "anim_guns:sniper_cowboy" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "anim_guns:sniper_cowboy" },
                    { item: "kubejs:brass_barrel" }
                ],
                results: [
                    { item: "anim_guns:sniper_cowboy" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "anim_guns:sniper_cowboy" },
                    { item: "create:precision_mechanism" }
                ],
                results: [
                    { item: "anim_guns:sniper_cowboy" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "anim_guns:sniper_cowboy" },
                    { item: "kubejs:advanced_gun_kit" }
                ],
                results: [
                    { item: "anim_guns:sniper_cowboy" }
                ]
            }
        ],
        transitionalItem: { item: "kubejs:incomplete_assault_rifle" }
    });

    // Scoped Rifle
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "anim_guns:sniper_cowboy" },
        loops: 1,
        results: [
            { item: "anim_guns:sniper_classic" }
        ],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "anim_guns:sniper_cowboy" },
                    { item: "minecraft:spyglass" }
                ],
                results: [
                    { item: "anim_guns:sniper_cowboy" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "anim_guns:sniper_cowboy" },
                    { item: "create:precision_mechanism" }
                ],
                results: [
                    { item: "anim_guns:sniper_cowboy" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "anim_guns:sniper_cowboy" },
                    { item: "kubejs:basic_gun_kit" }
                ],
                results: [
                    { item: "anim_guns:sniper_cowboy" }
                ]
            }
        ],
        transitionalItem: { item: "kubejs:incomplete_scoped_rifle" }
    });

    // LMG
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "anim_guns:assaultrifle_rus" },
        loops: 1,
        results: [
            { item: "anim_guns:lmg_m60" }
        ],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "anim_guns:assaultrifle_rus" },
                    { item: "kubejs:magazine" }
                ],
                results: [
                    { item: "anim_guns:assaultrifle_rus" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "anim_guns:assaultrifle_rus" },
                    { item: "kubejs:brass_barrel" }
                ],
                results: [
                    { item: "anim_guns:assaultrifle_rus" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "anim_guns:assaultrifle_rus" },
                    { item: "kubejs:advanced_gun_kit" }
                ],
                results: [
                    { item: "anim_guns:assaultrifle_rus" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "anim_guns:assaultrifle_rus" },
                    { item: "kubejs:brass_barrel" }
                ],
                results: [
                    { item: "anim_guns:assaultrifle_rus" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "anim_guns:assaultrifle_rus" },
                    { item: "create:precision_mechanism" }
                ],
                results: [
                    { item: "anim_guns:assaultrifle_rus" }
                ]
            }
        ],
        transitionalItem: { item: "kubejs:incomplete_lmg" }
    });

    // Ammo

    // Standard Handgun Cartridge
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "create:brass_nugget" },
        loops: 1,
        results: [
            { item: "anim_guns:standard_handgun_cartridge", count: 4 }
        ],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "kubejs:incomplete_standard_handgun_cartridge" },
                    { item: "create:copper_nugget" }
                ],
                results: [
                    { item: "kubejs:incomplete_standard_handgun_cartridge" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "kubejs:incomplete_standard_handgun_cartridge" },
                    { item: "minecraft:gunpowder" }
                ],
                results: [
                    { item: "kubejs:incomplete_standard_handgun_cartridge" }
                ]
            },
            {
                type: "create:pressing",
                ingredients: [
                    { item: "kubejs:incomplete_standard_handgun_cartridge" }
                ],
                results: [
                    { item: "kubejs:incomplete_standard_handgun_cartridge" }
                ]
            }
        ],
        transitionalItem: { item: "kubejs:incomplete_standard_handgun_cartridge" }
    });

    // Heavy Handgun Cartridge
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "create:brass_nugget" },
        loops: 1,
        results: [
            { item: "anim_guns:heavy_rifle_cartridge", count: 2 }
        ],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "kubejs:incomplete_heavy_rifle_cartridge" },
                    { item: "kubejs:steel_nugget" }
                ],
                results: [
                    { item: "kubejs:incomplete_heavy_rifle_cartridge" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "kubejs:incomplete_heavy_rifle_cartridge" },
                    { item: "minecraft:gunpowder" }
                ],
                results: [
                    { item: "kubejs:incomplete_heavy_rifle_cartridge" }
                ]
            },
            {
                type: "create:pressing",
                ingredients: [
                    { item: "kubejs:incomplete_heavy_rifle_cartridge" }
                ],
                results: [
                    { item: "kubejs:incomplete_heavy_rifle_cartridge" }
                ]
            }
        ],
        transitionalItem: { item: "kubejs:incomplete_heavy_rifle_cartridge" }
    });

    // Standard Rifle Cartridge
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "create:brass_nugget" },
        loops: 1,
        results: [
            { item: "anim_guns:standard_rifle_cartridge", count: 4 }
        ],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "kubejs:incomplete_standard_rifle_cartridge" },
                    { item: "minecraft:iron_nugget" }
                ],
                results: [
                    { item: "kubejs:incomplete_standard_rifle_cartridge" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "kubejs:incomplete_standard_rifle_cartridge" },
                    { item: "minecraft:gunpowder" }
                ],
                results: [
                    { item: "kubejs:incomplete_standard_rifle_cartridge" }
                ]
            },
            {
                type: "create:pressing",
                ingredients: [
                    { item: "kubejs:incomplete_standard_rifle_cartridge" }
                ],
                results: [
                    { item: "kubejs:incomplete_standard_rifle_cartridge" }
                ]
            }
        ],
        transitionalItem: { item: "kubejs:incomplete_standard_rifle_cartridge" }
    });

    // Shotgun Shell
    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { item: "create:brass_nugget" },
        loops: 1,
        results: [
            { item: "anim_guns:shotgun_shell", count: 1 }
        ],
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "kubejs:incomplete_shotgun_shell" },
                    { tag: "create:crushed_raw_materials" }
                ],
                results: [
                    { item: "kubejs:incomplete_shotgun_shell" }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "kubejs:incomplete_shotgun_shell" },
                    { item: "minecraft:gunpowder" }
                ],
                results: [
                    { item: "kubejs:incomplete_shotgun_shell" }
                ]
            },
            {
                type: "create:pressing",
                ingredients: [
                    { item: "kubejs:incomplete_shotgun_shell" }
                ],
                results: [
                    { item: "kubejs:incomplete_shotgun_shell" }
                ]
            }
        ],
        transitionalItem: { item: "kubejs:incomplete_shotgun_shell" }
    });



})
function convertToUnits(millibuckets) {
    const fabricPerBucket = 81000;
    const MBPerBucket = 1000;
    const unitsPerMillibucket = fabricPerBucket / MBPerBucket;
    
    const units = Math.round(millibuckets * unitsPerMillibucket);
    return units;
}

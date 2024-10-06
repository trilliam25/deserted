ServerEvents.recipes((event) => {
  // Radio
  event.remove({ mod: "simpleradio" });

  event.custom({
    type: "create:sequenced_assembly",
    ingredient: { item: "create:copper_sheet" },
    loops: 1,
    results: [
      { item: "simpleradio:spuddie_talkie" },
    ],
    sequence: [
      {
        type: "create:deploying",
        ingredients: [
          { item: "kubejs:incomplete_spuddie_talkie" },
          { item: "create:nixie_tube" },
        ],
        results: [
          { item: "kubejs:incomplete_spuddie_talkie" },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          { item: "kubejs:incomplete_spuddie_talkie" },
          { item: "create:brass_nugget" },
        ],
        results: [
          { item: "kubejs:incomplete_spuddie_talkie" },
        ],
      },
    ],
    transitionalItem: { item: "kubejs:incomplete_spuddie_talkie" },
  });

  event.custom({
    type: "create:sequenced_assembly",
    ingredient: { item: "simpleradio:spuddie_talkie" },
    loops: 1,
    results: [
      { item: "simpleradio:transceiver" },
    ],
    sequence: [
      {
        type: "create:deploying",
        ingredients: [
          { item: "kubejs:incomplete_transceiver" },
          { item: "create:nixie_tube" },
        ],
        results: [
          { item: "kubejs:incomplete_transceiver" },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          { item: "kubejs:incomplete_transceiver" },
          { item: "create:electron_tube" },
        ],
        results: [
          { item: "kubejs:incomplete_transceiver" },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          { item: "kubejs:incomplete_transceiver" },
          { item: "create:attribute_filter" },
        ],
        results: [
          { item: "kubejs:incomplete_transceiver" },
        ],
      },
    ],
    transitionalItem: { item: "kubejs:incomplete_transceiver" },
  });

  event.custom({
    type: "create:sequenced_assembly",
    ingredient: { item: "create:andesite_casing" },
    loops: 1,
    results: [{ item: "simpleradio:radio" }],
    sequence: [
      {
        type: "create:deploying",
        ingredients: [
          { item: "kubejs:incomplete_radio" },
          { item: "create:nixie_tube" },
        ],
        results: [{ item: "kubejs:incomplete_radio" }],
      },
      {
        type: "create:deploying",
        ingredients: [
          { item: "kubejs:incomplete_radio" },
          { item: "create:brass_nugget" },
        ],
        results: [{ item: "kubejs:incomplete_radio" }],
      },
    ],
    transitionalItem: { item: "kubejs:incomplete_radio" },
  });

  event.shapeless(
    { item: "simpleradio:radiosmither" },
    [
      "create:andesite_casing",
      "create:nixie_tube",
    ],
  );

  event.custom({
    type: "create:sequenced_assembly",
    ingredient: { item: "create:brass_casing" },
    loops: 1,
    results: [{ item: "simpleradio:microphone" }],
    sequence: [
      {
        type: "create:deploying",
        ingredients: [
          { item: "kubejs:incomplete_microphone" },
          { item: "create:nixie_tube" },
        ],
        results: [{ item: "kubejs:incomplete_microphone" }],
      },
      {
        type: "create:deploying",
        ingredients: [
          { item: "kubejs:incomplete_microphone" },
          { item: "create:andesite_alloy" },
        ],
        results: [{ item: "kubejs:incomplete_microphone" }],
      },
      {
        type: "create:deploying",
        ingredients: [
          { item: "kubejs:incomplete_microphone" },
          { item: "create:electron_tube" },
        ],
        results: [{ item: "kubejs:incomplete_microphone" }],
      },
    ],
    transitionalItem: { item: "kubejs:incomplete_microphone" },
  });

  // Water
  event.remove({ output: "scorchful:water_skin" });
  event.remove({ output: "dehydration:bamboo_pump" });

  event.custom({
    type: "create:filling",
    ingredients: [
      { item: "minecraft:glass_bottle" },
      {
        fluid: "kubejs:cactus_juice",
        amount: 27000,
      },
    ],
    results: [
      {
        item: "scorchful:cactus_juice",
      },
    ],
  });
    
  event.custom({
    type: "create:filling",
    ingredients: [
      { item: "minecraft:glass_bottle" },
      {
        fluid: "dehydration:purified_water",
        amount: 27000,
      },
    ],
    results: [
      Item.of('minecraft:potion', '{Potion:"minecraft:purified_water"}'),
    ],
  });

  event.custom({
    type: "create:emptying",
    ingredients: [
      { item: "scorchful:cactus_juice" },
    ],
    results: [
      { item: "minecraft:glass_bottle" },
      { fluid: "kubejs:cactus_juice", amount: 27000 },
    ],
  });

  event.custom({
    type: "create:compacting",
    ingredients: [
      { item: "kubejs:cactus_clump" },
    ],
    results: [
      { fluid: "kubejs:cactus_juice", amount: 27000 },
    ],
  });

  event.custom({
    type: "createdieselgenerators:distillation",
    ingredients: [
      {
        fluid: "kubejs:cactus_juice",
        amount: 81000,
      },
    ],
    heatRequirement: "heated",
    processingTime: 100,
    results: [
      {
        fluid: "kubejs:sludge",
        amount: 8100,
      },
      {
        fluid: "dehydration:purified_water",
        amount: 8100,
      },
    ],
  });

  event.custom({
    type: "createdieselgenerators:distillation",
    ingredients: [
      {
        fluid: "minecraft:water",
        amount: 8100,
      },
    ],
    heatRequirement: "heated",
    processingTime: 100,
    results: [
      {
        fluid: "kubejs:sludge",
        amount: 8100,
      },
      {
        fluid: "dehydration:purified_water",
        amount: 10800,
      },
    ],
  });

  event.custom({
    type: "create:mixing",
    ingredients: [
      { item: "minecraft:bone_meal" },
      { fluid: "kubejs:sludge", amount: 8100 },
    ],
    results: [
      { fluid: "sliceanddice:fertilizer", amount: 8100 },
    ],
  });

  event.custom({
    type: "create:compacting",
    ingredients: [
      {
        fluid: "kubejs:sludge",
        amount: 81000,
      },
    ],
    results: [
      {
        item: "minecraft:charcoal",
      },
    ],
  });

  event.custom({
    type: "create:filling",
    ingredients: [
      { item: "create:iron_sheet" },
      {
        fluid: "kubejs:sludge",
        amount: 8100,
      },
    ],
    results: [
      { item: "create:sturdy_sheet" },
    ],
  });

  event.custom({
    type: "create:mixing",
    ingredients: [
      { item: "minecraft:sand" },
      { fluidTag: "kubejs:usable_water", amount: 8100 },
    ],
    results: [
      { item: "minecraft:dirt" },
    ],
  });

  const maxFlaskQuantities = {
    leather_flask: 2,
    iron_leather_flask: 3,
    golden_leather_flask: 4,
    diamond_leather_flask: 5,
    netherite_leather_flask: 6,
  };

  for (const [flask, quantity] in maxFlaskQuantities) {
    for (let from = 0; from < quantity; from++) {
      if (from == 0) {
        event.custom({
          type: "create:filling",
          ingredients: [
            Item.of(
              `dehydration:${flask}`,
              `{leather_flask:${from}}`,
            ).weakNBT(),
            {
              fluid: "dehydration:purified_water",
              amount: 27000,
            },
          ],
          results: [
            {
              item: `dehydration:${flask}`,
              nbt: { leather_flask: from + 1, purified_water: 0 },
            },
          ],
        });
      }
      event.custom({
        type: "create:filling",
        ingredients: [
          Item.of(
            `dehydration:${flask}`,
            `{leather_flask:${from},purified_water:0}`,
          ).weakNBT(),
          {
            fluid: "dehydration:purified_water",
            amount: 27000,
          },
        ],
        results: [
          {
            item: `dehydration:${flask}`,
            nbt: { leather_flask: from + 1, purified_water: 0 },
          },
        ],
      });
    }
  }

  for (const flask in Object.keys(maxFlaskQuantities)) {
    event.remove({ output: `dehydration:${flask}` });
  }
    
  event.shaped(
      { item: "exposure:photograph_frame" },
      [
      	"AAA",
        "A A",
        "AAA"
      ],
      { A: "minecraft:stick" }
  );

  event.shaped({ item: "dehydration:leather_flask" }, [
    " AA",
    "A A",
    " A ",
  ], {
    A: "minecraft:leather",
  });

  event.shaped({ item: "dehydration:iron_leather_flask" }, [
    " B ",
    "BAB",
    " B ",
  ], {
    A: "dehydration:leather_flask",
    B: "create:iron_sheet",
  });

  event.shaped({ item: "dehydration:golden_leather_flask" }, [
    " B ",
    "BAB",
    " B ",
  ], {
    A: "dehydration:iron_leather_flask",
    B: "create:golden_sheet",
  });

  event.shaped({ item: "dehydration:diamond_leather_flask" }, [
    " B ",
    "BAB",
    " B ",
  ], {
    A: "dehydration:golden_leather_flask",
    B: "minecraft:diamond",
  });

  // Steel

  event.custom({
    type: "create:sequenced_assembly",
    ingredient: { item: "minecraft:iron_ingot" },
    loops: 1,
    results: [{ item: "kubejs:steel_ingot" }],
    sequence: [{
      type: "create:filling",
      ingredients: [
        { item: "kubejs:incomplete_steel_ingot" },
        {
          fluid: "minecraft:lava",
          amount: 8100,
        },
      ],
      results: [{ item: "kubejs:incomplete_steel_ingot" }],
    }, {
      type: "create:filling",
      ingredients: [
        { item: "kubejs:incomplete_steel_ingot" },
        {
          fluidTag: "kubejs:usable_water",
          amount: 40500,
        },
      ],
      results: [{ item: "kubejs:incomplete_steel_ingot" }],
    }],
    transitionalItem: { item: "kubejs:incomplete_steel_ingot" },
  });

  event.custom({
    type: "create:pressing",
    ingredients: [
      { item: "kubejs:steel_ingot" },
    ],
    results: [
      { item: "kubejs:steel_sheet" },
    ],
  });

  event.custom({
    type: "create:mixing",
    heatRequirement: "heated",
    ingredients: [
      { item: "kubejs:steel_ingot" },
    ],
    results: [
      {
        fluid: "createbigcannons:molten_steel",
        amount: 9000,
      },
    ],
  });

  const tools = [
    "sword",
    "axe",
    "pickaxe",
    "shovel",
    "hoe",
  ];
  const armor = [
    "helmet",
    "chestplate",
    "leggings",
    "boots",
  ];

  for (const tool of tools) {
    console.log(tool);
    event.smithing(
      `kubejs:steel_${tool}`,
      "kubejs:steel_ingot",
      `minecraft:iron_${tool}`,
      "kubejs:steel_ingot",
    );
  }
  for (const piece of armor) {
    event.smithing(
      `kubejs:steel_${piece}`,
      "kubejs:steel_sheet",
      `minecraft:iron_${piece}`,
      "kubejs:steel_sheet",
    );
  }

  event.smoking("minecraft:leather", "minecraft:rabbit_hide");
});

ServerEvents.tags("fluid", (event) => {
  event.add("kubejs:usable_water", "dehydration:purified_water");
  event.add("kubejs:usable_water", "minecraft:water");
  event.add("kubejs:usable_water", "kubejs:sludge");
});
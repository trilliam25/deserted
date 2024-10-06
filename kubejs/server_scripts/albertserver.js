
ServerEvents.recipes(event => {
event.custom({
    type: "create:mixing",
    ingredients: [
      { item: "minecraft:white_dye" },
      { fluid: "kubejs:sludge", amount: convertToUnits(100)},
    ],
    results: [
      { item: "minecraft:black_dye" },
    ],
  });
  event.custom({
    type: "create:filling",
    ingredients: [
      { item: "supplementaries:bamboo_spikes" },
      {
        fluid: "kubejs:sludge",
        amount: convertToUnits(100),
      },
    ],
    results: [
        {
            item: "supplementaries:bamboo_spikes_tipped",
            nbt: {
                Damage: 0,
                Potion: "minecraft:weakness"
            },
        },
    ],
  });


});


function convertToUnits(millibuckets) {
    const fabricPerBucket = 81000;
    const MBPerBucket = 1000;
    const unitsPerMillibucket = fabricPerBucket / MBPerBucket;
    
    const units = Math.round(millibuckets * unitsPerMillibucket);
    return units;
}


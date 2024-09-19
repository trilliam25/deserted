StartupEvents.registry("fluid", (event) => {
  event.create("sludge")
    .thickTexture(0x3D3C23)
    .noBucket()
    .noBlock()
    .displayName("Sludge");

  event.create("cactus_juice")
    .thinTexture(0xA2E0B8)
    .noBucket()
    .noBlock()
    .displayName("Cactus Juice");
});

StartupEvents.registry("item", (event) => {
  event.create("steel_ingot")
    .texture("kubejs:item/steel_ingot")
    .displayName("Steel Ingot");
  event.create("steel_nugget")
    .texture("kubejs:item/steel_nugget")
    .displayName("Steel Nugget");
  event.create("incomplete_steel_ingot")
    .texture("kubejs:item/incomplete_steel_ingot")
    .displayName("White Hot Steel Ingot");

  event.create("steel_sheet")
    .texture("kubejs:item/steel_sheet")
    .displayName("Steel Sheet");

  event.create("steel_sword", "sword")
    .tier("steel")
    .texture("kubejs:item/steel_sword")
    .displayName("Steel Sword");
  event.create("steel_axe", "axe")
    .tier("steel")
    .texture("kubejs:item/steel_axe")
    .displayName("Steel Axe");
  event.create("steel_pickaxe", "pickaxe")
    .tier("steel")
    .texture("kubejs:item/steel_pickaxe")
    .displayName("Steel Pickaxe");
  event.create("steel_shovel", "shovel")
    .tier("steel")
    .texture("kubejs:item/steel_shovel")
    .displayName("Steel Shovel");
  event.create("steel_hoe", "hoe")
    .tier("steel")
    .texture("kubejs:item/steel_hoe")
    .displayName("Steel Hoe");

  event.create("steel_helmet", "helmet")
    .tier("steel")
    .texture("kubejs:item/steel_helmet")
    .displayName("Steel Helmet");
  event.create("steel_chestplate", "chestplate")
    .tier("steel")
    .texture("kubejs:item/steel_chestplate")
    .displayName("Steel Chestplate");
  event.create("steel_leggings", "leggings")
    .tier("steel")
    .texture("kubejs:item/steel_leggings")
    .displayName("Steel Leggings");
  event.create("steel_boots", "boots")
    .tier("steel")
    .texture("kubejs:item/steel_boots")
    .displayName("Steel Boots");

  event.create("water_ingot")
    .texture("kubejs:item/water_ingot")
    .displayName("Water Ingot");
});

ItemEvents.toolTierRegistry((event) => {
  event.add("steel", (tier) => {
    tier.uses = 450;
    tier.speed = 7.0;
    tier.attackDamageBonus = 2.5;
    tier.level = 3;
    tier.enchantmentValue = 0;
    tier.repairIngredient = "kubejs:steel_ingot";
  });
});

ItemEvents.armorTierRegistry((event) => {
  event.add("steel", (tier) => {
    tier.durabilityMultiplier = 12;
    tier.slotProtections = [2, 7, 5, 3];
    tier.enchantmentValue = 0;
    tier.equipSound = "minecraft:item.armor.equip_netherite";
    tier.repairIngredient = "kubejs:steel_ingot";
    tier.toughness = 0.0;
    tier.knockbackResistance = 0.0;
  });
});

// FluidEvents.modification((event) => {
//   event.modify("dehydration:purified_water", (item) => {
//     item.displayName = "Purified Water";
//   });
// });

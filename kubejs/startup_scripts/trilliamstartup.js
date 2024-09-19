// Startup Scripts

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry("item", (event) => {
	event.create("incomplete_spuddie_talkie")
	  .displayName("Incomplete Spuddie Talkie").texture(
		"simpleradio:item/spuddie_talkie",
	  );
	event.create("incomplete_transceiver")
	  .displayName("Incomplete Transceiver").texture(
		"simpleradio:item/transceiver",
	  );
  
	event.create("incomplete_radio")
	  .displayName("Incomplete Radio").texture("simpleradio:item/radio");
	event.create("incomplete_microphone")
	  .displayName("Incomplete Microphone").texture(
		"simpleradio:block/microphone",
	  );
  });

StartupEvents.registry('item', event => {
	event.create('kubejs:cactus_clump').displayName('Cactus Clump')
})

StartupEvents.registry('item', event => {
	event.create('kubejs:cactus_rubber').displayName('Cactus Rubber')
})

StartupEvents.registry('item', event => {
	event.create('incomplete_standard_handgun_cartridge').displayName('Incomplete Round')
})

StartupEvents.registry('item', event => {
	event.create('kubejs:incomplete_heavy_rifle_cartridge').displayName('Incomplete Round')
})

StartupEvents.registry('item', event => {
	event.create('kubejs:incomplete_standard_rifle_cartridge').displayName('Incomplete Round')
})

StartupEvents.registry('item', event => {
	event.create('kubejs:incomplete_shotgun_shell').displayName('Incomplete Round')
})

StartupEvents.registry('item', event => {
	event.create('kubejs:incomplete_pistol').displayName('Incomplete Pistol')
})

StartupEvents.registry('item', event => {
	event.create('kubejs:incomplete_rifle').displayName('Incomplete Rifle')
})

StartupEvents.registry('item', event => {
	event.create('kubejs:incomplete_scoped_rifle').displayName('Incomplete Scoped Rifle')
})

StartupEvents.registry('item', event => {
	event.create('kubejs:incomplete_shotgun').displayName('Incomplete Shotgun')
})

StartupEvents.registry('item', event => {
	event.create('kubejs:incomplete_lmg').displayName('Incomplete LMG')
})

StartupEvents.registry('item', event => {
	event.create('kubejs:incomplete_assault_rifle').displayName('Incomplete Assault Rifle')
})

StartupEvents.registry('item', event => {
	event.create('kubejs:crude_gun_kit').displayName('Crude Gun Kit')
})

StartupEvents.registry('item', event => {
	event.create('kubejs:basic_gun_kit').displayName('Basic Gun Kit')
})

StartupEvents.registry('item', event => {
	event.create('kubejs:advanced_gun_kit').displayName('Advanced Gun Kit')
})

StartupEvents.registry('item', event => {
	event.create('kubejs:brass_barrel').displayName('Brass Barrel')
})

StartupEvents.registry('item', event => {
	event.create('kubejs:reciever').displayName('Reciever')
})

StartupEvents.registry('item', event => {
	event.create('kubejs:magazine').displayName('Extended Magazine Part')
})
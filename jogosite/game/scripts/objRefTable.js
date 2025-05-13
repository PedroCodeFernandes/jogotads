const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Cnds.OnDestroyed,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{PlanoDeFundoEmBlocos: 0},
	{Sólido: 0},
	{PlanoDeFundoEmBlocos2: 0},
	{Plataforma: 0},
	{CentrarEm: 0},
	{RestritoAoLayout: 0},
	{Sprite: 0},
	{PlanoDeFundoEmBlocos3: 0},
	{PlanoDeFundoEmBlocos4: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0}
];

self.InstanceType = {
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos2: class extends self.ITiledBackgroundInstance {},
	Sprite: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos3: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos4: class extends self.ITiledBackgroundInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {}
}
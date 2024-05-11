
const Pokecard = (props) => {
	const info = props.info;
	return (
		<div>
			<h2>{info.name}</h2>
			<img
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${info.id}.png`}
			></img>
			<p>Type: {info.type}</p>
			<p>EXP: {info.base_experience}</p>
		</div>
	);
};

const Pokedex = (props) => {
	return (
		<ul>
			{props.pokemon.map((pokemon) => (
				<li>
					<Pokecard info={pokemon} />
				</li>
			))}
		</ul>
	);
};

const App = (props) => {
	return (
		<div>
			<Pokedex pokemon={props.pokemon} />
		</div>
	);
};

const pokes = [
	{ id: 4, name: "Charmander", type: "fire", base_experience: 62 },
	{ id: 7, name: "Squirtle", type: "water", base_experience: 63 },
	{ id: 11, name: "Metapod", type: "bug", base_experience: 72 },
	{ id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
	{ id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
	{ id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
	{ id: 94, name: "Gengar", type: "poison", base_experience: 225 },
	{ id: 133, name: "Eevee", type: "normal", base_experience: 65 },
];

ReactDOM.render(<App pokemon={pokes} />, document.getElementById("app"));

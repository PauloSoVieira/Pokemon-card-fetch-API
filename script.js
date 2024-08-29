async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const data = await response.json();

    // Clear previous content
    document.querySelector(".card").innerHTML = "";

    // Create and append Pokemon sprite
    const imgElement = document.createElement("img");
    imgElement.id = "pokemonSprite";
    imgElement.src = data.sprites.front_default;
    imgElement.alt = `${pokemonName} sprite`;
    document.querySelector(".card").appendChild(imgElement);

    // Create and append Pokemon ID
    const idParagraph = document.createElement("p");
    idParagraph.innerHTML = `Pokemon ID: <span id="pokemonId">${data.id}</span>`;
    document.querySelector(".card").appendChild(idParagraph);

    // Create and append Pokemon type
    const typeList = document.createElement("ul");
    typeList.id = "type";
    const typeTitle = document.createElement("h3");
    typeTitle.textContent = "Pokemon type";
    typeList.appendChild(typeTitle);
    data.types.forEach((typeData) => {
      const listItem = document.createElement("li");
      listItem.className = "type";
      listItem.textContent = typeData.type.name;
      listItem.dataset.type = typeData.type.name;
      typeList.appendChild(listItem);
    });
    document.querySelector(".card").appendChild(typeList);

    // Create and append Pokemon stats
    const statsList = document.createElement("ul");
    statsList.id = "pokemonStats";
    const statsTitle = document.createElement("h3");
    statsTitle.textContent = "Pokemon basic stats";
    statsList.appendChild(statsTitle);
    data.stats.slice(0, 6).forEach((statData) => {
      const listItem = document.createElement("li");
      listItem.className = "stat";
      listItem.textContent = `${statData.stat.name}: ${statData.base_stat}`;
      statsList.appendChild(listItem);
    });
    document.querySelector(".card").appendChild(statsList);

    // Create and append Pokemon abilities
    const abilitiesList = document.createElement("ul");
    abilitiesList.id = "pokemonAbility";
    const abilitiesTitle = document.createElement("h3");
    abilitiesTitle.textContent = "Pokemon Special Abilities";
    abilitiesList.appendChild(abilitiesTitle);
    data.abilities.forEach((abilityData) => {
      const listItem = document.createElement("li");
      listItem.className = "ability";
      listItem.textContent = abilityData.ability.name;
      abilitiesList.appendChild(listItem);
    });
    document.querySelector(".card").appendChild(abilitiesList);

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

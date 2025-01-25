// Table na situ
const table = document.getElementById("table");

// Load divideru mezi sekcemi
function load_divider(section) {
  return `
    <tr>
        <td></td>
        <td class="image-text-container">
            <img
                src="${section.path_to_image}"
                class="table-image"
                alt="logo"
            />
            <p class="${section.role}">${section.description}</p>
        </td>
        <td></td>
    </tr>`;
}

// Load dat v sekci
function load_data(section) {
  let output = load_divider(section);

  // Generate linů pro každého člena v sekci
  section.data.forEach((entry) => {
    output += `
        <tr>
            <td><p class="left">${entry.name}</p></td>
            <td><p class="${section.role}">${entry.description}</p></td>
            <td><p class="right">${entry.discord}</p></td>
        </tr>`;
  });

  // Print obsahu na stránku
  table.innerHTML += output;
}

// Načtení dat z JSON souboru
async function load_from_json() {
  try {
      const response = await fetch('./data.json');
      if (!response.ok) {
          throw new Error(`Chyba při načítání dat: ${response.status}`);
      }
      const data_structure = await response.json();

      // Zpracování každé sekce z JSON
      data_structure.forEach(section => load_data(section));
  } catch (error) {
      console.error(error.message);
  }
}

// Zavolání funkce při načtení stránky
window.onload = load_from_json;
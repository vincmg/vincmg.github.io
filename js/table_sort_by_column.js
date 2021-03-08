function sort_func(a, b, field, ordering) {
  let a_content = a.querySelector(`[${field}]`).innerHTML;
  let b_content = b.querySelector(`[${field}]`).innerHTML;

  if (ordering === "default" || ordering === "ascending") {
    return a_content.localeCompare(b_content);
  } else if (ordering === "descending") {
    return -1 * a_content.localeCompare(b_content);
  }

  // else
  console.error(`field ${field} had invalid sortorder state ${ordering}`);
}

function sort_by_column(table, column_name) {
  // table -> tbody -> rows
  let rows = Array.from(table.children[0].children);
  let header = rows[0];
  let content = rows.slice(1);

  let column = header.querySelector(`[${column_name}]`);
  let column_state = column.getAttribute("sortordering");

  let sort_states = header.querySelectorAll("[sortordering]");
  for (state of sort_states) {
    state.setAttribute("sortordering", "default");
  }

  // default --> ascending
  // ascending --> descending
  // descending --> ascending
  if (column_state === "default") {
    column.setAttribute("sortordering", "ascending");
  } else if (column_state === "ascending") {
    column.setAttribute("sortordering", "descending");
  } else if (column_state === "descending") {
    column.setAttribute("sortordering", "ascending");
  }

  content.sort((a, b) => { return sort_func(a, b, column_name, column.getAttribute("sortordering")); });
  content.splice(0, 0, rows[0]);

  let collection = document.createDocumentFragment();
  for (e of content) {
    collection.appendChild(e);
  }
  table.children[0].innerHTML = '';
  table.children[0].appendChild(collection);
}

function setup_table_sort(table) {
  let sort_keys = table.querySelectorAll(".sort-key-column");
  for (column of sort_keys) {
    let name = column.innerHTML;
    column.onclick = () => { sort_by_column(table, name) };
  }
}

setup_table_sort(document.querySelector("#releases"));
setup_table_sort(document.querySelector("#compilations"));
setup_table_sort(document.querySelector("#commissions"));
setup_table_sort(document.querySelector("#misc-songs"));

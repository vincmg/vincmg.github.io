function sort_func(a, b, field) {
  let a_content = a.querySelector(`[${field}]`).innerHTML;
  let b_content = b.querySelector(`[${field}]`).innerHTML;
  return a_content.localeCompare(b_content);
}

function sort_by_column(table, column_name) {
  // table -> tbody -> rows
  let rows = Array.from(table.children[0].children);
  let content = rows.slice(1);
  content.sort((a, b) => { return sort_func(a, b, column_name); });
  // TODO TODO add a span around the non-header rows so we don't have to add the header row this way afterwards
  content.splice(0, 0, rows[0]);

  // TODO TODO this is way too slow
  let collection = document.createDocumentFragment();
  for (e of content) {
    collection.appendChild(e);
  }
  console.log(collection);
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

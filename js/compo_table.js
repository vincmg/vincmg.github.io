//function load_bandcamp_embed(element, compo_embed) {
//    let td_parent = element.parentElement;
//    td_parent.innerHTML = compo_embed;
//}
//
//(function make_compo_table(reverse) {
//  let table_list = reverse ? compo_list.reverse() : compo_list;
//  let table = document.getElementById("compilations");
//  let table_html = `
//  <tr> 
//    <th>date</th>
//    <th>compilation name</th>
//    <th>track title</th>
//    <th>art <br> (click to play)</th>
//  </tr>`;
//
//  for (let [index, compo] of table_list.entries()) {
//    let formatted_info = compo.info.replace(/\n/g, '<br>')
//    table_html += `
//    <tr>
//      <td>${compo.date}</td>
//      <td>${compo.name}</td>
//      <td>${formatted_info}</td>
//      <td>
//        <img class="album-art" id="compo_${index}" src="${compo.art}" alt="${compo.name}">
//      </td>
//    </tr>`;
//  }
//  table.innerHTML = table_html;
//
//  for (let [index, compo] of table_list.entries()) {
//    let img = document.getElementById("compo_" + index);
//    img.addEventListener("click", () => {
//      if (compo.embed === undefined)
//      {
//        embed_html = img.parentElement.innerHTML + `<br><audio controls src="${compo.link}" preload="none"></audio>`;
//      }
//      else 
//      {
//        embed_html = compo.embed;
//      }
//      load_bandcamp_embed(img, embed_html);
//    });
//  }
//})(true);
//
//(function get_compo_count() {
//    let compo_count = compo_list.length;
//    let count = document.getElementById("compo-count");
//    count.innerHTML = `(${compo_count})`;
//})();

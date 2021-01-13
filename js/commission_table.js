//// have to copy paste this from album_table.js because ES6 module imports are not supported???
//function load_bandcamp_embed(element, commission_embed) {
//  let td_parent = element.parentElement;
//  td_parent.innerHTML = commission_embed;
//}
//
//// have to copy paste this from album_table.js because ES6 module imports are not supported???
//(function make_commission_table(reverse) {
//  let table_list = reverse ? commission_list.reverse() : commission_list;
//  let table = document.getElementById("commissions");
//  let table_html = `
//  <tr> 
//    <th>date</th>
//    <th>name</th>
//    <th>info</th>
//    <th>art <br> (click to play)</th>
//  </tr>`;
//
//  for (let [index, commission] of table_list.entries()) {
//    let formatted_info = commission.info.replace(/\n/g, '<br>')
//    table_html += `
//    <tr>
//      <td>${commission.date}</td>
//      <td>${commission.name}</td>
//      <td>${formatted_info}</td>
//      <td>
//        <img class="album-art" id="commission_${index}" src="${commission.art}" alt="${commission.name}">
//      </td
//    </tr>`;
//  }
//  table.innerHTML = table_html;
//
//  for (let [index, commission] of table_list.entries()) {
//    let img = document.getElementById("commission_" + index);
//    img.addEventListener("click", () => {
//      load_bandcamp_embed(img, commission.embed);
//    });
//  }
//})();
//
//(function get_commission_count() {
//    let commission_count = commission_list.length;
//    let count = document.getElementById("commission-count");
//    count.innerHTML = `(${commission_count})`;
//})();

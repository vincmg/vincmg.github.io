// have to copy paste this from album_table.js because ES6 module imports are not supported???
function load_bandcamp_embed(element, album_embed) {
    let td_parent = element.parentElement;
    td_parent.innerHTML = album_embed;
}

//(function make_album_table(reverse) {
//  let table_list = reverse ? releases_list.reverse() : releases_list;
//  let table = document.getElementById("releases");
//  let table_html = `
//  <tr> 
//    <th>date</th>
//    <th>name</th>
//    <th>info</th>
//    <th>art <br> (click to play)</th>
//  </tr>`;
//
//  for (let [index, album] of table_list.entries()) {
//    let formatted_info = album.info.replace(/\n/g, '<br>')
//    table_html += `
//    <tr>
//      <td>${album.date}</td>
//      <td>${album.name}</td>
//      <td>${formatted_info}</td>
//      <td>
//        <img class="album-art" id="album_${index}" src="${album.art}" alt="${album.name}">
//      </td>
//    </tr>`;
//  }
//  table.innerHTML = table_html;
//
//  for (let [index, album] of table_list.entries()) {
//    let img = document.getElementById("album_" + index);
//    img.addEventListener("click", () => {
//      load_bandcamp_embed(img, album.embed);
//    });
//  }
//})(true);
//
//(function get_album_count() {
//    let album_count = releases_list.length;
//    let count = document.getElementById("album-count");
//    count.innerHTML = `(${album_count})`;
//})();

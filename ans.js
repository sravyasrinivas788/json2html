export default function json2html(data) {
  // Create a set of all keys to ensure all columns are included
  const allKeys = new Set();
  data.forEach(item => {
    Object.keys(item).forEach(key => allKeys.add(key));
  });

  // Create the HTML table
  let html = '<table data-user="sravyasrinivas788@gmail.com">';
  
  // Add table headers
  html += '<thead><tr>';
  allKeys.forEach(key => {
    html += `<th>${key}</th>`;
  });
  html += '</tr></thead>';

  // Add table body
  html += '<tbody>';
  data.forEach(item => {
    html += '<tr>';
    allKeys.forEach(key => {
      html += `<td>${item[key] || ''}</td>`;
    });
    html += '</tr>';
  });
  html += '</tbody>';

  html += '</table>';
  return html;
}

let add = document.getElementById('add')
    .addEventListener('click', add_up

    )
    // adding input table 
function add_up(e) {
    e.preventDefault();
    let tableBody = document.getElementById('table-body')
    tableBody.innerHTML += `                 <tr id="child">
    <td scope="row"> <button onclick="deletingRow(this)" class="btn btn-primary btn-sm">x</button> </td>
    <td> <textarea type="text" class="form-control" placeholder=""></textarea>
    </td>
    <td> <input type="text" class="form-control" placeholder="23.00">
    </td>
    <td> <input type="text" class="form-control" placeholder="1">
    </td>
    <td> 0.00
    </td>

</tr>
`;

    console.log(tableBody)
}

// deleting table row 

// const deleteRow = document.getElementById('del').addEventListener('click', deletingRow)

function deletingRow(e) {
    // e.preventDefault();
    e.parentElement.parentElement.remove();

}
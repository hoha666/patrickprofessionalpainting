var dataTable;

$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#DT_Load').DataTable({
        "ajax": {
            "url": "/stories/GetAll",
            "type": "GET",
            "datatype": "json"
        },
        "columns": [
            { "data": "title", "width": "20%" },
            { "data": "slogan", "width": "20%" },
            { "data": "tags", "width": "20%" },
            { "data": "iconURL", "width": "20%" },
            { "data": "picURL", "width": "20%" },
            {
                "data": "id",
                "render": function (data) {
                    return ` <div class="text-center">
<a href="/stories/Edit?id=${data}" class="btn btn-success text-white" style="cursor:pointer; width:100px;">
                        Edit
                        </a>
                        &nbsp;
<a href="/stories/delete?id=${data}" class="btn btn-danger text-white" style="cursor:pointer; width:100px;">
                        Delete
                        </a>
                    </div>`;
                }, "width" : "30%"
            }
        ],
        "language": {
            "emptyTable": "no data found"
        },
        "width": "100%",
        "scrollY": "50%",
        "scrollCollapse": true,

    })
}
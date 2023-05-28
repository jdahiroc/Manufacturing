var myData={
  "data": [
    [
      "truck",
      "<a href=historicalViewOrderHistoryDetails?childCartId=236604>0000292559</a>",
      "08/28/2018",
      "--",
      "13332176",
      "Cjay Yuson",
      "40.81 USD",
      "<span class='badge-gray'>COMPLETED</span>",
      "<a href=exportOrderAsPDFListFromDB?childCartId=236604  class='fa fa-download fa-lg' title='Download'></a><a href='javascript:void(0)'  class='fa fa-ellipsis-v dotsoption' data-toggle='dropdown' onclick='optiondrop(this)' title='More Actions'></a><div class=\"dropdown-menu p-3 more-option dropdown\"><div class=\"py-2\"><a title='Export To Excel' class='' href=\"viewOrderQuoteInExportToExcelFromDB?childCartId=236604\"><i class='fa fa-file-excel-o'></i><b class='pl-2'>Export To Excel</b></a></div><div class=\"py-2\"><a href='javascript:void(0)' title='Reorder' class='pr-1' onclick='reorderClick(\"0000292559\", \"1\", \"2\", \"1\", \"REV Parts, LLC\")'><i class='fa fa-lg'>&#xf01e;</i><b class='pl-2'>Reorder</b></a></div><div class=\"py-2\"></div></div>"
    ],
    [
      "racecar",
      "<a href=historicalViewOrderHistoryDetails?childCartId=236605>0000292605</a>",
      "08/28/2018",
      "--",
      "13332532",
      "rigel sarsaba",
      "974.61 USD",
      "<span class='badge-gray'>COMPLETED</span>",
      "<a href=exportOrderAsPDFListFromDB?childCartId=236605  class='fa fa-download fa-lg' title='Download'></a><a href='javascript:void(0)'  class='fa fa-ellipsis-v dotsoption' data-toggle='dropdown' onclick='optiondrop(this)' title='More Actions'></a><div class=\"dropdown-menu p-3 more-option dropdown\"><div class=\"py-2\"><a title='Export To Excel' class='' href=\"viewOrderQuoteInExportToExcelFromDB?childCartId=236605\"><i class='fa fa-file-excel-o'></i><b class='pl-2'>Export To Excel</b></a></div><div class=\"py-2\"><a href='javascript:void(0)' title='Reorder' class='pr-1' onclick='reorderClick(\"0000292605\", \"1\", \"2\", \"1\", \"REV Parts, LLC\")'><i class='fa fa-lg'>&#xf01e;</i><b class='pl-2'>Reorder</b></a></div><div class=\"py-2\"></div></div>"
    ],
    [
      "bike",
      "<a href=historicalViewOrderHistoryDetails?childCartId=236606>0000292628</a>",
      "08/28/2018",
      "--",
      "13332722",
      "Dave laburada",
      "76.40 USD",
      "<span class='badge-gray'>COMPLETED</span>",
      "<a href=exportOrderAsPDFListFromDB?childCartId=236606  class='fa fa-download fa-lg' title='Download'></a><a href='javascript:void(0)'  class='fa fa-ellipsis-v dotsoption' data-toggle='dropdown' onclick='optiondrop(this)' title='More Actions'></a><div class=\"dropdown-menu p-3 more-option dropdown\"><div class=\"py-2\"><a title='Export To Excel' class='' href=\"viewOrderQuoteInExportToExcelFromDB?childCartId=236606\"><i class='fa fa-file-excel-o'></i><b class='pl-2'>Export To Excel</b></a></div><div class=\"py-2\"><a href='javascript:void(0)' title='Reorder' class='pr-1' onclick='reorderClick(\"0000292628\", \"1\", \"2\", \"1\", \"REV Parts, LLC\")'><i class='fa fa-lg'>&#xf01e;</i><b class='pl-2'>Reorder</b></a></div><div class=\"py-2\"></div></div>"
    ],
    
  ],
  "allDocTypeValue": [
    "236604-2",
    "236605-2",
    "236606-2",
    "236607-2",
    "236608-2",
    "236609-2",
    "236610-2",
    "236611-2",
    "236613-2",
    "236616-2",
    "236617-2",
    "236618-2",
    "236619-2",
    "236620-2",
    "236622-2",
    "236623-2",
    "178633-2",
    "179667-2",
    "179668-2",
    "236941-2",
    "236942-2",
    "236945-2",
    "236946-2",
    "236947-2",
    "236948-2",
    "236950-2",
    "236951-2",
    "236953-2",
    "236954-2",
    "236956-2",
    "236957-2",
    "236958-2",
    "236960-2",
    "236961-2",
    "236962-2",
    "236963-2",
    "236964-2",
    "236965-2",
    "236967-2",
    "236968-2",
    "178673-2",
    "179720-2",
    "179721-2",
    "178713-2",
    "178714-2",
    "178715-2",
    "178716-2",
    "237332-2",
    "237333-2",
    "237334-2",
    "237335-2",
    "237337-2",
    "237339-2",
    "237341-2",
    "179767-2",
    "178770-2",
    "178771-2",
    "178772-2",
    "178773-2",
    "0090262733-3"
  ]
}

$(document).ready( 
        function() {
           /*Begins Data table for order history filter grid*/  
          console.log('hello')
       var otable = $('#tbOrderHistory').DataTable( {
          "responsive": true,
          "pagingType": "input",
            "sDom": '<"top"i>rt<"bottom"flp><"clear">',
            "lengthMenu": [[10, 25, 50, 100], [10, 25, 50, 100]],
            
            "language": {
                "lengthMenu": "Rows per page _MENU_",
                "zeroRecords": "Nothing found - sorry",
                "info": "",
                "infoEmpty": "",
                "infoFiltered": "(filtered from _MAX_ total records)",
                paginate: {
                    next: '<i class="fa fa-fw fa-angle-right">',
                    previous: '<i class="fa fa-fw fa-angle-left">',
                    "sFirst": "",
                    "sLast": "",
                   
                  },
            },
            "columnDefs": [
                { "targets": [ 8 ],"visible": true, "searchable": false },
                { "targets": [ 5 ],
                    "render": function ( d, type, row ) {
                        return '<span class="text-ellipsis" title="' + d + '">' + d + '</span>';
                  }
                }
                
            ],
            "order": [[ 2, "desc" ]],
            "stripeClasses": [ 'odd-row', 'even-row' ],
            "drawCallback": function () {
              $(".paginate_input").focus(function() { $(this).select(); } );
            }
        });
            var tbOrderHistory = $("#tbOrderHistory").DataTable();
          var response=myData;
              numberOfResults = response.data.length;
	            var orderList = $("#tbOrderHistory").DataTable();
	            orderList.clear();
              orderList.rows.add(response.data).draw();
        });
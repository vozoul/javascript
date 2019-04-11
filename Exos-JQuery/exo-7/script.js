console.log("exercice 7");

var $trItem = [];
var $addedItems = [];
var $totalDatas = $($addedItems).empty() ? $trItem : $trItem + $addedItems;
var $lastSortBy = '';
var $source = $($trItem).empty() ? data : $totalDatas;

$(document).ready(function () {

    $('table').show();
    $('#register').hide();

    //je visionne la BDD
    $('#showDb').on('click', function () {
        $('.table').show();
        $('.pagination').show();
        $('#showForm').removeClass('active');
        $('#register').hide();
            $(this).addClass('active');
        $('tbody').html('');
        $($source).each(function (index, item) {
            addLine(item);
        });
        console.log(lastId())
        pagin();
    });

    //affichage formulaire
    $('#showForm').on('click',function(){
        $('.table').hide()
        $('.pagination').hide()
        $('#showDb').removeClass('active');
        $('#register').show()
            $(this).addClass('active');
    });

    //lancement du tri
    $('tr a.sort').on('click', function(){
        var $sortBy = $(this).data('sort');
        sorting($sortBy);
        pagin();
    });

    //je recherche dans la BDD
    $('#search').on('click', function () {
        seek();
        pagin();
    })

    //Pagination
    $('.maxRows').on('click', function () {
        $('.maxRows').removeClass('active');
        $(this).addClass('active');
        $maxRows = parseInt($(this).data('value'));
        pagin();
    });

});

//lastId
function lastId(){
    base = parseInt($trItem.slice(-1)[0].id);
    added = (!$($addedItems).empty()) ? parseInt($addedItems.slice(-1)[0].id) : 0 ;
    return base + added;
}

//fonction d'ajout de ligne
function addLine(item) {
    var $tableItem = [];
    var $tr = $('<tr>');
    for (var key in item) {
        if (key === 'name') {
            for (var subKey in item.name) {
                $tr.append('<td class="'+ subKey +'">' + item.name[subKey] + '</td>');
            }
        } else {
            $tr.append('<td class="'+key+'">' + item[key] + '</td>');
        }
    }
    $tableItem.push(item);
    if ($tableItem.indexOf(item) != -1) {
        $trItem.push(item);
        $('tbody').append($tr);
    }
}

//Fonction de recherche
function seek() {
    $('tbody').html('');
    var $seekTable = $trItem;
    $trItem =[];
    var seeking = $('#searchInput').val();
    var regex = new RegExp('(^' + seeking + ')+(.*)+', 'gi')
    $($seekTable).each(function (index, item) {
        for (var key in item) {
            $value1 = item[key];
            if (regex.test($value1) === true) {
                addLine(item);
            }
            if (key === 'name') {
                for (var subKey in item.name) {
                    $value2 = item.name[subKey];
                    if (regex.test($value2) === true) {
                        addLine(item);
                    }
                }
            }
        }
    })
}

//tri
var $sens = false;
function sorting(sortBy){
    if($lastSortBy !== sortBy){$sens = false}
    $lastSortBy = sortBy;
    $('tbody').html('');
    console.log(sortBy)
    var intRegex = /^\d+$/;
    var $sortTable;
    var $sorting = $trItem;
    $sortTable = $sorting.sort(function(a, b){
        if(sortBy === 'first' || sortBy === 'last'){a=a.name; b=b.name}
        if($sens === false){
            if(intRegex.test(a[sortBy])){
                return a[sortBy] - b[sortBy];
            }else{
                return (a[sortBy]).localeCompare(b[sortBy]);
            }
        }else{
            if(intRegex.test(a[sortBy])){
                return b[sortBy] - a[sortBy];
            }else{
                return (b[sortBy]).localeCompare(a[sortBy]);
            }
        }
    })
    $trItem = [];
    $($sortTable).each(function(index, item){
        addLine(item)
    });
    if($sens === true){$sens = false}else{$sens = true};
}

//pagination
var $maxRows;
function pagin(){
    $('.pagination').html('');
    maxRows = $maxRows;
    var numLine = 0;
    var totalRows = $('tbody tr').length;
    $('tbody tr').each(function () {
        numLine++;
        if (numLine > maxRows) {
            $(this).hide();
        }
        if (numLine < maxRows) {
            $(this).show();
        }
    })
    if (totalRows > maxRows) {
        var numPage = Math.ceil(totalRows / maxRows)
        for (var i = 1; i <= numPage;) {
            $('.pagination').append('<li class="page-item" data-page="' + i + '"><a href="#" class="page-link">' + i++ + '</a></li>').show()
        }
    }
    $('.pagination li:first-child').addClass('active');
    $('.pagination li').on('click', function () {
        var numPage = $(this).data('page');
        var lineIndex = 0;
        $('.pagination li').removeClass('active')
        $('tbody tr').each(function () {
            lineIndex++;
            if (lineIndex > (maxRows * numPage) || lineIndex < ((maxRows * numPage) - maxRows)) {
                $(this).hide();
            } else {
                $(this).show();
            }
        })
    })
}